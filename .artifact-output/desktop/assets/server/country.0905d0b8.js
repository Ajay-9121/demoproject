import{S as u,j as a,a as o,F as S,P as w}from"../static/PageLayout-6f744854.js";/* empty css                       */import{B as P}from"../static/Breadcrumb-ba6d508c.js";import{f as g,s as F,r as h}from"../static/global-e7c991d2.js";import"../static/index-59952803.js";import"../static/link-2af2a0b7.js";const E={stream:{$id:"country",fields:["id","uid","meta","name","address","mainPhone","slug","dm_directoryParents.name","dm_directoryParents.slug","dm_directoryParents.meta.entityType","dm_directoryChildren.name","dm_directoryChildren.address","dm_directoryChildren.slug","dm_directoryChildren.dm_directoryChildren.name","dm_directoryChildren.dm_baseEntityCount","dm_directoryChildren.dm_directoryChildren.slug","dm_directoryChildren.dm_directoryChildren.dm_directoryChildren.name","dm_directoryChildren.dm_directoryChildren.dm_directoryChildren.slug"],filter:{entityTypes:["ce_country"],savedFilterIds:["dm_stores-directory_address_countrycode"]},localization:{locales:["en"],primary:!1}}},U=({document:l})=>(""+l.slug.toString(),"/"+l.slug.toString()+".html"),D=({relativePrefixToRoot:l,path:y,document:t})=>({title:`${t.c_meta_title?t.c_meta_title:`Stores in ${t.name} | Find a Local Store`}`,charset:"UTF-8",viewport:"width=device-width, initial-scale=1",tags:[{type:"link",attributes:{rel:"shortcut icon",href:g}},{type:"meta",attributes:{name:"description",content:`${t.c_meta_description?t.c_meta_description:`Use this page to find your nearest MGM store in ${t.name} and discover the location details you need to visit us today.`}`}},{type:"meta",attributes:{name:"author",content:u.Brandname}},{type:"meta",attributes:{name:"keywords",content:t.name}},{type:"meta",attributes:{name:"robots",content:"noindex, nofollow"}},{type:"link",attributes:{rel:"canonical",href:`${F+t.slug+".html"}`}},{type:"meta",attributes:{property:"og:url",content:`/${t.slug?t.slug:`${t.name.toLowerCase()}`}.html`}},{type:"meta",attributes:{property:"og:description",content:`${t.c_meta_description?t.c_meta_description:`Find Store in ${t.name}.`}`}},{type:"meta",attributes:{property:"og:title",content:`${t.name}`}},{type:"meta",attributes:{property:"og:image",content:g}},{type:"meta",attributes:{name:"twitter:card",content:"summary"}},{type:"meta",attributes:{name:"twitter:url",content:`/${t.slug?t.slug:`${t.name.toLowerCase()}`}.html`}},{type:"meta",attributes:{name:"twitter:description",content:`${t.c_meta_description?t.c_meta_description:`Find Store in ${t.name}. We stock high-quality, robust products at competitive rates.`}`}}]}),I=({relativePrefixToRoot:l,path:y,document:t})=>{const{name:d,slug:p,id:x,_site:_,address:C,c_locatorBannerImage:m,dm_directoryParents:f,dm_directoryChildren:c}=t,b=c?c.map(e=>{let s;return typeof e.dm_directoryChildren<"u"&&(e.dm_baseEntityCount==1?e.dm_directoryChildren.map(r=>{let i="";r.slug?i=`/${r.slug}.html`:i=`${r.id+" "+r.name}.html`,r.dm_directoryChildren?r.dm_directoryChildren.map(n=>{if(n.slug)i=`${n.slug.toString()}.html`;else{let v=n.name.replaceAll(" ","-");i="gb/"+e.slug+"/"+r.slug+"/"+v.toLowerCase()+".html",console.log(i,"123456")}s=i}):s=i}):s=p+"/"+e.slug+".html"),a("li",{className:" storelocation-category",children:o("a",{href:s,children:[e.name," (",e.dm_baseEntityCount,")"]},e.slug)})}):null;return m&&m.map(e=>e.url),a(S,{children:o(w,{_site:_,global:void 0,children:[a(P,{name:h.of(d),address:C,parents:f,baseUrl:l}),a("div",{className:"content-list",children:o("div",{className:"container",children:[a("div",{className:"sec-title",children:o("h2",{style:{textAlign:"center"},children:[u.AllRegion," ",h.of(d)," "]})}),a("ul",{className:"region-list",children:b})]})})]})})};export{E as config,I as default,D as getHeadConfig,U as getPath};
