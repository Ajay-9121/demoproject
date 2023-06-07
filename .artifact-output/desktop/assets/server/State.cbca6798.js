import{S as u,j as a,a as l,F as b,P as C}from"../static/PageLayout-6f744854.js";import"../static/custom-6a661c43.js";import{B as f}from"../static/Breadcrumb-90babbbb.js";import{f as p,s as v}from"../static/global-e7c991d2.js";import"../static/index-59952803.js";const B={stream:{$id:"region",fields:["id","uid","meta","name","address","slug","dm_directoryParents.name","dm_directoryParents.slug","dm_directoryParents.meta.entityType","dm_directoryChildren.name","dm_directoryChildren.address","dm_directoryChildren.slug","dm_directoryChildren.dm_baseEntityCount","dm_directoryChildren.dm_directoryChildren.name","dm_directoryChildren.dm_directoryChildren.id","dm_directoryChildren.dm_directoryChildren.slug","dm_directoryChildren.dm_directoryChildren.address"],filter:{entityTypes:["ce_region"],savedFilterIds:["dm_stores-directory_address_region"]},localization:{locales:["en"],primary:!1}}},E=({document:r})=>{let i="";return r.dm_directoryParents.map(e=>{e.meta.entityType.id=="ce_country"&&(i+=e.slug+"/")}),i+=r.slug.toString(),i+".html"},L=({document:r})=>[`index-old/${r.locale+"/"+r.name}`],j=({relativePrefixToRoot:r,path:i,document:e})=>{var s="";return e.dm_directoryParents.map(d=>{s=d.slug.toLowerCase()}),{title:`${e.c_meta_title?e.c_meta_title:`Stores in ${e.name} | Find a Local Store`}`,charset:"UTF-8",viewport:"width=device-width, initial-scale=1",tags:[{type:"link",attributes:{rel:"shortcut icon",href:p}},{type:"meta",attributes:{name:"description",content:`${e.c_meta_description?e.c_meta_description:`Use this page to find your nearest store in ${e.name} and discover the location details you need to visit us today.`}`}},{type:"meta",attributes:{name:"author",content:u.Brandname}},{type:"meta",attributes:{name:"keywords",content:e.name}},{type:"meta",attributes:{name:"robots",content:"noindex, nofollow"}},{type:"meta",attributes:{property:"og:url",content:`${v+s+"/"+e.slug+".html"}`}},{type:"meta",attributes:{property:"og:description",content:`${e.c_meta_description?e.c_meta_description:`Find  Store in ${e.name}.`}`}},{type:"meta",attributes:{property:"og:title",content:`${e.name}`}},{type:"meta",attributes:{property:"og:image",content:p}},{type:"meta",attributes:{name:"twitter:card",content:"summary"}},{type:"meta",attributes:{name:"twitter:url",content:`/${e.slug?e.slug:`${e.name.toLowerCase()}`}.html`}},{type:"meta",attributes:{name:"twitter:description",content:`${e.c_meta_description?e.c_meta_description:`Find Store in ${e.name}.`}`}}]}},U=({relativePrefixToRoot:r,path:i,document:e})=>{const{name:s,_site:d,slug:w,address:_,c_banner_image:$,c_bannerHeading:x,dm_directoryParents:m,dm_directoryChildren:n}=e;let o="";const h=n&&(n==null?void 0:n.map(t=>{var g;if((t==null?void 0:t.dm_baseEntityCount)==1)return o=t.id,t.dm_directoryChildren.map(c=>{var y=c.id.toString();o=`/${y}`,console.log(o,"575524")}),a("div",{className:"w-1/2 storelocation-category md:w-1/3 lg:w-1/4 px-4",children:l("a",{href:o,className:"hover:text-red",children:[t.name," (",t.dm_baseEntityCount,")"]},t.slug)});{let c="/"+((g=m[1])==null?void 0:g.slug)+"/"+e.slug+"/"+t.slug+".html";return a("div",{className:"w-1/2 storelocation-category md:w-1/3 lg:w-1/4 px-4 test",children:l("a",{href:c,className:"hover:text-red",children:[t.name," (",t.dm_baseEntityCount,")"]},t.slug)})}}));return a(b,{children:l(C,{_site:d,global:void 0,children:[a(f,{name:s,parents:m,baseUrl:r,address:_}),a("div",{className:"content-list",children:l("div",{className:"container",children:[a("div",{className:"sec-title",children:a("h2",{style:{textAlign:"center"},children:s})}),a("ul",{className:"region-list",children:h})]})})]})})};export{B as config,U as default,j as getHeadConfig,E as getPath,L as getRedirects};
