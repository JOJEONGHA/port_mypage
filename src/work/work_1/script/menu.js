$(function(){
    // dept1 tags
    let menu = $(".menu_cont .menu_wrap .menu_set"),
        dept1_nums = obj.menu.dept1.length,
        menu_tags = "";
    for(var i = 0; i < dept1_nums; i++){
        menu_tags += "<li><a href='javascript:void(0)'><span>";
        menu_tags += obj.menu.dept1[i];
        menu_tags += "</span></a>";

        // dept2 tags
        let dept1_txt = obj.menu.dept1[i];
        menu_tags += "<ul class = 'dept2'>";
        for(var j = 0; j < obj.menu[dept1_txt].dept2.length; j++){
            menu_tags += "<li><a href='javascript:void(0)'><span>";
            menu_tags += obj.menu[dept1_txt].dept2[j];
            menu_tags += "</span></a>";

            // dept3 tags
            let dept2_txt = obj.menu[dept1_txt].dept2[j];
            menu_tags += "<ul class='dept3'>";
            for(var k = 0; k < obj.menu[dept1_txt][dept2_txt].length; k++){
                menu_tags += "<li><a href='javascript:void(0)'><span>";
                menu_tags += obj.menu[dept1_txt][dept2_txt][k];
                menu_tags += "</span></a></li>";
            }
            menu_tags += "</ul>";
            menu_tags += "</li>";
        }
        menu_tags += "</ul>";
        menu_tags += "</li>";
    }
    menu.append(menu_tags);

    // hover event
    let menu_uni = $(".menu_cont .menu_wrap .menu_set > li"),
        menu_bg = $(".menu_cont .menu_wrap .menu_bg"),
        menu_dept2 = $(".menu_cont .menu_wrap .menu_set > li > .dept2");
    menu_uni.hover(function(){
        $(this).addClass("on");
        
        // 가장 높은 dept3 찾기
        let dept3 = $(this).find(".dept2 > li > .dept3"),
            max_hei = 0;    // max height
        dept3.each(function(index,item){
            if(max_hei < $(item).height())
                max_hei = $(item).height();
        })

        let dept2 = $(this).find(".dept2");
        if(max_hei != 0){
            let fix_hei = 91 + max_hei + 51 + 10,
                fix_dhei = max_hei + 51;
            menu_bg.css("height",fix_hei);
            menu_dept2.css("height",fix_dhei);
        }
    },function(){
        $(this).removeClass("on");
        menu_bg.css("height",91);
        menu_dept2.css("height",0);
    })
})
