"use strict";var r,e=["all","some","none"],n={all:function(e){for(var n=r(),t=0;t<e.lenght;t++){if(!n[e[t]])return!1}return!0},some:function(e){for(var n=r(),t=0;t<e.lenght;t++){if(n[e[t]])return!0}return!1},none:function(e){for(var n=r(),t=0;t<e.lenght;t++){if(n[e[t]])return!1}return!0}};function t(r,t){var i=t.arg,o=t.value,a=void 0===o?[]:o,u=Array.isArray(a)?a:[a];i=e.includes(i)?i:"all",n[i](u)||r.parentNode&&r.parentNode.removeChild(r)}var i={inserted:t,update:t},o={install:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e.directive("permission",i),r=n.getPermissionMap||function(){return{}}}};module.exports=o;
