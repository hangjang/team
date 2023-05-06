// header
$(function () {
    const icons = document.querySelectorAll('.icon');
    icons.forEach(icon => {
        icon.addEventListener('click', (event) => {
            icon.classList.toggle("open");
        });
    });
    $(".icon").click(function(){
        $("nav").toggle();
    });
});

// 헤더 이펙트
function detectMediaSize(){
    if(window.matchMedia('all and (min-width: 0px) and (max-width: 1100px)').matches){
        $(function(){
            $('nav > ul > li').click(function(){
                $(this).children(".sub").stop().slideToggle();
                $(this).siblings().children(".sub").stop().slideUp();
            });
        });
        
    } else if(window.matchMedia('all and (min-width: 1100px)').matches){
        $(function(){
            $('nav').mouseenter(function(){
                $('.sub').show();
                $('.navdown').show();
            });
        
            $('nav').mouseleave(function(){
                $('.navdown').hide();
                $('.sub').hide();
            });
        
            $(".sub").hover(function(){
                $(this).children().css({background:"#582b7a"});
            }).mouseleave(function(){
                $(this).children().css({background:"#63318a"});
            });
        
            $("nav > ul > li").hover(function(){
                $(this).find("ul").css({borderTop:"2px solid #c40f39"});
            }).mouseleave(function(){
                $(this).find("ul").css({borderTop:"2px solid #e3e3e3"});
            });
        });
    }
}
window.addEventListener('resize',detectMediaSize,false);
detectMediaSize();


// family site 네개 박스 호버
if (window.matchMedia("(min-width:1400px)").matches) {
    $(function () {
        $('.family-wrapbox li').hover(function () {
            $(this).children().children().css({ "border": "2px solid #c40f39", "transition": "all 0.2s ease-in" });
        }, function () {
            $(this).children().children().css("border", "2px solid #ccc");
        });
    });
}
// family site 화살표 클릭하면 2개씩 넘기기
if (window.matchMedia("(max-width:500px)").matches) {
    $(function () {
        $(".monami-left").click(function () {
            $(".family-wrapbox li:last").prependTo(".family-wrapbox");
            $(".family-wrapbox li:last").prependTo(".family-wrapbox");
            $(".family-wrapbox").css('margin-left', '-100%');
            $(".family-wrapbox").animate({ marginLeft: "0" }, 850);
        });
        $(".monami-right").click(function () {
            $(".family-wrapbox").animate({ marginLeft: "-100%" }, 850, function () {
                // $(".family-wrapbox li:eq(0), .family-wrapbox li:eq(1)").appendTo(".family-wrapbox");
                $(".family-wrapbox li:first").appendTo(".family-wrapbox");
                $(".family-wrapbox li:first").appendTo(".family-wrapbox");
                $(".family-wrapbox").css('margin-left', '0');
            });
        });
    });
};

// family site 화살표 클릭하면 1개씩 넘기기
if (window.matchMedia("(min-width:501px)").matches) {
    $(function () {
        $(".monami-left").click(function () {
            $(".family-wrapbox li:last").prependTo(".family-wrapbox")
            $(".family-wrapbox").css('margin-left', '-33.3%');
            $(".family-wrapbox").animate({ marginLeft: "0" }, 850);
        });

        $(".monami-right").click(function () {
            $(".family-wrapbox").animate({ marginLeft: "-33.3%" }, 850, function () {
                $(".family-wrapbox li:first").appendTo(".family-wrapbox");
                $(".family-wrapbox").css('margin-left', '0');
            });
        });
    });
};

// footer
$(document).ready(function(){
    $('.business_btn').click(function(){
        $('.business').toggle();
        if($('.business').css('display')=='block'){
            $('.business_btn i').css('transform','rotate(0deg)')
            $('footer ul:first').css('padding-top','200px')
        }else{
            $('.business_btn i').css('transform','rotate(180deg)')
            $('footer ul:first').css('padding-top','75px')
        }
    });
    
    if (window.matchMedia("(max-width: 501px)").matches) {
        $('.icon img').eq(0).attr({src:'img/footer/insta-white.png'});
        $('.icon img').eq(1).attr({src:'img/footer/facebook-white.png'});
        $('.icon img').eq(2).attr({src:'img/footer/blog-white.png'});
        $('.icon img').eq(3).attr({src:'img/footer/email-white.png'});
    }
});