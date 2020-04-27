$(function(){
    let menu_li = $(".main_menu_container .main_menu_contents .main_menu_wrapper .main_menu .menu_set .menu_piece"),
        pop_bg = $(".main_menu_container .main_menu_contents .main_menu_wrapper .main_menu .pop_menu_bg");

    // Add sub menu
    let data_index = -1;
    menu_li.each(function(index){
        let pop_list_tag = "",
            class_name = $(this).attr("class");

        // Check data index 
        for(var i = 0; i < obj.pop_menu.length; i++){
            var data_menu = obj.pop_menu[i].name;
            if(class_name.indexOf(data_menu) != -1){
                data_index = i;
                break;
            }
        }

        // Add pop menu tag
        pop_list_tag += "<ul class='pop_list'>";
        for(var i = 0; i < obj.pop_menu[data_index].menu.length; i++){
            pop_list_tag += "<li><a href='javascript:void(0)'><span>";
            pop_list_tag += obj.pop_menu[data_index].menu[i];
            pop_list_tag += "</span></a></li>";
        }
        pop_list_tag += "</ul>";

        $(this).append(pop_list_tag);
    })

    // menu hover action
    menu_li.hover(function(){
        $(this).addClass("active");
        if($(this).attr("class").indexOf("vod") == -1)
            pop_bg.css("display","block");
    },function(){
        $(this).removeClass("active");
        pop_bg.css("display","none");
    })

    // top fixed
    let menu_set = $(".main_menu_container .main_menu_contents .main_menu_wrapper .main_menu"),
        menu_top = menu_set.offset().top;

    $(window).scroll(function(){
        console.log()
        if(menu_top < $(window).scrollTop())
            menu_set.addClass("top");
        else{
            menu_set.removeClass("top");
        }
            
    })

    if (matchMedia("screen and (max-width: 680px)").matches) {
        let logo_tag = $(".main_menu_container .main_menu_contents .logo_menu");
        
        $(window).scroll(function(){
            if(0 < $(window).scrollTop())
                logo_tag.addClass("top");
            else
                logo_tag.removeClass("top");
        })
    }
})
