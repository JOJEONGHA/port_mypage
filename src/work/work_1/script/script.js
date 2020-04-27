let st_mov = false,
    sp_mov = false,
    p_mov = false;
$(function(){
    let view_size = $(window).width();
    $(window).resize(function(){
        view_size = $(window).width();
    });

    dialog_ani();
    view_ani(view_size);
    
    $(".main_cont .main_wrap").on("mousewheel DOMMouseScroll",function(e){
        e.preventDefault();
        var delta = 0;
        if (!event) event = window.event;
        if (event.wheelDelta) {
            delta = event.wheelDelta / 120;
            if (window.opera) delta = -delta;
        } 
        else if (event.detail)
            delta = -event.detail / 3;
        
        if (delta < 0) {
            $(".main_cont").stop().animate({scrollLeft: $(".main_cont").scrollLeft() + 50}, 0, "linear");
        } else {
            $(".main_cont").stop().animate({scrollLeft: $(".main_cont").scrollLeft() - 50}, 0, "linear");
        }

        view_ani(view_size); 
    })
})

function dialog_ani(){
    $(".ser_img2 > .dia_wrap > .dia1").css({ "animation": "expand-bounce .3s linear", "opacity": 1 });
    $(".ser_img2 > .dia_wrap > .dia2").css({ "animation": "expand-bounce .3s linear 1s"});
    $(".ser_img2 > .dia_wrap > .dia3").css({ "animation": "expand-bounce .3s linear 1.8s"});
    $(".ser_img2 > .dia_wrap > .dia4").css({ "animation": "expand-bounce .3s linear 2.8s"});
    setT($(".ser_img2 > .dia_wrap > .dia2"),1000);
    setT($(".ser_img2 > .dia_wrap > .dia3"),1800);
    setT($(".ser_img2 > .dia_wrap > .dia4"),2800);
    window.setTimeout(function () { 
        $(".ser_img2 > .dia_wrap > img").animate({ "opacity": 0,"animation":"empty" }); 
    },3300);
    window.setTimeout(function(){
        dialog_ani();
    },4300)
}
function setT(ele,time){
    window.setTimeout(function () { 
        ele.animate({ "opacity": 1}); 
    },time);
}
function view_ani(view_size){
    console.log("st_mov >> ",st_mov);
    console.log("sp_mov >> ",sp_mov);
    console.log("p_mov >> ",p_mov);
    // view animation
    let ser_tech_view = $(".main_cont .main_wrap .ser_tech_cont"),
    soci_pri_view = $(".main_cont .main_wrap .soc_pri_cont"),
    pri_view = $(".ser_tech_cont .right_cont .tech_cont > a");

    if(view_size*0.8 >= ser_tech_view.offset().left && st_mov == false){
        ser_tech_view.css({
            "visibility":"visible"
        });
        ser_tech_view.find(".ser_img1").css({
            "animation" : "ser_img1_ani 1.2s"
        })
        ser_tech_view.find(".ser_img2").css({
            "animation" : "ser_img2_ani 1.2s"
        })
        ser_tech_view.find(".ser_txt > a > h1").css({
            "animation" : "left_ani 1.2s"
        })
        ser_tech_view.find(".ser_txt > a > span").css({
            "animation" : "right_ani 1.2s"
        })
        st_mov = true;
    }else if(view_size*0.8 >= pri_view.offset().left && p_mov == false){
        pri_view.css({
            "visibility" : "visible"
        })
        pri_view.children(".tit").css({
            "animation" : "left_ani 1.2s"
        })
        pri_view.children(".tech_img").css({
            "animation" : "right_ani 1.2s"
        })
        p_mov = true;
    }else if(view_size*0.8 >= soci_pri_view.offset().left && sp_mov == false){
        soci_pri_view.css({
            "visibility":"visible"
        });
        soci_pri_view.find(".img_soc").css({
            "animation" : "left_ani 1.2s"
        })
        soci_pri_view.find(".soc_txt > h1").css({
            "animation" : "right_ani 1.2s"
        })
        soci_pri_view.find(".soc_txt > span").css({
            "animation" : "right_ani 1.2s"
        })
        sp_mov = true;
    }
}