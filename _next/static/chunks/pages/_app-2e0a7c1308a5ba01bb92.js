_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[12],{0:function(e,t,o){o("GcxT"),e.exports=o("nOHt")},GcxT:function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return o("IlR1")}])},IlR1:function(e,t,o){"use strict";o.r(t),o.d(t,"default",(function(){return K}));var n=o("nKUr"),r=o("cpVT"),i=o("vOnD"),a=(o("OWt7"),{fonts:{title:"MADEMirage",main:"MADEMirage"},colors:{primary1:"#f2f5f7",background1:"#181818",accent1:"#fec576",button:"#003E6B",background2:"#2c304d)"},breakpoints:{sm:"screen and (max-width: 640px)",md:"screen and (max-width: 768px)",mdlg:"screen and (max-width: 1023px)",lg:"screen and (max-width: 1024px)",xl:"screen and (max-width: 1280px)"}});var s=o("WRJ3");function l(){var e,t,o=(e=["\n  ",";\n\n  * {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n  }\n  html {\n    font-size: 62.5%;\n    scroll-behavior: smooth;\n\n  }\n  body {\n    font-family: 'MADEMirage';\n    src: url('../public/font/MADE_Mirage_Medium.otf') format('otf');\n    font-size: 1.6rem;\n    background: ",";\n    color: ",";\n    cursor: default;\n\n  }\n  h1,h2,h3,h4,h5,h6,button {\n    font-family: ",";\n  }\n  a {\n    text-decoration: none;\n  }\n  li{\n    list-style: none;\n  }\n\n"],t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}})));return l=function(){return o},o}var c=Object(i.createGlobalStyle)(l(),s.normalize,(function(e){return e.theme.colors.background1}),(function(e){return e.theme.colors.primary1}),(function(e){return e.theme.fonts.title})),u=function(e){var t=e.children;return Object(n.jsxs)(i.ThemeProvider,{theme:a,children:[Object(n.jsx)(c,{}),t]})};function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,n=new Array(t);o<t;o++)n[o]=e[o];return n}var p=o("XzT5"),m=o("1OyB"),f=o("vuIU"),g=[],h=g.forEach,b=g.slice;function v(e){return h.call(b.call(arguments,1),(function(t){if(t)for(var o in t)void 0===e[o]&&(e[o]=t[o])})),e}var y=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/,w=function(e,t,o){var n=o||{};n.path=n.path||"/";var r=e+"="+encodeURIComponent(t);if(n.maxAge>0){var i=n.maxAge-0;if(isNaN(i))throw new Error("maxAge should be a Number");r+="; Max-Age="+Math.floor(i)}if(n.domain){if(!y.test(n.domain))throw new TypeError("option domain is invalid");r+="; Domain="+n.domain}if(n.path){if(!y.test(n.path))throw new TypeError("option path is invalid");r+="; Path="+n.path}if(n.expires){if("function"!==typeof n.expires.toUTCString)throw new TypeError("option expires is invalid");r+="; Expires="+n.expires.toUTCString()}if(n.httpOnly&&(r+="; HttpOnly"),n.secure&&(r+="; Secure"),n.sameSite)switch("string"===typeof n.sameSite?n.sameSite.toLowerCase():n.sameSite){case!0:r+="; SameSite=Strict";break;case"lax":r+="; SameSite=Lax";break;case"strict":r+="; SameSite=Strict";break;case"none":r+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}return r},k=function(e,t,o,n){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{path:"/",sameSite:"strict"};o&&(r.expires=new Date,r.expires.setTime(r.expires.getTime()+60*o*1e3)),n&&(r.domain=n),document.cookie=w(e,encodeURIComponent(t),r)},x=function(e){for(var t=e+"=",o=document.cookie.split(";"),n=0;n<o.length;n++){for(var r=o[n];" "===r.charAt(0);)r=r.substring(1,r.length);if(0===r.indexOf(t))return r.substring(t.length,r.length)}return null},S={name:"cookie",lookup:function(e){var t;if(e.lookupCookie&&"undefined"!==typeof document){var o=x(e.lookupCookie);o&&(t=o)}return t},cacheUserLanguage:function(e,t){t.lookupCookie&&"undefined"!==typeof document&&k(t.lookupCookie,e,t.cookieMinutes,t.cookieDomain,t.cookieOptions)}},j={name:"querystring",lookup:function(e){var t;if("undefined"!==typeof window)for(var o=window.location.search.substring(1).split("&"),n=0;n<o.length;n++){var r=o[n].indexOf("=");if(r>0)o[n].substring(0,r)===e.lookupQuerystring&&(t=o[n].substring(r+1))}return t}},O=null,T=function(){if(null!==O)return O;try{O="undefined"!==window&&null!==window.localStorage;var e="i18next.translate.boo";window.localStorage.setItem(e,"foo"),window.localStorage.removeItem(e)}catch(t){O=!1}return O},D={name:"localStorage",lookup:function(e){var t;if(e.lookupLocalStorage&&T()){var o=window.localStorage.getItem(e.lookupLocalStorage);o&&(t=o)}return t},cacheUserLanguage:function(e,t){t.lookupLocalStorage&&T()&&window.localStorage.setItem(t.lookupLocalStorage,e)}},E=null,z=function(){if(null!==E)return E;try{E="undefined"!==window&&null!==window.sessionStorage;var e="i18next.translate.boo";window.sessionStorage.setItem(e,"foo"),window.sessionStorage.removeItem(e)}catch(t){E=!1}return E},A={name:"sessionStorage",lookup:function(e){var t;if(e.lookupSessionStorage&&z()){var o=window.sessionStorage.getItem(e.lookupSessionStorage);o&&(t=o)}return t},cacheUserLanguage:function(e,t){t.lookupSessionStorage&&z()&&window.sessionStorage.setItem(t.lookupSessionStorage,e)}},I={name:"navigator",lookup:function(e){var t=[];if("undefined"!==typeof navigator){if(navigator.languages)for(var o=0;o<navigator.languages.length;o++)t.push(navigator.languages[o]);navigator.userLanguage&&t.push(navigator.userLanguage),navigator.language&&t.push(navigator.language)}return t.length>0?t:void 0}},P={name:"htmlTag",lookup:function(e){var t,o=e.htmlTag||("undefined"!==typeof document?document.documentElement:null);return o&&"function"===typeof o.getAttribute&&(t=o.getAttribute("lang")),t}},C={name:"path",lookup:function(e){var t;if("undefined"!==typeof window){var o=window.location.pathname.match(/\/([a-zA-Z-]*)/g);if(o instanceof Array)if("number"===typeof e.lookupFromPathIndex){if("string"!==typeof o[e.lookupFromPathIndex])return;t=o[e.lookupFromPathIndex].replace("/","")}else t=o[0].replace("/","")}return t}},F={name:"subdomain",lookup:function(e){var t;if("undefined"!==typeof window){var o=window.location.href.match(/(?:http[s]*\:\/\/)*(.*?)\.(?=[^\/]*\..{2,5})/gi);o instanceof Array&&(t="number"===typeof e.lookupFromSubdomainIndex?o[e.lookupFromSubdomainIndex].replace("http://","").replace("https://","").replace(".",""):o[0].replace("http://","").replace("https://","").replace(".",""))}return t}};var L=function(){function e(t){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};Object(m.a)(this,e),this.type="languageDetector",this.detectors={},this.init(t,o)}return Object(f.a)(e,[{key:"init",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};this.services=e,this.options=v(t,this.options||{},{order:["querystring","cookie","localStorage","sessionStorage","navigator","htmlTag"],lookupQuerystring:"lng",lookupCookie:"i18next",lookupLocalStorage:"i18nextLng",lookupSessionStorage:"i18nextLng",caches:["localStorage"],excludeCacheFor:["cimode"]}),this.options.lookupFromUrlIndex&&(this.options.lookupFromPathIndex=this.options.lookupFromUrlIndex),this.i18nOptions=o,this.addDetector(S),this.addDetector(j),this.addDetector(D),this.addDetector(A),this.addDetector(I),this.addDetector(P),this.addDetector(C),this.addDetector(F)}},{key:"addDetector",value:function(e){this.detectors[e.name]=e}},{key:"detect",value:function(e){var t=this;e||(e=this.options.order);var o=[];return e.forEach((function(e){if(t.detectors[e]){var n=t.detectors[e].lookup(t.options);n&&"string"===typeof n&&(n=[n]),n&&(o=o.concat(n))}})),this.services.languageUtils.getBestMatchFromCodes?o:o.length>0?o[0]:null}},{key:"cacheUserLanguage",value:function(e,t){var o=this;t||(t=this.options.caches),t&&(this.options.excludeCacheFor&&this.options.excludeCacheFor.indexOf(e)>-1||t.forEach((function(t){o.detectors[t]&&o.detectors[t].cacheUserLanguage(e,o.options)})))}}]),e}();L.type="languageDetector";var M,N=L,_=o("2Agp"),U=Object.assign.apply(Object,[{}].concat(function(e){if(Array.isArray(e))return d(e)}(M=Object.keys(_.b).map((function(e){return Object(r.a)({},_.b[e],{translations:o("TlKZ")("./"+_.b[e]+"/translation.json")})})))||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(M)||function(e,t){if(e){if("string"===typeof e)return d(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);return"Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o?Array.from(e):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?d(e,t):void 0}}(M)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()));p.a.use(N).init({detection:{order:["querystring","cookie","localStorage","sessionStorage","navigator","htmlTag","path","subdomain"],lookupCookie:"lng",lookupLocalStorage:"lng",lookupFromPathIndex:0,lookupFromSubdomainIndex:0,caches:["localStorage","cookie"],excludeCacheFor:["cimode"],cookieOptions:{path:"/",sameSite:"strict"}},fallbackLng:_.a,resources:U,ns:["translations"],defaultNS:"translations",returnObjects:!0,debug:!1,interpolation:{escapeValue:!1},react:{wait:!0}});p.a;function J(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function B(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?J(Object(o),!0).forEach((function(t){Object(r.a)(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):J(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function K(e){var t=e.Component,o=e.pageProps;return p.a.changeLanguage(o.language),Object(n.jsx)(n.Fragment,{children:Object(n.jsx)(u,{children:Object(n.jsx)(t,B({},o))})})}},JKj4:function(e){e.exports=JSON.parse('{"projects":"Projetos.","skills":"Conhecimentos.","about":"Sobre.","welcomeName":"Jo\xe3o Pereira","welcomeDescription":"Front-End dev.","welcomeText":"Esteja pronto para ler algum conte\xfado nerd de tecnologia sobre minhas habilidades, vida, conquistas e estudos ao longo da minha carreira como desenvolvedor.","dataButton":"Mais Dados.","projectsTitle":"Projetos e Estudos.","moreButton":"Mais","sourceButton":"C\xf3digo","skillsTitle":"Habilidades e Tecnologias.","skillsDescription":"Tenho estudado uma ampla gama de tecnologias envolvendo Javascript na web e desenvolvimento mobile na comunidade. De landing pages a Apps, aprendi e melhorei trabalhando com diferentes projetos.","skillsExperience":"Experiencia com","aboutTitle":"Sobre mim.","aboutText":"Comecei a estudar desenvolvimento front-end por influ\xeancia do meu irm\xe3o e desde 2018 come\xe7amos a trabalhar juntos como freelancer desenvolvendo sites.","personalTitle":"Conquistas pessoais.","developed":"Desenvolvido com \u2764\ufe0f usando NextJS."}')},TlKZ:function(e,t,o){var n={"./en/translation.json":"ewjA","./pt/translation.json":"JKj4"};function r(e){var t=i(e);return o(t)}function i(e){if(!o.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=i,e.exports=r,r.id="TlKZ"},WRJ3:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.Normalize=t.normalize=void 0;var n=o("vOnD"),r=(0,n.css)(['html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0;}main{display:block;}h1{font-size:2em;margin:0.67em 0;}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace,monospace;font-size:1em;}a{background-color:transparent;}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted;}b,strong{font-weight:bolder;}code,kbd,samp{font-family:monospace,monospace;font-size:1em;}small{font-size:80%;}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline;}sub{bottom:-0.25em;}sup{top:-0.5em;}img{border-style:none;}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible;}button,select{text-transform:none;}button,[type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button;}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0;}button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:1px dotted ButtonText;}fieldset{padding:0.35em 0.75em 0.625em;}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline;}textarea{overflow:auto;}[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0;}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto;}[type="search"]{-webkit-appearance:textfield;outline-offset:-2px;}[type="search"]::-webkit-search-decoration{-webkit-appearance:none;}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block;}summary{display:list-item;}template{display:none;}[hidden]{display:none;}']);t.normalize=r;var i=(0,n.createGlobalStyle)(r);t.Normalize=i;var a=r;t.default=a},ewjA:function(e){e.exports=JSON.parse('{"projects":"Projects.","skills":"Skills.","about":"About.","welcomeName":"Jo\xe3o Pereira","welcomeDescription":"Front-End Developer.","welcomeText":"Be ready and get cozy to read some tech nerd content about my skills. life, achievments and studies through my career as a developer.","dataButton":"More data.","projectsTitle":"Projects and Studies.","moreButton":"More","sourceButton":"Source","skillsTitle":"Skills and Technologies.","skillsDescription":"Ive been studying a wide range of technologies envolving Javascript in the web and mobile development in the community. From landing pages to Apps I learned and improved working with different projects.","skillsExperience":"Experience with","aboutTitle":"About me.","aboutText":"I started studying front-end developing by influece of my brother and since 2018 we begin working together as freelancer developing websites.","personalTitle":"Personal Achievments","developed":"Developed with \u2764\ufe0f using NextJS."}')}},[[0,0,2,5,1,3,4]]]);