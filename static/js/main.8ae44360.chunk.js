(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(e){e.exports=[{id:1,url:"https://cdn.pixabay.com/photo/2018/03/29/15/44/tiger-3272536__340.jpg"},{id:2,url:"https://cdn.pixabay.com/photo/2018/04/08/14/33/horse-3301385__340.jpg"},{id:3,url:"https://cdn.pixabay.com/photo/2018/04/11/20/46/nature-3311733__340.jpg"},{id:4,url:"https://cdn.pixabay.com/photo/2018/04/06/13/05/horse-3295789__340.jpg"},{id:5,url:"https://cdn.pixabay.com/photo/2018/04/09/21/32/cute-3305626__340.jpg"},{id:6,url:"https://cdn.pixabay.com/photo/2018/04/02/13/03/cat-3283836__340.jpg"},{id:7,url:"https://cdn.pixabay.com/photo/2018/04/04/15/52/wildlife-3290163__340.jpg"},{id:8,url:"https://cdn.pixabay.com/photo/2018/11/01/00/55/animal-3786987_1280.jpg"},{id:9,url:"https://cdn.pixabay.com/photo/2018/04/07/17/36/bird-3299056__340.jpg"},{id:10,url:"https://cdn.pixabay.com/photo/2018/04/01/10/38/cat-3280559__340.jpg"},{id:11,url:"https://cdn.pixabay.com/photo/2018/03/23/18/21/cute-3254471__340.jpg"},{id:12,url:"https://cdn.pixabay.com/photo/2018/04/05/05/53/highland-beef-3291948__340.jpg"}]},,,,,,,,function(e,t,a){e.exports=a(19)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var o=a(0),n=a.n(o),c=a(3),r=a.n(c),i=(a(15),a(4)),l=a(5),s=a(7),p=a(6),d=a(8),h=(a(16),function(e){return n.a.createElement("div",{className:"wrapper"},e.children)}),m=(a(17),function(e){return n.a.createElement("div",{className:"image"},n.a.createElement("img",{id:e.id,src:e.url,onClick:function(){return e.handleImageChange(e.id)},alt:"clicky game"}))}),u=(a(18),a(1)),g=function(e){function t(){var e,a;Object(i.a)(this,t);for(var o=arguments.length,n=new Array(o),c=0;c<o;c++)n[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(n)))).state={images:u,imageClickedId:[],score:0,totalScore:0,topScore:0},a.handleImageChange=function(e){var t=a.state.imageClickedId;if(t.includes(e))return a.state.score<a.state.totalScore&&(a.state.topScore=a.state.totalScore),void a.setState({imageClickedId:[],score:0,totalScore:a.state.topScore});if(t.push(e),12!==t.length){a.state.score>=a.state.totalScore&&(a.state.topScore=a.state.score+1),a.setState({images:u,imageClickedId:t,score:t.length,totalScore:a.state.topScore});for(var o=u.length-1;o>0;o--){var n=Math.floor(Math.random()*o+0),c=[u[o],u[n]];u[n]=c[0],u[o]=c[1]}}else a.setState({score:12,totalScore:12,imageClickedId:[]})},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"App"},n.a.createElement("header",{className:"App-header"},n.a.createElement("h1",{className:"App-logo"},"Clicky Game"),n.a.createElement("p",{className:"App-title"},"Click an image to begin!"),n.a.createElement("h1",null," Score: ",this.state.score," ",n.a.createElement("span",null," | ")," Top Score: ",this.state.totalScore)),n.a.createElement(h,null,this.state.images.map(function(t){return n.a.createElement(m,{handleImageChange:e.handleImageChange,id:t.id,url:t.url})})),n.a.createElement("hr",null),n.a.createElement("p",null,"Click on an image to earn points, but don't click on any more than once!"))}}]),t}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(n.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[9,1,2]]]);
//# sourceMappingURL=main.8ae44360.chunk.js.map