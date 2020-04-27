$(function(){
    let movie_info_container = $(".main_movie_container .main_movie_contents .movie_info .info_wrapper .info_contents .main_contents"),
        title = movie_info_container.children("h1"),
        info = movie_info_container.find(".info_story > p"),
        bg = $(".main_movie_container .main_movie_contents .movie_info .info_wrapper .info_contents .bg_info"),
        video = $(".main_movie_container .main_movie_contents .movie_info .info_wrapper .info_contents .main_contents .video > li");

    // Initalization main info
    init(title,info,bg,video);

    // Info story scrollbar
    let story_container = $(".main_movie_container .main_movie_contents .movie_info .info_wrapper .info_contents .main_contents .info_story");
    story_container.scrollbar();
    // $(".main_movie_container .main_movie_contents .movieSet .movies_container").click(function(){
    //     scrollbar.attr("top","0px");
    // })

    // Click and Change into information area
    let chk_on, movie_num = 0, bnum = 0;
    $(".main_movie_container .main_movie_contents .movieSet .movies_container").click(function(){
        chk_on = $(".main_movie_container .main_movie_contents .movieSet").find(".movies_container.on");
        movie_num = chk_on.attr("class").indexOf("movie_");
        movie_num += 6;
        movie_num = chk_on.attr("class").substr(movie_num, 1);   // movie_num
        if (bnum != movie_num) {
            // change text
            title.html(obj.movie[movie_num].name);
            info.html(obj.movie[movie_num].info);

            // change bg, extra video
            bg.css("background-image", "url('./img/movie/movie_info/bg_movie_" + movie_num + ".jpg')")
            xvideoChange(video, movie_num);

            // jquery animation
            let main_contents = $(".main_movie_container .main_movie_contents .movie_info .info_wrapper .info_contents .main_contents"),
                info_bg = $(".main_movie_container .main_movie_contents .movie_info .info_wrapper .info_contents .bg_info");

            main_contents.animate({
                left: "-10%",
                opacity: 0.1
            }, 0).animate({
                left: "0",
                opacity: 1
            }, 500)

            info_bg.animate({
                left: "10%",
                opacity: 0.1
            }, 0).animate({
                left: "0",
                opacity: 1
            }, 500)
        }

        bnum = movie_num;
    })
    
    // Sample video click action
    let sample_video_tag = $(".main_movie_container .main_movie_contents .movie_info .info_wrapper .info_contents .main_contents .video > li"),
        video_tag = $(".main_movie_container .main_movie_contents .smaple_video_container"),
        video_ex_btn = $(".main_movie_container .main_movie_contents .smaple_video_container .smaple_video_contents .video_wrapper .smaple_video_ex");

    sample_video_tag.click(function(){
        $(this).addClass("active");
        video_tag.addClass("active");
    })
    video_ex_btn.click(function(){
        sample_video_tag.removeClass("active");
        video_tag.removeClass("active");
    })
})

function init(title,info,bg,video){
    title.html(obj.movie[0].name);
    info.html(obj.movie[0].info);
    bg.css("background-image","url('./img/movie/movie_info/bg_movie_" + 0 +".jpg')")
    xvideoChange(video,0);
}

function xvideoChange(video,num){
    video.each(function(index,item){
        $(item).find("a > img").attr("src","./img/movie/sample_video/movie_"+ num +"/video_"+ index +".jpg");
    })
}
