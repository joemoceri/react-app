(this["webpackJsonpvideo-loop-tool"]=this["webpackJsonpvideo-loop-tool"]||[]).push([[6],{119:function(e,t,i){},149:function(e,t,i){"use strict";i.r(t),i.d(t,"default",(function(){return w}));var a=i(100),l=i(101),r=i(109),s=i(107),n=i(96),o=i.n(n),d=i(0),h=i(158),u=i(10),c=i(93),p=i(95),y=i(92),m=i(156),v=i(159),g=i(94),f=i(157),j=i(118),x=i.n(j),T=(i(119),i(3)),b=Object(u.a)(h.a)((function(e){e.theme;return{"& .MuiSlider-thumb":{height:36,width:36},"& .MuiSlider-rail":{height:12},"& .MuiSlider-track":{height:14}}})),w=function(e){Object(r.a)(i,e);var t=Object(s.a)(i);function i(e){var l;Object(a.a)(this,i),(l=t.call(this,e)).state=void 0,l.player=void 0,l.leftHandle=void 0,l.rightHandle=void 0,l.leftValue=void 0,l.rightValue=void 0,l.loopTimeout=void 0,l.urlParameters=void 0,l.queryStartTime=void 0,l.queryEndTime=void 0,l.playlists=void 0,l.urlParameters=new URLSearchParams(window.location.search);var r=localStorage.getItem("Playlists");l.playlists=null!==r?JSON.parse(r):[];var s=void 0;return l.playlists.length>0&&(s=0),l.state={videoId:l.urlParameters.get("v"),selectedPlaylist:s,sliderValues:[0,0]},l.queryStartTime=l.urlParameters.get("s"),l.queryEndTime=l.urlParameters.get("e"),Object(n.isNumeric)(l.queryStartTime)||(l.queryStartTime=0),Object(n.isNumeric)(l.queryEndTime)||(l.queryEndTime=0),l.state&&l.state.videoId&&l.startLoop(),l}return Object(l.a)(i,[{key:"handleChange",value:function(e){this.setState({videoId:e.target.value})}},{key:"startLoop",value:function(){var e=this;if(this.urlParameters.set("v",this.state.videoId),this.player)return this.player.loadVideoById(this.state.videoId),this.loopTimeout&&clearTimeout(this.loopTimeout),void setTimeout((function(){var t=e.player.getDuration(),i=e.queryStartTime||0,a=e.queryEndTime||t;e.createSlider(i,a),e.player.seekTo(e.leftValue,!0)}),500);var t=window;t.YT?this.loadPlayer(this.state.videoId):(t.onYouTubePlayerAPIReady=function(){e.loadPlayer(e.state.videoId)},o.a.getScript("https://www.youtube.com/player_api"))}},{key:"createSlider",value:function(e,t){var i=o()(".videoSlider")[0],a=o()(i.children[i.children.length-2]),l=o()(i.children[i.children.length-1]);a.children("#videoSliderTime").length>0&&a.children("#videoSliderTime").remove(),l.children("#videoSliderTime").length>0&&l.children("#videoSliderTime").remove(),e=e<0?0:e,t=t>this.player.getDuration()?this.player.getDuration():t,this.leftHandle=a.prepend(this.wrap(e,!0,!0)),this.rightHandle=l.prepend(this.wrap(t,!0,!1)),this.leftValue=e,this.rightValue=t,this.urlParameters.set("s",this.leftValue),this.urlParameters.set("e",this.rightValue);var r=window.location.protocol+"//"+window.location.host+window.location.pathname+"?"+this.urlParameters.toString();window.history.pushState({path:r},"",r),this.setState({sliderValues:[this.leftValue,this.rightValue]})}},{key:"sliderMoved",value:function(e,t){this.leftValue=e,this.rightValue=t,this.leftHandle&&(this.leftHandle[0].children[0].textContent=new Date(1e3*this.leftValue).toISOString().substr(11,8),this.urlParameters.set("s",this.leftValue)),this.rightHandle&&(this.rightHandle[0].children[0].textContent=new Date(1e3*this.rightValue).toISOString().substr(11,8),this.urlParameters.set("e",this.rightValue));var i=window.location.protocol+"//"+window.location.host+window.location.pathname+"?"+this.urlParameters.toString();window.history.pushState({path:i},"",i),(this.player.getCurrentTime()<this.leftValue||this.player.getCurrentTime()>this.rightValue)&&this.player.seekTo(this.leftValue,!0)}},{key:"wrap",value:function(e,t,i){var a=e.toString();t&&(a=new Date(1e3*e).toISOString().substr(11,8));var l=i?"-13px":"57px";return x.a.sanitize('<span id="videoSliderTime" style="color: #000 !important; font-family: Roboto, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 400; position: absolute !important; bottom: -50px; left: '+l+';">'+a+"</span>")}},{key:"loadPlayer",value:function(e){var t=this;this.player=new window.YT.Player("player",{playerVars:{modestbranding:1,rel:0,showinfo:0,autoplay:0,mute:0},height:360,width:"100%",videoId:e,events:{onReady:function(e){var i=t.player.getDuration(),a=t.queryStartTime||0,l=t.queryEndTime||i;t.createSlider(a,l),t.player.seekTo(t.leftValue,!0)},onStateChange:function(e){e.data==window.YT.PlayerState.PLAYING?(t.player&&t.player.getCurrentTime()<t.leftValue&&t.player.seekTo(t.leftValue,!0),t.loopTimeout=setInterval((function(){t.player.getCurrentTime()>=t.rightValue&&t.player.seekTo(t.leftValue,!0)}),1e3)):e.data==window.YT.PlayerState.PAUSED?t.loopTimeout&&clearTimeout(t.loopTimeout):e.data==window.YT.PlayerState.ENDED&&(t.loopTimeout&&clearTimeout(t.loopTimeout),t.player.seekTo(t.leftValue,!0))}}})}},{key:"selectVideo",value:function(e){var t=this;this.queryStartTime=e.StartTime,this.queryEndTime=e.EndTime,this.setState({videoId:e.VideoId},(function(){t.startLoop()}))}},{key:"handlePlaylistDropdownChange",value:function(e){this.setState({selectedPlaylist:parseInt(e.target.value)})}},{key:"handleSliderChange",value:function(e,t){var i=t;this.sliderMoved(i[0],i[1]),this.setState({sliderValues:i})}},{key:"render",value:function(){var e=this,t=[];return void 0!==this.state.selectedPlaylist&&(t=this.playlists[this.state.selectedPlaylist].Videos.map((function(t,i){return Object(T.jsx)(c.a,{variant:"outlined",style:{margin:"12px",padding:"0 !important"},children:Object(T.jsx)(p.a,{style:{paddingBottom:"0 !important"},children:Object(T.jsxs)("div",{style:{display:"flex",flexWrap:"wrap"},children:[Object(T.jsx)("img",{src:"https://img.youtube.com/vi/"+t.VideoId+"/hqdefault.jpg",style:{width:"80x",height:"45px",marginRight:"12px",paddingBottom:"12px"}}),Object(T.jsx)("div",{style:{alignSelf:"center"},children:Object(T.jsx)(y.a,{variant:"contained",color:"primary",onClick:function(){e.selectVideo(t)},style:{marginRight:"12px"},children:"Select"})},t.Id),Object(T.jsxs)("p",{children:[t.Name," (",t.StartTime,"s - ",t.EndTime,"s)"]})]},t.Id)},t.Id)},t.Id)}))),Object(T.jsx)(c.a,{variant:"outlined",style:{margin:"12px",padding:"0 !important",minHeight:"950px"},children:Object(T.jsx)(p.a,{style:{padding:"0 !important"},children:Object(T.jsxs)("div",{style:{textAlign:"left",margin:"0 auto",display:"flex"},className:"outerContainer",children:[Object(T.jsx)("div",{className:"playlistsContainer",children:Object(T.jsx)("div",{style:{display:"block",textAlign:"left"},children:Object(T.jsxs)("div",{children:[Object(T.jsx)("h1",{children:"Playlists"}),Object(T.jsx)(m.a,{label:"Playlists",displayEmpty:!0,renderValue:void 0!==this.state.selectedPlaylist?function(){return e.playlists[e.state.selectedPlaylist].Name}:function(){return"Playlists"},defaultValue:"Playlists",onChange:function(t){return e.handlePlaylistDropdownChange(t)},style:{minWidth:"200px"},children:this.playlists.map((function(e,t){return Object(T.jsxs)(v.a,{value:t,children:["#",e.Id,": ",e.Name]},e.Id)}))}),Object(T.jsx)(g.a,{style:{maxHeight:"500px",overflow:"auto",marginTop:"12px"},children:t.map((function(e){return e}))})]})})}),Object(T.jsxs)("div",{style:{width:"100%",marginLeft:"42px",marginRight:"96px"},children:[Object(T.jsx)("h1",{children:"Video Loop Tool"}),Object(T.jsxs)("div",{style:{display:"flex",marginBottom:"12px"},children:[Object(T.jsx)(y.a,{variant:"contained",color:"primary",onClick:function(){e.startLoop()},style:{marginTop:"12px",marginRight:"12px"},children:"Setup"}),Object(T.jsx)(f.a,{id:"standard-basic",label:"YouTube VideoID",value:this.state&&this.state.videoId||"",style:{width:"200px"},onChange:function(t){return e.handleChange(t)}})]}),Object(T.jsxs)("div",{className:"auto-resizable-iframe",children:[Object(T.jsx)("div",{className:"playerWrapper",children:Object(T.jsx)("div",{id:"player"})}),Object(T.jsx)("div",{style:{display:"flex",marginTop:"36px",maxWidth:"100%"},children:Object(T.jsx)(b,{value:this.state.sliderValues,valueLabelFormat:function(e){return e+"s"},onChange:function(t,i){return e.handleSliderChange(t,i)},valueLabelDisplay:"auto",min:0,max:this.player?parseInt(this.player.getDuration()):0,className:"videoSlider"})})]})]})]})})})}}]),i}(d.Component)}}]);
//# sourceMappingURL=6.8649db19.chunk.js.map