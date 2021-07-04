(this["webpackJsonpvideo-loop-tool"]=this["webpackJsonpvideo-loop-tool"]||[]).push([[0],{45:function(e,t,o){},46:function(e,t,o){},55:function(e,t,o){"use strict";o.r(t);var i=o(0),n=o.n(i),d=o(8),s=o.n(d),r=(o(45),o(46),o(11)),c=o.n(r),a=o(87),l=o(88),h=o(4);function u(){var e=void 0,t=void 0,o=void 0,i=void 0,n=void 0,d=new URLSearchParams(window.location.search),s=d.get("v"),r=d.get("s"),u=d.get("e");function p(){if(d.set("v",s),e)return e.loadVideoById(s),void setTimeout((function(){a(0,e.getDuration()),e.seekTo(i,!0)}),500);function a(s,r){var a=c()("#slider-range").slider({range:!0,min:0,max:e.getDuration(),values:[s,r],slide:function(s,r){if(i=r.values[0],n=r.values[1],t&&(t[0].innerHTML=h(i,!0,!0),d.set("s",i)),o&&(o[0].innerHTML=h(n,!0),d.set("e",n)),history.pushState){var c=window.location.protocol+"//"+window.location.host+window.location.pathname+"?"+d.toString();window.history.pushState({path:c},"",c)}(e.getCurrentTime()<i||e.getCurrentTime()>n)&&e.seekTo(i,!0)}});if(c()(a[0].children[1]).empty(),c()(a[0].children[2]).empty(),t=c()(a[0].children[1]).prepend(h(s,!0,!0)),o=c()(a[0].children[2]).prepend(h(r,!0)),i=s,n=r,d.set("s",i),d.set("e",n),history.pushState){var l=window.location.protocol+"//"+window.location.host+window.location.pathname+"?"+d.toString();window.history.pushState({path:l},"",l)}function h(e,t,o){return(t=void 0!=t)&&(e=new Date(1e3*e).toISOString().substr(11,8)),'<span style="position: absolute !important; bottom: -50px; left: '+(o?"-35px":"35px")+'; color: #000 !important;">'+e+"</span>"}}function l(t){e=new window.YT.Player("player",{playerVars:{modestbranding:1,rel:0,showinfo:0,autoplay:0,mute:0},height:360,width:640,videoId:t,events:{onReady:function(t){var o=e.getDuration();a(r||0,u||o),e.seekTo(i,!0)},onStateChange:function(t){if(t.data==window.YT.PlayerState.PLAYING){e&&e.getCurrentTime()<i&&e.seekTo(i,!0);var o=setInterval((function(){e.getCurrentTime()>=n&&e.seekTo(i,!0)}),1e3)}else t.data==window.YT.PlayerState.PAUSED?o&&clearTimeout(o):t.data==window.YT.PlayerState.ENDED&&(o&&clearTimeout(o),e.seekTo(i,!0))}}})}window.YT?l(s):(window.onYouTubePlayerAPIReady=function(){l(s)},c.a.getScript("https://www.youtube.com/player_api"))}return s&&p(),Object(h.jsxs)("div",{style:{textAlign:"left",width:"640px",margin:"0 auto"},children:[Object(h.jsx)("h1",{children:"Video Loop Tool"}),Object(h.jsx)("div",{style:{display:"block"},children:Object(h.jsx)("div",{id:"player"})}),Object(h.jsx)("div",{style:{display:"block"}}),Object(h.jsx)("div",{style:{display:"block"},children:Object(h.jsx)("div",{id:"slider-range",style:{width:"640px",margin:"12px auto"}})}),Object(h.jsx)("div",{style:{display:"block",textAlign:"left",paddingTop:"25px"},children:Object(h.jsxs)("div",{children:[Object(h.jsx)("h2",{children:"Instructions"}),Object(h.jsx)(a.a,{id:"standard-basic",label:"YouTube VideoID",defaultValue:s,style:{width:"600px"},onChange:function(e){s=e.target.value}.bind(this)}),Object(h.jsx)(l.a,{variant:"contained",color:"primary",onClick:function(){p()},style:{marginTop:"12px"},children:"Setup"}),Object(h.jsx)("h3",{children:"Overview"}),Object(h.jsx)("p",{children:"You can use this tool to loop parts of a youtube video. In the URL above you can specify the video (v), start time (s), and end time (e) in the query string:"}),Object(h.jsxs)("p",{children:["https://joemoceri.github.io/video-loop-tool?",Object(h.jsx)("strong",{children:"v"}),"=",Object(h.jsx)("strong",{children:"{youtubeVideoId}"}),"&",Object(h.jsx)("strong",{children:"s"}),"=",Object(h.jsx)("strong",{children:"{startTimeInSeconds}"}),"&",Object(h.jsx)("strong",{children:"e"}),"=",Object(h.jsx)("strong",{children:"{endTimeInSeconds}"})]}),Object(h.jsx)("p",{children:"The URL will update as you update the video id and slider."}),Object(h.jsx)("h3",{children:"Method 1"}),Object(h.jsx)("p",{children:"Say you have a youtube url like this (where videoId is the youtube video id)"}),Object(h.jsx)("p",{children:Object(h.jsx)("strong",{children:"https://www.youtube.com/watch?v=videoId"})}),Object(h.jsx)("p",{children:"If you change it to this"}),Object(h.jsx)("p",{children:Object(h.jsx)("strong",{children:"https://joemoceri.github.io/video-loop-tool?v=videoId"})}),Object(h.jsx)("p",{children:"By replacing"}),Object(h.jsxs)("p",{children:[Object(h.jsx)("strong",{children:"https://www.youtube.com/watch"})," with ",Object(h.jsx)("strong",{children:"https://joemoceri.github.io/video-loop-tool"})]}),Object(h.jsx)("p",{children:"you can add additional looping capabilities to any youtube video."}),Object(h.jsx)("h3",{children:"Method 2"}),Object(h.jsx)("p",{children:"You can also grab the video id and put it into the field above. Run setup first when changing the video id, then hit play on the youtube video. You can change the range on the slider below to loop a specific part of the video. Then hit play."})]})})]})}o(48);var p=function(){return Object(h.jsx)(u,{})},j=function(e){e&&e instanceof Function&&o.e(3).then(o.bind(null,90)).then((function(t){var o=t.getCLS,i=t.getFID,n=t.getFCP,d=t.getLCP,s=t.getTTFB;o(e),i(e),n(e),d(e),s(e)}))};s.a.render(Object(h.jsx)(n.a.StrictMode,{children:Object(h.jsx)(p,{})}),document.getElementById("root")),j()}},[[55,1,2]]]);
//# sourceMappingURL=main.e6a274bc.chunk.js.map