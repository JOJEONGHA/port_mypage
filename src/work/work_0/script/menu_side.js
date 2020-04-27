$(function(){
    // Add side pop menu
    let menu_size = obj.pop_menu.length - 1,
        side_menu_set = $(".main_menu_container .main_menu_contents .main_menu_wrapper .side_pop_menu .side_pop_set"),
        tags = "";
    for(var i = 0; i < menu_size; i++){
        tags += "<li><a href='javascript:void(0)'><span>";
        tags += obj.pop_menu[i].kor_name;
        tags += "</span></a>";
        tags += "<ul class='side_dept2_set'>"
        for(var j = 0; j < obj.pop_menu[i].menu.length; j++){
            tags += "<li><a href='javascript:void(0)'><span>";
            tags += obj.pop_menu[i].menu[j];
            tags += "</span></a></li>";
        }
        tags += "</ul></li>";
    }
    side_menu_set.append(tags);

    // Side menu click action
    let side_menu_img = $(".main_menu_container .main_menu_contents .side_menu"),
        side_menu = $(".main_menu_container .main_menu_contents .main_menu_wrapper .side_pop_menu"),
        side_menu_ex = $(".main_menu_container .main_menu_contents .main_menu_wrapper .side_pop_menu .side_pop_set .pop_menu_exit > a");;
    
    side_menu_img.click(function(){
        side_menu.addClass("active");
    })
    side_menu_ex.click(function(){
        side_menu.removeClass("active");
    })

    // Side menu pop action
    let side_menu_li = $(".main_menu_container .main_menu_contents .main_menu_wrapper .side_pop_menu .side_pop_set > li");

    side_menu_li.click(function(){
        if($(this).hasClass("active") == false){
            side_menu_li.children(".side_dept2_set").slideUp("slow");
            $(this).children(".side_dept2_set").slideDown("slow");
            side_menu_li.removeClass("active");
            $(this).addClass("active");
        }else{
            
        }
    })
})
