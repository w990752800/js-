/**
 * Created by Personal on 2017/10/26.
 */
define(function(require,exports,module){
    function show(){
        require('./module2.js');
        alert(a);
    }
    exports.show = show;
});