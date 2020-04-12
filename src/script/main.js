// Main page operation
$(function () {
    // TODO : button to edge
    // TODO : PHP String binding

    var main = classObject("main"),
        about = classObject("about"),
        work = classObject("work"),
        contact = classObject("contact");

    // Logo background text size control
    var elm = $(".container_main .contents"),
        bg = elm.find(".bg > img"),
        text = elm.children(".stationery");
    
    text.css({width : bg.width(), height : bg.height()});   // text bg size init
    $(window).resize(function(){
        text.css({width : bg.width(), height : bg.height()}); 
    })

    // Menu text click event
    main.click(function () {clickAction("main")});
    about.click(function () {clickAction("about")});
    work.click(function () {clickAction("work")});
    contact.click(function () {clickAction("contact")});

    // Run when scrolling
    $(window).scroll(function(){
    })
})

// Menu text click action
function clickAction(str){
    var container = ".container_"+ str;
    var page = $(container);

    $(".container").removeClass("on");
    page.addClass("on");
    var moveTop = page.offset().top;
    $("html,body").stop().animate({ scrollTop: moveTop + 'px' },1000)
}

// Return a specific Menu object
function classObject(str) {
    var _object = $(".container_main .menu").find(".menu_" + str + " > a");

    return _object;
}
