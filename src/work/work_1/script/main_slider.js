$(function(){
    let mimg = $(".main_cont .main_wrap .int_cont .int_wrap > a > .img_wrap"),
        lbtn = $(".main_cont .main_wrap .int_cont .int_wrap .lbtn"),
        rbtn = $(".main_cont .main_wrap .int_cont .int_wrap .rbtn"),
        amount = 4;

    lbtn.click(function(){
        mimg.each(function(index,ele){
            mclc(index,ele,1,amount);
        })
    })
    rbtn.click(function(){
        mimg.each(function(index,ele){
            mclc(index,ele,-1,amount);
        })
    })
})

// Main Click action
function mclc(index,ele,dir,amount){
    let class_txt = $(ele).attr("class"),
        order = class_txt.indexOf("dp");
    
    let num = class_txt.substr(order+2,1);
    num = Number(num);
    $(ele).removeClass("dp" + num);

    num += dir;
    if(num < 0)
        num = amount-1;
    else if(num > (amount-1))
        num = 0;

    $(ele).addClass("dp" + num);

    // text setting
    let pmtag= $(".main_cont .main_wrap .int_cont .int_wrap > a > .txt_wrap"), 
        mtag = pmtag.children(".txt_tit");
    if(num == 1){
        let ty_order = class_txt.indexOf("ty");
        ty_order = class_txt.substr(ty_order+2,1);

        let mtxt = obj.main_txt["page" + ty_order];
        mtag.html(mtxt);
    }

    // animation reset
    mtag.removeClass('on');
    setTimeout(function() {
        mtag.addClass('on');
    },15);
}

