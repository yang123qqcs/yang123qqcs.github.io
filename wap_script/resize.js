
//鏍规嵁瀹瑰櫒鐨勫搴︽敼鍙樺浘鐗囩殑瀹藉害锛屼互鐢ㄤ簬鑷€傚簲
function resizeImg() {
    //鑾峰彇瀹瑰櫒鐨勫搴�
    var boxWidth = $(".xw_pic").width();
    //瀹氫箟鍥剧墖鏂扮殑瀹藉害锛屼笌瀹瑰櫒瀹藉害鐩哥瓑
    var newWidth = boxWidth;
    //瀹氫箟鍥剧墖鐨勯珮搴�
    var imgHeidht = boxWidth / 4 * 3;
    //缁欑洰鏍囧璞￠噸鏂板畾涔夋牱寮忥紝杈惧埌缁熶竴鐨勬晥鏋�
    $(".xw_pic img").css({"width": newWidth, "height": imgHeidht});
    $(".m-info").css({"height": imgHeidht});
     // $(".xw_pic img").css({"width": "97px", "height": "60px"});

    var zsWidth = $(".imgs-item").width();
    //瀹氫箟鍥剧墖鏂扮殑瀹藉害锛屼笌瀹瑰櫒瀹藉害鐩哥瓑
    var newZsW = zsWidth;
    //瀹氫箟鍥剧墖鐨勯珮搴�
    var imgH = zsWidth / 4 * 2;
    //缁欑洰鏍囧璞￠噸鏂板畾涔夋牱寮忥紝杈惧埌缁熶竴鐨勬晥鏋�
    $(".imgs-item img").css({"width": newZsW, "height": imgH});


};
//椤甸潰鍔犺浇鎵ц涓€娆esize()
window.onload=function () {
    resizeImg();
};
$(function () {
    resizeImg();
});

//绐楀彛閲嶇疆鐨勬椂鍊欎篃闇€瑕佽皟鐢ㄦ洿鏀瑰搴︾殑鏂规硶
$(window).resize(function () {
    resizeImg();
});