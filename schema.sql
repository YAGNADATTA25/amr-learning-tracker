-- AMR Learning Tracker. Apply once to the dedicated Supabase project.
begin;
create schema if not exists tracker_private;
revoke all on schema tracker_private from public;
grant usage on schema tracker_private to authenticated;

-- Uses the immutable, provider-verified GitHub ID, not editable user metadata.
-- SECURITY DEFINER is limited to this internal identity lookup because clients
-- must not be granted access to auth.identities.
create function tracker_private.is_owner() returns boolean
language sql stable security definer set search_path = '' as $$
  select auth.uid() is not null and exists (
    select 1 from auth.identities
    where user_id = auth.uid() and provider = 'github'
      and provider_id = '166443516'
  );
$$;
revoke all on function tracker_private.is_owner() from public, anon;
grant execute on function tracker_private.is_owner() to authenticated;

create table public.tracker_records (
  id text primary key check (length(id) between 1 and 150),
  value jsonb not null check (jsonb_typeof(value) = 'object' and octet_length(value::text) <= 200000),
  revision integer not null default 1 check (revision > 0),
  updated_at timestamptz not null default now()
);
alter table public.tracker_records enable row level security;
revoke all on public.tracker_records from anon, authenticated;
grant select,insert,update on public.tracker_records to authenticated;
create policy owner_read on public.tracker_records for select to authenticated
  using ((select tracker_private.is_owner()));
create policy owner_insert on public.tracker_records for insert to authenticated
  with check ((select tracker_private.is_owner()));
create policy owner_update on public.tracker_records for update to authenticated
  using ((select tracker_private.is_owner())) with check ((select tracker_private.is_owner()));
insert into public.tracker_records(id,value) values ('workspace','{"schema":1}');

-- Only deliberately published projections are stored here. No private notes.
create table public.tracker_showcase (
  id text primary key check (id = 'main'),
  value jsonb not null check (jsonb_typeof(value) = 'object' and octet_length(value::text) <= 1000000),
  revision integer not null default 1,
  updated_at timestamptz not null default now()
);
alter table public.tracker_showcase enable row level security;
revoke all on public.tracker_showcase from anon, authenticated;
grant select on public.tracker_showcase to anon, authenticated;
grant insert,update,delete on public.tracker_showcase to authenticated;
create policy public_read on public.tracker_showcase for select to anon,authenticated using (true);
create policy owner_publish on public.tracker_showcase for insert to authenticated
  with check ((select tracker_private.is_owner()));
create policy owner_republish on public.tracker_showcase for update to authenticated
  using ((select tracker_private.is_owner())) with check ((select tracker_private.is_owner()));
create policy owner_unpublish on public.tracker_showcase for delete to authenticated
  using ((select tracker_private.is_owner()));
commit;
