var s=Object.defineProperty,a=Object.defineProperties,t=Object.getOwnPropertyDescriptors,n=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,e=Object.prototype.propertyIsEnumerable,r=(a,t,n)=>t in a?s(a,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):a[t]=n;import{d as c,r as p,o,b as i,t as h,c as j,w as d,f as g,h as m,y as u,F as v,e as f,u as y,i as b,v as _,x as w}from"./vendor.00795bee.js";var k=c({data:()=>({positions:["left","top","bottom","right"]})});k.render=function(s,a,t,n,l,e){const r=p("si-button"),c=p("si-tooltip");return o(!0),i(v,null,h(s.positions,(s=>(o(),j(c,{content:`position: ${s}`,position:s,style:{margin:"0.5em"},scrollElement:".components-content"},{default:d((()=>[g(r,{variant:"flat"},{default:d((()=>[m(u(s),1)])),_:2},1024)])),_:2},1032,["content","position"])))),256)};const I={components:{ImportDemo:k}};I.render=function(s,a,t,n,l,e){const r=p("ImportDemo");return o(),j(r)};var x=c({data:()=>({types:["primary","success","warning","danger","dark","light"]})});const q=m("RGB"),D=m("HSL"),H=m("HEX");x.render=function(s,a,t,n,l,e){const r=p("si-button"),c=p("si-tooltip");return o(),i(v,null,[(o(!0),i(v,null,h(s.types,(s=>(o(),j(c,{type:s,content:`type: ${s}`,style:{margin:"0.5em"}},{default:d((()=>[g(r,{variant:"flat",type:s},{default:d((()=>[m(u(s),1)])),_:2},1032,["type"])])),_:2},1032,["type","content"])))),256)),f("p",null,[g(c,{color:"rgb(100,150,200)",content:"rgb(100,150,200)",style:{margin:"0.5em"}},{default:d((()=>[g(r,{variant:"flat",color:"rgb(100,150,200)"},{default:d((()=>[q])),_:1})])),_:1}),g(c,{color:"hsl(281, 84%, 63%)",content:"hsl(281, 84%, 63%)",style:{margin:"0.5em"}},{default:d((()=>[g(r,{variant:"flat",color:"hsl(281, 84%, 63%)"},{default:d((()=>[D])),_:1})])),_:1}),g(c,{color:"#51f0ab",content:"#51f0ab",style:{margin:"0.5em"}},{default:d((()=>[g(r,{variant:"flat",color:"#51f0ab"},{default:d((()=>[H])),_:1})])),_:1})])],64)};const C={components:{ImportDemo:x}};C.render=function(s,a,t,n,l,e){const r=p("ImportDemo");return o(),j(r)};var T=c({data:()=>({variants:["border","border-thick","shadow"]})});T.render=function(s,a,t,n,l,e){const r=p("si-button"),c=p("si-tooltip");return o(!0),i(v,null,h(s.variants,(s=>(o(),j(c,{type:"primary",variant:s,content:`variant: ${s}`,style:{margin:"1em"}},{default:d((()=>[g(r,{variant:"flat",transparent:""},{default:d((()=>[m(u(s),1)])),_:2},1024)])),_:2},1032,["variant","content"])))),256)};const O={components:{ImportDemo:T}};O.render=function(s,a,t,n,l,e){const r=p("ImportDemo");return o(),j(r)};const R={},$=m("circle"),A=m("square");R.render=function(s,a){const t=p("si-button"),n=p("si-tooltip");return o(),i(v,null,[g(n,{circle:"",content:"circle",style:{margin:"1em"}},{default:d((()=>[g(t,{variant:"flat",circle:""},{default:d((()=>[$])),_:1})])),_:1}),g(n,{square:"",content:"square",style:{margin:"1em"}},{default:d((()=>[g(t,{variant:"flat",square:""},{default:d((()=>[A])),_:1})])),_:1})],64)};const E={components:{ImportDemo:R}};E.render=function(s,a,t,n,l,e){const r=p("ImportDemo");return o(),j(r)};const L={},P=m("Loading");L.render=function(s,a){const t=p("si-button"),n=p("si-tooltip");return o(),j(n,{loading:"",content:"loading"},{default:d((()=>[g(t,{variant:"flat"},{default:d((()=>[P])),_:1})])),_:1})};const S={components:{ImportDemo:L}};S.render=function(s,a,t,n,l,e){const r=p("ImportDemo");return o(),j(r)};const B=c({components:{vdpv_0:I,vdpv_1:C,vdpv_2:O,vdpv_3:E,vdpv_4:S},setup(s){const c=y(),p=y(),o=y(),i=y(),h=y(),j=[c,p,o,i,h],d=b({vdpv_0Height:0,vdpv_1Height:0,vdpv_2Height:0,vdpv_3Height:0,vdpv_4Height:0});return g=((s,a)=>{for(var t in a||(a={}))l.call(a,t)&&r(s,t,a[t]);if(n)for(var t of n(a))e.call(a,t)&&r(s,t,a[t]);return s})({toggleCode:s=>{const a="vdpv_"+s;0===d[a+"Height"]?d[a+"Height"]=(j[s].value?j[s].value.offsetHeight:0)||0:d[a+"Height"]=0}},_(d)),a(g,t({vdpv_0Ref:c,vdpv_1Ref:p,vdpv_2Ref:o,vdpv_3Ref:i,vdpv_4Ref:h}));var g}});B.$vd={matter:{title:"Tooltip"},toc:[{content:"Tooltip 提示框",anchor:"tooltip-提示框",level:1},{content:"Default",anchor:"default",level:2},{content:"Type & Color",anchor:"type-color",level:2},{content:"Variant",anchor:"variant",level:2},{content:"Circle & Square",anchor:"circle-square",level:2},{content:"Loading",anchor:"loading",level:2}]};const G=B,V={class:"vuedoc component-container"},X=w('<h1 id="tooltip-提示框" data-source-line="2"><a class="markdownIt-Anchor" href="#tooltip-提示框">#</a> Tooltip 提示框</h1><p data-source-line="4">常用于展示鼠标 hover 时的提示信息。</p><h2 id="default" data-source-line="6"><a class="markdownIt-Anchor" href="#default">#</a> Default</h2><p data-source-line="8">设置 <code>position</code> 属性来改变 Tooltip 的位置</p><p data-source-line="10"><code>position</code>: left | top | bottom | right</p><pre style="display:none;"></pre>',6),F={class:"vuedoc-demo"},z=f("pre",{class:"hljs language-vue hljs--atom-one-light"},[f("code",null,[f("span",{class:"xml"},[f("span",{class:"hljs-tag"},[m("<"),f("span",{class:"hljs-name"},"template"),m(">")]),m("\r\n\t"),f("span",{class:"hljs-tag"},[m("<"),f("span",{class:"hljs-name"},"si-tooltip"),m("\r\n\t\t"),f("span",{class:"hljs-attr"},":content"),m("="),f("span",{class:"hljs-string"},'"`position: ${position}`"'),m("\r\n\t\t"),f("span",{class:"hljs-attr"},"v-for"),m("="),f("span",{class:"hljs-string"},'"position in positions"'),m("\r\n\t\t"),f("span",{class:"hljs-attr"},":position"),m("="),f("span",{class:"hljs-string"},'"position"'),m("\r\n\t\t"),f("span",{class:"hljs-attr"},"style"),m("="),f("span",{class:"hljs-string"},'"margin: 0.5em"'),m("\r\n\t\t"),f("span",{class:"hljs-attr"},"scrollElement"),m("="),f("span",{class:"hljs-string"},'".components-content"'),m("\r\n\t>")]),m("\r\n\t\t"),f("span",{class:"hljs-tag"},[m("<"),f("span",{class:"hljs-name"},"si-button"),m(),f("span",{class:"hljs-attr"},"variant"),m("="),f("span",{class:"hljs-string"},'"flat"'),m(">")]),m(" {{ position }}"),f("span",{class:"hljs-tag"},[m("</"),f("span",{class:"hljs-name"},"si-button"),m(">")]),m("\r\n\t"),f("span",{class:"hljs-tag"},[m("</"),f("span",{class:"hljs-name"},"si-tooltip"),m(">")]),m("\r\n"),f("span",{class:"hljs-tag"},[m("</"),f("span",{class:"hljs-name"},"template"),m(">")]),m("\r\n\r\n"),f("span",{class:"hljs-tag"},[m("<"),f("span",{class:"hljs-name"},"script"),m(),f("span",{class:"hljs-attr"},"lang"),m("="),f("span",{class:"hljs-string"},'"ts"'),m(">")])]),f("span",{class:"typescript"},[m("\r\n"),f("span",{class:"hljs-keyword"},"import"),m(" { defineComponent } "),f("span",{class:"hljs-keyword"},"from"),m(),f("span",{class:"hljs-string"},"'vue'"),m("\r\n\r\n"),f("span",{class:"hljs-keyword"},"export"),m(),f("span",{class:"hljs-keyword"},"default"),m(" defineComponent({\r\n\t"),f("span",{class:"hljs-function"},[f("span",{class:"hljs-title"},"data"),m("("),f("span",{class:"hljs-params"}),m(")")]),m(" {\r\n\t\t"),f("span",{class:"hljs-keyword"},"return"),m(" {\r\n\t\t\t"),f("span",{class:"hljs-attr"},"positions"),m(": ["),f("span",{class:"hljs-string"},"'left'"),m(", "),f("span",{class:"hljs-string"},"'top'"),m(", "),f("span",{class:"hljs-string"},"'bottom'"),m(", "),f("span",{class:"hljs-string"},"'right'"),m("]\r\n\t\t}\r\n\t}\r\n})\r")]),f("span",{class:"xml"},[m("\n"),f("span",{class:"hljs-tag"},[m("</"),f("span",{class:"hljs-name"},"script"),m(">")]),m("\r\n")])])],-1),J=w('<h2 id="type-color" data-source-line="16"><a class="markdownIt-Anchor" href="#type-color">#</a> Type &amp; Color</h2><p data-source-line="18">设置 <code>type</code>、<code>color</code> 属性来改变 Tooltip 的颜色（<code>color</code>属性覆盖<code>type</code>属性）</p><p data-source-line="20"><code>type</code>: primary | warning | success | danger | light | dark</p><p data-source-line="22"><code>color</code>: hsl | rgb | hex</p><pre style="display:none;"></pre>',5),K={class:"vuedoc-demo"},M=f("pre",{class:"hljs language-vue hljs--atom-one-light"},[f("code",null,[f("span",{class:"xml"},[f("span",{class:"hljs-tag"},[m("<"),f("span",{class:"hljs-name"},"template"),m(">")]),m("\r\n\t"),f("span",{class:"hljs-tag"},[m("<"),f("span",{class:"hljs-name"},"si-tooltip"),m(),f("span",{class:"hljs-attr"},":type"),m("="),f("span",{class:"hljs-string"},'"type"'),m(),f("span",{class:"hljs-attr"},":content"),m("="),f("span",{class:"hljs-string"},'"`type: ${type}`"'),m(),f("span",{class:"hljs-attr"},"v-for"),m("="),f("span",{class:"hljs-string"},'"type in types"'),m(),f("span",{class:"hljs-attr"},"style"),m("="),f("span",{class:"hljs-string"},'"margin: 0.5em"'),m(">")]),m("\r\n\t\t"),f("span",{class:"hljs-tag"},[m("<"),f("span",{class:"hljs-name"},"si-button"),m(),f("span",{class:"hljs-attr"},"variant"),m("="),f("span",{class:"hljs-string"},'"flat"'),m(),f("span",{class:"hljs-attr"},":type"),m("="),f("span",{class:"hljs-string"},'"type"'),m(">")]),m("{{ type }}"),f("span",{class:"hljs-tag"},[m("</"),f("span",{class:"hljs-name"},"si-button"),m(">")]),m("\r\n\t"),f("span",{class:"hljs-tag"},[m("</"),f("span",{class:"hljs-name"},"si-tooltip"),m(">")]),m("\r\n\t"),f("span",{class:"hljs-tag"},[m("<"),f("span",{class:"hljs-name"},"p"),m(">")]),m("\r\n\t\t"),f("span",{class:"hljs-tag"},[m("<"),f("span",{class:"hljs-name"},"si-tooltip"),m(),f("span",{class:"hljs-attr"},"color"),m("="),f("span",{class:"hljs-string"},'"rgb(100,150,200)"'),m(),f("span",{class:"hljs-attr"},"content"),m("="),f("span",{class:"hljs-string"},'"rgb(100,150,200)"'),m(),f("span",{class:"hljs-attr"},"style"),m("="),f("span",{class:"hljs-string"},'"margin: 0.5em"'),m(">")]),m("\r\n\t\t\t"),f("span",{class:"hljs-tag"},[m("<"),f("span",{class:"hljs-name"},"si-button"),m(),f("span",{class:"hljs-attr"},"variant"),m("="),f("span",{class:"hljs-string"},'"flat"'),m(),f("span",{class:"hljs-attr"},"color"),m("="),f("span",{class:"hljs-string"},'"rgb(100,150,200)"'),m(">")]),m("RGB"),f("span",{class:"hljs-tag"},[m("</"),f("span",{class:"hljs-name"},"si-button"),m(">")]),m("\r\n\t\t"),f("span",{class:"hljs-tag"},[m("</"),f("span",{class:"hljs-name"},"si-tooltip"),m(">")]),m("\r\n\t\t"),f("span",{class:"hljs-tag"},[m("<"),f("span",{class:"hljs-name"},"si-tooltip"),m(),f("span",{class:"hljs-attr"},"color"),m("="),f("span",{class:"hljs-string"},'"hsl(281, 84%, 63%)"'),m(),f("span",{class:"hljs-attr"},"content"),m("="),f("span",{class:"hljs-string"},'"hsl(281, 84%, 63%)"'),m(),f("span",{class:"hljs-attr"},"style"),m("="),f("span",{class:"hljs-string"},'"margin: 0.5em"'),m(">")]),m("\r\n\t\t\t"),f("span",{class:"hljs-tag"},[m("<"),f("span",{class:"hljs-name"},"si-button"),m(),f("span",{class:"hljs-attr"},"variant"),m("="),f("span",{class:"hljs-string"},'"flat"'),m(),f("span",{class:"hljs-attr"},"color"),m("="),f("span",{class:"hljs-string"},'"hsl(281, 84%, 63%)"'),m(">")]),m("HSL"),f("span",{class:"hljs-tag"},[m("</"),f("span",{class:"hljs-name"},"si-button"),m(">")]),m("\r\n\t\t"),f("span",{class:"hljs-tag"},[m("</"),f("span",{class:"hljs-name"},"si-tooltip"),m(">")]),m("\r\n\t\t"),f("span",{class:"hljs-tag"},[m("<"),f("span",{class:"hljs-name"},"si-tooltip"),m(),f("span",{class:"hljs-attr"},"color"),m("="),f("span",{class:"hljs-string"},'"#51f0ab"'),m(),f("span",{class:"hljs-attr"},"content"),m("="),f("span",{class:"hljs-string"},'"#51f0ab"'),m(),f("span",{class:"hljs-attr"},"style"),m("="),f("span",{class:"hljs-string"},'"margin: 0.5em"'),m(">")]),m("\r\n\t\t\t"),f("span",{class:"hljs-tag"},[m("<"),f("span",{class:"hljs-name"},"si-button"),m(),f("span",{class:"hljs-attr"},"variant"),m("="),f("span",{class:"hljs-string"},'"flat"'),m(),f("span",{class:"hljs-attr"},"color"),m("="),f("span",{class:"hljs-string"},'"#51f0ab"'),m(">")]),m("HEX"),f("span",{class:"hljs-tag"},[m("</"),f("span",{class:"hljs-name"},"si-button"),m(">")]),m("\r\n\t\t"),f("span",{class:"hljs-tag"},[m("</"),f("span",{class:"hljs-name"},"si-tooltip"),m(">")]),m("\r\n\t"),f("span",{class:"hljs-tag"},[m("</"),f("span",{class:"hljs-name"},"p"),m(">")]),m("\r\n"),f("span",{class:"hljs-tag"},[m("</"),f("span",{class:"hljs-name"},"template"),m(">")]),m("\r\n\r\n"),f("span",{class:"hljs-tag"},[m("<"),f("span",{class:"hljs-name"},"script"),m(),f("span",{class:"hljs-attr"},"lang"),m("="),f("span",{class:"hljs-string"},'"ts"'),m(">")])]),f("span",{class:"typescript"},[m("\r\n"),f("span",{class:"hljs-keyword"},"import"),m(" { defineComponent } "),f("span",{class:"hljs-keyword"},"from"),m(),f("span",{class:"hljs-string"},"'vue'"),m("\r\n\r\n"),f("span",{class:"hljs-keyword"},"export"),m(),f("span",{class:"hljs-keyword"},"default"),m(" defineComponent({\r\n\t"),f("span",{class:"hljs-function"},[f("span",{class:"hljs-title"},"data"),m("("),f("span",{class:"hljs-params"}),m(")")]),m(" {\r\n\t\t"),f("span",{class:"hljs-keyword"},"return"),m(" {\r\n\t\t\t"),f("span",{class:"hljs-attr"},"types"),m(": ["),f("span",{class:"hljs-string"},"'primary'"),m(", "),f("span",{class:"hljs-string"},"'success'"),m(", "),f("span",{class:"hljs-string"},"'warning'"),m(", "),f("span",{class:"hljs-string"},"'danger'"),m(", "),f("span",{class:"hljs-string"},"'dark'"),m(", "),f("span",{class:"hljs-string"},"'light'"),m("]\r\n\t\t}\r\n\t}\r\n})\r")]),f("span",{class:"xml"},[m("\n"),f("span",{class:"hljs-tag"},[m("</"),f("span",{class:"hljs-name"},"script"),m(">")]),m("\r\n")])])],-1),N=w('<h2 id="variant" data-source-line="28"><a class="markdownIt-Anchor" href="#variant">#</a> Variant</h2><p data-source-line="30">设置 <code>variant</code> 属性来改变 Tooltip 的风格</p><p data-source-line="32"><code>variant</code>: default | border | border-thick | shadow</p><pre style="display:none;"></pre>',4),Q={class:"vuedoc-demo"},U=f("pre",{class:"hljs language-vue hljs--atom-one-light"},[f("code",null,[f("span",{class:"xml"},[f("span",{class:"hljs-tag"},[m("<"),f("span",{class:"hljs-name"},"template"),m(">")]),m("\r\n\t"),f("span",{class:"hljs-tag"},[m("<"),f("span",{class:"hljs-name"},"si-tooltip"),m("\r\n\t\t"),f("span",{class:"hljs-attr"},"type"),m("="),f("span",{class:"hljs-string"},'"primary"'),m("\r\n\t\t"),f("span",{class:"hljs-attr"},":variant"),m("="),f("span",{class:"hljs-string"},'"variant"'),m("\r\n\t\t"),f("span",{class:"hljs-attr"},":content"),m("="),f("span",{class:"hljs-string"},'"`variant: ${variant}`"'),m("\r\n\t\t"),f("span",{class:"hljs-attr"},"v-for"),m("="),f("span",{class:"hljs-string"},'"variant in variants"'),m("\r\n\t\t"),f("span",{class:"hljs-attr"},"style"),m("="),f("span",{class:"hljs-string"},'"margin: 1em"'),m("\r\n\t>")]),m("\r\n\t\t"),f("span",{class:"hljs-tag"},[m("<"),f("span",{class:"hljs-name"},"si-button"),m(),f("span",{class:"hljs-attr"},"variant"),m("="),f("span",{class:"hljs-string"},'"flat"'),m(),f("span",{class:"hljs-attr"},"transparent"),m(">")]),m("{{ variant }}"),f("span",{class:"hljs-tag"},[m("</"),f("span",{class:"hljs-name"},"si-button"),m(">")]),m("\r\n\t"),f("span",{class:"hljs-tag"},[m("</"),f("span",{class:"hljs-name"},"si-tooltip"),m(">")]),m("\r\n"),f("span",{class:"hljs-tag"},[m("</"),f("span",{class:"hljs-name"},"template"),m(">")]),m("\r\n\r\n"),f("span",{class:"hljs-tag"},[m("<"),f("span",{class:"hljs-name"},"script"),m(),f("span",{class:"hljs-attr"},"lang"),m("="),f("span",{class:"hljs-string"},'"ts"'),m(">")])]),f("span",{class:"typescript"},[m("\r\n"),f("span",{class:"hljs-keyword"},"import"),m(" { defineComponent } "),f("span",{class:"hljs-keyword"},"from"),m(),f("span",{class:"hljs-string"},"'vue'"),m("\r\n\r\n"),f("span",{class:"hljs-keyword"},"export"),m(),f("span",{class:"hljs-keyword"},"default"),m(" defineComponent({\r\n\t"),f("span",{class:"hljs-function"},[f("span",{class:"hljs-title"},"data"),m("("),f("span",{class:"hljs-params"}),m(")")]),m(" {\r\n\t\t"),f("span",{class:"hljs-keyword"},"return"),m(" {\r\n\t\t\t"),f("span",{class:"hljs-attr"},"variants"),m(": ["),f("span",{class:"hljs-string"},"'border'"),m(", "),f("span",{class:"hljs-string"},"'border-thick'"),m(", "),f("span",{class:"hljs-string"},"'shadow'"),m("]\r\n\t\t}\r\n\t}\r\n})\r")]),f("span",{class:"xml"},[m("\n"),f("span",{class:"hljs-tag"},[m("</"),f("span",{class:"hljs-name"},"script"),m(">")]),m("\r\n")])])],-1),W=f("h2",{id:"circle-square","data-source-line":"38"},[f("a",{class:"markdownIt-Anchor",href:"#circle-square"},"#"),m(" Circle & Square")],-1),Y=f("p",{"data-source-line":"40"},[m("添加 "),f("code",null,"circle"),m(" / "),f("code",null,"square"),m(" 属性来改变 Tooltip 的形状")],-1),Z=f("pre",{style:{display:"none"}},null,-1),ss={class:"vuedoc-demo"},as=f("pre",{class:"hljs language-vue hljs--atom-one-light"},[f("code",null,[f("span",{class:"xml"},[f("span",{class:"hljs-tag"},[m("<"),f("span",{class:"hljs-name"},"template"),m(">")]),m("\r\n\t"),f("span",{class:"hljs-tag"},[m("<"),f("span",{class:"hljs-name"},"si-tooltip"),m(),f("span",{class:"hljs-attr"},"circle"),m(),f("span",{class:"hljs-attr"},"content"),m("="),f("span",{class:"hljs-string"},'"circle"'),m(),f("span",{class:"hljs-attr"},"style"),m("="),f("span",{class:"hljs-string"},'"margin: 1em"'),m(">")]),m("\r\n\t\t"),f("span",{class:"hljs-tag"},[m("<"),f("span",{class:"hljs-name"},"si-button"),m(),f("span",{class:"hljs-attr"},"variant"),m("="),f("span",{class:"hljs-string"},'"flat"'),m(),f("span",{class:"hljs-attr"},"circle"),m(">")]),m("circle"),f("span",{class:"hljs-tag"},[m("</"),f("span",{class:"hljs-name"},"si-button"),m(">")]),m("\r\n\t"),f("span",{class:"hljs-tag"},[m("</"),f("span",{class:"hljs-name"},"si-tooltip"),m(">")]),m("\r\n\t"),f("span",{class:"hljs-tag"},[m("<"),f("span",{class:"hljs-name"},"si-tooltip"),m(),f("span",{class:"hljs-attr"},"square"),m(),f("span",{class:"hljs-attr"},"content"),m("="),f("span",{class:"hljs-string"},'"square"'),m(),f("span",{class:"hljs-attr"},"style"),m("="),f("span",{class:"hljs-string"},'"margin: 1em"'),m(">")]),m("\r\n\t\t"),f("span",{class:"hljs-tag"},[m("<"),f("span",{class:"hljs-name"},"si-button"),m(),f("span",{class:"hljs-attr"},"variant"),m("="),f("span",{class:"hljs-string"},'"flat"'),m(),f("span",{class:"hljs-attr"},"square"),m(">")]),m("square"),f("span",{class:"hljs-tag"},[m("</"),f("span",{class:"hljs-name"},"si-button"),m(">")]),m("\r\n\t"),f("span",{class:"hljs-tag"},[m("</"),f("span",{class:"hljs-name"},"si-tooltip"),m(">")]),m("\r\n"),f("span",{class:"hljs-tag"},[m("</"),f("span",{class:"hljs-name"},"template"),m(">")]),m("\r\n")])])],-1),ts=f("h2",{id:"loading","data-source-line":"46"},[f("a",{class:"markdownIt-Anchor",href:"#loading"},"#"),m(" Loading")],-1),ns=f("p",{"data-source-line":"48"},[m("添加 "),f("code",null,"loading"),m(" 属性来切换 Tooltip 的状态")],-1),ls=f("pre",{style:{display:"none"}},null,-1),es={class:"vuedoc-demo"},rs=f("pre",{class:"hljs language-vue hljs--atom-one-light"},[f("code",null,[f("span",{class:"xml"},[f("span",{class:"hljs-tag"},[m("<"),f("span",{class:"hljs-name"},"template"),m(">")]),m("\r\n\t"),f("span",{class:"hljs-tag"},[m("<"),f("span",{class:"hljs-name"},"si-tooltip"),m(),f("span",{class:"hljs-attr"},"loading"),m(),f("span",{class:"hljs-attr"},"content"),m("="),f("span",{class:"hljs-string"},'"loading"'),m(">")]),m("\r\n\t\t"),f("span",{class:"hljs-tag"},[m("<"),f("span",{class:"hljs-name"},"si-button"),m(),f("span",{class:"hljs-attr"},"variant"),m("="),f("span",{class:"hljs-string"},'"flat"'),m(">")]),m("Loading"),f("span",{class:"hljs-tag"},[m("</"),f("span",{class:"hljs-name"},"si-button"),m(">")]),m("\r\n\t"),f("span",{class:"hljs-tag"},[m("</"),f("span",{class:"hljs-name"},"si-tooltip"),m(">")]),m("\r\n"),f("span",{class:"hljs-tag"},[m("</"),f("span",{class:"hljs-name"},"template"),m(">")]),m("\r\n")])])],-1);G.render=function(s,a,t,n,l,e){const r=p("vdpv_0"),c=p("ComponentExample"),h=p("vdpv_1"),j=p("vdpv_2"),m=p("vdpv_3"),u=p("vdpv_4");return o(),i("div",V,[X,f("div",F,[g(c,{lang:"vue",theme:"atom-one-light"},{code:d((()=>[z])),default:d((()=>[g(r)])),_:1})]),J,f("div",K,[g(c,{lang:"vue",theme:"atom-one-light"},{code:d((()=>[M])),default:d((()=>[g(h)])),_:1})]),N,f("div",Q,[g(c,{lang:"vue",theme:"atom-one-light"},{code:d((()=>[U])),default:d((()=>[g(j)])),_:1})]),W,Y,Z,f("div",ss,[g(c,{lang:"vue",theme:"atom-one-light"},{code:d((()=>[as])),default:d((()=>[g(m)])),_:1})]),ts,ns,ls,f("div",es,[g(c,{lang:"vue",theme:"atom-one-light"},{code:d((()=>[rs])),default:d((()=>[g(u)])),_:1})])])};export{G as default};
