/**
 * Created by Personal on 2017/10/26.
 */
define(function(require,exports,module){

    function drag(obj){
        var disx = 0;
        var disy = 0;
        obj.onmousedown = function(ev){
            var ev = ev || window.event;
            disx = ev.clientX - obj.offsetLeft;
            disy = ev.clientY - obj.offsetTop;
            document.onmousemove = function(ev){
                var ev = ev || window.event;
                var L = ev.clientX - disx;
                var T = ev.clientY - disy;
                L = require('./range.js').range(L,document.documentElement.clientWidth - obj.offsetWidth, 0);
                T = require('./range.js').range(T,document.documentElement.clientHeight - obj.offsetHeight, 0);

                obj.style.left = L +'px';
                obj.style.top = T +'px';
            }
            document.onmouseup = function(){
                document.onmousemove = null;
                document.onmouseup = null;
            }
            return false;
        }
    }
    exports.drag = drag;

});