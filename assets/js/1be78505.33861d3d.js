(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9514,6035,7420],{3616:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return te}});var n=a(7294),r=a(3905),i=a(2263),l=a(6291),o=a(8648),c=a(4034),s=a(9973),d=a(6010),u=a(6700),m=a(944),h=a(1839),p=a(3783),b=a(7898),f=a(6742),v=a(3919),E=a(5537),g=function(e){return n.createElement("svg",(0,c.Z)({width:"20",height:"20",role:"img"},e),n.createElement("g",{fill:"#7a7a7a"},n.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),n.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))},k=a(4478),_=a(4973),C="sidebar_15mo",Z="sidebarWithHideableNavbar_267A",N="sidebarHidden_2kNb",S="sidebarLogo_3h0W",I="menu_Bmed",x="menuLinkText_2aKo",y="menuWithAnnouncementBar_2WvA",B="collapseSidebarButton_1CGd",w="collapseSidebarButtonIcon_3E-R",T="sidebarMenuIcon_fgN0",P="sidebarMenuCloseIcon_1lpH",A="menuLinkExternal_1OhN";var L=function e(t,a){return"link"===t.type?(0,u.Mg)(t.href,a):"category"===t.type&&t.items.some((function(t){return e(t,a)}))},R=(0,n.memo)((function(e){var t=e.items,a=(0,s.Z)(e,["items"]);return t.map((function(e,t){return n.createElement(M,(0,c.Z)({key:t,item:e},a))}))}));function M(e){switch(e.item.type){case"category":return n.createElement(O,e);case"link":default:return n.createElement(D,e)}}function O(e){var t,a,r,i=e.item,l=e.onItemClick,o=e.collapsible,u=e.activePath,m=(0,s.Z)(e,["item","onItemClick","collapsible","activePath"]),h=i.items,p=i.label,b=L(i,u),f=(a=b,r=(0,n.useRef)(a),(0,n.useEffect)((function(){r.current=a}),[a]),r.current),v=(0,n.useState)((function(){return!!o&&(!b&&i.collapsed)})),E=v[0],g=v[1],k=(0,n.useRef)(null),_=(0,n.useState)(void 0),C=_[0],Z=_[1],N=function(e){var t;void 0===e&&(e=!0),Z(e?(null==(t=k.current)?void 0:t.scrollHeight)+"px":void 0)};(0,n.useEffect)((function(){b&&!f&&E&&g(!1)}),[b,f,E]);var S=(0,n.useCallback)((function(e){e.preventDefault(),C||N(),setTimeout((function(){return g((function(e){return!e}))}),100)}),[C]);return 0===h.length?null:n.createElement("li",{className:(0,d.Z)("menu__list-item",{"menu__list-item--collapsed":E})},n.createElement("a",(0,c.Z)({className:(0,d.Z)("menu__link",(t={"menu__link--sublist":o,"menu__link--active":o&&b},t[x]=!o,t)),onClick:o?S:void 0,href:o?"#!":void 0},m),p),n.createElement("ul",{className:"menu__list",ref:k,style:{height:C},onTransitionEnd:function(){E||N(!1)}},n.createElement(R,{items:h,tabIndex:E?"-1":"0",onItemClick:l,collapsible:o,activePath:u})))}function D(e){var t,a=e.item,r=e.onItemClick,i=e.activePath,l=(e.collapsible,(0,s.Z)(e,["item","onItemClick","activePath","collapsible"])),o=a.href,u=a.label,m=L(a,i);return n.createElement("li",{className:"menu__list-item",key:u},n.createElement(f.Z,(0,c.Z)({className:(0,d.Z)("menu__link",(t={"menu__link--active":m},t[A]=!(0,v.Z)(o),t)),to:o},(0,v.Z)(o)&&{isNavLink:!0,exact:!0,onClick:r},l),u))}function F(e){var t=e.onClick;return n.createElement("button",{type:"button",title:(0,_.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,_.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,d.Z)("button button--secondary button--outline",B),onClick:t},n.createElement(g,{className:w}))}function H(e){var t=e.responsiveSidebarOpened,a=e.onClick;return n.createElement("button",{"aria-label":t?(0,_.I)({id:"theme.docs.sidebar.responsiveCloseButtonLabel",message:"Close menu",description:"The ARIA label for close button of mobile doc sidebar"}):(0,_.I)({id:"theme.docs.sidebar.responsiveOpenButtonLabel",message:"Open menu",description:"The ARIA label for open button of mobile doc sidebar"}),"aria-haspopup":"true",className:"button button--secondary button--sm menu__button",type:"button",onClick:a},t?n.createElement("span",{className:(0,d.Z)(T,P)},"\xd7"):n.createElement(k.Z,{className:T,height:24,width:24}))}var W=function(e){var t,a,r=e.path,i=e.sidebar,l=e.sidebarCollapsible,o=void 0===l||l,c=e.onCollapse,s=e.isHidden,f=function(){var e=(0,m.Z)().isAnnouncementBarClosed,t=(0,n.useState)(!e),a=t[0],r=t[1];return(0,b.Z)((function(t){var a=t.scrollY;e||r(0===a)})),a}(),v=(0,u.LU)(),g=v.navbar.hideOnScroll,k=v.hideableSidebar,_=(0,m.Z)().isAnnouncementBarClosed,x=function(){var e=(0,n.useState)(!1),t=e[0],a=e[1];(0,h.Z)(t);var r=(0,p.Z)();return(0,n.useEffect)((function(){r===p.D.desktop&&a(!1)}),[r]),{showResponsiveSidebar:t,closeResponsiveSidebar:(0,n.useCallback)((function(e){e.target.blur(),a(!1)}),[a]),toggleResponsiveSidebar:(0,n.useCallback)((function(){a((function(e){return!e}))}),[a])}}(),B=x.showResponsiveSidebar,w=x.closeResponsiveSidebar,T=x.toggleResponsiveSidebar;return n.createElement("div",{className:(0,d.Z)(C,(t={},t[Z]=g,t[N]=s,t))},g&&n.createElement(E.Z,{tabIndex:-1,className:S}),n.createElement("div",{className:(0,d.Z)("menu","menu--responsive","thin-scrollbar",I,(a={"menu--show":B},a[y]=!_&&f,a))},n.createElement(H,{responsiveSidebarOpened:B,onClick:T}),n.createElement("ul",{className:"menu__list"},n.createElement(R,{items:i,onItemClick:w,collapsible:o,activePath:r}))),k&&n.createElement(F,{onClick:c}))},K=a(3009),U=a(4608),V=a(5977),z="docPage_31aa",J="docMainContainer_3ufF",Y="docMainContainerEnhanced_3NYZ",G="docSidebarContainer_3Kbt",Q="docSidebarContainerHidden_3pA8",X="collapsedDocSidebar_2JMH",j="expandSidebarButtonIcon_1naQ",q="docItemWrapperEnhanced_2vyJ",$="docItemWrapper_3FMP";function ee(e){var t,a,l,c,s,m=e.currentDocRoute,h=e.versionMetadata,p=e.children,b=(0,i.default)(),f=b.siteConfig,v=b.isClient,E=h.pluginId,k=h.permalinkToSidebar,C=h.docsSidebars,Z=h.version,N=k[m.path],S=C[N],I=(0,n.useState)(!1),x=I[0],y=I[1],B=(0,n.useState)(!1),w=B[0],T=B[1],P=(0,n.useCallback)((function(){w&&T(!1),y(!x)}),[w]);return n.createElement(o.Z,{key:v,wrapperClassName:u.kM.wrapper.docPages,pageClassName:u.kM.page.docPage,searchMetadatas:{version:Z,tag:(0,u.os)(E,Z)}},n.createElement("div",{className:z},S&&n.createElement("div",{className:(0,d.Z)(G,(t={},t[Q]=x,t)),onTransitionEnd:function(e){e.currentTarget.classList.contains(G)&&x&&T(!0)},role:"complementary"},n.createElement(W,{key:N,sidebar:S,path:m.path,sidebarCollapsible:null==(a=null==(l=f.themeConfig)?void 0:l.sidebarCollapsible)||a,onCollapse:P,isHidden:w}),w&&n.createElement("div",{className:X,title:(0,_.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,_.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:P,onClick:P},n.createElement(g,{className:j}))),n.createElement("main",{className:(0,d.Z)(J,(c={},c[Y]=x||!S,c))},n.createElement("div",{className:(0,d.Z)("container padding-vert--lg",$,(s={},s[q]=x,s))},n.createElement(r.Zo,{components:K.Z},p)))))}var te=function(e){var t=e.route.routes,a=e.versionMetadata,r=e.location,i=t.find((function(e){return(0,V.LX)(r.pathname,e)}));return i?n.createElement(ee,{currentDocRoute:i,versionMetadata:a},(0,l.Z)(t)):n.createElement(U.default,e)}},3009:function(e,t,a){"use strict";a.d(t,{Z:function(){return m}});var n=a(7294),r=a(6742),i=a(210),l=a(9973),o=a(6010),c=a(4973),s=a(6700),d="enhancedAnchor_2LWZ",u=function(e){return function(t){var a,r=t.id,i=(0,l.Z)(t,["id"]),u=(0,s.LU)().navbar.hideOnScroll;return r?n.createElement(e,i,n.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:(0,o.Z)("anchor",(a={},a[d]=!u,a)),id:r}),i.children,n.createElement("a",{className:"hash-link",href:"#"+r,title:(0,c.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"#")):n.createElement(e,i)}},m={code:function(e){var t=e.children;return(0,n.isValidElement)(t)?t:t.includes("\n")?n.createElement(i.Z,e):n.createElement("code",e)},a:function(e){return n.createElement(r.Z,e)},pre:function(e){var t,a=e.children;return(0,n.isValidElement)(null==a||null==(t=a.props)?void 0:t.children)?null==a?void 0:a.props.children:n.createElement(i.Z,(0,n.isValidElement)(a)?null==a?void 0:a.props:{children:a})},h1:u("h1"),h2:u("h2"),h3:u("h3"),h4:u("h4"),h5:u("h5"),h6:u("h6")}},4608:function(e,t,a){"use strict";a.r(t);var n=a(7294),r=a(8648),i=a(4973);t.default=function(){return n.createElement(r.Z,{title:"Page Not Found"},n.createElement("main",{className:"container margin-vert--xl"},n.createElement("div",{className:"row"},n.createElement("div",{className:"col col--6 col--offset-3"},n.createElement("h1",{className:"hero__title"},n.createElement(i.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),n.createElement("p",null,n.createElement(i.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),n.createElement("p",null,n.createElement(i.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."))))))}},6979:function(e,t,a){"use strict";var n=a(7294),r=a(4184),i=a.n(r),l=a(2263),o=a(5977),c=a(2644);t.Z=function(e){var t=(0,n.useState)(!1),r=t[0],s=t[1],d=(0,n.useRef)(null),u=(0,l.default)().siteConfig,m=(void 0===u?{}:u).themeConfig.algolia,h=(0,o.k6)(),p=(0,c.Z)().navigateToSearchPage;var b=function(e){void 0===e&&(e=!0),r||Promise.all([Promise.all([a.e(4362),a.e(5525)]).then(a.t.bind(a,4362,23)),Promise.all([a.e(532),a.e(3343)]).then(a.bind(a,3343))]).then((function(t){var a=t[0].default;s(!0),window.docsearch=a,function(e){window.docsearch({appId:m.appId,apiKey:m.apiKey,indexName:m.indexName,inputSelector:"#search_input_react",algoliaOptions:m.algoliaOptions,autocompleteOptions:{openOnFocus:!0,autoselect:!1,hint:!1},handleSelected:function(e,t,a){t.stopPropagation();var n=document.createElement("a");n.href=a.url;var r="#__docusaurus"===n.hash?""+n.pathname:""+n.pathname+n.hash;h.push(r)}}),e&&d.current.focus()}(e)}))},f=(0,n.useCallback)((function(){b(),r&&d.current.focus(),e.handleSearchBarToggle(!e.isSearchBarExpanded)}),[e.isSearchBarExpanded]),v=(0,n.useCallback)((function(){e.handleSearchBarToggle(!e.isSearchBarExpanded)}),[e.isSearchBarExpanded]),E=(0,n.useCallback)((function(e){var t="mouseover"!==e.type;b(t)})),g=(0,n.useCallback)((function(e){e.defaultPrevented||"Enter"!==e.key||p(e.target.value)}));return n.createElement("div",{className:"navbar__search",key:"search-box"},n.createElement("span",{"aria-label":"expand searchbar",role:"button",className:i()("search-icon",{"search-icon-hidden":e.isSearchBarExpanded}),onClick:f,onKeyDown:f,tabIndex:0}),n.createElement("input",{id:"search_input_react",type:"search",placeholder:"Search","aria-label":"Search",className:i()("navbar__search-input",{"search-bar-expanded":e.isSearchBarExpanded},{"search-bar":!e.isSearchBarExpanded}),onMouseOver:E,onFocus:E,onBlur:v,onKeyDown:g,ref:d}))}}}]);