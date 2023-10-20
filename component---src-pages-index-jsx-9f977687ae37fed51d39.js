"use strict";(self.webpackChunkawesome_portfolio_com=self.webpackChunkawesome_portfolio_com||[]).push([[230],{8936:function(e,t,r){r.r(t),r.d(t,{default:function(){return z}});var n=r(7294),a=r(3360),o=r(8183),l=r(2661),i=r(5086);const c=i.default.div.withConfig({displayName:"Hero__Wrapper",componentId:"sc-7jh8ya-0"})(["text-align:center;"]),m=i.default.h1.withConfig({displayName:"Hero__Title",componentId:"sc-7jh8ya-1"})(["color:var(--primary);"]);var p=()=>n.createElement(c,null,n.createElement(l.c_,{column:!0},n.createElement(m,null,"Hello Developer"),n.createElement("p",null,"We are building an index for awesome developer portfolios,",n.createElement("br",null),"as a source for inspiration, information and, as an awesome showcase.",n.createElement("br",null),n.createElement("br",null),n.createElement("i",null,"This project is ",n.createElement("b",null,"work in progress"),". Help is more than welcome.")))),d=r(9583);const s=i.default.p.withConfig({displayName:"DeveloperCard__LinkWrapper",componentId:"sc-x18p1c-0"})(["position:absolute;bottom:1rem;margin:0;right:0.5rem;color:var(--text);font-size:1rem;line-height:1;"]),u=i.default.div.withConfig({displayName:"DeveloperCard__Wrapper",componentId:"sc-x18p1c-1"})(["width:280px;height:320px;display:flex;flex-direction:column;margin:0.5rem;@media screen and (min-width:375px){margin:1rem;width:300px;}border-radius:1rem;box-shadow:2px 2px 20px 2px rgba(0,0,0,0.1);transition:0.4s ease-out;overflow:hidden;&:hover{box-shadow:2px 2px 20px 2px rgba(0,0,0,0.4);","{border-color:var(--primary);color:var(--primary);}}@media screen and (min-width:768px){margin:0.6rem;}"],s),f=i.default.div.withConfig({displayName:"DeveloperCard__TitleImage",componentId:"sc-x18p1c-2"})(["height:150px;width:100%;background-size:300px;background-position:center center;background-repeat:no-repeat;position:relative;border-top-right-radius:10px;border-top-left-radius:10px;"]),h=i.default.div.withConfig({displayName:"DeveloperCard__Content",componentId:"sc-x18p1c-3"})(["display:flex;flex-direction:column;flex:1;margin:1rem 1rem 0 1rem;position:relative;"]),g=i.default.h3.withConfig({displayName:"DeveloperCard__Title",componentId:"sc-x18p1c-4"})(["font-size:1rem;font-weight:bold;line-height:1.5;color:var(--text);margin-bottom:0.5rem;"]),w=i.default.p.withConfig({displayName:"DeveloperCard__Description",componentId:"sc-x18p1c-5"})(["font-size:0.75rem;margin:0;line-height:1.25rem;"]),x=i.default.div.withConfig({displayName:"DeveloperCard__CardFooter",componentId:"sc-x18p1c-6"})(["position:absolute;width:100%;bottom:0;"]),v=i.default.p.withConfig({displayName:"DeveloperCard__Tags",componentId:"sc-x18p1c-7"})(["margin-bottom:1rem;"]),y=i.default.span.withConfig({displayName:"DeveloperCard__Tag",componentId:"sc-x18p1c-8"})(["font-size:0.5rem;margin:0 0.25rem;text-transform:uppercase;"]),_=e=>{const{portfolioUrl:t,name:r,titleImage:a,description:o,tags:l}=e;return n.createElement("a",{href:`https://${t}`,target:"_blank",rel:"nofollow noopener noreferrer"},n.createElement(u,null,n.createElement(f,{style:{backgroundImage:`url(${a})`}}),n.createElement(h,null,n.createElement(g,null,r),n.createElement(w,null,o.length>100?`${o.substring(0,100)}...`:o),n.createElement(x,null,n.createElement(v,null,l.map(((e,t)=>n.createElement(y,{key:t},e)))),n.createElement(s,null,n.createElement(d.gjK,null))))))};var b=r(1883);const C=i.default.div.withConfig({displayName:"SearchBar__IconWrapper",componentId:"sc-dilykb-0"})(["position:absolute;right:1rem;top:1rem;"]),E=i.default.input.withConfig({displayName:"SearchBar__StyledInput",componentId:"sc-dilykb-1"})(["border-radius:1rem;border:0.125rem solid var(--text);line-height:2rem;padding:0.25rem 0.5rem;color:var(--gray);&:focus{color:var(--text);outline:none;border-color:var(--primary);","{color:var(--primary);}}"],C),I=i.default.div.withConfig({displayName:"SearchBar__Wrapper",componentId:"sc-dilykb-2"})(["display:flex;justify-content:center;width:100%;@media screen and (min-width:1024px){width:50%;}margin:1rem auto;"]),k=i.default.span.withConfig({displayName:"SearchBar__HelperText",componentId:"sc-dilykb-3"})(["font-size:75%;color:var(--text);"]),N=i.default.div.withConfig({displayName:"SearchBar__StyledInputWrapper",componentId:"sc-dilykb-4"})(["position:relative;"]),D=e=>{const{0:t,1:r}=(0,n.useState)("");return n.createElement(I,null,n.createElement(l.c_,{column:!0},n.createElement(N,null,n.createElement(E,{type:"text",placeholder:"frontend developer",value:t,onChange:t=>{const n=t.target.value;r(n),e.cb(n.trim().toLowerCase())}}),n.createElement(C,null,n.createElement(d.U41,null))),n.createElement(k,null,"Search by name, technology")))},S=i.default.div.withConfig({displayName:"Developers__Wrapper",componentId:"sc-7fnws5-0"})([""]),W=i.default.h3.withConfig({displayName:"Developers__Title",componentId:"sc-7fnws5-1"})([""]),T=i.default.div.withConfig({displayName:"Developers__CardWrapper",componentId:"sc-7fnws5-2"})(["display:flex;justify-content:center;flex-wrap:wrap;"]),j=()=>{const e=function(){const{allMarkdownRemark:e}=(0,b.useStaticQuery)("2925082207");return e.edges}(),{0:t,1:r}=(0,n.useState)("");return n.createElement(S,null,n.createElement(D,{cb:e=>r(e)}),n.createElement(W,null,"All Developers"),n.createElement(T,null,e.filter((e=>{let{node:r}=e;return!t.length||(r.frontmatter.name.toLowerCase().includes(t)||-1!==r.frontmatter.tags.indexOf(t))})).map((e=>{let{node:t}=e;const{name:r,portfolioUrl:a,titleImage:o,description:l,tags:i}=t.frontmatter;return n.createElement(_,{key:t.id,portfolioUrl:a,name:r,titleImage:o.childImageSharp.fixed.src,description:l,tags:i})}))))};var z=()=>n.createElement(a.Z,null,n.createElement(o.Z,{title:"Home"}),n.createElement(p,null),n.createElement(j,null))}}]);
//# sourceMappingURL=component---src-pages-index-jsx-9f977687ae37fed51d39.js.map