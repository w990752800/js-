/**
 * Created by Personal on 2017/10/30.
 */
/**
 * 一个元素到页面的left，top //绝对距离
 */
function getPos(obj){
    var pos = {left:0,top:0};
    while (obj){
        pos.left += obj.offsetLeft;
        pos.top += obj.offsetTop;
        obj = obj.offsetParent;
    }
    return pos;
}

/**
 * 获取ajax的核心对象
 */
function getXhr(){
    var xhr = null;
    if(window.XMLHttpRequest){
        xhr = new XMLHttpRequest();
    }else{
        xhr = new ActiveXObject("Microsoft.XMLHttp");
    }
    return xhr;
}