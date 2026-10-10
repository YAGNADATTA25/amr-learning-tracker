'use strict';
(() => {
 const read=k=>{try{return localStorage.getItem(k);}catch{return null;}};
 const write=(k,v)=>{try{localStorage.setItem(k,v);}catch{/* Preferences still work when storage is disabled. */}};
 let language=read('amr-language')==='de'?'de':'en';
 const storedTheme=read('amr-theme');
 let theme=['light','dark'].includes(storedTheme)?storedTheme:(window.matchMedia?.('(prefers-color-scheme: dark)').matches?'dark':'light');
 const original=new WeakMap(),attributeOriginal=new WeakMap();
 const dictionary=window.AMR_DE||{};
 const escape=s=>s.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');
 const pattern=new RegExp(Object.keys(dictionary).sort((a,b)=>b.length-a.length).map(k=>(/^[A-Za-z]/.test(k)?'\\b':'')+escape(k)+(/[A-Za-z]$/.test(k)?'\\b':'')).join('|'),'g');
 const months={Jan:1,Feb:2,Mar:3,Apr:4,May:5,Jun:6,Jul:7,Aug:8,Sept:9,Sep:9,Oct:10,Nov:11,Dec:12};
 function translate(s){
  if(language==='en')return s;
  let text=s.replace(pattern,m=>dictionary[m]);
  text=text.replace(/\b(\d{1,2}) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sept|Sep|Oct|Nov|Dec) (\d{4})\b/g,(_,day,month,year)=>new Intl.DateTimeFormat('de-DE',{day:'numeric',month:'short',year:'numeric',timeZone:'UTC'}).format(new Date(Date.UTC(+year,months[month]-1,+day))));
  return text;
 }
 let observer,queued=false;
 function apply(){
  observer?.disconnect();
  document.documentElement.lang=language;
  document.documentElement.dataset.theme=theme;
  document.documentElement.style.colorScheme=theme;
  const walker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);
  let node;while((node=walker.nextNode())){
   if(node.parentElement.closest('script,style,textarea,input,code,[translate="no"],#preferences'))continue;
   if(!original.has(node))original.set(node,node.nodeValue);
   const value=translate(original.get(node));if(node.nodeValue!==value)node.nodeValue=value;
  }
  for(const el of document.querySelectorAll('[aria-label],[title],[placeholder]')){
   if(el.closest('[translate="no"],#preferences'))continue;
   let values=attributeOriginal.get(el);if(!values){values={};attributeOriginal.set(el,values);}
   for(const key of ['aria-label','title','placeholder'])if(el.hasAttribute(key)){if(!(key in values))values[key]=el.getAttribute(key);el.setAttribute(key,translate(values[key]));}
  }
  const lang=document.getElementById('language-choice'),appearance=document.getElementById('theme-choice');
  if(lang)lang.value=language;if(appearance)appearance.value=theme;
  const bar=document.getElementById('preferences');if(bar){bar.querySelector('[for="language-choice"]').textContent=language==='de'?'Sprache':'Language';bar.querySelector('[for="theme-choice"]').textContent=language==='de'?'Darstellung':'Appearance';bar.querySelector('[value="light"]').textContent=language==='de'?'Hell':'Light';bar.querySelector('[value="dark"]').textContent=language==='de'?'Dunkel':'Dark';bar.setAttribute('aria-label',language==='de'?'Sprache und Darstellung':'Language and appearance');}
  observer?.observe(document.body,{childList:true,subtree:true,characterData:true});
 }
 function setLanguage(value){language=value==='de'?'de':'en';write('amr-language',language);apply();}
 function setTheme(value){theme=value==='dark'?'dark':'light';write('amr-theme',theme);apply();}
 document.documentElement.dataset.theme=theme;
 document.documentElement.lang=language;
 function init(){
  const bar=document.createElement('div');bar.id='preferences';bar.className='preferences';bar.innerHTML='<label for="language-choice">Language</label><select id="language-choice"><option value="en" lang="en">English</option><option value="de" lang="de">Deutsch</option></select><label for="theme-choice">Appearance</label><select id="theme-choice"><option value="light">Light</option><option value="dark">Dark</option></select>';
  document.body.prepend(bar);
  bar.addEventListener('change',e=>{if(e.target.id==='language-choice')setLanguage(e.target.value);if(e.target.id==='theme-choice')setTheme(e.target.value);});
  observer=new MutationObserver(records=>{for(const r of records)if(r.type==='characterData')original.delete(r.target);if(!queued){queued=true;queueMicrotask(()=>{queued=false;apply();});}});
  apply();
 }
 window.AMRPrefs={apply,setLanguage,setTheme,translate,get language(){return language;},get theme(){return theme;}};
 if(document.body)init();else document.addEventListener('DOMContentLoaded',init,{once:true});
})();
