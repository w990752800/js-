/**
 * Created by Personal on 2017/10/26.
 */
define(function(require,exports,module){
    var btn1 = document.getElementById('btn1');
    var div1 = document.getElementById('div1');
    var div2 = document.getElementById('div2');
    var div3 = document.getElementById('div3');
    require('./drag.js').drag(div3);
    btn1.onclick = function(){
        div1.style.display = 'block';
    };
    require('./scale.js').scale(div1,div2);
});