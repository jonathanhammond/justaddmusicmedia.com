
// 'stacks' is the Stacks global object.
// All of the other Stacks related Javascript will 
// be attatched to it.
var stacks = {};


// this call to jQuery gives us access to the globaal
// jQuery object. 
// 'noConflict' removes the '$' variable.
// 'true' removes the 'jQuery' variable.
// removing these globals reduces conflicts with other 
// jQuery versions that might be running on this page.
stacks.jQuery = jQuery.noConflict(true);

// Javascript for com_joeworkman_stacks_foundation_styles
// ---------------------------------------------------------------------

// Each stack has its own object with its own namespace.  The name of
// that object is the same as the stack's id.
stacks.com_joeworkman_stacks_foundation_styles = {};

// A closure is defined and assigned to the stack's object.  The object
// is also passed in as 'stack' which gives you a shorthand for referring
// to this object from elsewhere.
stacks.com_joeworkman_stacks_foundation_styles = (function(stack) {

	// When jQuery is used it will be available as $ and jQuery but only
	// inside the closure.
	var jQuery = stacks.jQuery;
	var $ = jQuery;
	
 jQuery.fn.exists=function(){return jQuery(this).length>0;}
jQuery.debug=function(msg,obj){if(window.debug===true&&window.console&&console.log){console.log('[jwstacks] '+msg);if(obj)console.log(obj);}}
jQuery.isMobile=function(){return"ontouchstart"in window||"onmsgesturechange"in window||window.DocumentTouch&&document instanceof DocumentTouch;};var triggerWindowResize=function(){$(window).trigger('resize')};if(typeof(orientationEvent)==undefined){var orientationEvent=0;}
$(window).bind(orientationEvent,triggerWindowResize).load(triggerWindowResize);
!function(a,b){"undefined"!=typeof module?module.exports=b():"function"==typeof define&&define.amd?define(a,b):this[a]=b()}("vein",function(){var a=function(){},b=function(a){a=a||{};for(var b=1;b<arguments.length;b++)if(arguments[b])for(var c in arguments[b])arguments[b].hasOwnProperty(c)&&(a[c]=arguments[b][c]);return a},c=function(a,b,c){var d,e,f=[],g=b[document.all?"rules":"cssRules"],h=a.replace(/\s/g,"");for(d=0,e=g.length;e>d;d++)(g[d].selectorText===a||4===g[d].type&&g[d].cssText.replace(/\s/g,"").substring(0,h.length)==h)&&(null===c?b.deleteRule(d):f.push(g[d]));return f},d=function(a){cssArray=[];for(property in a)a.hasOwnProperty(property)&&cssArray.push(property+": "+a[property]+";");return cssText=cssArray.join("")};a.getStylesheet=function(){var a,b=this;if(!b.element)for(b.element=document.createElement("style"),b.element.setAttribute("type","text/css"),b.element.setAttribute("id","vein"),document.getElementsByTagName("head")[0].appendChild(b.element),a=document.styleSheets.length-1;a>=0;a--)if(document.styleSheets[a].ownerNode===b.element){b.stylesheet=document.styleSheets[a];break}return b.stylesheet};var e=function(a){return a[document.all?"rules":"cssRules"]},f=function(a,b,c){var d=e(c);c.insertRule?c.insertRule(a+"{"+b+"}",d.length):c.addRule(a,b,d.length)};return a.inject=function(a,g,h){h=b({},h);{var i,j,k,l,m,n,o,p,q,r,s=this,t=h.stylesheet||s.getStylesheet();e(t)}for("string"==typeof a&&(a=[a]),i=0,j=a.length;j>i;i++)if("object"==typeof a[i]&&t.insertRule)for(k in a[i])if(l=c(k,t,g),0===l.length)for(m=d(g),q=0,r=a[i][k].length;r>q;q++)f(k,a[i][k][q]+"{"+m+"}",t);else for(o=0,p=l.length;p>o;o++)s.inject(a[i][k],g,{stylesheet:l[o]});else{if(l=c(a[i],t,g),null===g)return;if(0===l.length)m=d(g),f(a[i],m,t);else for(o=0,p=l.length;p>o;o++)for(n in g)g.hasOwnProperty(n)&&l[o].style.setProperty(n,g[n],"")}return s},a}),!function(a,b){var c=function(a){for(var c=[];a&&a.tagName!==b;a=a.parentNode){if(a.className){var d=a.className.split(" ");for(var e in d)d.hasOwnProperty(e)&&d[e]&&(c.unshift(d[e]),c.unshift("."))}a.id&&!/\s/.test(a.id)&&(c.unshift(a.id),c.unshift("#")),c.unshift(a.tagName),c.unshift(" > ")}return c.slice(1).join("")};a.fn.getSelector=function(b){return!0===b?c(this[0]):a.map(this,function(a){return c(a)})}}(jQuery),function(a){"use strict";var b=function(a){var b=a.replace(/\s/g,"").match(/^rgb\((\d+)\,(\d+)\,(\d+)\)/);if(b)return{r:parseInt(b[1]),g:parseInt(b[2]),b:parseInt(b[3])};var c=/^#?([a-f\d])([a-f\d])([a-f\d])$/i;a=a.replace(c,function(a,b,c,d){return b+b+c+c+d+d});var d=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(a);return d?{r:parseInt(d[1],16),g:parseInt(d[2],16),b:parseInt(d[3],16)}:null},c=function(a,b,c){return c="undefined"!=typeof c?c:0,b="undefined"!=typeof b?b:1,b=b>1?b/100:b,"rgba("+(a.r+c)+","+(a.g+c)+","+(a.b+c)+","+b+")"},d=function(a,b,c,d){var e=a.selector,f={};return f[c]=d,e||(e=b.getSelector(),a.hover&&(e+=":hover")),vein.inject(e,f)},e=function(a,b){for(var c=[],d=0;d<a.length;d++){var e=b[d]===parseInt(b[d],10)?a[d]+" "+b[d]+"%":a[d];c.push(e)}return c.join(",")},f=function(a,b){var f,g,h,i=[],j=0;if(0===a.stops.length)for(j=0;j<a.colors.length;j++)f=a.offsets[j]||0,g=a.opacity[j]||a.opacity[a.opacity.length-1],i.push(c(h[j],g,f));else for(j=0;j<a.stops.length;j++)f=a.offsets[j]||0,g=a.opacity[j]||a.opacity[a.opacity.length-1],h=a.colors[j]||a.colors[a.colors.length-1],i.push(c(h,g,f));var k=e(i,a.stops),l="linear-gradient(to "+a.linear+","+k+")";"radial-circle"===a.gradient?l="radial-gradient(circle at "+a.radial.x+"% "+a.radial.y+"%,"+k+")":"radial-ellipse"===a.gradient&&(l="radial-gradient(ellipse at "+a.radial.x+"% "+a.radial.y+"%,"+k+")"),d(a,b,"background",l)};a.glass=function(c){for(var d=a.extend(!0,{},a.fn.glass.defaults,c||{}),e=0;e<d.colors.length;e++)d.colors[e]=b(d.colors[e]);if(d.selector){var f=a.fn.glass[d.preset];if("function"==typeof f)return f(d,a(d.selector))}return!1},a.fn.glass=function(c){for(var d=a.extend(!0,{},a.fn.glass.defaults,c||{}),e=0;e<d.colors.length;e++)d.colors[e]=b(d.colors[e]);return this.each(function(){var b=a(this),c=a.fn.glass[d.preset];"function"==typeof c&&c(d,b)})},a.fn.glass.border=function(a,b){var e=c(a.colors[0],a.opacity[0]);d(a,b,"border-color",e)},a.fn.glass.solid=function(a,b){var e=c(a.colors[0],a.opacity[0]);d(a,b,"background",e)},a.fn.glass.custom=function(a,b){return f(a,b)},a.fn.glass.faded=function(a,b){return 0===a.stops.length&&(a.stops=[0,95]),2!==a.opacity.length&&(a.opacity=[100,80]),a.colors=a.colors.slice(0,1),f(a,b)},a.fn.glass.twocolor=function(a,b){return 0===a.stops.length&&(a.stops=[20,100]),a.colors=a.colors.slice(0,2),a.opacity=a.opacity.slice(0,1),f(a,b)},a.fn.glass.twotone=function(a,b){return 0===a.stops.length&&(a.stops=[0,45,50,50,100]),0===a.offsets.length&&(a.offsets=[20,10,5,0,-10]),a.offsets[3]=0,a.colors=a.colors.slice(0,1),a.opacity=a.opacity.slice(0,1),f(a,b)},a.fn.glass.onecolor=function(a,b){return 0===a.stops.length&&(a.stops=[0,85]),0===a.offsets.length&&(a.offsets=[40,0]),a.colors=a.colors.slice(0,1),a.opacity=a.opacity.slice(0,1),f(a,b)},a.fn.glass.defaults={preset:"solid",gradient:"linear",linear:"bottom",radial:{x:50,y:50},colors:["#ffffff","#777777"],offsets:[],stops:[],opacity:[100,80],selector:!1,hover:!1}}(jQuery);

	return stack;
})(stacks.com_joeworkman_stacks_foundation_styles);


// Javascript for com_joeworkman_stacks_movingbox2
// ---------------------------------------------------------------------

// Each stack has its own object with its own namespace.  The name of
// that object is the same as the stack's id.
stacks.com_joeworkman_stacks_movingbox2 = {};

// A closure is defined and assigned to the stack's object.  The object
// is also passed in as 'stack' which gives you a shorthand for referring
// to this object from elsewhere.
stacks.com_joeworkman_stacks_movingbox2 = (function(stack) {

	// When jQuery is used it will be available as $ and jQuery but only
	// inside the closure.
	var jQuery = stacks.jQuery;
	var $ = jQuery;
	
!function(a){"use strict";"function"==typeof define&&define.amd?define(["jquery"],a):"undefined"!=typeof exports?module.exports=a(require("jquery")):a(jQuery)}(function(a){"use strict";var b=window.Slick||{};b=function(){function b(b,d){var e,f,g=this;if(g.defaults={accessibility:!0,adaptiveHeight:!1,appendArrows:a(b),appendDots:a(b),arrows:!0,asNavFor:null,prevArrow:'<button type="button" data-role="none" class="slick-prev">Previous</button>',nextArrow:'<button type="button" data-role="none" class="slick-next">Next</button>',autoplay:!1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(a,b){return'<button type="button" data-role="none">'+(b+1)+"</button>"},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",fade:!1,focusOnSelect:!1,infinite:!0,initialSlide:0,lazyLoad:"ondemand",onBeforeChange:null,onAfterChange:null,onInit:null,onReInit:null,onSetPosition:null,pauseOnHover:!0,pauseOnDotsHover:!1,respondTo:"window",responsive:null,rtl:!1,slide:"div",slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,variableWidth:!1,vertical:!1,waitForAnimate:!0},g.initials={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,$list:null,touchObject:{},transformsEnabled:!1},a.extend(g,g.initials),g.activeBreakpoint=null,g.animType=null,g.animProp=null,g.breakpoints=[],g.breakpointSettings=[],g.cssTransitions=!1,g.paused=!1,g.positionProp=null,g.respondTo=null,g.shouldClick=!0,g.$slider=a(b),g.$slidesCache=null,g.transformType=null,g.transitionType=null,g.windowWidth=0,g.windowTimer=null,g.options=a.extend({},g.defaults,d),g.currentSlide=g.options.initialSlide,g.originalSettings=g.options,e=g.options.responsive||null,e&&e.length>-1){g.respondTo=g.options.respondTo||"window";for(f in e)e.hasOwnProperty(f)&&(g.breakpoints.push(e[f].breakpoint),g.breakpointSettings[e[f].breakpoint]=e[f].settings);g.breakpoints.sort(function(a,b){return b-a})}g.autoPlay=a.proxy(g.autoPlay,g),g.autoPlayClear=a.proxy(g.autoPlayClear,g),g.changeSlide=a.proxy(g.changeSlide,g),g.clickHandler=a.proxy(g.clickHandler,g),g.selectHandler=a.proxy(g.selectHandler,g),g.setPosition=a.proxy(g.setPosition,g),g.swipeHandler=a.proxy(g.swipeHandler,g),g.dragHandler=a.proxy(g.dragHandler,g),g.keyHandler=a.proxy(g.keyHandler,g),g.autoPlayIterator=a.proxy(g.autoPlayIterator,g),g.instanceUid=c++,g.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/,g.init(),g.checkResponsive()}var c=0;return b}(),b.prototype.addSlide=function(b,c,d){var e=this;if("boolean"==typeof c)d=c,c=null;else if(0>c||c>=e.slideCount)return!1;e.unload(),"number"==typeof c?0===c&&0===e.$slides.length?a(b).appendTo(e.$slideTrack):d?a(b).insertBefore(e.$slides.eq(c)):a(b).insertAfter(e.$slides.eq(c)):d===!0?a(b).prependTo(e.$slideTrack):a(b).appendTo(e.$slideTrack),e.$slides=e.$slideTrack.children(this.options.slide),e.$slideTrack.children(this.options.slide).detach(),e.$slideTrack.append(e.$slides),e.$slides.each(function(b,c){a(c).attr("index",b)}),e.$slidesCache=e.$slides,e.reinit()},b.prototype.animateSlide=function(b,c){var d={},e=this;if(1===e.options.slidesToShow&&e.options.adaptiveHeight===!0&&e.options.vertical===!1){var f=e.$slides.eq(e.currentSlide).outerHeight(!0);e.$list.animate({height:f},e.options.speed)}e.options.rtl===!0&&e.options.vertical===!1&&(b=-b),e.transformsEnabled===!1?e.options.vertical===!1?e.$slideTrack.animate({left:b},e.options.speed,e.options.easing,c):e.$slideTrack.animate({top:b},e.options.speed,e.options.easing,c):e.cssTransitions===!1?a({animStart:e.currentLeft}).animate({animStart:b},{duration:e.options.speed,easing:e.options.easing,step:function(a){e.options.vertical===!1?(d[e.animType]="translate("+a+"px, 0px)",e.$slideTrack.css(d)):(d[e.animType]="translate(0px,"+a+"px)",e.$slideTrack.css(d))},complete:function(){c&&c.call()}}):(e.applyTransition(),d[e.animType]=e.options.vertical===!1?"translate3d("+b+"px, 0px, 0px)":"translate3d(0px,"+b+"px, 0px)",e.$slideTrack.css(d),c&&setTimeout(function(){e.disableTransition(),c.call()},e.options.speed))},b.prototype.asNavFor=function(b){var c=this,d=null!=c.options.asNavFor?a(c.options.asNavFor).getSlick():null;null!=d&&d.slideHandler(b,!0)},b.prototype.applyTransition=function(a){var b=this,c={};c[b.transitionType]=b.options.fade===!1?b.transformType+" "+b.options.speed+"ms "+b.options.cssEase:"opacity "+b.options.speed+"ms "+b.options.cssEase,b.options.fade===!1?b.$slideTrack.css(c):b.$slides.eq(a).css(c)},b.prototype.autoPlay=function(){var a=this;a.autoPlayTimer&&clearInterval(a.autoPlayTimer),a.slideCount>a.options.slidesToShow&&a.paused!==!0&&(a.autoPlayTimer=setInterval(a.autoPlayIterator,a.options.autoplaySpeed))},b.prototype.autoPlayClear=function(){var a=this;a.autoPlayTimer&&clearInterval(a.autoPlayTimer)},b.prototype.autoPlayIterator=function(){var a=this;a.options.infinite===!1?1===a.direction?(a.currentSlide+1===a.slideCount-1&&(a.direction=0),a.slideHandler(a.currentSlide+a.options.slidesToScroll)):(a.currentSlide-1===0&&(a.direction=1),a.slideHandler(a.currentSlide-a.options.slidesToScroll)):a.slideHandler(a.currentSlide+a.options.slidesToScroll)},b.prototype.buildArrows=function(){var b=this;b.options.arrows===!0&&b.slideCount>b.options.slidesToShow&&(b.$prevArrow=a(b.options.prevArrow),b.$nextArrow=a(b.options.nextArrow),b.htmlExpr.test(b.options.prevArrow)&&b.$prevArrow.appendTo(b.options.appendArrows),b.htmlExpr.test(b.options.nextArrow)&&b.$nextArrow.appendTo(b.options.appendArrows),b.options.infinite!==!0&&b.$prevArrow.addClass("slick-disabled"))},b.prototype.buildDots=function(){var b,c,d=this;if(d.options.dots===!0&&d.slideCount>d.options.slidesToShow){for(c='<ul class="'+d.options.dotsClass+'">',b=0;b<=d.getDotCount();b+=1)c+="<li>"+d.options.customPaging.call(this,d,b)+"</li>";c+="</ul>",d.$dots=a(c).appendTo(d.options.appendDots),d.$dots.find("li").first().addClass("slick-active")}},b.prototype.buildOut=function(){var b=this;b.$slides=b.$slider.children(b.options.slide+":not(.slick-cloned)").addClass("slick-slide"),b.slideCount=b.$slides.length,b.$slides.each(function(b,c){a(c).attr("index",b)}),b.$slidesCache=b.$slides,b.$slider.addClass("slick-slider"),b.$slideTrack=0===b.slideCount?a('<div class="slick-track"/>').appendTo(b.$slider):b.$slides.wrapAll('<div class="slick-track"/>').parent(),b.$list=b.$slideTrack.wrap('<div class="slick-list"/>').parent(),b.$slideTrack.css("opacity",0),b.options.centerMode===!0&&(b.options.slidesToScroll=1),a("img[data-lazy]",b.$slider).not("[src]").addClass("slick-loading"),b.setupInfinite(),b.buildArrows(),b.buildDots(),b.updateDots(),b.options.accessibility===!0&&b.$list.prop("tabIndex",0),b.setSlideClasses("number"==typeof this.currentSlide?this.currentSlide:0),b.options.draggable===!0&&b.$list.addClass("draggable")},b.prototype.checkResponsive=function(){var b,c,d,e=this,f=e.$slider.width(),g=window.innerWidth||a(window).width();if("window"===e.respondTo?d=g:"slider"===e.respondTo?d=f:"min"===e.respondTo&&(d=Math.min(g,f)),e.originalSettings.responsive&&e.originalSettings.responsive.length>-1&&null!==e.originalSettings.responsive){c=null;for(b in e.breakpoints)e.breakpoints.hasOwnProperty(b)&&d<e.breakpoints[b]&&(c=e.breakpoints[b]);null!==c?null!==e.activeBreakpoint?c!==e.activeBreakpoint&&(e.activeBreakpoint=c,e.options=a.extend({},e.originalSettings,e.breakpointSettings[c]),e.refresh()):(e.activeBreakpoint=c,e.options=a.extend({},e.originalSettings,e.breakpointSettings[c]),e.refresh()):null!==e.activeBreakpoint&&(e.activeBreakpoint=null,e.options=e.originalSettings,e.refresh())}},b.prototype.changeSlide=function(b,c){var d,e,f,g,h,i=this,j=a(b.target);switch(j.is("a")&&b.preventDefault(),f=i.slideCount%i.options.slidesToScroll!==0,d=f?0:(i.slideCount-i.currentSlide)%i.options.slidesToScroll,b.data.message){case"previous":e=0===d?i.options.slidesToScroll:i.options.slidesToShow-d,i.slideCount>i.options.slidesToShow&&i.slideHandler(i.currentSlide-e,!1,c);break;case"next":e=0===d?i.options.slidesToScroll:d,i.slideCount>i.options.slidesToShow&&i.slideHandler(i.currentSlide+e,!1,c);break;case"index":var k=0===b.data.index?0:b.data.index||a(b.target).parent().index()*i.options.slidesToScroll;if(g=i.getNavigableIndexes(),h=0,g[k]&&g[k]===k)if(k>g[g.length-1])k=g[g.length-1];else for(var l in g){if(k<g[l]){k=h;break}h=g[l]}i.slideHandler(k,!1,c);default:return}},b.prototype.clickHandler=function(a){var b=this;b.shouldClick===!1&&(a.stopImmediatePropagation(),a.stopPropagation(),a.preventDefault())},b.prototype.destroy=function(){var b=this;b.autoPlayClear(),b.touchObject={},a(".slick-cloned",b.$slider).remove(),b.$dots&&b.$dots.remove(),b.$prevArrow&&"object"!=typeof b.options.prevArrow&&b.$prevArrow.remove(),b.$nextArrow&&"object"!=typeof b.options.nextArrow&&b.$nextArrow.remove(),b.$slides.parent().hasClass("slick-track")&&b.$slides.unwrap().unwrap(),b.$slides.removeClass("slick-slide slick-active slick-center slick-visible").removeAttr("index").css({position:"",left:"",top:"",zIndex:"",opacity:"",width:""}),b.$slider.removeClass("slick-slider"),b.$slider.removeClass("slick-initialized"),b.$list.off(".slick"),a(window).off(".slick-"+b.instanceUid),a(document).off(".slick-"+b.instanceUid)},b.prototype.disableTransition=function(a){var b=this,c={};c[b.transitionType]="",b.options.fade===!1?b.$slideTrack.css(c):b.$slides.eq(a).css(c)},b.prototype.fadeSlide=function(a,b,c){var d=this;d.cssTransitions===!1?(d.$slides.eq(b).css({zIndex:1e3}),d.$slides.eq(b).animate({opacity:1},d.options.speed,d.options.easing,c),d.$slides.eq(a).animate({opacity:0},d.options.speed,d.options.easing)):(d.applyTransition(b),d.applyTransition(a),d.$slides.eq(b).css({opacity:1,zIndex:1e3}),d.$slides.eq(a).css({opacity:0}),c&&setTimeout(function(){d.disableTransition(b),d.disableTransition(a),c.call()},d.options.speed))},b.prototype.filterSlides=function(a){var b=this;null!==a&&(b.unload(),b.$slideTrack.children(this.options.slide).detach(),b.$slidesCache.filter(a).appendTo(b.$slideTrack),b.reinit())},b.prototype.getCurrent=function(){var a=this;return a.currentSlide},b.prototype.getDotCount=function(){var a=this,b=0,c=0,d=0;if(a.options.infinite===!0)d=Math.ceil(a.slideCount/a.options.slidesToScroll);else for(;b<a.slideCount;)++d,b=c+a.options.slidesToShow,c+=a.options.slidesToScroll<=a.options.slidesToShow?a.options.slidesToScroll:a.options.slidesToShow;return d-1},b.prototype.getLeft=function(a){var b,c,d,e=this,f=0;return e.slideOffset=0,c=e.$slides.first().outerHeight(),e.options.infinite===!0?(e.slideCount>e.options.slidesToShow&&(e.slideOffset=e.slideWidth*e.options.slidesToShow*-1,f=c*e.options.slidesToShow*-1),e.slideCount%e.options.slidesToScroll!==0&&a+e.options.slidesToScroll>e.slideCount&&e.slideCount>e.options.slidesToShow&&(a>e.slideCount?(e.slideOffset=(e.options.slidesToShow-(a-e.slideCount))*e.slideWidth*-1,f=(e.options.slidesToShow-(a-e.slideCount))*c*-1):(e.slideOffset=e.slideCount%e.options.slidesToScroll*e.slideWidth*-1,f=e.slideCount%e.options.slidesToScroll*c*-1))):a+e.options.slidesToShow>e.slideCount&&(e.slideOffset=(a+e.options.slidesToShow-e.slideCount)*e.slideWidth,f=(a+e.options.slidesToShow-e.slideCount)*c),e.slideCount<=e.options.slidesToShow&&(e.slideOffset=0,f=0),e.options.centerMode===!0&&e.options.infinite===!0?e.slideOffset+=e.slideWidth*Math.floor(e.options.slidesToShow/2)-e.slideWidth:e.options.centerMode===!0&&(e.slideOffset=0,e.slideOffset+=e.slideWidth*Math.floor(e.options.slidesToShow/2)),b=e.options.vertical===!1?a*e.slideWidth*-1+e.slideOffset:a*c*-1+f,e.options.variableWidth===!0&&(d=e.$slideTrack.children(".slick-slide").eq(e.slideCount<=e.options.slidesToShow||e.options.infinite===!1?a:a+e.options.slidesToShow),b=d[0]?-1*d[0].offsetLeft:0,e.options.centerMode===!0&&(d=e.$slideTrack.children(".slick-slide").eq(e.options.infinite===!1?a:a+e.options.slidesToShow+1),b=d[0]?-1*d[0].offsetLeft:0,b+=(e.$list.width()-d.outerWidth())/2)),b},b.prototype.getNavigableIndexes=function(){for(var a=this,b=0,c=0,d=[];b<a.slideCount;)d.push(b),b=c+a.options.slidesToScroll,c+=a.options.slidesToScroll<=a.options.slidesToShow?a.options.slidesToScroll:a.options.slidesToShow;return d},b.prototype.getSlideCount=function(){var b,c=this;if(c.options.swipeToSlide===!0){var d=null;return c.$slideTrack.find(".slick-slide").each(function(b,e){return e.offsetLeft+a(e).outerWidth()/2>-1*c.swipeLeft?(d=e,!1):void 0}),b=Math.abs(a(d).attr("index")-c.currentSlide)}return c.options.slidesToScroll},b.prototype.init=function(){var b=this;a(b.$slider).hasClass("slick-initialized")||(a(b.$slider).addClass("slick-initialized"),b.buildOut(),b.setProps(),b.startLoad(),b.loadSlider(),b.initializeEvents(),b.updateArrows(),b.updateDots()),null!==b.options.onInit&&b.options.onInit.call(this,b)},b.prototype.initArrowEvents=function(){var a=this;a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.on("click.slick",{message:"previous"},a.changeSlide),a.$nextArrow.on("click.slick",{message:"next"},a.changeSlide))},b.prototype.initDotEvents=function(){var b=this;b.options.dots===!0&&b.slideCount>b.options.slidesToShow&&a("li",b.$dots).on("click.slick",{message:"index"},b.changeSlide),b.options.dots===!0&&b.options.pauseOnDotsHover===!0&&b.options.autoplay===!0&&a("li",b.$dots).on("mouseenter.slick",function(){b.paused=!0,b.autoPlayClear()}).on("mouseleave.slick",function(){b.paused=!1,b.autoPlay()})},b.prototype.initializeEvents=function(){var b=this;b.initArrowEvents(),b.initDotEvents(),b.$list.on("touchstart.slick mousedown.slick",{action:"start"},b.swipeHandler),b.$list.on("touchmove.slick mousemove.slick",{action:"move"},b.swipeHandler),b.$list.on("touchend.slick mouseup.slick",{action:"end"},b.swipeHandler),b.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},b.swipeHandler),b.$list.on("click.slick",b.clickHandler),b.options.pauseOnHover===!0&&b.options.autoplay===!0&&(b.$list.on("mouseenter.slick",function(){b.paused=!0,b.autoPlayClear()}),b.$list.on("mouseleave.slick",function(){b.paused=!1,b.autoPlay()})),b.options.accessibility===!0&&b.$list.on("keydown.slick",b.keyHandler),b.options.focusOnSelect===!0&&a(b.options.slide,b.$slideTrack).on("click.slick",b.selectHandler),a(window).on("orientationchange.slick.slick-"+b.instanceUid,function(){b.checkResponsive(),b.setPosition()}),a(window).on("resize.slick.slick-"+b.instanceUid,function(){a(window).width()!==b.windowWidth&&(clearTimeout(b.windowDelay),b.windowDelay=window.setTimeout(function(){b.windowWidth=a(window).width(),b.checkResponsive(),b.setPosition()},50))}),a("*[draggable!=true]",b.$slideTrack).on("dragstart",function(a){a.preventDefault()}),a(window).on("load.slick.slick-"+b.instanceUid,b.setPosition),a(document).on("ready.slick.slick-"+b.instanceUid,b.setPosition)},b.prototype.initUI=function(){var a=this;a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.show(),a.$nextArrow.show()),a.options.dots===!0&&a.slideCount>a.options.slidesToShow&&a.$dots.show(),a.options.autoplay===!0&&a.autoPlay()},b.prototype.keyHandler=function(a){var b=this;37===a.keyCode&&b.options.accessibility===!0?b.changeSlide({data:{message:"previous"}}):39===a.keyCode&&b.options.accessibility===!0&&b.changeSlide({data:{message:"next"}})},b.prototype.lazyLoad=function(){function b(b){a("img[data-lazy]",b).each(function(){var b=a(this),c=a(this).attr("data-lazy");b.load(function(){b.animate({opacity:1},200)}).css({opacity:0}).attr("src",c).removeAttr("data-lazy").removeClass("slick-loading")})}var c,d,e,f,g=this;g.options.centerMode===!0?g.options.infinite===!0?(e=g.currentSlide+(g.options.slidesToShow/2+1),f=e+g.options.slidesToShow+2):(e=Math.max(0,g.currentSlide-(g.options.slidesToShow/2+1)),f=2+(g.options.slidesToShow/2+1)+g.currentSlide):(e=g.options.infinite?g.options.slidesToShow+g.currentSlide:g.currentSlide,f=e+g.options.slidesToShow,g.options.fade===!0&&(e>0&&e--,f<=g.slideCount&&f++)),c=g.$slider.find(".slick-slide").slice(e,f),b(c),g.slideCount<=g.options.slidesToShow?(d=g.$slider.find(".slick-slide"),b(d)):g.currentSlide>=g.slideCount-g.options.slidesToShow?(d=g.$slider.find(".slick-cloned").slice(0,g.options.slidesToShow),b(d)):0===g.currentSlide&&(d=g.$slider.find(".slick-cloned").slice(-1*g.options.slidesToShow),b(d))},b.prototype.loadSlider=function(){var a=this;a.setPosition(),a.$slideTrack.css({opacity:1}),a.$slider.removeClass("slick-loading"),a.initUI(),"progressive"===a.options.lazyLoad&&a.progressiveLazyLoad()},b.prototype.postSlide=function(a){var b=this;null!==b.options.onAfterChange&&b.options.onAfterChange.call(this,b,a),b.animating=!1,b.setPosition(),b.swipeLeft=null,b.options.autoplay===!0&&b.paused===!1&&b.autoPlay()},b.prototype.progressiveLazyLoad=function(){var b,c,d=this;b=a("img[data-lazy]",d.$slider).length,b>0&&(c=a("img[data-lazy]",d.$slider).first(),c.attr("src",c.attr("data-lazy")).removeClass("slick-loading").load(function(){c.removeAttr("data-lazy"),d.progressiveLazyLoad()}).error(function(){c.removeAttr("data-lazy"),d.progressiveLazyLoad()}))},b.prototype.refresh=function(){var b=this,c=b.currentSlide;b.destroy(),a.extend(b,b.initials),b.init(),b.changeSlide({data:{message:"index",index:c}},!0)},b.prototype.reinit=function(){var b=this;b.$slides=b.$slideTrack.children(b.options.slide).addClass("slick-slide"),b.slideCount=b.$slides.length,b.currentSlide>=b.slideCount&&0!==b.currentSlide&&(b.currentSlide=b.currentSlide-b.options.slidesToScroll),b.slideCount<=b.options.slidesToShow&&(b.currentSlide=0),b.setProps(),b.setupInfinite(),b.buildArrows(),b.updateArrows(),b.initArrowEvents(),b.buildDots(),b.updateDots(),b.initDotEvents(),b.options.focusOnSelect===!0&&a(b.options.slide,b.$slideTrack).on("click.slick",b.selectHandler),b.setSlideClasses(0),b.setPosition(),null!==b.options.onReInit&&b.options.onReInit.call(this,b)},b.prototype.removeSlide=function(a,b,c){var d=this;return"boolean"==typeof a?(b=a,a=b===!0?0:d.slideCount-1):a=b===!0?--a:a,d.slideCount<1||0>a||a>d.slideCount-1?!1:(d.unload(),c===!0?d.$slideTrack.children().remove():d.$slideTrack.children(this.options.slide).eq(a).remove(),d.$slides=d.$slideTrack.children(this.options.slide),d.$slideTrack.children(this.options.slide).detach(),d.$slideTrack.append(d.$slides),d.$slidesCache=d.$slides,void d.reinit())},b.prototype.setCSS=function(a){var b,c,d=this,e={};d.options.rtl===!0&&(a=-a),b="left"==d.positionProp?a+"px":"0px",c="top"==d.positionProp?a+"px":"0px",e[d.positionProp]=a,d.transformsEnabled===!1?d.$slideTrack.css(e):(e={},d.cssTransitions===!1?(e[d.animType]="translate("+b+", "+c+")",d.$slideTrack.css(e)):(e[d.animType]="translate3d("+b+", "+c+", 0px)",d.$slideTrack.css(e)))},b.prototype.setDimensions=function(){var b=this;if(b.options.vertical===!1?b.options.centerMode===!0&&b.$list.css({padding:"0px "+b.options.centerPadding}):(b.$list.height(b.$slides.first().outerHeight(!0)*b.options.slidesToShow),b.options.centerMode===!0&&b.$list.css({padding:b.options.centerPadding+" 0px"})),b.listWidth=b.$list.width(),b.listHeight=b.$list.height(),b.options.vertical===!1&&b.options.variableWidth===!1)b.slideWidth=Math.ceil(b.listWidth/b.options.slidesToShow),b.$slideTrack.width(Math.ceil(b.slideWidth*b.$slideTrack.children(".slick-slide").length));else if(b.options.variableWidth===!0){var c=0;b.slideWidth=Math.ceil(b.listWidth/b.options.slidesToShow),b.$slideTrack.children(".slick-slide").each(function(){c+=Math.ceil(a(this).outerWidth(!0))}),b.$slideTrack.width(Math.ceil(c)+1)}else b.slideWidth=Math.ceil(b.listWidth),b.$slideTrack.height(Math.ceil(b.$slides.first().outerHeight(!0)*b.$slideTrack.children(".slick-slide").length));var d=b.$slides.first().outerWidth(!0)-b.$slides.first().width();b.options.variableWidth===!1&&b.$slideTrack.children(".slick-slide").width(b.slideWidth-d)},b.prototype.setFade=function(){var b,c=this;c.$slides.each(function(d,e){b=c.slideWidth*d*-1,a(e).css(c.options.rtl===!0?{position:"relative",right:b,top:0,zIndex:800,opacity:0}:{position:"relative",left:b,top:0,zIndex:800,opacity:0})}),c.$slides.eq(c.currentSlide).css({zIndex:900,opacity:1})},b.prototype.setHeight=function(){var a=this;if(1===a.options.slidesToShow&&a.options.adaptiveHeight===!0&&a.options.vertical===!1){var b=a.$slides.eq(a.currentSlide).outerHeight(!0);a.$list.css("height",b)}},b.prototype.setPosition=function(){var a=this;a.setDimensions(),a.setHeight(),a.options.fade===!1?a.setCSS(a.getLeft(a.currentSlide)):a.setFade(),null!==a.options.onSetPosition&&a.options.onSetPosition.call(this,a)},b.prototype.setProps=function(){var a=this,b=document.body.style;a.positionProp=a.options.vertical===!0?"top":"left","top"===a.positionProp?a.$slider.addClass("slick-vertical"):a.$slider.removeClass("slick-vertical"),(void 0!==b.WebkitTransition||void 0!==b.MozTransition||void 0!==b.msTransition)&&a.options.useCSS===!0&&(a.cssTransitions=!0),void 0!==b.OTransform&&(a.animType="OTransform",a.transformType="-o-transform",a.transitionType="OTransition",void 0===b.perspectiveProperty&&void 0===b.webkitPerspective&&(a.animType=!1)),void 0!==b.MozTransform&&(a.animType="MozTransform",a.transformType="-moz-transform",a.transitionType="MozTransition",void 0===b.perspectiveProperty&&void 0===b.MozPerspective&&(a.animType=!1)),void 0!==b.webkitTransform&&(a.animType="webkitTransform",a.transformType="-webkit-transform",a.transitionType="webkitTransition",void 0===b.perspectiveProperty&&void 0===b.webkitPerspective&&(a.animType=!1)),void 0!==b.msTransform&&(a.animType="msTransform",a.transformType="-ms-transform",a.transitionType="msTransition",void 0===b.msTransform&&(a.animType=!1)),void 0!==b.transform&&a.animType!==!1&&(a.animType="transform",a.transformType="transform",a.transitionType="transition"),a.transformsEnabled=null!==a.animType&&a.animType!==!1},b.prototype.setSlideClasses=function(a){var b,c,d,e,f=this;f.$slider.find(".slick-slide").removeClass("slick-active").removeClass("slick-center"),c=f.$slider.find(".slick-slide"),f.options.centerMode===!0?(b=Math.floor(f.options.slidesToShow/2),f.options.infinite===!0&&(a>=b&&a<=f.slideCount-1-b?f.$slides.slice(a-b,a+b+1).addClass("slick-active"):(d=f.options.slidesToShow+a,c.slice(d-b+1,d+b+2).addClass("slick-active")),0===a?c.eq(c.length-1-f.options.slidesToShow).addClass("slick-center"):a===f.slideCount-1&&c.eq(f.options.slidesToShow).addClass("slick-center")),f.$slides.eq(a).addClass("slick-center")):a>=0&&a<=f.slideCount-f.options.slidesToShow?f.$slides.slice(a,a+f.options.slidesToShow).addClass("slick-active"):c.length<=f.options.slidesToShow?c.addClass("slick-active"):(e=f.slideCount%f.options.slidesToShow,d=f.options.infinite===!0?f.options.slidesToShow+a:a,f.options.slidesToShow==f.options.slidesToScroll&&f.slideCount-a<f.options.slidesToShow?c.slice(d-(f.options.slidesToShow-e),d+e).addClass("slick-active"):c.slice(d,d+f.options.slidesToShow).addClass("slick-active")),"ondemand"===f.options.lazyLoad&&f.lazyLoad()},b.prototype.setupInfinite=function(){var b,c,d,e=this;if(e.options.fade===!0&&(e.options.centerMode=!1),e.options.infinite===!0&&e.options.fade===!1&&(c=null,e.slideCount>e.options.slidesToShow)){for(d=e.options.centerMode===!0?e.options.slidesToShow+1:e.options.slidesToShow,b=e.slideCount;b>e.slideCount-d;b-=1)c=b-1,a(e.$slides[c]).clone(!0).attr("id","").attr("index",c-e.slideCount).prependTo(e.$slideTrack).addClass("slick-cloned");for(b=0;d>b;b+=1)c=b,a(e.$slides[c]).clone(!0).attr("id","").attr("index",c+e.slideCount).appendTo(e.$slideTrack).addClass("slick-cloned");e.$slideTrack.find(".slick-cloned").find("[id]").each(function(){a(this).attr("id","")})}},b.prototype.selectHandler=function(b){var c=this,d=parseInt(a(b.target).parents(".slick-slide").attr("index"));return d||(d=0),c.slideCount<=c.options.slidesToShow?(c.$slider.find(".slick-slide").removeClass("slick-active"),c.$slides.eq(d).addClass("slick-active"),c.options.centerMode===!0&&(c.$slider.find(".slick-slide").removeClass("slick-center"),c.$slides.eq(d).addClass("slick-center")),void c.asNavFor(d)):void c.slideHandler(d)},b.prototype.slideHandler=function(a,b,c){var d,e,f,g,h=null,i=this;return b=b||!1,i.animating===!0&&i.options.waitForAnimate===!0||i.options.fade===!0&&i.currentSlide===a||i.slideCount<=i.options.slidesToShow?void 0:(b===!1&&i.asNavFor(a),d=a,h=i.getLeft(d),g=i.getLeft(i.currentSlide),i.currentLeft=null===i.swipeLeft?g:i.swipeLeft,i.options.infinite===!1&&i.options.centerMode===!1&&(0>a||a>i.getDotCount()*i.options.slidesToScroll)?void(i.options.fade===!1&&(d=i.currentSlide,c!==!0?i.animateSlide(g,function(){i.postSlide(d)}):i.postSlide(d))):i.options.infinite===!1&&i.options.centerMode===!0&&(0>a||a>i.slideCount-i.options.slidesToScroll)?void(i.options.fade===!1&&(d=i.currentSlide,c!==!0?i.animateSlide(g,function(){i.postSlide(d)}):i.postSlide(d))):(i.options.autoplay===!0&&clearInterval(i.autoPlayTimer),e=0>d?i.slideCount%i.options.slidesToScroll!==0?i.slideCount-i.slideCount%i.options.slidesToScroll:i.slideCount+d:d>=i.slideCount?i.slideCount%i.options.slidesToScroll!==0?0:d-i.slideCount:d,i.animating=!0,null!==i.options.onBeforeChange&&a!==i.currentSlide&&i.options.onBeforeChange.call(this,i,i.currentSlide,e),f=i.currentSlide,i.currentSlide=e,i.setSlideClasses(i.currentSlide),i.updateDots(),i.updateArrows(),i.options.fade===!0?void(c!==!0?i.fadeSlide(f,e,function(){i.postSlide(e)}):i.postSlide(e)):void(c!==!0?i.animateSlide(h,function(){i.postSlide(e)}):i.postSlide(e))))},b.prototype.startLoad=function(){var a=this;a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.hide(),a.$nextArrow.hide()),a.options.dots===!0&&a.slideCount>a.options.slidesToShow&&a.$dots.hide(),a.$slider.addClass("slick-loading")},b.prototype.swipeDirection=function(){var a,b,c,d,e=this;return a=e.touchObject.startX-e.touchObject.curX,b=e.touchObject.startY-e.touchObject.curY,c=Math.atan2(b,a),d=Math.round(180*c/Math.PI),0>d&&(d=360-Math.abs(d)),45>=d&&d>=0?e.options.rtl===!1?"left":"right":360>=d&&d>=315?e.options.rtl===!1?"left":"right":d>=135&&225>=d?e.options.rtl===!1?"right":"left":"vertical"},b.prototype.swipeEnd=function(){var a=this;if(a.dragging=!1,a.shouldClick=a.touchObject.swipeLength>10?!1:!0,void 0===a.touchObject.curX)return!1;if(a.touchObject.swipeLength>=a.touchObject.minSwipe)switch(a.swipeDirection()){case"left":a.slideHandler(a.currentSlide+a.getSlideCount()),a.currentDirection=0,a.touchObject={};break;case"right":a.slideHandler(a.currentSlide-a.getSlideCount()),a.currentDirection=1,a.touchObject={}}else a.touchObject.startX!==a.touchObject.curX&&(a.slideHandler(a.currentSlide),a.touchObject={})},b.prototype.swipeHandler=function(a){var b=this;if(!(b.options.swipe===!1||"ontouchend"in document&&b.options.swipe===!1||b.options.draggable===!1&&-1!==a.type.indexOf("mouse")))switch(b.touchObject.fingerCount=a.originalEvent&&void 0!==a.originalEvent.touches?a.originalEvent.touches.length:1,b.touchObject.minSwipe=b.listWidth/b.options.touchThreshold,a.data.action){case"start":b.swipeStart(a);break;case"move":b.swipeMove(a);break;case"end":b.swipeEnd(a)}},b.prototype.swipeMove=function(a){var b,c,d,e,f=this;return e=void 0!==a.originalEvent?a.originalEvent.touches:null,!f.dragging||e&&1!==e.length?!1:(b=f.getLeft(f.currentSlide),f.touchObject.curX=void 0!==e?e[0].pageX:a.clientX,f.touchObject.curY=void 0!==e?e[0].pageY:a.clientY,f.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(f.touchObject.curX-f.touchObject.startX,2))),c=f.swipeDirection(),"vertical"!==c?(void 0!==a.originalEvent&&f.touchObject.swipeLength>4&&a.preventDefault(),d=(f.options.rtl===!1?1:-1)*(f.touchObject.curX>f.touchObject.startX?1:-1),f.swipeLeft=f.options.vertical===!1?b+f.touchObject.swipeLength*d:b+f.touchObject.swipeLength*(f.$list.height()/f.listWidth)*d,f.options.fade===!0||f.options.touchMove===!1?!1:f.animating===!0?(f.swipeLeft=null,!1):void f.setCSS(f.swipeLeft)):void 0)},b.prototype.swipeStart=function(a){var b,c=this;return 1!==c.touchObject.fingerCount||c.slideCount<=c.options.slidesToShow?(c.touchObject={},!1):(void 0!==a.originalEvent&&void 0!==a.originalEvent.touches&&(b=a.originalEvent.touches[0]),c.touchObject.startX=c.touchObject.curX=void 0!==b?b.pageX:a.clientX,c.touchObject.startY=c.touchObject.curY=void 0!==b?b.pageY:a.clientY,void(c.dragging=!0))},b.prototype.unfilterSlides=function(){var a=this;null!==a.$slidesCache&&(a.unload(),a.$slideTrack.children(this.options.slide).detach(),a.$slidesCache.appendTo(a.$slideTrack),a.reinit())},b.prototype.unload=function(){var b=this;a(".slick-cloned",b.$slider).remove(),b.$dots&&b.$dots.remove(),b.$prevArrow&&"object"!=typeof b.options.prevArrow&&b.$prevArrow.remove(),b.$nextArrow&&"object"!=typeof b.options.nextArrow&&b.$nextArrow.remove(),b.$slides.removeClass("slick-slide slick-active slick-visible").css("width","")},b.prototype.updateArrows=function(){var a,b=this;a=Math.floor(b.options.slidesToShow/2),b.options.arrows===!0&&b.options.infinite!==!0&&b.slideCount>b.options.slidesToShow&&(b.$prevArrow.removeClass("slick-disabled"),b.$nextArrow.removeClass("slick-disabled"),0===b.currentSlide?(b.$prevArrow.addClass("slick-disabled"),b.$nextArrow.removeClass("slick-disabled")):b.currentSlide>=b.slideCount-b.options.slidesToShow&&b.options.centerMode===!1?(b.$nextArrow.addClass("slick-disabled"),b.$prevArrow.removeClass("slick-disabled")):b.currentSlide>b.slideCount-b.options.slidesToShow+a&&b.options.centerMode===!0&&(b.$nextArrow.addClass("slick-disabled"),b.$prevArrow.removeClass("slick-disabled")))},b.prototype.updateDots=function(){var a=this;null!==a.$dots&&(a.$dots.find("li").removeClass("slick-active"),a.$dots.find("li").eq(Math.floor(a.currentSlide/a.options.slidesToScroll)).addClass("slick-active"))},a.fn.slick=function(a){var c=this;return c.each(function(c,d){d.slick=new b(d,a)})},a.fn.slickAdd=function(a,b,c){var d=this;return d.each(function(d,e){e.slick.addSlide(a,b,c)})},a.fn.slickCurrentSlide=function(){var a=this;return a.get(0).slick.getCurrent()},a.fn.slickFilter=function(a){var b=this;return b.each(function(b,c){c.slick.filterSlides(a)})},a.fn.slickGoTo=function(a,b){var c=this;return c.each(function(c,d){d.slick.changeSlide({data:{message:"index",index:parseInt(a)}},b)})},a.fn.slickNext=function(){var a=this;return a.each(function(a,b){b.slick.changeSlide({data:{message:"next"}})})},a.fn.slickPause=function(){var a=this;return a.each(function(a,b){b.slick.autoPlayClear(),b.slick.paused=!0})},a.fn.slickPlay=function(){var a=this;return a.each(function(a,b){b.slick.paused=!1,b.slick.autoPlay()})},a.fn.slickPrev=function(){var a=this;return a.each(function(a,b){b.slick.changeSlide({data:{message:"previous"}})})},a.fn.slickRemove=function(a,b){var c=this;return c.each(function(c,d){d.slick.removeSlide(a,b)})},a.fn.slickRemoveAll=function(){var a=this;return a.each(function(a,b){b.slick.removeSlide(null,null,!0)})},a.fn.slickGetOption=function(a){var b=this;return b.get(0).slick.options[a]},a.fn.slickSetOption=function(a,b,c){var d=this;return d.each(function(d,e){e.slick.options[a]=b,c===!0&&(e.slick.unload(),e.slick.reinit())})},a.fn.slickUnfilter=function(){var a=this;return a.each(function(a,b){b.slick.unfilterSlides()})},a.fn.unslick=function(){var a=this;return a.each(function(a,b){b.slick&&b.slick.destroy()})},a.fn.getSlick=function(){var a=null,b=this;return b.each(function(b,c){a=c.slick}),a}});
 jQuery.fn.exists=function(){return jQuery(this).length>0;}
jQuery.debug=function(msg,obj){if(window.debug===true&&window.console&&console.log){console.log('[jwstacks] '+msg);if(obj)console.log(obj);}}
jQuery.isMobile=function(){return"ontouchstart"in window||"onmsgesturechange"in window||window.DocumentTouch&&document instanceof DocumentTouch;};var triggerWindowResize=function(){$(window).trigger('resize')};if(typeof(orientationEvent)==undefined){var orientationEvent=0;}
$(window).bind(orientationEvent,triggerWindowResize).load(triggerWindowResize);
!function(a){var b=function(){var b=a(this);b.data("resizetimer")&&window.clearTimeout(b.data("resizetimer")),b.data("resizetimer",window.setTimeout(function(){b.trigger("afterresize")},300))};a.event.special.afterresize={add:function(c){a(this).bind("resize",b);var d=c.handler;c.handler=function(){return d.apply(this,arguments)}},remove:function(){a(this).unbind("resize",b)}},a.fn.extend({afterresize:function(b){return a.isFunction(b)?a(this).bind("afterresize",b):a(this).trigger("afterresize"),this}})}(jQuery);

	return stack;
})(stacks.com_joeworkman_stacks_movingbox2);


// Javascript for com_joeworkman_stacks_foundation_topbar
// ---------------------------------------------------------------------

// Each stack has its own object with its own namespace.  The name of
// that object is the same as the stack's id.
stacks.com_joeworkman_stacks_foundation_topbar = {};

// A closure is defined and assigned to the stack's object.  The object
// is also passed in as 'stack' which gives you a shorthand for referring
// to this object from elsewhere.
stacks.com_joeworkman_stacks_foundation_topbar = (function(stack) {

	// When jQuery is used it will be available as $ and jQuery but only
	// inside the closure.
	var jQuery = stacks.jQuery;
	var $ = jQuery;
	
;(function($){"use strict";var version='20140730.1100',debug=function(msg,obj){if(window.debug===true&&window.console&&console.log){console.log('[rwflexnav] '+msg);if(obj)console.log(obj);}};$.fn.divideNav=function(options){var opts=$.extend(true,{},$.fn.rwflexnav.defaults,options||{});var container=$(this);$('> li.'+opts.className.divider,container).remove();var items=$('> li',container);$('<li>').addClass(opts.className.divider).insertBefore(items);$('<li>').addClass(opts.className.divider).insertAfter(items.last());return $(container);};$.fn.hackRWFlexNav=function(options){var opts=$.extend(true,{},$.fn.rwflexnav.defaults,options||{});var container=$(this);$('> ul.'+opts.className.menu,container).first().removeClass(opts.className.dropdown).find('ul').removeClass(opts.className.menu);$('> ul.'+opts.className.menu,container).find('li').each(function(){if($(this).find('ul').length===0)$(this).removeClass(opts.className.hasDropdown);});return $(container);};$.fn.processRWFlexNav=function(options){var opts=$.extend(true,{},$.fn.rwflexnav.defaults,options||{});var container=$(this);$('li a header',container).parent().attr('href','javascript:void(0)').parent().addClass(opts.className.heading);$('li a label',container).unwrap();$('li a button',container).each(function(){var classes=$(this).attr('class');var text=$(this).text();$(this).parent().addClass(opts.className.button).addClass(classes).html(text).parent().addClass(opts.className.hasButton);});$('li a hr',container).unwrap().parent().addClass(opts.className.divider).html('');return $(container);};$.fn.rwflexnav=function(options){var opts=$.extend(true,{},$.fn.rwflexnav.defaults,options||{});return this.each(function(){if($('> ul.'+opts.className.menu,this).length===0){console.error('RWFlexNav Aborting! Unable to locate menu with class "'+opts.className.menu+'"');return false;}
var method=$.fn.rwflexnav[opts.scope],container=typeof method==='function'?method(opts,this):false;if(opts.hackNav)container.hackRWFlexNav(opts);container.processRWFlexNav(opts);if(opts.divide)$('> ul.'+opts.className.menu,container).divideNav(opts);debug('Processing Complete',container);return $(container);});};$.fn.rwflexnav.all=function(opts,container){return $(container);};$.fn.rwflexnav.top=function(opts,container){$('> ul.'+opts.className.menu,container).find('ul').remove();return $(container);};$.fn.rwflexnav.subnav=function(opts,container){var menu=$('> ul.'+opts.className.menu,container).first(),submenu=$('> ul.'+opts.className.menu+'> li:nth-child('+opts.subNavIndex+') > ul',container),classes=menu.attr('class');debug('Scope SubNav',submenu);if(submenu.length===0){console.error('RWFlexNav Error! No subnav found at index '+opts.subNavIndex);}
else{submenu.addClass(opts.className.menu).addClass(classes).insertAfter(menu);submenu.find('>li.js-generated').remove();menu.remove();}
return $(container);};$.fn.rwflexnav.active=function(opts,container){var menu=$('> ul.'+opts.className.menu,container).first(),submenu=$('> ul.'+opts.className.menu+' > li.'+opts.className.active+' > ul',container),classes=menu.attr('class');debug('Scope Active',submenu);if(submenu.length===0){console.error('RWFlexNav Error! No active subnav found with class "'+opts.className.active+'"');}
else{submenu.addClass(opts.className.menu).addClass(classes).insertAfter(menu);submenu.find('>li.js-generated').remove();menu.remove();}
return $(container);};$.fn.rwflexnav.defaults={scope:'all',hackNav:true,divide:false,subNavIndex:0,className:{menu:'menu',heading:'heading',divider:'divider',active:'active',dropdown:'dropdown',button:'button',hasButton:'has-form',hasDropdown:'has-dropdown'}};})(jQuery);

	return stack;
})(stacks.com_joeworkman_stacks_foundation_topbar);


// Javascript for stacks_in_1_page40
// ---------------------------------------------------------------------

// Each stack has its own object with its own namespace.  The name of
// that object is the same as the stack's id.
stacks.stacks_in_1_page40 = {};

// A closure is defined and assigned to the stack's object.  The object
// is also passed in as 'stack' which gives you a shorthand for referring
// to this object from elsewhere.
stacks.stacks_in_1_page40 = (function(stack) {

	// When jQuery is used it will be available as $ and jQuery but only
	// inside the closure.
	var jQuery = stacks.jQuery;
	var $ = jQuery;
	


	return stack;
})(stacks.stacks_in_1_page40);


// Javascript for stacks_in_6944_page40
// ---------------------------------------------------------------------

// Each stack has its own object with its own namespace.  The name of
// that object is the same as the stack's id.
stacks.stacks_in_6944_page40 = {};

// A closure is defined and assigned to the stack's object.  The object
// is also passed in as 'stack' which gives you a shorthand for referring
// to this object from elsewhere.
stacks.stacks_in_6944_page40 = (function(stack) {

	// When jQuery is used it will be available as $ and jQuery but only
	// inside the closure.
	var jQuery = stacks.jQuery;
	var $ = jQuery;
	
 $(document).ready(function(){var movingbox=$('#stacks_in_6944_page40 >.movingbox'),effect='slide',fade=(effect=='fade')?true:false,vertical=(effect=='slide-vert')?true:false,initial=1-1,sync=0,autoplay=true,b1conf={breakpoint:480,settings:{slidesToShow:(effect=='fade')?1:1,slidesToScroll:1,initialSlide:1-1,centerMode:false,centerPadding:'%',dots:true,arrows:false}},b2conf={breakpoint:660,settings:{slidesToShow:(effect=='fade')?1:1,slidesToScroll:1,initialSlide:1-1,centerMode:false,centerPadding:'%',dots:true,arrows:false}},breakpoints=[];if(window.debug===true)autoplay=false;var slideTitles=[];movingbox.children().each(function(index){var title=index+1;var headers=$(this).find('h1,h2,h3,h4,h5,h6');if(headers.exists()){$.debug('Slide Headers',headers);title=headers.first().text().replace(/\s+/g,'-').toLowerCase();}
else{var images=$(this).find('img');if(images.exists()){$.debug('Slide Images',images);alt=images.first().attr('alt').replace(/\s+/g,'-').toLowerCase();title=alt!==''?alt:title;}}
$.debug('Slide Title #'+index+':'+title);slideTitles.push(title);});$.debug('All Slide Titles:',slideTitles);if(true)breakpoints.push(b1conf);if(false)breakpoints.push(b2conf);if(false){$('>.stacks_out',movingbox).each(function(){$(this).width($(this).width());});}
movingbox.slick({asNavFor:(0)?'#movingbox2':null,adaptiveHeight:false,variableWidth:false,accessibility:true,focusOnSelect:true,lazyLoad:'progressive',autoplay:autoplay,autoplaySpeed:4000,arrows:false,useCSS:true,cssEase:'ease',dots:true,draggable:true,fade:fade,vertical:vertical,infinite:true,pauseOnHover:false,pauseOnDotsHover:false,speed:500,swipe:true,touchMove:true,touchThreshold:5,rtl:false,slide:'.stacks_out',initialSlide:1-1,slidesToShow:(effect=='fade')?1:1,slidesToScroll:1,centerMode:false,centerPadding:'10.00%',responsive:breakpoints});var goToSlide=function(hash){var index=slideTitles.indexOf(hash);$.debug('Linking to hash '+hash+'with index '+index,slideTitles);if(index>=0){$.debug('Moving to slide with index '+index);movingbox.slickGoTo(parseInt(index)).slickPause();if(sync>0){$(window).load(function(){if($('#movingbox2').getSlick()){$('#movingbox2').slickGoTo(parseInt(index)).slickPause();}});}}};if(window.location.hash){var hash=location.hash.substring(1);goToSlide(hash);}
$('a.mb-slide').click(function(){var hash=$(this).attr('href').substring(1);goToSlide(hash);return false;});if($.isMobile()){$('.tap-target',movingbox).removeClass('hide').click(function(){$(this).hasClass('prev')?movingbox.slickPrev():movingbox.slickNext();})}});

	return stack;
})(stacks.stacks_in_6944_page40);


// Javascript for stacks_in_15760_page40
// ---------------------------------------------------------------------

// Each stack has its own object with its own namespace.  The name of
// that object is the same as the stack's id.
stacks.stacks_in_15760_page40 = {};

// A closure is defined and assigned to the stack's object.  The object
// is also passed in as 'stack' which gives you a shorthand for referring
// to this object from elsewhere.
stacks.stacks_in_15760_page40 = (function(stack) {

	// When jQuery is used it will be available as $ and jQuery but only
	// inside the closure.
	var jQuery = stacks.jQuery;
	var $ = jQuery;
	
 var opacity=100,opacityBottom=85,hoverOpacity=15,subNavIndex=1,divide=0,zoneDivider=0,fullWidthMenu='',scope='all',style='solid',menuAlign='centered',baseColor='#FFFFFF',baseColorTop='#737373',hoverColor='#FFFFFF',styleActive=''==='styleActive'?true:false,rwmenu='rw'==='rw'?true:false,magellan='rw'==='magellan'?true:false,menuItems='#stacks_in_15760_page40 ul:not(.title-area) li:hover:not(.has-dropdown) > a:not(.button)',dropdowns='#stacks_in_15760_page40 ul:not(.title-area) li.has-dropdown';if(opacity<100||style=="faded"){$.glass({colors:[baseColor,baseColorTop],gradient:style,opacity:[opacity,opacityBottom],selector:'#stacks_in_15760_page40 .top-bar-wrapper'});$.glass({colors:[baseColor],opacity:[opacity],selector:'#stacks_in_15760_page40 ul:not(.title-area) ul.dropdown'});}
if(hoverOpacity<100){if(styleActive){var active=magellan?'#stacks_in_15760_page40 .top-bar-wrapper.styleActive .magellanList li.active > a':'#stacks_in_15760_page40 .top-bar-wrapper.styleActive li.active > a';$.glass({colors:[hoverColor],opacity:[hoverOpacity],selector:active});}
$.glass({colors:[hoverColor],opacity:[hoverOpacity],selector:menuItems});$.glass({colors:[hoverColor],opacity:[hoverOpacity],selector:dropdowns+'> a.hovered:not(.button)'});}
$(document).ready(function(){var stack=$('#stacks_in_15760_page40');stack.parent().css({overflow:'visible'});$('.top-bar-section:not(.menu-magellan):not(.menu-none)',stack).rwflexnav({scope:scope,subNavIndex:subNavIndex,divide:divide});if(magellan){if(divide)$('ul.magellanList',stack).divideNav();$('.magellanList li',stack).each(function(){var id=$(this).data('magellan-arrival');$('a',this).attr('href','#'+id);});}
if($('ul.zone',stack).exists()){if(zoneDivider)$('ul.zone',stack).divideNav();}
if($('.zone-align-left ul.zone',stack).exists()||!$('ul.zone',stack).exists()){$('ul.menu',stack).addClass(menuAlign);}
if(fullWidthMenu==='full-width'&&menuAlign==='centered'){var calcMenuItemWidth=function(){var items=$('.menu-align-centered ul.menu > li:not(.divider)',stack),dividers=$('.menu-align-centered ul.menu > li.divider',stack);if($('.top-bar .toggle-topbar',stack).is(':visible')){items.removeAttr('style');}
else{var count=items.length;if(count>0){var width=dividers.length>0?100/count-0.2:100/count;items.width(width+"%");}}};calcMenuItemWidth();$(window).on('resize',calcMenuItemWidth);}
$(dropdowns).hover(function(){$('> a:not(.button)',this).addClass('hovered');},function(){$('> a:not(.button)',this).removeClass('hovered');});});

	return stack;
})(stacks.stacks_in_15760_page40);


// Javascript for stacks_in_25368_page40
// ---------------------------------------------------------------------

// Each stack has its own object with its own namespace.  The name of
// that object is the same as the stack's id.
stacks.stacks_in_25368_page40 = {};

// A closure is defined and assigned to the stack's object.  The object
// is also passed in as 'stack' which gives you a shorthand for referring
// to this object from elsewhere.
stacks.stacks_in_25368_page40 = (function(stack) {

	// When jQuery is used it will be available as $ and jQuery but only
	// inside the closure.
	var jQuery = stacks.jQuery;
	var $ = jQuery;
	
 $(document).ready(function(){var movingbox=$('#stacks_in_25368_page40 >.movingbox'),effect='slide',fade=(effect=='fade')?true:false,vertical=(effect=='slide-vert')?true:false,initial=1-1,sync=0,autoplay=true,b1conf={breakpoint:480,settings:{slidesToShow:(effect=='fade')?1:1,slidesToScroll:1,initialSlide:1-1,centerMode:false,centerPadding:'%',dots:true,arrows:false}},b2conf={breakpoint:660,settings:{slidesToShow:(effect=='fade')?1:1,slidesToScroll:1,initialSlide:1-1,centerMode:false,centerPadding:'%',dots:true,arrows:false}},breakpoints=[];if(window.debug===true)autoplay=false;var slideTitles=[];movingbox.children().each(function(index){var title=index+1;var headers=$(this).find('h1,h2,h3,h4,h5,h6');if(headers.exists()){$.debug('Slide Headers',headers);title=headers.first().text().replace(/\s+/g,'-').toLowerCase();}
else{var images=$(this).find('img');if(images.exists()){$.debug('Slide Images',images);alt=images.first().attr('alt').replace(/\s+/g,'-').toLowerCase();title=alt!==''?alt:title;}}
$.debug('Slide Title #'+index+':'+title);slideTitles.push(title);});$.debug('All Slide Titles:',slideTitles);if(true)breakpoints.push(b1conf);if(false)breakpoints.push(b2conf);if(false){$('>.stacks_out',movingbox).each(function(){$(this).width($(this).width());});}
movingbox.slick({asNavFor:(0)?'#movingbox2':null,adaptiveHeight:false,variableWidth:false,accessibility:true,focusOnSelect:true,lazyLoad:'progressive',autoplay:autoplay,autoplaySpeed:4000,arrows:false,useCSS:true,cssEase:'ease',dots:true,draggable:true,fade:fade,vertical:vertical,infinite:false,pauseOnHover:true,pauseOnDotsHover:false,speed:500,swipe:true,touchMove:true,touchThreshold:5,rtl:false,slide:'.stacks_out',initialSlide:1-1,slidesToShow:(effect=='fade')?1:3,slidesToScroll:1,centerMode:false,centerPadding:'10.00%',responsive:breakpoints});var goToSlide=function(hash){var index=slideTitles.indexOf(hash);$.debug('Linking to hash '+hash+'with index '+index,slideTitles);if(index>=0){$.debug('Moving to slide with index '+index);movingbox.slickGoTo(parseInt(index)).slickPause();if(sync>0){$(window).load(function(){if($('#movingbox2').getSlick()){$('#movingbox2').slickGoTo(parseInt(index)).slickPause();}});}}};if(window.location.hash){var hash=location.hash.substring(1);goToSlide(hash);}
$('a.mb-slide').click(function(){var hash=$(this).attr('href').substring(1);goToSlide(hash);return false;});if($.isMobile()){$('.tap-target',movingbox).removeClass('hide').click(function(){$(this).hasClass('prev')?movingbox.slickPrev():movingbox.slickNext();})}});

	return stack;
})(stacks.stacks_in_25368_page40);


// Javascript for stacks_in_7010_page40
// ---------------------------------------------------------------------

// Each stack has its own object with its own namespace.  The name of
// that object is the same as the stack's id.
stacks.stacks_in_7010_page40 = {};

// A closure is defined and assigned to the stack's object.  The object
// is also passed in as 'stack' which gives you a shorthand for referring
// to this object from elsewhere.
stacks.stacks_in_7010_page40 = (function(stack) {

	// When jQuery is used it will be available as $ and jQuery but only
	// inside the closure.
	var jQuery = stacks.jQuery;
	var $ = jQuery;
	
 $(document).ready(function(){var movingbox=$('#stacks_in_7010_page40 >.movingbox'),effect='slide',fade=(effect=='fade')?true:false,vertical=(effect=='slide-vert')?true:false,initial=1-1,sync=0,autoplay=true,b1conf={breakpoint:480,settings:{slidesToShow:(effect=='fade')?1:1,slidesToScroll:1,initialSlide:1-1,centerMode:false,centerPadding:'%',dots:true,arrows:false}},b2conf={breakpoint:660,settings:{slidesToShow:(effect=='fade')?1:1,slidesToScroll:1,initialSlide:1-1,centerMode:false,centerPadding:'%',dots:true,arrows:false}},breakpoints=[];if(window.debug===true)autoplay=false;var slideTitles=[];movingbox.children().each(function(index){var title=index+1;var headers=$(this).find('h1,h2,h3,h4,h5,h6');if(headers.exists()){$.debug('Slide Headers',headers);title=headers.first().text().replace(/\s+/g,'-').toLowerCase();}
else{var images=$(this).find('img');if(images.exists()){$.debug('Slide Images',images);alt=images.first().attr('alt').replace(/\s+/g,'-').toLowerCase();title=alt!==''?alt:title;}}
$.debug('Slide Title #'+index+':'+title);slideTitles.push(title);});$.debug('All Slide Titles:',slideTitles);if(true)breakpoints.push(b1conf);if(false)breakpoints.push(b2conf);if(false){$('>.stacks_out',movingbox).each(function(){$(this).width($(this).width());});}
movingbox.slick({asNavFor:(0)?'#movingbox2':null,adaptiveHeight:false,variableWidth:false,accessibility:true,focusOnSelect:true,lazyLoad:'progressive',autoplay:autoplay,autoplaySpeed:4000,arrows:false,useCSS:true,cssEase:'ease',dots:true,draggable:true,fade:fade,vertical:vertical,infinite:true,pauseOnHover:false,pauseOnDotsHover:false,speed:500,swipe:true,touchMove:true,touchThreshold:5,rtl:false,slide:'.stacks_out',initialSlide:1-1,slidesToShow:(effect=='fade')?1:1,slidesToScroll:1,centerMode:false,centerPadding:'10.00%',responsive:breakpoints});var goToSlide=function(hash){var index=slideTitles.indexOf(hash);$.debug('Linking to hash '+hash+'with index '+index,slideTitles);if(index>=0){$.debug('Moving to slide with index '+index);movingbox.slickGoTo(parseInt(index)).slickPause();if(sync>0){$(window).load(function(){if($('#movingbox2').getSlick()){$('#movingbox2').slickGoTo(parseInt(index)).slickPause();}});}}};if(window.location.hash){var hash=location.hash.substring(1);goToSlide(hash);}
$('a.mb-slide').click(function(){var hash=$(this).attr('href').substring(1);goToSlide(hash);return false;});if($.isMobile()){$('.tap-target',movingbox).removeClass('hide').click(function(){$(this).hasClass('prev')?movingbox.slickPrev():movingbox.slickNext();})}});

	return stack;
})(stacks.stacks_in_7010_page40);


// Javascript for stacks_in_14664_page40
// ---------------------------------------------------------------------

// Each stack has its own object with its own namespace.  The name of
// that object is the same as the stack's id.
stacks.stacks_in_14664_page40 = {};

// A closure is defined and assigned to the stack's object.  The object
// is also passed in as 'stack' which gives you a shorthand for referring
// to this object from elsewhere.
stacks.stacks_in_14664_page40 = (function(stack) {

	// When jQuery is used it will be available as $ and jQuery but only
	// inside the closure.
	var jQuery = stacks.jQuery;
	var $ = jQuery;
	
//-- TimelineThing  Copyright 2014 RapidWeaver Central --//
var $timelinething = jQuery.noConflict();
$timelinething(document).ready(function(){
	$timelinething("#slidethingTrigger_stacks_in_14664_page40, .open_stacks_in_14664_page40, .slidethingTrigger_stacks_in_14664_page40, #slidethingContainer_stacks_in_14664_page40 .slidethingButton").click(function(){
		$timelinething("#slidethingContainer_stacks_in_14664_page40").slideToggle(600);
	});
});


	return stack;
})(stacks.stacks_in_14664_page40);


// Javascript for stacks_in_14671_page40
// ---------------------------------------------------------------------

// Each stack has its own object with its own namespace.  The name of
// that object is the same as the stack's id.
stacks.stacks_in_14671_page40 = {};

// A closure is defined and assigned to the stack's object.  The object
// is also passed in as 'stack' which gives you a shorthand for referring
// to this object from elsewhere.
stacks.stacks_in_14671_page40 = (function(stack) {

	// When jQuery is used it will be available as $ and jQuery but only
	// inside the closure.
	var jQuery = stacks.jQuery;
	var $ = jQuery;
	
//-- TimelineThing  Copyright 2014 RapidWeaver Central --//
var $timelinething = jQuery.noConflict();
$timelinething(document).ready(function(){
	$timelinething("#slidethingTrigger_stacks_in_14671_page40, .open_stacks_in_14671_page40, .slidethingTrigger_stacks_in_14671_page40, #slidethingContainer_stacks_in_14671_page40 .slidethingButton").click(function(){
		$timelinething("#slidethingContainer_stacks_in_14671_page40").slideToggle(600);
	});
});


	return stack;
})(stacks.stacks_in_14671_page40);


// Javascript for stacks_in_14678_page40
// ---------------------------------------------------------------------

// Each stack has its own object with its own namespace.  The name of
// that object is the same as the stack's id.
stacks.stacks_in_14678_page40 = {};

// A closure is defined and assigned to the stack's object.  The object
// is also passed in as 'stack' which gives you a shorthand for referring
// to this object from elsewhere.
stacks.stacks_in_14678_page40 = (function(stack) {

	// When jQuery is used it will be available as $ and jQuery but only
	// inside the closure.
	var jQuery = stacks.jQuery;
	var $ = jQuery;
	
//-- TimelineThing  Copyright 2014 RapidWeaver Central --//
var $timelinething = jQuery.noConflict();
$timelinething(document).ready(function(){
	$timelinething("#slidethingTrigger_stacks_in_14678_page40, .open_stacks_in_14678_page40, .slidethingTrigger_stacks_in_14678_page40, #slidethingContainer_stacks_in_14678_page40 .slidethingButton").click(function(){
		$timelinething("#slidethingContainer_stacks_in_14678_page40").slideToggle(600);
	});
});


	return stack;
})(stacks.stacks_in_14678_page40);


// Javascript for stacks_in_14685_page40
// ---------------------------------------------------------------------

// Each stack has its own object with its own namespace.  The name of
// that object is the same as the stack's id.
stacks.stacks_in_14685_page40 = {};

// A closure is defined and assigned to the stack's object.  The object
// is also passed in as 'stack' which gives you a shorthand for referring
// to this object from elsewhere.
stacks.stacks_in_14685_page40 = (function(stack) {

	// When jQuery is used it will be available as $ and jQuery but only
	// inside the closure.
	var jQuery = stacks.jQuery;
	var $ = jQuery;
	
//-- TimelineThing  Copyright 2014 RapidWeaver Central --//
var $timelinething = jQuery.noConflict();
$timelinething(document).ready(function(){
	$timelinething("#slidethingTrigger_stacks_in_14685_page40, .open_stacks_in_14685_page40, .slidethingTrigger_stacks_in_14685_page40, #slidethingContainer_stacks_in_14685_page40 .slidethingButton").click(function(){
		$timelinething("#slidethingContainer_stacks_in_14685_page40").slideToggle(600);
	});
});


	return stack;
})(stacks.stacks_in_14685_page40);


