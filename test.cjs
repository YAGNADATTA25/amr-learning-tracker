const fs=require('node:fs');
const assert=require('node:assert/strict');
const {JSDOM}=require('jsdom');
const html=fs.readFileSync('index.html','utf8');
const tick=()=>new Promise(r=>setTimeout(r,15));
let checks=0;
function check(condition,label){assert.ok(condition,label);checks++;console.log('PASS',label);}
function make(client){const dom=new JSDOM(html,{url:'https://example.com/amr-learning-tracker/',runScripts:'outside-only'});const w=dom.window;w.scrollTo=()=>{};w.confirm=()=>true;w.HTMLDialogElement.prototype.showModal=function(){this.open=true;};w.HTMLDialogElement.prototype.close=function(){this.open=false;};if(client)w.supabase={createClient:()=>client};w.eval(fs.readFileSync('data.js','utf8'));w.eval(fs.readFileSync('research.js','utf8'));w.eval(fs.readFileSync('app.js','utf8'));return dom;}
async function submit(w){const form=w.document.querySelector('#edit-form');form.dispatchEvent(new w.SubmitEvent('submit',{bubbles:true,cancelable:true,submitter:form.querySelector('button[type=submit]')}));await tick();}
const click=(w,q)=>{const e=w.document.querySelector(q);assert.ok(e,'Missing '+q);e.click();};
const field=(w,n,v)=>w.document.querySelector(`[name="${n}"]`).value=v;
(async()=>{
 const dom=make(),w=dom.window;
 check(w.AMR.projects.length===2&&w.AMR.projects.every(p=>p.weeks.length===10&&p.metrics.length===9),'Two 10-week projects, 18 acceptance targets');
 check(w.AMR_TEST.originalDue(w.AMR.projects[0],9)==='2026-12-15'&&w.AMR_TEST.originalDue(w.AMR.projects[1],9)==='2027-02-23','Approved deadlines match 10-week arithmetic');
 check(w.document.querySelector('h1').textContent.includes('robotics'),'Overview renders');
 click(w,'[data-action=local]');await tick();
 click(w,'[data-action=task]');field(w,'status','done');field(w,'notes','PRIVATE SENTINEL <img src=x onerror=alert(1)>');field(w,'evidence','https://example.com/evidence');await submit(w);
 check(!w.document.querySelector('dialog').open,'Local task saves successfully');
 let backup=JSON.parse(w.localStorage.getItem('amr-fieldbook-v1'));
 check(backup.records['task-warehouse-0-learn'].value.status==='done'&&backup.records['task-warehouse-0-learn'].value.actual,'Completion persists with actual date');
 check(!JSON.stringify(w.AMR_TEST.publicProjection()).includes('PRIVATE SENTINEL'),'Public projection excludes task notes');
 for(const page of ['warehouse','localisation','timeline','updates','showcase','settings']){w.location.hash=page;await tick();check(w.document.querySelector('h1')?.textContent.length>0,'Route renders: '+page);}
 w.location.hash='warehouse';await tick();
 click(w,'[data-action=tab][data-id=targets]');check(w.document.querySelectorAll('tbody tr').length===9,'Project target table has nine tests');
 click(w,'[data-action=metric]');field(w,'verdict','pass');await submit(w);check(w.document.querySelector('#form-error').textContent.includes('Measured results need'),'Measured claim blocked without evidence');
 field(w,'result','Clean launch on Ubuntu / ROS environment recorded');field(w,'conditions','Test-only fixture');field(w,'evidence','https://example.com/test');w.document.querySelector('[name=publish]').checked=true;await submit(w);
 check(w.AMR_TEST.publicProjection().projects[0].results.length===1,'Only explicitly selected result enters publication');
 w.location.hash='updates';await tick();click(w,'[data-action=update]');field(w,'title','Test checkpoint');field(w,'notes','PRIVATE JOURNAL SENTINEL');field(w,'publicSummary','Public experiment summary');w.document.querySelector('[name=publish]').checked=true;await submit(w);
 const projection=w.AMR_TEST.publicProjection();check(projection.updates.length===1&&projection.updates[0].summary==='Public experiment summary','Separate public update summary is selected');
 check(!JSON.stringify(projection).includes('PRIVATE JOURNAL SENTINEL'),'Public projection excludes journal notes');
 check(w.AMR_TEST.safeURL('javascript:alert(1)')===''&&w.AMR_TEST.safeURL('https://example.com'),'Evidence URL scheme validation');
 assert.throws(()=>w.AMR_TEST.validateBackup(JSON.parse('{"version":1,"records":{"__proto__":{"value":{}}}}')));checks++;console.log('PASS Reject unexpected import record keys');
 assert.throws(()=>w.AMR_TEST.validateBackup({version:1,records:{'task-warehouse-0-build':{value:{due:'2026-99-99'}}}}));checks++;console.log('PASS Reject invalid calendar dates');
 check(!w.AMR_TEST.showcaseHTML({...projection,updates:[{date:'2026-10-06',title:'<script>bad</script>',summary:'<img src=x>',project:'warehouse'}]}).includes('<script>bad'),'User text is HTML escaped');
 dom.window.close();
 // A mocked API checks the UI's cloud branch and revision conflict handling.
 const rows={workspace:{id:'workspace',value:{schema:1},revision:1}};
 const client={auth:{onAuthStateChange(){},getSession:async()=>({data:{session:{}}}),getUser:async()=>({data:{user:{id:'fixture'}}})},from(table){const q={op:'read',filters:[],select(){return q;},eq(k,v){q.filters.push([k,v]);return q;},insert(v){q.op='insert';q.value=v;return q;},update(v){q.op='update';q.value=v;return q;},then(resolve,reject){let data=[];if(q.op==='read')data=Object.values(rows).filter(r=>q.filters.every(([k,v])=>r[k]===v));if(q.op==='insert'){rows[q.value.id]={...q.value,revision:1};data=[rows[q.value.id]];}if(q.op==='update'){for(const r of Object.values(rows)){if(q.filters.every(([k,v])=>r[k]===v)){Object.assign(r,q.value);data.push({...r});}}}return Promise.resolve({data:JSON.parse(JSON.stringify(data)),error:null}).then(resolve,reject);}};return q;}};
 const cloud=make(client),cw=cloud.window;await tick();check(cw.document.querySelector('#mode').textContent.includes('cloud connected'),'Authorised workspace enters cloud mode');
 click(cw,'[data-action=task]');field(cw,'status','progress');await submit(cw);check(rows['task-warehouse-0-learn']?.value.status==='progress','Cloud insert persists task');
 click(cw,'[data-action=task]');field(cw,'notes','Stale edit');rows['task-warehouse-0-learn'].revision=3;await submit(cw);
 check(cw.document.querySelector('dialog').open&&cw.document.querySelector('#form-error').textContent.includes('changed on another device'),'Conflicting cloud edit stays open with recovery message');
 check(rows['task-warehouse-0-learn'].value.notes!=='Stale edit','Conflict does not overwrite newer server record');
 cloud.window.close();console.log(`\n${checks} checks passed. DOM checks only; real browser/OAuth verification remains pending.`);
})().catch(e=>{console.error(e);process.exitCode=1;});
