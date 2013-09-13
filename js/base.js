window.matchMedia=window.matchMedia||function(t){"use strict";var e,n=t.documentElement,i=n.firstElementChild||n.firstChild,a=t.createElement("body"),r=t.createElement("div");return r.id="mq-test-1",r.style.cssText="position:absolute;top:-100em",a.style.background="none",a.appendChild(r),function(t){return r.innerHTML='&shy;<style media="'+t+'"> #mq-test-1 { width: 42px; }</style>',n.insertBefore(a,i),e=42===r.offsetWidth,n.removeChild(a),{matches:e,media:t}}}(document),function(){if(!window.matchMedia("all").addListener){var t=window.matchMedia;window.matchMedia=function(e){var n,i=t(e),a=[],r=i.matches,s=function(){var n=t(e),s=n.matches&&!r,o=!n.matches&&r;if(s||o)for(var l=0,c=a.length;c>l;l++)a[l].call(i,n);r=n.matches};return i.addListener=function(t){a.push(t),n||(n=setInterval(s,1e3))},i.removeListener=function(t){for(var e=0,i=a.length;i>e;e++)a[e]===t&&a.splice(e,1);!a.length&&n&&clearInterval(n)},i}}}(),function(){var t=/\blang(?:uage)?-(?!\*)(\w+)\b/i,e=self.Prism={util:{type:function(t){return Object.prototype.toString.call(t).match(/\[object (\w+)\]/)[1]},clone:function(t){var n=e.util.type(t);switch(n){case"Object":var i={};for(var a in t)t.hasOwnProperty(a)&&(i[a]=e.util.clone(t[a]));return i;case"Array":return t.slice()}return t}},languages:{extend:function(t,n){var i=e.util.clone(e.languages[t]);for(var a in n)i[a]=n[a];return i},insertBefore:function(t,n,i,a){a=a||e.languages;var r=a[t],s={};for(var o in r)if(r.hasOwnProperty(o)){if(o==n)for(var l in i)i.hasOwnProperty(l)&&(s[l]=i[l]);s[o]=r[o]}return a[t]=s},DFS:function(t,n){for(var i in t)n.call(t,i,t[i]),"Object"===e.util.type(t)&&e.languages.DFS(t[i],n)}},highlightAll:function(t,n){for(var i,a=document.querySelectorAll('code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'),r=0;i=a[r++];)e.highlightElement(i,t===!0,n)},highlightElement:function(i,a,r){for(var s,o,l=i;l&&!t.test(l.className);)l=l.parentNode;if(l&&(s=(l.className.match(t)||[,""])[1],o=e.languages[s]),o){i.className=i.className.replace(t,"").replace(/\s+/g," ")+" language-"+s,l=i.parentNode,/pre/i.test(l.nodeName)&&(l.className=l.className.replace(t,"").replace(/\s+/g," ")+" language-"+s);var c=i.textContent;if(c){c=c.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\u00a0/g," ");var g={element:i,language:s,grammar:o,code:c};if(e.hooks.run("before-highlight",g),a&&self.Worker){var u=new Worker(e.filename);u.onmessage=function(t){g.highlightedCode=n.stringify(JSON.parse(t.data)),g.element.innerHTML=g.highlightedCode,r&&r.call(g.element),e.hooks.run("after-highlight",g)},u.postMessage(JSON.stringify({language:g.language,code:g.code}))}else g.highlightedCode=e.highlight(g.code,g.grammar),g.element.innerHTML=g.highlightedCode,r&&r.call(i),e.hooks.run("after-highlight",g)}}},highlight:function(t,i){return n.stringify(e.tokenize(t,i))},tokenize:function(t,n){var i=e.Token,a=[t],r=n.rest;if(r){for(var s in r)n[s]=r[s];delete n.rest}t:for(var s in n)if(n.hasOwnProperty(s)&&n[s]){var o=n[s],l=o.inside,c=!!o.lookbehind||0;o=o.pattern||o;for(var g=0;a.length>g;g++){var u=a[g];if(a.length>t.length)break t;if(!(u instanceof i)){o.lastIndex=0;var h=o.exec(u);if(h){c&&(c=h[1].length);var d=h.index-1+c,h=h[0].slice(c),f=h.length,p=d+f,m=u.slice(0,d+1),y=u.slice(p+1),v=[g,1];m&&v.push(m);var w=new i(s,l?e.tokenize(h,l):h);v.push(w),y&&v.push(y),Array.prototype.splice.apply(a,v)}}}}return a},hooks:{all:{},add:function(t,n){var i=e.hooks.all;i[t]=i[t]||[],i[t].push(n)},run:function(t,n){var i=e.hooks.all[t];if(i&&i.length)for(var a,r=0;a=i[r++];)a(n)}}},n=e.Token=function(t,e){this.type=t,this.content=e};if(n.stringify=function(t){if("string"==typeof t)return t;if("[object Array]"==Object.prototype.toString.call(t))return t.map(n.stringify).join("");var i={type:t.type,content:n.stringify(t.content),tag:"span",classes:["token",t.type],attributes:{}};"comment"==i.type&&(i.attributes.spellcheck="true"),e.hooks.run("wrap",i);var a="";for(var r in i.attributes)a+=r+'="'+(i.attributes[r]||"")+'"';return"<"+i.tag+' class="'+i.classes.join(" ")+'" '+a+">"+i.content+"</"+i.tag+">"},!self.document)return self.addEventListener("message",function(t){var n=JSON.parse(t.data),i=n.language,a=n.code;self.postMessage(JSON.stringify(e.tokenize(a,e.languages[i]))),self.close()},!1),void 0;var i=document.getElementsByTagName("script");i=i[i.length-1],i&&(e.filename=i.src,document.addEventListener&&!i.hasAttribute("data-manual")&&("loading"!==document.readyState?setTimeout(e.highlightAll,0):document.addEventListener("DOMContentLoaded",e.highlightAll)))}(),Prism.languages.markup={comment:/&lt;!--[\w\W]*?--(&gt;|&gt;)/g,prolog:/&lt;\?.+?\?&gt;/,doctype:/&lt;!DOCTYPE.+?&gt;/,cdata:/&lt;!\[CDATA\[[\w\W]*?]]&gt;/i,tag:{pattern:/&lt;\/?[\w:-]+\s*(?:\s+[\w:-]+(?:=(?:("|')(\\?[\w\W])*?\1|\w+))?\s*)*\/?&gt;/gi,inside:{tag:{pattern:/^&lt;\/?[\w:-]+/i,inside:{punctuation:/^&lt;\/?/,namespace:/^[\w-]+?:/}},"attr-value":{pattern:/=(?:('|")[\w\W]*?(\1)|[^\s>]+)/gi,inside:{punctuation:/=|&gt;|"/g}},punctuation:/\/?&gt;/g,"attr-name":{pattern:/[\w:-]+/g,inside:{namespace:/^[\w-]+?:/}}}},entity:/&amp;#?[\da-z]{1,8};/gi},Prism.hooks.add("wrap",function(t){"entity"===t.type&&(t.attributes.title=t.content.replace(/&amp;/,"&"))}),Prism.languages.css={comment:/\/\*[\w\W]*?\*\//g,atrule:/@[\w-]+?(\s+[^;{]+)?(?=\s*{|\s*;)/gi,url:/url\((["']?).*?\1\)/gi,selector:/[^\{\}\s][^\{\}]*(?=\s*\{)/g,property:/(\b|\B)[a-z-]+(?=\s*:)/gi,string:/("|')(\\?.)*?\1/g,important:/\B!important\b/gi,ignore:/&(lt|gt|amp);/gi,punctuation:/[\{\};:]/g},Prism.languages.markup&&Prism.languages.insertBefore("markup","tag",{style:{pattern:/(&lt;|<)style[\w\W]*?(>|&gt;)[\w\W]*?(&lt;|<)\/style(>|&gt;)/gi,inside:{tag:{pattern:/(&lt;|<)style[\w\W]*?(>|&gt;)|(&lt;|<)\/style(>|&gt;)/gi,inside:Prism.languages.markup.tag.inside},rest:Prism.languages.css}}}),Prism.languages.clike={comment:{pattern:/(^|[^\\])(\/\*[\w\W]*?\*\/|\/\/.*?(\r?\n|$))/g,lookbehind:!0},string:/("|')(\\?.)*?\1/g,keyword:/\b(if|else|while|do|for|return|in|instanceof|function|new|try|catch|finally|null|break|continue)\b/g,"boolean":/\b(true|false)\b/g,number:/\b-?(0x)?\d*\.?[\da-f]+\b/g,operator:/[-+]{1,2}|!|=?&lt;|=?&gt;|={1,2}|(&amp;){1,2}|\|?\||\?|\*|\//g,ignore:/&(lt|gt|amp);/gi,punctuation:/[{}[\];(),.:]/g},Prism.languages.javascript=Prism.languages.extend("clike",{keyword:/\b(var|let|if|else|while|do|for|return|in|instanceof|function|new|with|typeof|try|catch|finally|null|break|continue)\b/g,number:/\b(-?(0x)?\d*\.?[\da-f]+|NaN|-?Infinity)\b/g}),Prism.languages.insertBefore("javascript","keyword",{regex:{pattern:/(^|[^/])\/(?!\/)(\[.+?]|\\.|[^/\r\n])+\/[gim]{0,3}(?=\s*($|[\r\n,.;})]))/g,lookbehind:!0}}),Prism.languages.markup&&Prism.languages.insertBefore("markup","tag",{script:{pattern:/(&lt;|<)script[\w\W]*?(>|&gt;)[\w\W]*?(&lt;|<)\/script(>|&gt;)/gi,inside:{tag:{pattern:/(&lt;|<)script[\w\W]*?(>|&gt;)|(&lt;|<)\/script(>|&gt;)/gi,inside:Prism.languages.markup.tag.inside},rest:Prism.languages.javascript}}}),function(t,e,n){var i=e.matchMedia;"undefined"!=typeof module&&module.exports?module.exports=n(i):"function"==typeof define&&define.amd?define(function(){return e[t]=n(i)}):e[t]=n(i)}("enquire",this,function(t){"use strict";function e(t,e){var n,i=0,a=t.length;for(i;a>i&&(n=e(t[i],i),n!==!1);i++);}function n(t){return"[object Array]"===Object.prototype.toString.apply(t)}function i(t){return"function"==typeof t}function a(t){this.options=t,!t.deferSetup&&this.setup()}function r(e,n){this.query=e,this.isUnconditional=n,this.handlers=[],this.mql=t(e);var i=this;this.listener=function(t){i.mql=t,i.assess()},this.mql.addListener(this.listener)}function s(){if(!t)throw Error("matchMedia not present, legacy browsers require a polyfill");this.queries={},this.browserIsIncapable=!t("only all").matches}return a.prototype={setup:function(){this.options.setup&&this.options.setup(),this.initialised=!0},on:function(){!this.initialised&&this.setup(),this.options.match&&this.options.match()},off:function(){this.options.unmatch&&this.options.unmatch()},destroy:function(){this.options.destroy?this.options.destroy():this.off()},equals:function(t){return this.options===t||this.options.match===t}},r.prototype={addHandler:function(t){var e=new a(t);this.handlers.push(e),this.matches()&&e.on()},removeHandler:function(t){var n=this.handlers;e(n,function(e,i){return e.equals(t)?(e.destroy(),!n.splice(i,1)):void 0})},matches:function(){return this.mql.matches||this.isUnconditional},clear:function(){e(this.handlers,function(t){t.destroy()}),this.mql.removeListener(this.listener),this.handlers.length=0},assess:function(){var t=this.matches()?"on":"off";e(this.handlers,function(e){e[t]()})}},s.prototype={register:function(t,a,s){var o=this.queries,l=s&&this.browserIsIncapable;return o[t]||(o[t]=new r(t,l)),i(a)&&(a={match:a}),n(a)||(a=[a]),e(a,function(e){o[t].addHandler(e)}),this},unregister:function(t,e){var n=this.queries[t];return n&&(e?n.removeHandler(e):(n.clear(),delete this.queries[t])),this}},new s});