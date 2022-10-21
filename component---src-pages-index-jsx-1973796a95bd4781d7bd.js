(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{Dtc0:function(e,a,r){"use strict";r.r(a);var t=r("q1tI"),n=r.n(t),o=r("Bl7J"),l=r("vrFN"),i=r("HM7x"),p=r("vOnD"),m=p.a.div.withConfig({displayName:"Hero__Wrapper",componentId:"sc-r87snh-0"})(["text-align:center;"]),c=p.a.h1.withConfig({displayName:"Hero__Title",componentId:"sc-r87snh-1"})(["color:var(--primary);"]),s=function(){return n.a.createElement(m,null,n.a.createElement(i.a,{column:!0},n.a.createElement(c,null,"Hello Developer"),n.a.createElement("p",null,"We are building an index for awesome developer portfolios,",n.a.createElement("br",null),"as a source for inspiration, information and, as an awesome showcase.",n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("i",null,"This project is ",n.a.createElement("b",null,"work in progress"),". Help is more than welcome."))))},d=(r("p2bk"),r("ma3e")),h=p.a.p.withConfig({displayName:"DeveloperCard__LinkWrapper",componentId:"sc-1j38nhh-0"})(["position:absolute;bottom:1rem;margin:0;right:0.5rem;color:var(--text);font-size:1rem;line-height:1;"]),u=p.a.div.withConfig({displayName:"DeveloperCard__Wrapper",componentId:"sc-1j38nhh-1"})(["width:280px;height:320px;display:flex;flex-direction:column;margin:0.5rem;@media screen and (min-width:375px){margin:1rem;width:300px;}border-radius:1rem;box-shadow:2px 2px 20px 2px rgba(0,0,0,0.1);transition:0.4s ease-out;overflow:hidden;&:hover{box-shadow:2px 2px 20px 2px rgba(0,0,0,0.4);","{border-color:var(--primary);color:var(--primary);}}@media screen and (min-width:768px){margin:0.6rem;}"],h),f=p.a.div.withConfig({displayName:"DeveloperCard__TitleImage",componentId:"sc-1j38nhh-2"})(["height:150px;width:100%;background-size:cover;background-repeat:no-repeat;position:relative;border-top-right-radius:10px;border-top-left-radius:10px;"]),g=p.a.div.withConfig({displayName:"DeveloperCard__Content",componentId:"sc-1j38nhh-3"})(["display:flex;flex-direction:column;flex:1;margin:1rem 1rem 0 1rem;position:relative;"]),v=p.a.h3.withConfig({displayName:"DeveloperCard__Title",componentId:"sc-1j38nhh-4"})(["font-size:1rem;font-weight:bold;line-height:1.5;color:var(--text);margin-bottom:0.5rem;"]),w=p.a.p.withConfig({displayName:"DeveloperCard__Description",componentId:"sc-1j38nhh-5"})(["font-size:0.75rem;margin:0;line-height:1.25rem;"]),x=p.a.div.withConfig({displayName:"DeveloperCard__CardFooter",componentId:"sc-1j38nhh-6"})(["position:absolute;width:100%;bottom:0;}"]),y=p.a.p.withConfig({displayName:"DeveloperCard__Tags",componentId:"sc-1j38nhh-7"})([""]),b=p.a.span.withConfig({displayName:"DeveloperCard__Tag",componentId:"sc-1j38nhh-8"})(["font-size:0.5rem;margin:0 0.25rem;text-transform:uppercase;"]),_=function(e){var a=e.portfolioUrl,r=e.name,t=e.titleImage,o=e.description,l=e.tags;return n.a.createElement("a",{href:"https://"+a,target:"_blank",rel:"nofollow noopener noreferrer"},n.a.createElement(u,null,n.a.createElement(f,{style:{backgroundImage:"url("+t+")"}}),n.a.createElement(g,null,n.a.createElement(v,null,r),n.a.createElement(w,null,o.length>100?o.substring(0,100)+"...":o),n.a.createElement(x,null,n.a.createElement(y,null,l.map((function(e,a){return n.a.createElement(b,{key:a},e)}))),n.a.createElement(h,null,n.a.createElement(d.c,null))))))},E=r("Wbzz");var C=p.a.div.withConfig({displayName:"SearchBar__IconWrapper",componentId:"sc-f9p7se-0"})(["position:absolute;right:1rem;top:1rem;"]),I=p.a.input.withConfig({displayName:"SearchBar__StyledInput",componentId:"sc-f9p7se-1"})(["border-radius:1rem;border:0.125rem solid var(--text);line-height:2rem;padding:0.25rem 0.5rem;color:var(--gray);&:focus{color:var(--text);outline:none;border-color:var(--primary);","{color:var(--primary);}}"],C),j=p.a.div.withConfig({displayName:"SearchBar__Wrapper",componentId:"sc-f9p7se-2"})(["display:flex;justify-content:center;width:100%;@media screen and (min-width:1024px){width:50%;}margin:1rem auto;"]),N=p.a.span.withConfig({displayName:"SearchBar__HelperText",componentId:"sc-f9p7se-3"})(["font-size:75%;color:var(--text);"]),D=p.a.div.withConfig({displayName:"SearchBar__StyledInputWrapper",componentId:"sc-f9p7se-4"})(["position:relative;"]),k=function(e){var a=Object(t.useState)(""),r=a[0],o=a[1];return n.a.createElement(j,null,n.a.createElement(i.a,{column:!0},n.a.createElement(D,null,n.a.createElement(I,{type:"text",placeholder:"frontend developer",value:r,onChange:function(a){var r=a.target.value;o(r),e.cb(r.trim().toLowerCase())}}),n.a.createElement(C,null,n.a.createElement(d.d,null))),n.a.createElement(N,null,"Search by name, technology")))},S=p.a.div.withConfig({displayName:"Developers__Wrapper",componentId:"sc-1vlwjj0-0"})([""]),W=p.a.h3.withConfig({displayName:"Developers__Title",componentId:"sc-1vlwjj0-1"})([""]),z=p.a.div.withConfig({displayName:"Developers__CardWrapper",componentId:"sc-1vlwjj0-2"})(["display:flex;justify-content:center;flex-wrap:wrap;"]),T=function(){var e=Object(E.useStaticQuery)("4053987518").allMarkdownRemark.edges,a=Object(t.useState)(""),r=a[0],o=a[1];return n.a.createElement(S,null,n.a.createElement(k,{cb:function(e){return o(e)}}),n.a.createElement(W,null,"All Developers"),n.a.createElement(z,null,e.filter((function(e){var a=e.node;return!r.length||(a.frontmatter.name.toLowerCase().includes(r)||-1!==a.frontmatter.tags.indexOf(r))})).map((function(e){var a=e.node,r=a.frontmatter,t=r.name,o=r.portfolioUrl,l=r.titleImage,i=r.description,p=r.tags;return n.a.createElement(_,{key:a.id,portfolioUrl:o,name:t,titleImage:l.childImageSharp.fixed.src,description:i,tags:p})}))))};a.default=function(){return n.a.createElement(o.a,null,n.a.createElement(l.a,{title:"Home"}),n.a.createElement(s,null),n.a.createElement(T,null))}},p2bk:function(e,a,r){}}]);
//# sourceMappingURL=component---src-pages-index-jsx-1973796a95bd4781d7bd.js.map