(window["webpackJsonpwarcraft-clicky-game"]=window["webpackJsonpwarcraft-clicky-game"]||[]).push([[0],[,,,,,,,function(e,a,t){e.exports=t.p+"static/media/img01.784d0390.png"},function(e,a,t){e.exports=t.p+"static/media/img02.9d90b427.png"},function(e,a,t){e.exports=t.p+"static/media/img03.d35b8f38.png"},function(e,a,t){e.exports=t.p+"static/media/img04.fb02f09f.png"},function(e,a,t){e.exports=t.p+"static/media/img05.8c4d3bdc.png"},function(e,a,t){e.exports=t.p+"static/media/img06.bce98df7.png"},function(e,a,t){e.exports=t.p+"static/media/img07.b43c52fd.png"},function(e,a,t){e.exports=t.p+"static/media/img08.081dfebc.png"},function(e,a,t){e.exports=t.p+"static/media/img09.333aa586.png"},function(e,a,t){e.exports=t.p+"static/media/img10.e9448011.png"},function(e,a,t){e.exports=t.p+"static/media/img11.88b78288.png"},function(e,a,t){e.exports=t.p+"static/media/img12.3756a2c8.png"},function(e,a,t){e.exports=t.p+"static/media/img13.52474bd3.png"},function(e,a,t){e.exports=t.p+"static/media/img14.30f8ebec.png"},,,function(e,a,t){e.exports=t(30)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(3),s=t.n(c),i=t(4),o=t(5),l=t(21),m=t(6),p=t(1),g=t(22),d={custom:{fontFamily:"Merienda",backgroundColor:"#150704"}};var u=function(){return r.a.createElement("div",{style:d.custom},r.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Merienda&display=swap",rel:"stylesheet"}),r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark"},r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",href:"https://github.com/AdamWGrise/warcraft-clicky-game",target:"_blank"},"Code (GitHub)")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link",href:"https://adamwgrise.github.io/Portfolio/",target:"_blank"},"About the Maker"))))))},f=(t(28),{scorebar:{minHeight:"160px",backgroundImage:"url(./assets/rag.png)",color:"rgba(255,255,255,0.7",textAlign:"center"},h1:{margin:"0",paddingTop:"40px",textAlign:"center",fontSize:"3rem",fontFamily:"Merienda"},barText:{paddingTop:"45px",textAlign:"center",color:"rgba(255,255,255,0.5)",fontSize:"1.3rem",fontFamily:"Merienda"}});var h=function(e){return r.a.createElement("header",{style:f.scorebar},r.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Merienda&display=swap",rel:"stylesheet"}),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-3"}),r.a.createElement("div",{className:"col-lg-4"},r.a.createElement("h1",{style:f.h1},"Warcraft Clicky"),r.a.createElement("p",{className:e.messageColor},e.messageText)),r.a.createElement("div",{className:"col-lg-2"},r.a.createElement("div",{style:f.barText},"Current Score: ",e.score," ",r.a.createElement("br",null),"Top Score: ",e.topScore)),r.a.createElement("div",{className:"col-lg-3"})))},b={charDiv:{border:"4px black solid",boxShadow:"0px 0px 7px #fff",margin:"10px",width:"11%",cursor:"pointer",overflow:"hidden"}},v=function(e){return r.a.createElement("img",{style:b.charDiv,src:e.name,alt:"",onClick:function(a){return e.clickEvent(a.target.src)}})},k={field:{backgroundImage:"url(./assets/bg.png)"}},x=function(e){return r.a.createElement("div",{style:k.field},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:e.shake?"container d-flex flex-wrap justify-content-center shake":"container d-flex flex-wrap justify-content-center"},e.chars.map(function(a,t){return r.a.createElement(v,{name:a,key:t,clickEvent:e.clickEvent})}))))},E=t(7),y=t.n(E),C=t(8),w=t.n(C),S=t(9),N=t.n(S),T=t(10),A=t.n(T),j=t(11),M=t.n(j),O=t(12),I=t.n(O),F=t(13),P=t.n(F),z=t(14),D=t.n(z),G=t(15),H=t.n(G),J=t(16),W=t.n(J),_=t(17),B=t.n(_),q=t(18),K=t.n(q),L=t(19),Q=t.n(L),R=t(20),U=t.n(R),V=[y.a,w.a,N.a,A.a,M.a,I.a,P.a,D.a,H.a,W.a,B.a,K.a,Q.a,U.a],X=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(l.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={score:0,topScore:0,messageColor:"",messageText:"Click a picture to begin. Click a new picture each time to reach a high score!",charsArr:V,wasClicked:[],shake:!1},t.clickEvent=t.checkClicked.bind(Object(p.a)(t)),t}return Object(g.a)(a,e),Object(o.a)(a,[{key:"shufflePics",value:function(e){for(var a,t,n=e.length;n;)t=Math.floor(Math.random()*n--),a=e[n],e[n]=e[t],e[t]=a;return e}},{key:"checkClicked",value:function(e){var a=this,t=this.state.wasClicked.slice(),n=this.shufflePics(this.state.charsArr),r=this.state.score,c=this.state.topScore;if(this.state.wasClicked.includes(e)||(r===c?(r++,c++):r++,t.push(e)),this.state.wasClicked.includes(e)){return this.setState({score:0,topScore:c,messageColor:"#00ff00",messageText:"Incorrect!",allCharacters:n,wasClicked:[0],shake:!0})}return this.setState({score:r,topScore:c,messageColor:"correct",messageText:"Correct!",allCharacters:n,wasClicked:t,shake:!1}),setTimeout(function(){return a.setState({messageColor:""})},500)}},{key:"render",value:function(){var e=this.state;return r.a.createElement("div",null,r.a.createElement(u,null),r.a.createElement(h,{score:e.score,topScore:e.topScore,messageColor:e.messageColor,messageText:e.messageText}),r.a.createElement(x,{shake:e.shake,chars:e.charsArr,clickEvent:this.clickEvent}))}}]),a}(r.a.Component);t(29);s.a.render(r.a.createElement(X,null),document.getElementById("root"))}],[[23,1,2]]]);
//# sourceMappingURL=main.3081763d.chunk.js.map