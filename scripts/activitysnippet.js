this.ActivitySnippet=this.ActivitySnippet||{},this.ActivitySnippet.ActivitySnippetTemplates=this.ActivitySnippet.ActivitySnippetTemplates||{},this.ActivitySnippet.ActivitySnippetTemplates["app/scripts/templates/FAVORITED.handlebars"]=Handlebars.template(function(a,b,c,d,e){function f(){return" activitysnippet-icon--disabled "}function g(){return" activitysnippet-icon--inactive"}function h(){return'\n        <svg viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><path d="M499.968 928.576q-14.508 0 -24.552 -10.044l-348.192 -335.916q-5.58 -4.464 -15.345 -14.508t-30.969 -36.549 -37.944 -54.405 -29.853 -67.518 -13.113 -77.004q0 -122.76 70.866 -191.952t195.858 -69.192q34.596 0 70.587 11.997t66.96 32.364 53.289 38.223 42.408 37.944q20.088 -20.088 42.408 -37.944t53.289 -38.223 66.96 -32.364 70.587 -11.997q124.992 0 195.858 69.192t70.866 191.952q0 123.318 -127.782 251.1l-347.634 334.8q-10.044 10.044 -24.552 10.044z"/></svg>\n        '}function i(){return'\n        <svg viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><path d="M928.512 332.632q0 -45.198 -11.997 -79.794t-30.69 -54.963 -45.477 -33.201 -52.452 -17.298 -54.684 -4.464 -62.496 14.229 -61.659 35.712 -48.267 40.176 -33.48 34.317q-10.044 12.276 -27.342 12.276t-27.342 -12.276q-13.392 -15.624 -33.48 -34.317t-48.267 -40.176 -61.659 -35.712 -62.496 -14.229 -54.684 4.464 -52.452 17.298 -45.477 33.201 -30.69 54.963 -11.997 79.794q0 93.744 104.346 198.09l324.198 312.48 323.64 -311.922q104.904 -104.904 104.904 -198.648zm71.424 0q0 123.318 -127.782 251.1l-347.634 334.8q-10.044 10.044 -24.552 10.044t-24.552 -10.044l-348.192 -335.916q-5.58 -4.464 -15.345 -14.508t-30.969 -36.549 -37.944 -54.405 -29.853 -67.518 -13.113 -77.004q0 -122.76 70.866 -191.952t195.858 -69.192q34.596 0 70.587 11.997t66.96 32.364 53.289 38.223 42.408 37.944q20.088 -20.088 42.408 -37.944t53.289 -38.223 66.96 -32.364 70.587 -11.997q124.992 0 195.858 69.192t70.866 191.952z"/></svg>\n        '}this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{};var j,k="",l=this,m="function",n=this.escapeExpression;return k+='<span class="activitysnippet-item">\n    <a class="activitysnippet-link"><i class="activitysnippet-icon ',j=c.unless.call(b,b&&b.active,{hash:{},inverse:l.noop,fn:l.program(1,f,e),data:e}),(j||0===j)&&(k+=j),k+=" ",j=c.unless.call(b,b&&b.state,{hash:{},inverse:l.noop,fn:l.program(3,g,e),data:e}),(j||0===j)&&(k+=j),k+='">\n        ',j=c["if"].call(b,b&&b.state,{hash:{},inverse:l.program(7,i,e),fn:l.program(5,h,e),data:e}),(j||0===j)&&(k+=j),k+='\n    </i></a><span class="activitysnippet-count">',(j=c.count)?j=j.call(b,{hash:{},data:e}):(j=b&&b.count,j=typeof j===m?j.call(b,{hash:{},data:e}):j),k+=n(j)+"</span>\n</span>\n"}),this.ActivitySnippet.ActivitySnippetTemplates["app/scripts/templates/WATCHED.handlebars"]=Handlebars.template(function(a,b,c,d,e){function f(){return" activitysnippet-icon--disabled "}function g(){return" activitysnippet-icon--inactive"}function h(){return'\n        <svg viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><path d="M928.512 535.744q-84.816 -131.688 -212.598 -196.974 34.038 58.032 34.038 125.55 0 103.23 -73.377 176.607t-176.607 73.377 -176.607 -73.377 -73.377 -176.607q0 -67.518 34.038 -125.55 -127.782 65.286 -212.598 196.974 74.214 114.39 186.093 182.187t242.451 67.797 242.451 -67.797 186.093 -182.187zm-401.76 -214.272q0 -11.16 -7.812 -18.972t-18.972 -7.812q-69.75 0 -119.691 49.941t-49.941 119.691q0 11.16 7.812 18.972t18.972 7.812 18.972 -7.812 7.812 -18.972q0 -47.988 34.038 -82.026t82.026 -34.038q11.16 0 18.972 -7.812t7.812 -18.972zm473.184 214.272q0 18.972 -11.16 38.502 -78.12 128.34 -210.087 205.623t-278.721 77.283 -278.721 -77.562 -210.087 -205.344q-11.16 -19.53 -11.16 -38.502t11.16 -38.502q78.12 -127.782 210.087 -205.344t278.721 -77.562 278.721 77.562 210.087 205.344q11.16 19.53 11.16 38.502z"/></svg>\n        '}function i(){return'\n        <svg viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><path d="M309.69 744.994l43.524 -78.678q-48.546 -35.154 -75.888 -88.722t-27.342 -113.274q0 -67.518 34.038 -125.55 -127.782 65.286 -212.598 196.974 93.186 143.964 238.266 209.25zm217.062 -423.522q0 -11.16 -7.812 -18.972t-18.972 -7.812q-69.75 0 -119.691 49.941t-49.941 119.691q0 11.16 7.812 18.972t18.972 7.812 18.972 -7.812 7.812 -18.972q0 -47.988 34.038 -82.026t82.026 -34.038q11.16 0 18.972 -7.812t7.812 -18.972zm202.554 -106.578q0 3.906 -.558 5.022 -58.59 104.904 -175.77 315.828t-176.328 316.386l-27.342 49.662q-5.58 8.928 -15.624 8.928 -6.696 0 -74.772 -39.06 -8.928 -5.58 -8.928 -15.624 0 -6.696 24.552 -48.546 -79.794 -36.27 -147.033 -96.534t-116.343 -136.71q-11.16 -17.298 -11.16 -38.502t11.16 -38.502q85.374 -131.13 212.04 -207.018t276.768 -75.888q49.662 0 100.44 9.486l30.132 -54.126q5.58 -8.928 15.624 -8.928 2.79 0 10.044 3.348t17.298 8.649 18.414 10.323 17.577 10.323 10.881 6.417q8.928 5.58 8.928 15.066zm20.646 249.426q0 77.562 -44.082 141.453t-116.622 91.791l156.24 -280.116q4.464 25.11 4.464 46.872zm249.984 71.424q0 19.53 -11.16 38.502 -21.762 35.712 -60.822 80.91 -83.7 95.976 -193.905 148.986t-234.081 53.01l41.292 -73.656q118.296 -10.044 219.015 -76.446t168.237 -171.306q-64.17 -99.882 -157.356 -164.052l35.154 -62.496q53.01 35.712 101.835 85.374t80.631 102.672q11.16 18.972 11.16 38.502z"/></svg>\n        '}this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,a.helpers),e=e||{};var j,k="",l=this,m="function",n=this.escapeExpression;return k+='<span class="activitysnippet-item">\n    <a class="activitysnippet-link"><i class="activitysnippet-icon ',j=c.unless.call(b,b&&b.active,{hash:{},inverse:l.noop,fn:l.program(1,f,e),data:e}),(j||0===j)&&(k+=j),k+=" ",j=c.unless.call(b,b&&b.state,{hash:{},inverse:l.noop,fn:l.program(3,g,e),data:e}),(j||0===j)&&(k+=j),k+='">\n        ',j=c["if"].call(b,b&&b.state,{hash:{},inverse:l.program(7,i,e),fn:l.program(5,h,e),data:e}),(j||0===j)&&(k+=j),k+='\n    </i></a><span class="activitysnippet-count">',(j=c.count)?j=j.call(b,{hash:{},data:e}):(j=b&&b.count,j=typeof j===m?j.call(b,{hash:{},data:e}):j),k+=n(j)+"</span>\n</span>\n"}),function(){"use strict";var a,b,c=[].slice,d={}.hasOwnProperty;b="undefined"!=typeof exports&&null!==exports?exports:this,b.ActivitySnippet="undefined"!=typeof ActivitySnippet&&null!==ActivitySnippet?ActivitySnippet:{},a=function(){function a(){}var b;return a.prototype.ready=function(a,b){var c,d;return d=function(){return ActivitySnippet.utils.ready.fired||(ActivitySnippet.utils.ready.fired=!0),a.apply(b)},"complete"===document.readyState?d():document.addEventListener?(document.addEventListener("DOMContentLoaded",d,!1),window.addEventListener("load",d,!1)):document.attachEvent&&(c=function(){var a;try{document.documentElement.doScroll("left")}catch(b){return a=b,void setTimeout(c,1)}return d()},document.attachEvent("onreadystatechange",d),window.attachEvent("onload",d),document.documentElement&&document.documentElement.doScroll&&!window.frameElement)?c():void 0},b=function(a,b){var c,d;4===this.readyState&&(this.status>=200&&this.status<400?(c=JSON.parse(this.responseText),a(c)):(d=this.status+" "+this.statusText,b(d)))},a.prototype.GET=function(a,c,d){var e;return e=new XMLHttpRequest,e.open("GET",a,!0),e.onreadystatechange=function(){return b.call(this,c,d)},e.send(),e=null},a.prototype.POST=function(a,c,d,e){var f;return c=JSON.stringify(c),f=new XMLHttpRequest,f.open("POST",a,!0),f.onreadystatechange=function(){return b.call(this,d,e)},f.send(c),f=null},a.prototype.DELETE=function(a,c,d){var e;return e=new XMLHttpRequest,e.open("DELETE",a,!0),e.onreadystatechange=function(){return b.call(this,c,d)},e.send(),e=null},a.prototype.extend=function(){var a,b,e,f,g;if(a=1<=arguments.length?c.call(arguments,0):[],!a[0])return{};for(b in a){g=a[b];for(e in g)if(d.call(g,e))if(f=g[e],null==a[0][e]&&"object"!=typeof f)a[0][e]=f;else{if(null!=a[0][e]&&"object"!=typeof f)continue;null==a[0][e]&&(a[0][e]={}),a[0][e]=this.extend(a[0][e],f)}}return a[0]},a.prototype.logger=function(a){return console.log("------------"),console.log(JSON.stringify(a)),console.log("------------")},a.prototype.unpack=function(){var a,b,d,e,f;if(b=arguments[0],a=2<=arguments.length?c.call(arguments,1):[])for(e=0,f=a.length;f>e;e++)d=a[e],"undefined"!=typeof d&&(d.length>0?[].push.apply(b,d.splice(0,d.length)):[].push.apply(b,a.slice(d)));return b},a}(),ActivitySnippet.utils=new a}.call(this),function(){"use strict";var a,b=function(a,b){return function(){return a.apply(b,arguments)}},c={}.hasOwnProperty;a="undefined"!=typeof exports&&null!==exports?exports:this,a.ActivitySnippet="undefined"!=typeof ActivitySnippet&&null!==ActivitySnippet?ActivitySnippet:{},ActivitySnippet.ActivityStreamSnippet=function(){function a(a,c,d,e,f){this.save=b(this.save,this),this.bindClick=b(this.bindClick,this),this.fireCallbacks=b(this.fireCallbacks,this);var g,h;if(null==a)throw new Error("Need Html Element");if(null==d)throw new Error("Need Templates Object");if(null==c.ActivityStreamAPI)throw new Error("Need ActivityStreamAPI endpoint");this.service=c.ActivityStreamAPI,this.active=null!=(g=c.active)?g:!0,this.state=!1,this.el=a,this.id=a.getAttribute("data-id"),this.activeCallbacks=e,this.inactiveCallbacks=f,this.actor=null!=(h=c.actor)?h:null,this.verb={type:a.getAttribute("data-verb").toUpperCase()},this.object={aid:a.getAttribute("data-object-aid"),type:a.getAttribute("data-object-type"),api:a.getAttribute("data-object-api")},this.count=0,this.view=d["app/scripts/templates/"+this.verb.type+".handlebars"],this.constructActivityObject(),this.constructUrls(),this.fetch()}return a.prototype.constructUrls=function(){return this.urls={get:""+this.service+"/object/"+this.object.type+"/"+this.object.aid+"/"+this.verb.type,post:""+this.service+"/activity"},null!=this.actor?this.urls["delete"]=""+this.service+"/activity/"+this.actor.type+"/"+this.actor.aid+"/"+this.verb.type+"/"+this.object.type+"/"+this.object.aid:void 0},a.prototype.constructActivityObject=function(){return this.activity={actor:this.actor,verb:this.verb,object:this.object}},a.prototype.fireCallbacks=function(a){var b,c;c=[];for(b in a)c.push(a[b].call(this));return c},a.prototype.parse=function(a){var b,d,e,f,g;if(null!=a){for(g=[],e=0,f=a.length;f>e;e++)d=a[e],"object"!=typeof d.totalItems&&(this.count=d.totalItems),g.push(function(){var a,e;a=d.items,e=[];for(b in a)c.call(a,b)&&e.push(null!=this.actor?this.matchActor(d.items[b]):void 0);return e}.call(this));return g}},a.prototype.matchActor=function(a){var b;return null!=a&&(b=a.actor.data,b.aid===String(this.actor.aid)&&b.api===String(this.actor.api))?this.toggleState():void 0},a.prototype.toggleActive=function(){return this.active=!this.active,this.render()},a.prototype.toggleState=function(){return this.state=!this.state},a.prototype.setActor=function(a){return this.actor=a,this.constructUrls()},a.prototype.render=function(){var a;return a={activity:this.activity,count:this.count,active:this.active,state:this.state},this.el.innerHTML=this.view(a)},a.prototype.bindClick=function(){var a=this;return this.el.onclick=function(){return a.active===!0?(a.fireCallbacks(a.activeCallbacks),a.save()):a.fireCallbacks(a.inactiveCallbacks)}},a.prototype.fetch=function(){var a=this;return ActivitySnippet.utils.GET(this.urls.get,function(b){return a.render(a.parse(b)),a.bindClick()},function(a){return console.error(a)})},a.prototype.save=function(){var a=this;return this.state?ActivitySnippet.utils.DELETE(this.urls["delete"],function(){return a.toggleState(),a.count--,a.render()},function(a){return console.error(a)}):ActivitySnippet.utils.POST(this.urls.post,this.constructActivityObject(),function(){return a.toggleState(),a.count++,a.render()},function(a){return console.error(a)})},a}()}.call(this),function(){"use strict";var a,b=function(a,b){return function(){return a.apply(b,arguments)}};a="undefined"!=typeof exports&&null!==exports?exports:this,a.ActivitySnippet="undefined"!=typeof ActivitySnippet&&null!==ActivitySnippet?ActivitySnippet:{},ActivitySnippet.ActivityStreamSnippetFactory=function(){function a(a){this.fetch=b(this.fetch,this);var d,e;if(this.settings=ActivitySnippet.utils.extend({},a,c),!this.settings.ActivityStreamAPI)throw new Error("SnippetFactory:: Must pass in ActivityStreamAPI");this.count=0,this.actor=null!=(d=this.settings.actor)?d:null,this.templates=ActivitySnippet.ActivitySnippetTemplates,this.active=null!=(e=this.settings.active)?e:!0,this.activeCallbacks=[],this.inactiveCallbacks=[],ActivitySnippet.utils.unpack(this.activeCallbacks,a.activeCallbacks),ActivitySnippet.utils.unpack(this.inactiveCallbacks,a.inactiveCallbacks),this.snippets=this.initActivityStreamSnippets(this.settings,this.templates,this.activeCallbacks,this.inactiveCallbacks)}var c;return c={debug:!1,snippetClass:".activitysnippet"},a.prototype.initActivityStreamSnippets=function(a,b,c,d){var e,f,g,h;g=document.querySelectorAll(a.snippetClass),h=[];for(f in g)if(g.hasOwnProperty(f)&&"length"!==f&&null==g[f].getAttribute("data-id")){g[f].setAttribute("data-id","as"+this.count);try{h.push(new ActivitySnippet.ActivityStreamSnippet(g[f],a,b,c,d))}catch(i){e=i,console.error(e.stack)}this.count++}return h},a.prototype.fetch=function(){var a,b,c,d,e;for(d=this.snippets,e=[],b=0,c=d.length;c>b;b++)a=d[b],e.push(a.fetch());return e},a.prototype.refresh=function(){var a;return a=this.count,this.snippets.push.apply(this.snippets,this.initActivityStreamSnippets(this.settings,this.templates))},a.prototype.toggleState=function(){var a;this.active=!this.active;for(a in this.snippets)this.snippets[a].toggleActive()},a.prototype.setActor=function(a){var b,c;this.validActor(a)||(a=null),this.actor=a,c=[];for(b in this.snippets)c.push(this.snippets[b].setActor(this.actor));return c},a.prototype.validActor=function(a){return a?null!=a.aid&&null!=a.api&&null!=a.type?!0:!1:void 0},a}()}.call(this);