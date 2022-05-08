"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[179],{1089:function(){var e=function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r=document.createElement("".concat(e));r.textContent="".concat(n);for(var i=arguments.length,a=new Array(i>2?i-2:0),o=2;o<i;o++)a[o-2]=arguments[o];return(t=r.classList).add.apply(t,a),r},t=e("h1","RS-School Virtual-keyboard","title"),n=e("h3",'To switch the keyboard layout, use the "shift left" + "shift right" key combination or the "EN/RU" key on the virtual keyboard.',"subtitle"),r=e("h3","The project is written in the system macOS Monterey","ostext"),i=e("textarea","Hello! Check this field","entryField");var a=function(){this.main.classList.remove("keyboard_hidden"),this.field.value=this.props.value},o={en:["EN","`","1","2","3","4","5","6","7","8","9","0","-","=","Backspace","Tab","q","w","e","r","t","y","u","i","o","p","[","]","\\","|","CapsLock","a","s","d","f","g","h","j","k","l",";","'","Enter","shift left","z","x","c","v","b","n","m",",",".","/","&#9650","shift right","ctrl","hide 🥷🏻","alt L"," ","alt R","&#9664","&#9660","&#9658","del"],ru:["RU","]","1","2","3","4","5","6","7","8","9","0","-","=","Backspace","Tab","й","ц","у","к","е","н","г","ш","щ","з","х","ъ","\\","ё","CapsLock","ф","ы","в","а","п","р","о","л","д","ж","э","Enter","shift left","я","ч","с","м","и","т","ь","б","ю","/","&#9650","shift right","ctrl","hide 🥷🏻","alt L"," ","alt R","&#9664","&#9660","&#9658","del"]},s=function(){var e=JSON.parse(localStorage.getItem("lang")),t=JSON.parse(localStorage.getItem("en")),n=JSON.parse(localStorage.getItem("ru")),r=e?t:n,i=document.createDocumentFragment();return r.forEach((function(e){var t=document.createElement("button");if(t.classList.add("keyboard__key"),t.setAttribute("type","button"),t.innerHTML=e,"Tab"!==e&&"Backspace"!==e||t.classList.add("keyboard__key_small"),"shift left"!==e&&"shift right"!==e||t.classList.add("keyboard__key_large"),"CapsLock"===e&&t.classList.add("keyboard__key_middle","keyboard__key_activated"),"Enter"===e&&t.classList.add("keyboard__key_middle")," "===e&&t.classList.add("keyboard__key_extra-large"),"shift"===e&&t.classList.add("keyboard__key_large"),"hide 🥷🏻"===e&&t.classList.add("keyboard__key_small","keyboard__key_small_dark"),"Tab"===e||"CapsLock"===e||"shift left"===e||"ctrl"===e){var n=document.createElement("div");n.className="breakline",i.append(n)}i.append(t)})),i};function l(e){return function(e){if(Array.isArray(e))return c(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return c(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var d=function(e){var t=e.target;if(this.keysCollection=l(this.keysContainer.querySelectorAll(".keyboard__key")),t.closest(".keyboard__key")&&this.field.focus(),"Enter"===t.innerHTML&&(this.props.value+="\n")," "===t.innerHTML&&(this.props.value+=""),"Tab"===t.innerHTML&&(e.preventDefault(),this.props.value+="   "),"Backspace"===t.innerHTML){var n=this.props.value;this.props.value=n.slice(0,n.length-1)}"del"===t.innerHTML&&this.setCaret(),"CapsLock"===t.innerHTML&&(t.classList.toggle("keyboard__key_active"),this.toggleCapsKey(this.keysCollection)),"EN"===t.innerHTML&&(localStorage.setItem("lang","false"),this.keysContainer.innerHTML=" ",this.keysContainer.append(s())),"RU"===t.innerHTML&&(window.localStorage.setItem("lang","true"),this.keysContainer.innerHTML=" ",this.keysContainer.append(s())),("hide 🥷🏻"===t.innerHTML||t===document.body||t.closest(".title")||t.closest(".subtitle")||t.closest(".ostext"))&&this.main.classList.add("keyboard_hidden"),1===t.innerHTML.length&&(this.props.value+=this.props.capsLock?t.innerHTML.toUpperCase():t.innerHTML.toLowerCase()),this.field.value=this.props.value};function u(e){return function(e){if(Array.isArray(e))return h(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return h(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return h(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var y=function(e){var t=this;1===e.key.length&&(e.preventDefault(),this.props.value+=e.key,this.field.value=this.props.value),e.altKey&&(console.log("test"),e.preventDefault()),this.upperLatterHandler(e);var n=u(this.keysContainer.querySelectorAll(".keyboard__key"));n.forEach((function(r){e.key===r.innerHTML&&r.classList.add("keyboard__key_active"),"CapsLock"===e.key&&"CapsLock"===r.innerHTML&&(e.preventDefault(),r.classList.add("keyboard__key__active"),t.toggleCapsKey(n)),"Tab"===e.key&&"Tab"===r.innerHTML&&t.addValue(e,"   "),"Delete"===e.key&&"del"===r.innerHTML&&t.setCaret()," "===e.key&&" "===r.innerHTML&&t.addValue(e,""),"Enter"===e.key&&"Enter"===r.innerHTML&&t.addValue(e,"\n"),"Backspace"===e.key&&"Backspace"===r.innerHTML&&(e.preventDefault(),t.props.value=t.props.value.slice(0,t.props.value.length-1),t.field.value=t.props.value),"ArrowUp"===e.key&&"▲"===r.innerHTML&&t.addValue(e,"▲"),"ArrowLeft"===e.key&&"◀"===r.innerHTML&&t.addValue(e,"◀"),"ArrowRight"===e.key&&"►"===r.innerHTML&&t.addValue(e,"►"),"ArrowDown"===e.key&&"▼"===r.innerHTML&&(e.preventDefault(),t.addValue(e,"▼")),"ShiftLeft"===e.code&&"shift left"===r.innerHTML&&(r.classList.add("keyboard__key_active"),t.toggleLangsHandler()),("ShiftRight"===e.code&&"shift right"===r.innerHTML||"AltLeft"===e.code&&"alt L"===r.innerHTML||"AltRight"===e.code&&"alt R"===r.innerHTML||"Control"===e.key&&"ctrl"===r.innerHTML||"ArrowUp"===e.key&&"▲"===r.innerHTML||"ArrowLeft"===e.key&&"◀"===r.innerHTML||"ArrowRight"===e.key&&"►"===r.innerHTML||"ArrowDown"===e.key&&"▼"===r.innerHTML)&&r.classList.add("keyboard__key_active")}))};function f(e){return function(e){if(Array.isArray(e))return p(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return p(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return p(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var k=function(e){var t=this;this.field.focus();var n=f(this.keysContainer.querySelectorAll(".keyboard__key"));this.lowerLatterHandler(e),n.forEach((function(r){e.key===r.innerHTML&&(r.classList.remove("keyboard__key_active"),t.props.value+=""),"CapsLock"===e.key&&"CapsLock"===r.innerHTML&&(r.classList.remove("keyboard__key_active"),t.toggleCapsKey(n)),("ShiftLeft"===e.code&&"shift left"===r.innerHTML||"ShiftRight"===e.code&&"shift right"===r.innerHTML||"AltLeft"===e.code&&"alt L"===r.innerHTML||"AltRight"===e.code&&"alt R"===r.innerHTML||"Control"===e.key&&"ctrl"===r.innerHTML||"ArrowUp"===e.key&&"▲"===r.innerHTML||"ArrowLeft"===e.key&&"◀"===r.innerHTML||"ArrowRight"===e.key&&"►"===r.innerHTML||"ArrowDown"===e.key&&"▼"===r.innerHTML)&&r.classList.remove("keyboard__key_active")}))};var L=function(e){var t=this;this.props.capsLock=!this.props.capsLock,e.forEach((function(e){var n=e;1===n.innerHTML.length&&(n.innerHTML=t.props.capsLock?n.innerHTML.toUpperCase():n.innerHTML.toLowerCase())}))},v=function(e){var t=e;window.localStorage.setItem("en",JSON.stringify(t.en)),window.localStorage.setItem("ru",JSON.stringify(t.ru))},b=["","[","!",'"',"№","%",":",",",".",";","(",")","_","+"],H=["","~","!","@","#","$","%","^","&","*","(",")","_","+"];var g=function(e){var t=e.target;if("shift left"===t.innerHTML||"shift right"===t.innerHTML||"ShiftLeft"===e.code||"ShiftRight"===e.code){this.keysCollection=this.keysContainer.querySelectorAll(".keyboard__key");for(var n="RU"===this.keysCollection[0].innerHTML?b:H,r=1;r<14;)this.keysCollection[r].innerHTML=n[r],r+=1;this.keysCollection.forEach((function(e){var t=e;"["===t.innerHTML&&(t.innerHTML="{"),"]"===t.innerHTML&&(t.innerHTML="}"),";"===t.innerHTML&&(t.innerHTML=":"),"'"===t.innerHTML&&(t.innerHTML='"'),","===t.innerHTML&&(t.innerHTML="<"),"."===t.innerHTML&&(t.innerHTML=">"),"/"===t.innerHTML&&(t.innerHTML="?"),1===t.innerHTML.length&&(t.innerHTML=t.innerHTML.toUpperCase())}))}};var T=function(e){var t=e.target;"shift left"!==t.innerHTML&&"shift right"!==t.innerHTML&&"ShiftLeft"!==e.code&&"ShiftRight"!==e.code||(this.keysContainer.innerHTML="",this.keysContainer.append(s()))};var m=function(){var e=this,t=JSON.parse(localStorage.lang);document.addEventListener("keyup",(function(n){"ShiftRight"===n.code&&t&&(localStorage.setItem("lang","false"),e.keysContainer.innerHTML="",e.keysContainer.append(s())),"ShiftRight"!==n.code||t||(window.localStorage.setItem("lang","true"),e.keysContainer.innerHTML="",e.keysContainer.append(s()))}))};var M=function(e,t){e.preventDefault(),this.props.value+=t,this.field.value=this.props.value};var _=function(){var e=this.field.selectionStart,t=this.field.selectionEnd;this.props.value=e===t?this.props.value.slice(0,e-1)+this.props.value.slice(t):this.props.value.slice(0,e)+this.props.value.slice(t),this.field.value=this.props.value,this.field.focus(),this.field.selectionStart=e,this.field.selectionEnd=t};function C(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var w=function(){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this.main=null,this.keysContainer=null,this.field=null,this.keysCollection=null,this.props={value:"",capsLock:!1},this.clickHandler=d.bind(this),this.keyDownHandler=y.bind(this),this.keyUpHandler=k.bind(this),this.upperLatterHandler=g.bind(this),this.lowerLatterHandler=T.bind(this),this.open=a.bind(this),this.toggleCapsKey=L.bind(this),this.toggleLangsHandler=m.bind(this),this.addValue=M.bind(this),this.setCaret=_.bind(this)}var n,r,i;return n=t,(r=[{key:"run",value:function(){var t=this;v(o),this.main=e("div","","keyboard","keyboard_hidden"),this.keysContainer=e("div","","keyboard__keys"),this.keysContainer.append(s()),this.field=document.querySelector(".entryField"),this.field.addEventListener("focus",(function(){t.open()})),document.body.addEventListener("click",(function(e){t.clickHandler(e,t.field)})),document.body.addEventListener("mousedown",this.upperLatterHandler),document.body.addEventListener("mouseup",this.lowerLatterHandler),document.addEventListener("keydown",(function(e){t.keyDownHandler(e)})),document.body.addEventListener("keyup",(function(e){t.keyUpHandler(e)})),this.main.append(this.keysContainer),document.body.append(this.main)}}])&&C(n.prototype,r),i&&C(n,i),Object.defineProperty(n,"prototype",{writable:!1}),t}(),S=function(){document.body.append(t,i,n,r),(new w).run()};document.addEventListener("DOMContentLoaded",S)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[202],(function(){return t(1202),t(1089)}));e.O()}]);