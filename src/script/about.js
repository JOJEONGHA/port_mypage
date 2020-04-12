// About page operation
// TODO : all animation stop
$(function(){
    var elm = $(".container_about"),
        per = elm.find(".base .gauge .percent > span");
    // TODO : percentage text opacity controll
    // Pre-save percentage Value
    var perNum = {};
    per.each(function(index){
        perNum[index] = $(this).text();
    })

    // Run when scrolling
    $(this).scroll(function(){
        if(elm.hasClass("on")){
            gaugeControl(true,".html",".css",".jquery",".photoshop");
            percentControl(per,perNum);
        }   
        else{
            gaugeControl(false,".html",".css",".jquery",".photoshop");
        }
    }) 
})

// Give or Remove "on" class to gauge
function gaugeControl(chk,...bundle){
    for(var index in bundle){
        var elm = $(".container_about").find(bundle[index]).find(".base .gauge");

        if(chk == true)
            elm.addClass("on");
        else if(chk == false)
            elm.removeClass("on");
    }   
}

// Control about percentage text
function percentControl(elm,num){
    elm.each(function (index) {
        var _this = $(this);
        
        jQuery({ Counter: 0 }).animate({ Counter: num[index] }, {
            duration: 1500,
            easing: 'swing',
            step: function () {
                _this.text(Math.ceil(this.Counter));
            }
        });
    });
}

