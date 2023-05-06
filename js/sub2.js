//faq
$(function(){
    $(".faq").click(function(){
        $(this).siblings().stop().slideToggle("fast");
        $(this).parents().siblings().children(".answer").stop().slideUp("fast");
        $(this).toggleClass("active");
        $(this).parents().siblings().children(".faq").removeClass("active");
    });
});

$(function(){
    $("#pager > a").eq(0).click(function(){
        $("#list1").show();
        $("#list2,#list3,#list4,#list5").hide();
        $($(this)).addClass("on");
        $($(this)).siblings().removeClass("on");
    })
});

$(function(){
    $("#pager > a").eq(1).click(function(){
        $("#list2").show();
        $("#list1,#list3,#list4,#list5").hide();
        $($(this)).addClass("on");
        $($(this)).siblings().removeClass("on");
    })
});

$(function(){
    $("#subtab > li").eq(0).click(function(){
        $("#list1").show();
        $("#list2,#list3,#list4,#list5").hide();
        $($(this)).addClass("active1");
        $($(this)).siblings().removeClass("active1");
        $("#pager > a").eq(0).on("click", function () {
            $("#list1").show();
            $("#list2,#list3,#list4,#list5").hide();
            $($(this)).addClass("on");
            $($(this)).siblings().removeClass("on");
        });
        $("#pager > a").eq(1).show().removeClass("on");
    })
});

$(function(){
    $("#subtab > li").eq(1).click(function(){
        $("#list3").show();
        $("#list1,#list2,#list4,#list5").hide();
        $($(this)).addClass("active1");
        $($(this)).siblings().removeClass("active1");
        $("#pager > a").eq(0).addClass("on");
        $("#pager > a").eq(0).off("click").click();
        $("#pager > a").eq(1).hide();
    })
});

$(function(){
    $("#subtab > li").eq(2).click(function(){
        $("#list4").show();
        $("#list2,#list1,#list3,#list5").hide();
        $($(this)).addClass("active1");
        $($(this)).siblings().removeClass("active1");
        $("#pager > a").eq(0).addClass("on");
        $("#pager > a").eq(0).off("click").click();
        $("#pager > a").eq(1).hide();
    })
});

$(function(){
    $("#subtab > li").eq(3).click(function(){
        $("#list5").show();
        $("#list2,#list3,#list4,#list1").hide();
        $($(this)).addClass("active1");
        $($(this)).siblings().removeClass("active1");
        $("#pager > a").eq(0).addClass("on");
        $("#pager > a").eq(0).off("click").click();
        $("#pager > a").eq(1).hide();
    })
});

$(function(){
    $("#mobmenu > ul > li:nth-of-type(2)").click(function(){
        $("#secondmenu").toggle();
    });
});

$(document).on('change', "#select", function () {
    if ($(this).val() == 1) {
        $("#list1").show();
        $("#list2,#list3,#list4,#list5").hide();
        $($(this)).addClass("active1");
        $($(this)).siblings().removeClass("active1");
        $("#pager > a").eq(0).on("click", function () {
            $("#list1").show();
            $("#list2,#list3,#list4,#list5").hide();
            $($(this)).addClass("on");
            $($(this)).siblings().removeClass("on");
        });
        $("#pager > a").eq(1).show().removeClass("on");
    } else if ($(this).val() == 2) {
        $("#list3").show();
        $("#list1,#list2,#list4,#list5").hide();
        $($(this)).addClass("active1");
        $($(this)).siblings().removeClass("active1");
        $("#pager > a").eq(0).addClass("on");
        $("#pager > a").eq(0).off("click").click();
        $("#pager > a").eq(1).hide();
    } else if ($(this).val() == 3) {
        $("#list4").show();
        $("#list2,#list1,#list3,#list5").hide();
        $($(this)).addClass("active1");
        $($(this)).siblings().removeClass("active1");
        $("#pager > a").eq(0).addClass("on");
        $("#pager > a").eq(0).off("click").click();
        $("#pager > a").eq(1).hide();
    } else if ($(this).val() == 4) {
        $("#list5").show();
        $("#list2,#list3,#list4,#list1").hide();
        $($(this)).addClass("active1");
        $($(this)).siblings().removeClass("active1");
        $("#pager > a").eq(0).addClass("on");
        $("#pager > a").eq(0).off("click").click();
        $("#pager > a").eq(1).hide();
    }
});
//1:1문의
$(function(){
    $("#write > div:nth-of-type(2) > a").click(function(){
        $(this).addClass("active3");
        $(this).siblings().removeClass("active3");
    })
});

$(document).on('change',"#mail",function () {
    var pro=$(this).children('option:selected').val()
    $('#mail2').val(pro);

    if($(this).val()=="직접입력"){
       $("#mail2").focus();
       $("#mail2").val("");
    }
});

