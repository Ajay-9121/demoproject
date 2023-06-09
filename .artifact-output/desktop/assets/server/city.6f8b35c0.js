import{A as k,O as B,G as A,s as v}from"../static/openClose-cd0d7e61.js";import{S as p,a as m,j as r,F,P as j}from"../static/PageLayout-6f744854.js";import{L as _}from"../static/custom-6a661c43.js";import{B as z}from"../static/Breadcrumb-90babbbb.js";import{f,s as b}from"../static/global-e7c991d2.js";import"../static/index-59952803.js";let $={stagingBaseurl:"https://main-nicely--unchanged--kangaroo-sbx-pgsdemo-com.sbx.preview.pagescdn.com/"};const q={stream:{$id:"city",filter:{entityTypes:["ce_city"]},fields:["id","uid","meta","name","slug","dm_directoryParents.name","dm_directoryParents.slug","dm_directoryParents.meta.entityType","dm_directoryChildren.mainPhone","dm_directoryChildren.slug","dm_directoryChildren.name","dm_directoryChildren.id","dm_directoryChildren.dm_baseEntityCount","dm_directoryChildren.address","dm_directoryChildren.hours","dm_directoryChildren.yextDisplayCoordinate"],localization:{locales:["en"],primary:!1}}},K=({document:n})=>{var t;var l="";return(t=n==null?void 0:n.dm_directoryParents)==null||t.map(a=>{a.meta.entityType.id=="ce_country"?l=`${a.slug}`:a.meta.entityType.id=="ce_region"&&(l=`${l}/${a.slug}/${n.slug.toString()}.html`)}),l},Q=({relativePrefixToRoot:n,path:l,document:t})=>{var s;var a="";return(s=t==null?void 0:t.dm_directoryChildren)==null||s.map(o=>{a=o.address.countryCode.toLowerCase().replaceAll(" ","-")+"/"+o.address.region.toLowerCase().replaceAll(" ","-")}),{title:`${t.c_meta_title?t.c_meta_title:`Stores in ${t.name} | Find a Local Store`}`,charset:"UTF-8",viewport:"width=device-width, initial-scale=1",tags:[{type:"link",attributes:{rel:"shortcut icon",href:f}},{type:"meta",attributes:{name:"description",content:`${t.c_meta_description?t.c_meta_description:`Use this page to find your nearest store in ${t.name} and discover the location details you need to visit us today.`}`}},{type:"meta",attributes:{name:"author",content:p.Brandname}},{type:"meta",attributes:{name:"keywords",content:t.name}},{type:"meta",attributes:{name:"robots",content:"noindex, nofollow"}},{type:"link",attributes:{rel:"canonical",href:`${b+a+"/"+t.slug+".html"}`}},{type:"meta",attributes:{property:"og:url",content:`${b+a+"/"+t.slug+".html"}`}},{type:"meta",attributes:{property:"og:description",content:`${t.c_meta_description?t.c_meta_description:`Find Store in ${t.name}.`}`}},{type:"meta",attributes:{property:"og:title",content:`${t.name}`}},{type:"meta",attributes:{property:"og:image",content:f}},{type:"meta",attributes:{name:"twitter:card",content:"summary"}},{type:"meta",attributes:{name:"twitter:url",content:`/${t.slug?t.slug:`${t.name.toLowerCase()}`}.html`}},{type:"meta",attributes:{name:"twitter:description",content:`${t.c_meta_description?t.c_meta_description:`Find Store in ${t.name}.`}`}}]}},V=({relativePrefixToRoot:n,path:l,document:t})=>{const{name:a,dm_directoryParents:s,dm_directoryChildren:o,c_globalData:E,c_canonical:I,c_metaDescription:U,c_metaTitle:G,_site:w}=t;var C;o.sort(function(c,d){var c=c.name,d=d.name;return c<d?-1:c>d?1:0});let x="";t.dm_directoryParents.forEach(e=>{x+=e.slug+"/"});const S=o==null?void 0:o.map(e=>{var u;e.address.city?e.address.city:e.address.region?e.address.region:e.address.country;var i="",c=e.id,d=e.address.region.toLowerCase(),N=d.toString();N.replaceAll(" ","-");var L=e.address.city.toLowerCase(),P=L.toString();P.replaceAll(" ","-");var D=c;let T=D;return e.slug?(i=`/${e.slug.toString()}.html`,console.log(i,"city url")):(i=`${T}`,console.log(i,"dlhsadlhfsjkl")),m("div",{className:"nearby-card",children:[r("div",{className:"location-name-miles icon-row",children:r("h2",{children:r(_,{className:"inline-block notHighlight",href:i,"data-ya-track":`viewstore-${e.name}`,eventName:`viewstore-${e.name}`,rel:"noopener noreferrer",children:e.name})})}),r("div",{className:"icon-row",children:r(k,{address:e.address})}),e.mainPhone?r("div",{className:"icon-row",children:r("div",{className:"content-col",children:r("a",{href:`tel:${e.mainPhone}`,children:e.mainPhone})})}):"",r("div",{className:"icon-row",children:r("div",{className:"content-col open-now-string",children:typeof((u=e.hours)==null?void 0:u.reopenDate)<"u"?r("h6",{children:p.tempClosed}):r(B,{timezone:e.timezone,hours:e.hours})})}),m("div",{className:"button-bx",children:[r(_,{className:"btn",href:i,"data-ya-track":`viewstore-${e.name}`,eventName:`viewstore-${e.name}`,rel:"noopener noreferrer",children:p.StoreDetailbtn}),r(A,{buttonText:p.getDirection,address:e.address,latitude:e.yextDisplayCoordinate.latitude,longitude:e.yextDisplayCoordinate.longitude})]})]})});var h="";t.dm_directoryParents.map(e=>{e.meta.entityType.id=="ce_country"?h=`${e.slug}`:e.meta.entityType.id=="ce_region"&&(h=`${h}/${e.slug}/${t.slug.toString()}.html`)});let g=[],y=0;return s&&(s==null||s.map((e,i)=>{y=i,i!=0&&g.push({"@type":"ListItem",position:i,item:{"@id":`${$.stagingBaseurl}${e.slug}`,name:e.name}})})),g.push({"@type":"ListItem",position:y+1,item:{"@id":`${$.stagingBaseurl}/${t.slug.toString()}.html`,name:t.name}}),m(F,{children:[r(v.JsonLd,{item:{"@context":"https://schema.org","@type":"Store",name:"Matalan"}}),r(v.JsonLd,{item:{"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:g}}),m(j,{_site:w,global:void 0,children:[r(z,{name:a,address:C,parents:s,baseUrl:n}),r("div",{className:"content-list city-page",children:m("div",{className:"container mx-auto",children:[r("div",{className:"sec-title",children:m("h2",{children:["World Stores in ",a]})}),r("div",{className:"flex flex-wrap justify-center items-start -mx-2.5 lg:-mx-[.9375rem]",children:S})]})})]})]})};export{q as config,V as default,Q as getHeadConfig,K as getPath};