$(document).ready(function () {

    

    //header2 조작
    $('#header2>ul>li').click(function(){
        if( $(this).children('ul').css('display')=='none'){
            $(this).children('ul').show();
        }else{
            $(this).children('ul').hide();
        }
    })
    $('#header2 .product li').click(function(){
        var h2_i=$(this).index();
        $('.slide>li').eq(h2_i).show().siblings().hide();


        var s_h=$('.slide>li').eq(h2_i).children('h2').text();  
        $(this).parent().siblings('strong').text(s_h)
    })


    

    function color_ch(){
        $('.color_btn button').click(function(){
            var c_i=$(this).index();
            $(this).parent().siblings('.product').children('img').eq(c_i).show().siblings().hide();
        })
    }
    color_ch();

    // 좌우버튼 호버
    
    var i=0;
    if (window.matchMedia("(min-width: 501px)").matches) {
        function Name(){
            var j=i+1;
            if(j>2){j=0}
            var next_name=$('.slide>li').eq(j).children('h2').text();
            $('.next span').text(next_name);
            $('#header2 product storng').text(next_name);
            
            j=i-1;
            if(j<-2){j=0}
            var prev_name=$('.slide li').eq(j).children('h2').text();
            $('.prev span').text(prev_name);

            $('.prev_next button').hover(function () {
                $(this).children('span').stop().animate({'opacity':'100%','width':'350%'})
            },function(){
                $(this).children('span').stop().animate({'opacity':'0','width':'270%'})
            })
        }
        Name()
    }
    
    // 좌우버튼 클릭
    
    $('.next').click(function () {
        i++;
        if(i>2){i=0}
        $('.slide>li').eq(i).show().siblings().hide();

        Name();
    });
    $('.prev').click(function () {
        i--;
        if(i<-2){i=0}
        $('.slide>li').eq(i).show().siblings().hide();
        Name();
    });




    // 닙모양 버튼
    $('.nib_open').click(function () {
        $('.nib').fadeIn();
    })
    $('.nib_close').click(function () {
        $('.nib').fadeOut();
    })
    $('.prev_next button').click(function () {
        $('.nib').hide();
    })


    // 하단 다른 제품 메뉴


    $('.more h4').click(function () {
        var mt_i=$(this).index();
        console.log(mt_i)
        $('.more>ul').eq(mt_i).show().css('display','flex').siblings('ul').hide();


        $(this).css({ 'background': '#c40f39', 'color': 'white' })
        if (window.matchMedia("(max-width: 1399px)").matches) {
            $(this).siblings().css({ 'background': '#f8f8f8', 'color': '#222' })
        }else{
            $(this).siblings().css({ 'background': 'white', 'color': '#222' })
        }
    })

    if (window.matchMedia("(min-width: 1400px)").matches) {
        $('.more ul li').hover(function(){
            $(this).prepend('<span></span>');
            $(this).find('.infor').show();
        },function(){
            $(this).children('span').hide();
            $(this).find('.infor').hide();
        })
    }


})