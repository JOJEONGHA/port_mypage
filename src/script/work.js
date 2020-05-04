// Work page operation
$(function () {
    // TODO : Text animation
    // detail pop page scrollbar
    let story_container = $(".container_work .contents .core .pop_cont .pop_wrap .pop_cons");
        story_container.scrollbar();

    var workP = $(".container_work"),
        contactP = $(".container_contact");
    var elm = $(".container_work .contents .core");
    var weblist = elm.find(".web .weblist");// web list amount (Control amount)

    // Add web tag
    for(var i = 1; i < obj.workSet.length; i++){
        var web_container = weblist.find(".work .work_container .web_container").html();
        var tag = "<li class='works_"+ i +" work'>";
            tag += "<div class = 'work_txt_cont'><span class = 'txt_tit'></span><span class = 'txt_info'></span></div>";
            tag += "<div class = 'work_container'>";
            tag += "<figure>";
            tag += "<img src='img/weblist/index_" + i + ".png' alt='index_"+ i +"'></img>";
            tag += "</figure>";
            tag += "<div class='web_container'>"
            tag += web_container;
            tag += "</div></div></li>";
        weblist.append(tag);
    }    

    // Initialization
    // Init - position
    var lefts = [], // Left position about each web index 
        mid = 50,   // mid position about left(absolute)
        step = 28;  // degree of moving
    for(var i = 0; i < obj.workSet.length; i++){
        var web = weblist.find(".works_" + i);
        var left =  mid + step*i;

        web.css("left", left + "%");
        lefts[i] = left;
    }
    // Init - class
    var firstIndex = 0;
    var webM = weblist.find(".works_" + firstIndex),
        webR = weblist.find(".works_" + (firstIndex + 1));
    
    webM.addClass("mid");
    webR.addClass("lr");

    // Init - text
    let txt_cont = $(".weblist .work.mid .work_txt_cont");
    txt_cont.css("opacity",1);
    for(var i = 0; i < obj.workSet.length; i++){
        let txt_tag = $(".works_"+ i +" .work_txt_cont");
        txt_tag.children(".txt_tit").text(obj.workSet[i].name);
        txt_tag.children(".txt_info").text(obj.workSet[i].info);
    }   

    // Weblist text connect
    var midIndex = jQuery.inArray(50,lefts);
    let workSet = $(".container_work .contents .core .web .weblist .work");
    workSet.each(function(index,item){
        let conceptSet = $(item).find(".contents_web .left > ul .concept"),
            colorSet = $(item).find(".contents_web .left > ul .color .rcolor"),
            platformSet = $(item).find(".contents_web .left > ul .platform");

        // Concept
        let conceptTag = "<span class = 'text'>";
        for(var i  = 0; i < obj.workSet[index].keyword.length; i++){
            conceptTag += obj.workSet[index].keyword[i];
            conceptTag += "&ensp;&ensp;";
        }
        conceptTag += "</span>";
        conceptSet.append(conceptTag);

        // Color
        for(var i  = 0; i < obj.workSet[index].color.length; i++){
            let tag = "";
            tag += "<li class = 'ty"+ i +"'></li>";
            colorSet.append(tag);
            colorSet.children(".ty" + i).css("background",obj.workSet[index].color[i]);
        }

        // platform
        let platformTag = "";
        platformTag += "<span class = 'text'>";
        for(var i  = 0; i < obj.workSet[index].platform.length; i++){
            platformTag += obj.workSet[index].platform[i];
            platformTag += "&ensp;&ensp;";
        }
        platformTag += "</span>";
        platformSet.append(platformTag);
    })

    // Arrow button click action
    var btnL = elm.find(".btn .btn_left"),
        btnR = elm.find(".btn .btn_right");
        
    btnL.click(function () { 
        aClick("L", mid, step, weblist, lefts, elm); 
        let txt_cont = $(".weblist .work.mid .work_txt_cont"),
            txt_acont = $(".weblist .work .work_txt_cont");
        txt_acont.css({"animation":"empty","opacity":0});
        txt_cont.css({"animation":"left_text 1s","opacity":1});
    });
    btnR.click(function () { 
        aClick("R", mid, step, weblist, lefts, elm); 
        let txt_cont = $(".weblist .work.mid .work_txt_cont"),
            txt_acont = $(".weblist .work .work_txt_cont");
        txt_acont.css({"animation":"empty","opacity":0});
        txt_cont.css({"animation":"right_text 1s","opacity":1});
    });
    
    // Work info Button action
    let deta_btn = $(".web_container .contents_web .right > ul > .deta > a"),
        deta_xbtn = $(".container_work .contents .core .pop_cont .pop_wrap a"),
        deta_cont = $(".container_work .contents .core .pop_cont"),
        code_btn = $(".web_container .contents_web .right > ul > .btn.code > a"),
        ori_btn = $(".web_container .contents_web .right > ul > .btn.ori > a"),
        view_btn = $(".web_container .contents_web .right > ul > .btn.view > a");
    
    view_btn.click(function(){
        let midIndex = jQuery.inArray(50,lefts);
        $(this).attr("href", "./work/work_" + midIndex + "/index.html");
    })

    code_btn.click(function(){
        let midIndex = jQuery.inArray(50,lefts);
        $(this).attr("href", obj.workSet[midIndex].code_url);
    })
        
    deta_btn.click(function(){
        let midIndex = jQuery.inArray(50,lefts),
            deta_cons = $(".container_work .contents .core .pop_cont .pop_wrap .pop_cons .pop_core");
        deta_cont.addClass("ac");
        deta_cons.attr("src","./img/weblist/detail/in_" + midIndex + ".jpg");

        // Resize scrollbar, It makes status to active about scrollbar
        window.setTimeout(function(){
            console.log("test");
            story_container.scrollbar("resize");
            story_container.scrollbar("scroll",0,0);
        },10);
    })

    deta_xbtn.click(function(){
        deta_cont.removeClass("ac");
    })

    ori_btn.click(function(){
        let midIndex = jQuery.inArray(50,lefts);
        $(this).attr("href", obj.workSet[midIndex].ori_url);
    })

    // Run when scrolling
    $(window).scroll(function(){
        if(contactP.hasClass("on")){
            workP.addClass("off");
            workP.find(".core .btn > a").addClass("off");
        }
        else{
            workP.removeClass("off");
            workP.find(".core .btn > a").removeClass("off");
        }
    })
})

// Return body tag height
function bodyHeight(){
    var bodyHeight= 0;
    $(".container").each(function(){
        bodyHeight += $(this).height();
    })
    
    return bodyHeight;
}

// Arrow button Click action
function aClick(rl,mid,step,weblist,lefts,elm){
    var direct,btn;
    if(rl == "L"){
        direct = 0;
        btn =  elm.find(".btn .btn_left");
    }
    else{
        direct = lefts.length - 1;
        btn = elm.find(".btn .btn_right");
    }
    // work moving
    if (lefts[direct] != mid) {
        for (var i in lefts) {
            if(rl == "L")
                lefts[i] += step;
            else    
                lefts[i] -= step;
            var web = weblist.find(".works_" + i);
            web.css("left", lefts[i] + "%");
        }
        weblist.find(".work").removeClass("mid");
        weblist.find(".work").removeClass("lr");

        var midIndex = jQuery.inArray(50,lefts);
        positionC(weblist,midIndex);    // Give class about position
    }    
}

// Give class about position
function positionC(weblist,midIndex) {
    var webM = weblist.find(".works_" + midIndex),
        webL = weblist.find(".works_" + (midIndex - 1)),
        webR = weblist.find(".works_" + (midIndex + 1));

    webM.addClass("mid");
    webL.addClass("lr");
    webR.addClass("lr");
}







