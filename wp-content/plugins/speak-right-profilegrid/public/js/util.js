"use strict";function cancelEvent(t){return(t=t||window.event)&&((t=t.originalEvent||t).stopPropagation&&t.stopPropagation(),t.preventDefault&&t.preventDefault()),!1}function getGuid(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(t){var e=16*Math.random()|0;return("x"==t?e:3&e|8).toString(16)})}!function(t){var e="",r=!1,o={},n=!!(t.chrome&&chrome.storage&&chrome.storage.local),a=!n&&!!t.localStorage;function c(){return r?(r=!1,""):e}t.ConfigStorage={prefix:function(t){e=t},noPrefix:function(){r=!0},get:function(){var t,e,r,l=Array.prototype.slice.call(arguments),i=l.pop(),x=[],f=1==l.length,s=!0,u=c();for(e=0;e<l.length;e++)if("xt_"!=(r=l[e]=u+l[e]).substr(0,3)&&void 0!==o[r])x.push(o[r]);else if(a){try{t=localStorage.getItem(r)}catch(t){a=!1}try{t=null!=t&&JSON.parse(t)}catch(e){t=!1}x.push(o[r]=t)}else n?s=!1:x.push(o[r]=!1);if(s)return i(f?x[0]:x);chrome.storage.local.get(l,function(t){var n;for(x=[],e=0;e<l.length;e++)n=null!=(n=t[r=l[e]])&&JSON.parse(n),x.push(o[r]=n);i(f?x[0]:x)})},set:function(t,e){var r,l,i={},x=c();for(r in t)if(t.hasOwnProperty(r))if(l=t[r],o[r=x+r]=l,l=JSON.stringify(l),a)try{localStorage.setItem(r,l)}catch(t){a=!1}else i[r]=l;!a&&n?chrome.storage.local.set(i,e):e&&e()},remove:function(){var t,e,r,l=Array.prototype.slice.call(arguments),i=c();for("function"==typeof l[l.length-1]&&(r=l.pop()),t=0;t<l.length;t++)if(e=l[t]=i+l[t],delete o[e],a)try{localStorage.removeItem(e)}catch(t){a=!1}n?chrome.storage.local.remove(l,r):r&&r()}}}(this);