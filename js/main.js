$(document).ready(function () {
    // [펜,마카,형광펜,미술용품] li 누르면 테두리랑 글씨 색 변경
    $(".penname-list li").click(function () {
        $(this).addClass("redline");
        $(this).siblings().removeClass('redline');
        $(this).find("a").addClass('redtext');
        $(this).siblings().find('a').removeClass('redtext');
    });
    $('.penname-list li:eq(0)').trigger('click');
    // [펜, 마카, 형광펜, 미술용품] li 누르면 해당하는 리스트 나오게 하기
    $(".mySwiper").show();
    $(".penname-list li:eq(0)").click(function () {
        $(".swiper").hide();
        $(".mySwiper").fadeIn();
    });
    $(".penname-list li:eq(1)").click(function () {
        $(".swiper").hide();
        $(".mySwiper1").fadeIn();
    });
    $(".penname-list li:eq(2)").click(function () {
        $(".swiper").hide();
        $(".mySwiper2").fadeIn();
    });
    $(".penname-list li:eq(3)").click(function () {
        $(".swiper").hide();
        $(".mySwiper3").fadeIn();
    });

    // 마우스 휠 이벤트
    if (window.matchMedia("(min-width:1400px)").matches) {
        // 새로고침하면 강제로 위에서 시작
        // history.scrollRestoration = "manual"
        // 마우스 휠 이벤트
        // window.addEventListener("wheel", function (e) {
        //     e.preventDefault();
        // }, { passive: false });
        // 휠해서 화면 크기 조절하고 싶을때 위에거 주석처리해야됨

        var mHtml = $("html");
        var page = 1;
        mHtml.animate({ scrollTop: 0 }, 1000);

        $(window).on("wheel", function (e) {
            if (mHtml.is(":animated")) return;
            if (e.originalEvent.deltaY > 0) {
                if (page == 5) {
                    return
                };
                page++;
            } else if (e.originalEvent.deltaY < 0) {
                if (page == 1) {
                    return
                };
                page--;
            }
            var posTop = (page - 1) * $(window).height();
            mHtml.animate({ scrollTop: posTop }, 800);
        });
    };
});



