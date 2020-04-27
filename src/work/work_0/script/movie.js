$(function(){
    const small_movie = $(".main_movie_container .main_movie_contents .movieSet");
    let movie_amount = obj.movie_amount;  // The number of movies, 17
    
    // Add img tag 
    for(let i = 0; i < movie_amount; i++){
        let movie_tag = "";
        movie_tag += "<li class='movies_container movie_"+ i +"'>";
        movie_tag += "<div class='movie_wrapper'>";
        movie_tag += "<div class = 'movie'>";
        movie_tag += "<a href='javascript:void(0)'>";
        movie_tag += "<img src='' alt='' class='align_center'>";
        movie_tag += "<div class='rank_container'>";
        movie_tag += "<div class='rank_wrapper'><span class='back_text'>"+ (i+1) +"</span><span>" + (i+1) +"</span></div>";
        movie_tag += "</div></a></div></div></li>";
        small_movie.append(movie_tag);
    }

    // top rank
    small_movie.find(".movies_container:not(:nth-child(n+4)) .movie_wrapper .movie > a .rank_container").addClass("top");

    //small movie image input
    for(let i = 0; i < movie_amount; i++){
        let img_dir = ".movie_" + i;
        img_dir += " .movie_wrapper .movie > a> img";
        let imgTag = small_movie.find(img_dir)
            ,imgbox = "img/movie/small_movie_img/movie_" + (i+1) + ".jpg"
        imgTag.attr("src",imgbox);
    }
    
    // Added button active on Window size
    const movie_area = $(".main_movie_container .main_movie_contents");
    let add_btn = movie_area.find(".more_movie_container .more_btn_wrapper > a"),
        more_rev = movie_area.children(".more_movie_container"),
        movie_area_size,
        hurdle,
        max_standard,
        padding_gap = 23.5;
        
    $(window).resize(function(){
        width = parseFloat(movie_area.css("width"));
        paddingBottom = parseFloat(movie_area.css("paddingBottom"));
    })
    add_btn.click(function(){
        width = parseFloat(movie_area.css("width"));
        paddingBottom = parseFloat(movie_area.css("paddingBottom"));
        if(add_btn.hasClass("on") != true){
            if($(window).width() >1024){
                max_standard = 6;
                hurdle = (movie_amount - 8)/max_standard;   // movie amount count
                hurdle = Math.ceil(hurdle); // rate  
                padding_gap = 23.5;
                movie_area_size = paddingBottom/width*100 + hurdle*padding_gap;
            }else if($(window).width() >680 && $(window).width() <= 1024){
                max_standard = 5;
                hurdle = (movie_amount - 6)/max_standard;   // movie amount count
                hurdle = Math.ceil(hurdle); // rate     
                padding_gap = 28;
                movie_area_size = paddingBottom/width*100 + hurdle*padding_gap;
            }else{
                max_standard = 2;
                hurdle = (movie_amount - 4)/max_standard;   // movie amount count
                hurdle = Math.ceil(hurdle); // rate  
                console.log(hurdle);
                padding_gap = 70.5;
                movie_area_size = paddingBottom/width*100 + hurdle*padding_gap;
            }
            small_movie.children("li").css("display","block");
            movie_area.css('paddingBottom',movie_area_size + "%");
            add_btn.addClass("on");
            more_rev.addClass("on");
        }else{  // add_reverse button
            small_movie.children("li").css("display","");
            movie_area.css('paddingBottom',"");
            add_btn.removeClass("on");
            more_rev.removeClass("on");
        }
    })

    // Movie Click action
    let movie_rect = small_movie.children(".movies_container");

    movie_rect.click(function(){
        movie_rect.removeClass("on");
        $(this).addClass("on");
    })
})
