(this.webpackJsonpexamples=this.webpackJsonpexamples||[]).push([[0],{27:function(e){e.exports=JSON.parse('{"a":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}')},82:function(e,t,n){},83:function(e,t,n){},84:function(e,t,n){},95:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(28),i=n.n(c),s=(n(82),n(83),n(140)),o=n(11);n(84);function l(e){return[1,3,5].map((function(t){return e.substr(t,2)})).map((function(e){return parseInt(e,16)})).map((function(e){return e/255}))}function u(e){return"#"+e.map((function(e){return Math.round(255*e)})).map((function(e){return e.toString(16).padStart(2,"0")})).join("")}function h(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:2,r=l(e),a=l(t),c=[0,1,2].map((function(e){return(a[e]-r[e])/(n-1)}));return Array.from(new Array(n).keys()).map((function(e){return[0,1,2].map((function(t){return r[t]+e*c[t]}))})).map((function(e){return u(e)}))}function j(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:128,n=e.length;if(n>=t)return e.slice(0,t);if(2===n)return h(e[0],e[1],t);for(var r=new Array(t),a=Math.ceil(t/(n-1)),c=0;c<n-1;c++)for(var i=h(e[c],e[c+1],a),s=0;s<a;s++)r[Math.min(Math.round(c*t/(n-1))+s,t-1)]=i[s];return r}var d=a.a.forwardRef,f=a.a.useImperativeHandle,b=function(e){return Math.min(1,Math.max(0,Math.round(1e3*e)/1e3))};function p(e,t){for(var n=[e[0]],r=[t[0]],a=1;a<t.length;a++)t[a]===t[a-1]?n[n.length-1]+=e[a]:(n.push(e[a]),r.push(t[a]));return[n,r]}function x(e,t){var n,r=0;if(t===e)return 0;if(!e.contains(t))return-1;for(;n=(n||t).previousSibling;)r+=(n.innerText||n.nodeValue||"").length;return r+x(e,t.parentNode)}function m(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[[],[]],n=Array.from(e.childNodes),r=0,a=n;r<a.length;r++){var c=a[r];c.hasChildNodes()?t=m(c,t):(t[0].push(c.textContent),t[1].push(b(parseFloat(c.parentElement.getAttribute("data-weight")))))}return t}function O(e,t,n,r){for(var a=arguments.length>4&&void 0!==arguments[4]&&arguments[4],c=e[0],i=e[1],s=0,o=0,l=[],u=[];o<c.length;){var h=c[o],j=i[o],d=h.length;s+d<=t||s>=n?(l.push(h),u.push(j)):s===t&&s+d===n?(l.push(h),u.push(a?j+r:r)):(s<t?(l.push(h.slice(0,t-s)),u.push(j),l.push(h.slice(t-s,n-s)),u.push(a?j+r:r)):(l.push(h.slice(0,n-s)),u.push(a?j+r:r)),s+d>n&&(l.push(h.slice(n-s)),u.push(j))),s+=d,o+=1}return p(l,u.map((function(e){return b(e)})))}for(var g=d((function(e,t){var n=e.value,c=e.weight,i=e.colors,s=e.editable;if(n||(n=[""]),"string"===typeof n)if(c&&c.length===n.length){var l=c.map((function(e,t){if(0===t||e!=c[t-1])return t})).filter((function(e){return e>=0}));n=l.map((function(e,t){return n.slice(e,l[t+1])})),c=l.map((function(e,t){return c[e]}))}else n=[n],c=[0];var u=Object(r.useState)([n,c]),h=Object(o.a)(u,2),d=h[0],b=h[1],p=j("undefined"===typeof i?["#ffffff","#ff8888"]:i,128),g=a.a.createRef(),v=d[0].map((function(e,t){var n=p[Math.round(127*d[1][t])];return a.a.createElement("span",{key:t,"data-weight":d[1][t],style:{backgroundColor:n}},e)})),w=function(){var e=g.current,t=document.getSelection();if(!e.contains(t.anchorNode))return[-1,-1];var n=t.getRangeAt(0);return[x(e,n.startContainer)+n.startOffset,x(e,n.endContainer)+n.endOffset]};return f(t,(function(){return{getContent:function(){return JSON.parse(JSON.stringify(d))},incrementWeight:function(e,t,n){if(void 0===t||void 0===n){var r=w(),a=Object(o.a)(r,2);t=a[0],n=a[1]}if(n!==t){var c=m(g.current);b(O(c,t,n,e,!0))}},setWeight:function(e,t,n){if(void 0===t||void 0===n){var r=w(),a=Object(o.a)(r,2);t=a[0],n=a[1]}if(n!==t){var c=m(g.current);b(O(c,t,n,e,!1))}},refresh:function(){b(m(g.current))}}})),a.a.createElement("div",{ref:g,className:"textheat",contentEditable:s,suppressContentEditableWarning:!0,onPaste:function(e){e.preventDefault();var t=(e.originalEvent||e).clipboardData.getData("text/plain");document.execCommand("insertHTML",!1,t)},role:"textbox"},v)})),v=n(27),w=n(1),y=v.a.split("").map((function(e){return 0})),C=0;C<21;C++)y[0+C]=.2;for(var T=0;T<5;T++)y[6+T]=.4;for(var N=0;N<8;N++)y[40+N]=.5;for(var S=0;S<8;S++)y[48+S]=.7;for(var k=0;k<8;k++)y[56+k]=.8;for(var F=0;F<8;F++)y[64+F]=.9;for(var L=0;L<8;L++)y[72+L]=1;for(var M=0;M<17;M++)y[80+M]=.6;function V(){return Object(w.jsx)(g,{className:"textheat",value:v.a,weight:y})}function A(){return Object(w.jsx)(g,{className:"textheat",value:v.a,weight:y,colors:["#ffffff","#8888ff"]})}function H(){return Object(w.jsx)(g,{className:"textheat",value:v.a,weight:y,colors:["#ffffff","#ffff88","#ff9999"]})}var I=n(136),E=n(141),D=n(143),P=n(138),R=n(127),W=n(134),B=n(144),J=n(139),z=n(68),U=n.n(z),_=n(69),q=n.n(_),G=n(70),K=n.n(G),Q=n(142),X=n(71),Y=n.n(X);function Z(e){var t=e.paintValue,n=e.setPaintValue,r=e.handlePaint;return Object(w.jsxs)(R.a,{direction:"row",alignItems:"center",spacing:2,children:[Object(w.jsx)(E.a,{sx:{width:120},children:Object(w.jsx)(Q.a,{color:"primary","aria-label":"set weight",component:"span",onClick:r,children:Object(w.jsx)(U.a,{})})}),Object(w.jsx)(E.a,{sx:{width:80},children:Object(w.jsx)(D.a,{id:"input-slider",gutterBottom:!0,align:"right",children:"weight"})}),Object(w.jsx)(E.a,{sx:{width:100},children:Object(w.jsx)(I.a,{defaultValue:0,min:0,max:1,step:.01,size:"small",value:t,onChange:function(e,t){n(t)},"aria-label":"weight",valueLabelDisplay:"auto"})})]})}function $(e){var t=e.touchValue,n=e.setTouchValue,r=e.handleUpdate;return Object(w.jsxs)(R.a,{direction:"row",alignItems:"center",spacing:2,children:[Object(w.jsxs)(E.a,{sx:{width:120},children:[Object(w.jsx)(Q.a,{color:"primary","aria-label":"increase weight on selection",component:"span",onClick:function(e){return r(e,t)},children:Object(w.jsx)(q.a,{})}),Object(w.jsx)(Q.a,{color:"primary","aria-label":"decrease weight on selection",component:"span",onClick:function(e){return r(e,-t)},children:Object(w.jsx)(K.a,{})})]}),Object(w.jsx)(E.a,{sx:{width:80},children:Object(w.jsx)(D.a,{id:"input-slider",gutterBottom:!0,align:"right",children:"increment"})}),Object(w.jsx)(E.a,{sx:{width:100},children:Object(w.jsx)(I.a,{defaultValue:0,min:0,max:1,step:.01,size:"small",value:t,onChange:function(e,t){n(t)},"aria-label":"weight increment",valueLabelDisplay:"auto"})})]})}function ee(e){var t=e.data;return Object(w.jsxs)("div",{className:"popover",children:[Object(w.jsxs)(D.a,{component:"div",children:["Current data and weights in the ",Object(w.jsx)("code",{children:"TextHeat"})," box"]}),Object(w.jsx)("code",{children:JSON.stringify(t)})]})}function te(e){var t=e.target,n=Object(r.useState)("paint"),a=Object(o.a)(n,2),c=a[0],i=a[1],s=Object(r.useState)(1),l=Object(o.a)(s,2),u=l[0],h=l[1],j=Object(r.useState)(.25),d=Object(o.a)(j,2),f=d[0],b=d[1],p=Object(r.useState)(null),x=Object(o.a)(p,2),m=x[0],O=x[1],g=Object(r.useState)(null),v=Object(o.a)(g,2),y=v[0],C=v[1],T=Boolean(m);return Object(w.jsxs)(P.a,{container:!0,direction:"row",justify:"space-between",children:[Object(w.jsx)(P.a,{item:!0,xs:11,children:Object(w.jsxs)(R.a,{className:"toolbar",direction:"row",spacing:2,alignItems:"center",children:[Object(w.jsxs)(J.a,{value:c,size:"small",exclusive:!0,onChange:function(e,t){null!==t&&i(t)},"aria-label":"mode for adjusting textheat weights",children:[Object(w.jsx)(B.a,{value:"paint",onClick:function(e){return i("paint")},children:"Paint"}),Object(w.jsx)(B.a,{value:"touch-up",onClick:function(e){return i("touch-up")},children:"Touch-up"})]}),"paint"===c?Object(w.jsx)(Z,{paintValue:u,setPaintValue:h,handlePaint:function(e){e.preventDefault(),t.current.setWeight(u)}}):Object(w.jsx)($,{touchValue:f,setTouchValue:b,handleUpdate:function(e,n){e.preventDefault(),t.current.incrementWeight(n)}})]})}),Object(w.jsx)(P.a,{item:!0,xs:1,children:Object(w.jsxs)(R.a,{className:"toolbar",direction:"row",alignItems:"center",justifyContent:"flex-end",children:[Object(w.jsx)(Q.a,{color:"primary","aria-label":"show data",component:"span",onClick:function(e){C(t.current.getContent()),O(e.currentTarget)},children:Object(w.jsx)(Y.a,{})}),Object(w.jsx)(W.a,{open:T,anchorEl:m,onClose:function(){O(null)},anchorOrigin:{vertical:"bottom",horizontal:"right"},children:Object(w.jsx)(ee,{data:y})})]})})]})}function ne(){var e=a.a.createRef();return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(te,{target:e}),Object(w.jsx)(g,{ref:e,className:"textheat",value:v.a,editable:!1})]})}function re(){var e=a.a.createRef();return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(te,{target:e}),Object(w.jsx)(g,{ref:e,className:"textheat",value:v.a,editable:!0})]})}function ae(){return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsxs)("h1",{children:["Examples with ",Object(w.jsx)("code",{children:"TextHeat"})," components"]}),Object(w.jsxs)("p",{children:[Object(w.jsx)("code",{children:"TextHeat"})," components display text and associated weights in a heatmap."]})]})}function ce(e){var t=e.filenames,n=t.map((function(e){var t="https://github.com/tkonopka/textheat/blob/main/examples/src/"+e;return Object(w.jsx)("a",{className:"link_code",href:t,target:"_blank",rel:"noreferrer",children:e},e)}));return Object(w.jsxs)("p",{className:"link_code",children:["Source code:\xa0 ",n]})}function ie(){return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)("h2",{children:"Static"}),Object(w.jsx)("p",{children:"Static heatmaps communicate the varying weights associated with parts of a body of text."}),Object(w.jsx)("p",{children:"The default color scale uses shades of red, but the colors can be adjusted."}),Object(w.jsx)(V,{}),Object(w.jsx)(A,{}),Object(w.jsx)(H,{}),Object(w.jsx)(ce,{filenames:["example1.js"]})]})}function se(){return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)("h2",{children:"Adjustable weights"}),Object(w.jsx)("p",{children:"The component can adjust the weights (colors) for text fragments. This functionality can be used to create annotations."}),Object(w.jsx)("p",{children:"Below, select some text in the box. Then use the paint tool in the toolbar to give the selection a certain weight (color). Or use the touch-up tool to increase or decrease the weight by a small amount."}),Object(w.jsx)(ne,{}),Object(w.jsxs)("p",{children:["(Note that the toolbar is not part of the component. The above implementation uses ",Object(w.jsx)("a",{href:"https://www.mui.com",children:"MUI"})," components.)"]}),Object(w.jsx)(ce,{filenames:["example2.js"]})]})}function oe(){return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)("h2",{children:"Adjustable and editable"}),Object(w.jsx)("p",{children:"The component can be editable. Click inside the box and start typing new text."}),Object(w.jsx)(re,{}),Object(w.jsx)(ce,{filenames:["example3.js"]})]})}function le(){return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)("h2",{children:"Api"}),Object(w.jsxs)("p",{children:["Consider the example text '",Object(w.jsx)("i",{children:"Lorem ipsum dolor ..."}),"'. If there are no weights associated with the text, then a basic ",Object(w.jsx)("code",{children:"TextHeat"})," component can be constructed by setting only the ",Object(w.jsx)("code",{children:"value"})," prop."]}),Object(w.jsx)("pre",{children:Object(w.jsx)("code",{children:"<TextHeat value='Lorem ipsum dolor ...' />"})}),Object(w.jsxs)("p",{children:["Suppose we have weights that associate a value of 0.2 with the words '",Object(w.jsx)("i",{children:"Lorem"}),"' and '",Object(w.jsx)("i",{children:"dolor ..."}),"', but a higher value of 0.4 to the word '",Object(w.jsx)("i",{children:"ipsum"}),"'. This data should be prepared into segments and then provided as ",Object(w.jsx)("code",{children:"value"})," and ",Object(w.jsx)("code",{children:"weight"})," props."]}),Object(w.jsx)("pre",{children:Object(w.jsx)("code",{children:"<TextHeat\n    value=['Lorem ', 'ipsum ', 'dolor ...']\n    weight=[0.2, 0.4, 0.2]\n/>"})}),Object(w.jsx)("p",{children:"To adjust the content of the box, it must be created with a React ref object."}),Object(w.jsx)("pre",{children:Object(w.jsxs)("code",{children:["// before rendering, create a ref object\nconst ref = React.createRef()\n\n","// pass the reference to TextHeat \n<TextHeat\n    ref={ref}\n    value='Lorem impsum dolor ...'\n/>\n","\n// fetch text and weights from the component\nref.current.getContent()\n// increment weight on a selected/highlighted section\nref.current.incrementWeight(0.2)\n// set weight on selected/highlighted section to a value\nref.current.setWeight(0.5)"]})}),Object(w.jsx)("p",{children:"The above snippets only highlight some of the key steps. See the source code of the examples for further details."}),Object(w.jsx)(ce,{filenames:["example1.js","example2.js","example3.js"]})]})}var ue=function(){return Object(w.jsxs)(s.a,{maxWidth:"md",className:"App",children:[Object(w.jsx)(ae,{}),Object(w.jsx)(ie,{}),Object(w.jsx)(se,{}),Object(w.jsx)(oe,{}),Object(w.jsx)(le,{})]})},he=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,145)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),r(e),a(e),c(e),i(e)}))};i.a.render(Object(w.jsx)(a.a.StrictMode,{children:Object(w.jsx)(ue,{})}),document.getElementById("root")),he()}},[[95,1,2]]]);
//# sourceMappingURL=main.15724251.chunk.js.map