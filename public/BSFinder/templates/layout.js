define(['jade'], function(jade){
  return function (locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var buf = [];
with (locals || {}) {
var interp;
buf.push('<div id="search-area" class="overlay"><button id="removeBtn">clear</button></div><div id="map"></div>');
}
return buf.join("");
};
});