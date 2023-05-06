$(document).ready(function () {
    //휠조작
    if (window.matchMedia("(min-width: 1400px)").matches) {
        var mHtml = $("html");
        var page = 1;
        mHtml.animate({scrollTop : 0},1000);

        $(window).on("wheel", function(e) {
            if(mHtml.is(":animated")) return;
            if(e.originalEvent.deltaY > 0) {
                if(page == 4) return
                page++;
            } else if(e.originalEvent.deltaY < 0) {
                if(page == 1){
                    return;
                }
                page--;
            }
            var posTop =(page-1) * $(window).height();
            mHtml.animate({scrollTop : posTop},800);
        })

        //header2 조작
        $('#header2>ul>li').click(function(){
            if( $(this).children('ul').css('display')=='none'){
                $(this).children('ul').show();
            }else{
                $(this).children('ul').hide();
            }
        })

    }

    $('.more h4').click(function () {
        var mt_i=$(this).index();
        $('.more ul').eq(mt_i).show().siblings('ul').hide();


        $(this).css({ 'border-bottom': '3px solid #c40f39', 'color': '#c40f39' })

        if (window.matchMedia("(max-width: 1399px)").matches) {
            $(this).siblings().css({ 'background': '#f8f8f8', 'color': '#222' })
        }else{
            $(this).siblings().css({ 'border-bottom': 'none', 'color': '#222' })
        }
    })

    if (window.matchMedia("(min-width: 501px)").matches) {
        $('.more ul li').hover(function(){
            $(this).find('.img_box').prepend('<span></span>');
        },function(){
            $(this).find('span').hide();
        })
    }
})