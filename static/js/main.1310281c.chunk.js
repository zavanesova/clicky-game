(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(e){e.exports=[{id:1,image:"https://static.tvtropes.org/pmwiki/pub/images/spongebob_character.jpg",clicked:!1},{id:2,image:"https://static.comicvine.com/uploads/scale_medium/11132/111325030/5880117-spongebob+squarepants+mrs+puff.jpg",clicked:!1},{id:3,image:"https://upload.wikimedia.org/wikipedia/en/thumb/a/a0/Sandy_Cheeks.svg/1200px-Sandy_Cheeks.svg.png",clicked:!1},{id:4,image:"https://cdn-images-1.medium.com/max/1200/1*DCo5LIbgIWrFIOfl3UAMpA.png",clicked:!1},{id:5,image:"http://2.bp.blogspot.com/-h_qtvsHYFJw/U3mnYInSgCI/AAAAAAAAff8/f3Xu2hKp558/s1600/Plankton.png",clicked:!1},{id:6,image:"https://pbs.twimg.com/profile_images/550769487369089024/x6bBe6rd_400x400.jpeg",clicked:!1},{id:7,image:"https://ih1.redbubble.net/image.497008950.1161/flat,1000x1000,075,f.u5.jpg",clicked:!1},{id:8,image:"https://nick-intl.mtvnimages.com/uri/mgid:file:gsp:kids-assets:/nick/properties/spongebob-squarepants/characters/gary-character-web-desktop.png?height=0&width=480&matte=true&crop=false",clicked:!1},{id:9,image:"https://costumewall.com/wp-content/uploads/2017/10/mr-krabs.jpg",clicked:!1},{id:10,image:"https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/SpongeBob_SquarePants_character.svg/220px-SpongeBob_SquarePants_character.svg.png",clicked:!1},{id:11,image:"https://nick-intl.mtvnimages.com/uri/mgid:file:gsp:kids-assets:/nick/properties/spongebob-squarepants/characters/plankton-character-web-desktop.png?height=0&width=480&matte=true&crop=false",clicked:!1},{id:12,image:"https://hellogiggles.com/wp-content/uploads/2015/03/04/Squidward_Design_2.jpg",clicked:!1}]},,,,,,,,function(e,t,a){e.exports=a(19)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var i=a(0),c=a.n(i),n=a(3),s=a.n(n),o=(a(15),a(4)),r=a(5),l=a(7),m=a(6),p=a(8);a(16),a(17);var d=function(e){return c.a.createElement("div",{className:"card",onClick:function(){return e.evaluateClick(e.id)}},c.a.createElement("div",{className:"img-container"},c.a.createElement("img",{alt:e.id,src:e.image})))};a(18);var u=function(e){return c.a.createElement("div",null,c.a.createElement("h1",null,"Clicky Game"),c.a.createElement("h1",null,"Score: ",e.score," Top Score: ",e.topScore))},g=a(1),h=function(e){function t(){var e,a;Object(o.a)(this,t);for(var i=arguments.length,c=new Array(i),n=0;n<i;n++)c[n]=arguments[n];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).state={pics:g,score:0,topScore:0},a.shufflePics=function(){var e=a.state.pics.sort(function(){return Math.random()-.5});a.setState({imgs:e}),a.forceUpdate()},a.evaluateClick=function(e){a.state.pics.find(function(t,i){return t.id===e&&(!1===g[i].clicked?(g[i].clicked=!0,a.setState({score:a.state.score+1},function(){console.log(this.state.score)}),a.shufflePics()):a.endGame()),t})},a}return Object(p.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){this.shufflePics()}},{key:"endGame",value:function(){this.state.score>this.state.topScore&&this.setState({topScore:this.state.score}),this.state.pics.forEach(function(e){e.clicked=!1}),this.setState({score:0})}},{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"container text-center"},c.a.createElement(u,{score:this.state.score,topScore:this.state.topScore}),c.a.createElement("div",{className:"jumbotron jumbotron-fluid text-center"},c.a.createElement("div",{className:"container"},c.a.createElement("h1",{className:"display-4"},"Clicky Game"),c.a.createElement("p",{className:"lead"},"Click on an image to earn points, but don't click the same image twice!"))),this.state.pics.map(function(t){return c.a.createElement(d,{evaluateClick:e.evaluateClick,id:t.id,key:t.id,image:t.image})}))}}]),t}(i.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(c.a.createElement(h,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[9,1,2]]]);
//# sourceMappingURL=main.1310281c.chunk.js.map