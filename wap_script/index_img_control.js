

//jquery ready鍔犺浇涓€娆�
$(function () {
    sliderResize()
});

//椤甸潰鍔犺浇鎵ц涓€娆esize()
//window.onload=function () {
   // resizeImg();
//};

function sliderResize() {
    var obj=$(".mui-slider .mui-slider-group .mui-slider-item img");
    //鑾峰彇瀹瑰櫒鐨勫搴�
    var boxWidth = obj.width();
    //瀹氫箟鍥剧墖鏂扮殑瀹藉害锛屼笌瀹瑰櫒瀹藉害鐩哥瓑
    var newWidth = boxWidth;
    //瀹氫箟鍥剧墖鐨勯珮搴�
    var imgHeidht = boxWidth / 4 * 3;
    //缁欑洰鏍囧璞￠噸鏂板畾涔夋牱寮忥紝杈惧埌缁熶竴鐨勬晥鏋�
    $(".mark img").css({"width": newWidth, "height": imgHeidht});
};