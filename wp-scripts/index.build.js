!function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:r})},n.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e){!function(t){t.element.createElement;t.blocks.registerBlockType("blockexample-plugin/block",{title:"Love",icon:"heart",category:"common",attributes:{activity:{type:"string"}},edit:function(t){return t.isSelected?createElement("input",{onChange:function(t){return function(e){t.setAttributes({activity:e.target.value})}}(t),value:t.attributes.activity||""}):createElement("p",null,"'I ♥ ' + props.attributes.activity + '.'")},save:function(t){return createElement("p",null,"'I ♥ ' + props.attributes.activity + '.'")}})}(window.wp)}]);