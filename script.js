// if ($(window).width()>500){
//     $('meta[name=viewport]').remove();
//     $('head').append( '<meta name="viewport" content="initial-scale=0.8">' );
// }

var data = [
    {"date": "2015AUG", 
    "tag": "#FirstPhoto",
    "photo": ["firstphoto.jpg"], 
    "content": "我們的第一張合照，是在我們不知情的情況下被拍下的。那時的我並不知道，在離我這麼近的地方，有一個女生將會成為我生命中一個很重要的人。"},

    {"date": "2016JUN", 
    "offset": "-10",
    "tag": "#JustTheTwoOfUs",
    "photo": ["twoppl.gif"], 
    "content": "我們的第一張合照，是在我們不知情的情況下被拍下的。那時的我並不知道，在離我這麼近的地方，有一個女生將會成為我生命中一個很重要的人。"},

    {"date": "2016JUN", 
    "offset": "40",
    "tag": "#FirstDate",
    "photo": ["firstdate.jpeg"], 
    "content": "我們的第一張合照，是在我們不知情的情況下被拍下的。那時的我並不知道，在離我這麼近的地方，有一個女生將會成為我生命中一個很重要的人。"},

    {"date": "2016AUG", 
    "tag": "#WeAreCouple",
    "photo": [], 
    "content": ""},

    {"date": "2016SEP", 
    "tag": "#FirstLittleB’sBD ",
    "photo": [], 
    "content": ""},

    {"date": "2016DEC", 
    "offset": "-10",
    "tag": "#FirstNightTogether",
    "photo": ["firstnight1.jpg","firstnight2.jpg"], 
    "content": ""},

    {"date": "2016DEC", 
    "offset": "40",
    "tag": "#FirstChristmas",
    "photo": ["FirstChristmas1.jpg","FirstChristmas2.jpg","FirstChristmas3.jpg","FirstChristmas4.jpg"], 
    "content": ""},

    //2017

    {"date": "2017JAN", 
    "tag": "#FirstNewYear",
    "photo": [], 
    "content": ""},

    {"date": "2017JUN", 
    "tag": "#FirstLittle6’sBD",
    "photo": ["6bd3.jpg","6bd4.jpg","6bd2.gif","6bd1.gif",],
    "content": ""},

    {"date": "2017SEP", 
    "tag": "#FirstTrip@Osaka",
    "photo": [], 
    "content": ""},

    //2018

    {"date": "2018JAN", 
    "offset": "-10",
    "tag": "#Trip@Taichung",
    "photo": [], 
    "content": ""},

    {"date": "2018JAN", 
    "offset": "40",
    "tag": "#EndyConcert",
    "photo": [], 
    "content": ""},

    {"date": "2018APR", 
    "tag": "#Trip@KL",
    "photo": [], 
    "content": ""},


    {"date": "2018SEP", 
    "tag": "#Trip@Tokyo",
    "photo": [], 
    "content": ""},

    //2019

    {"date": "2019MAR", 
    "tag": "#FirstBreakup",
    "photo": [], 
    "content": ""},

    {"date": "2019JUL", 
    "tag": "#SummerExchange",
    "photo": [], 
    "content": ""},

    {"date": "2019AUG", 
    "tag": "#Trip@Europe",
    "photo": [], 
    "content": ""},

    {"date": "2019OCT", 
    "tag": "#OurFirstJob",
    "photo": [],  
    "content": ""},





]

var months = [
    "JAN", "FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"
]

var bottom_opened = false;
var sliderOn = false;
var offSliderOn = false;

var imgAll = [];
var imgAttr = {}

function add_to_preload(){
    for (i = 0; i < data.length; i++){
        for(j=0;j<data[i].photo.length;j++){
            imgAll.push('photo/'+data[i].photo[j]);
        }
    }
}

function preload(arrayOfImages) {
    $(arrayOfImages).each(function(){
        const img = new Image();
        img.onload = function() {
            var mode;
            if(this.width>this.height) mode = 'longWidth'; else mode = 'longHeight';
            imgAttr[img.src] = mode;
        }
        img.src = this;
    });
    // console.log(imgAttr);
}

function set_char(){
    for(i=1;i<=6;i++){
        $('.green-img').append('<img class="animate fadeIn ani-slow" src="img/fatgreen'+i+'.png" width="auto" height="100%"></img>');
        if(i==1) $('.green-img img').last().addClass("animated");
    }
}

function change_char(theId,back){
    // alert('df');
    id = theId.split("-")[1];
    // if (back) id--;

    if(theId.split("-")[0]=='green'){
        // $('.green-img img.animated').removeClass('animated');
        $('.green-img img').eq(id).addClass('animated');
        if(back)$('.green-img img').eq(id).removeClass('animated');
    }
    
}

function add_months(year,start,end){
    $('.timeline').append( '<div class="month-wrapper"></div>');
        for (i = start-1; i < end;i++){
            $('.month-wrapper').last().append( '<div id="'+year+months[i]+'" class="month-row"></div>');
            $('.month-row').last().append( '<div class="month"></div>');
            $('.month').last().append( '<div class="month-text"></div>');
            $('.month-text').last().append( '<div class="month-small">'+months[i]+'</div>');
            // $('.month-text').last().append( '<div class="month-small animate fadeIn ani-slow">'+months[i]+'</div>');
            $('.month-small').last().css("--offset","-120")
            if(i%2>0) $('.month-text').last().addClass('right-side');
            else $('.month-text').last().addClass('left-side');
        }   
}
function set_timeline() {
    $('.timeline').append( '<div class="year">'+(2015)+'</div>');
    add_months(2015,8,9);  

    $('.timeline').append( '<div class="year">'+(2016)+'</div>');
    $('.timeline').append( '<div class="month-wrapper"></div>');
    add_months(2016,6,12);  

    for (j = 0; j < 3; j++){
        var myyear = 2017+j;
        $('.timeline').append( '<div class="year">'+myyear+'</div>');
        add_months(myyear,1,12);         
    }

    $('.timeline').append( '<div class="year">'+(2020)+'</div>');
    add_months(2020,1,8);   

    for(i=0;i<5;i++){
        $('.timeline').append('<div class="trigger scroll trig-lam"></div>');
        $('.trigger').last().css("top", 850*i + 400 + "px");
        $('.trigger').last().attr("id","lam-"+ (i+1));

        $('.timeline').append('<div class="trigger scroll trig-green"></div>');
        $('.trigger').last().css("top", 850*i + 800+ "px");
        $('.trigger').last().attr("id","green-"+(i+1));
    }

};

function set_tag(){
    for (i = 0; i < data.length; i++){
        $('#'+data[i].date).find('.month-text').append('<div class="tag scroll animate fadeIn ani-fast">'+data[i].tag+'</div>');
        $('.tag').last().attr( "id", 'tag-'+i );
        if (data[i].offset) $('.tag').last().css("--offset",data[i].offset);
    }
}

function set_slick(a){
    $(a).slick({
        dots: true,
        arrows: false,
      });
}

function set_scroll() {
    var controller = new ScrollMagic.Controller({container: ".timeline-container"})

    var scrolls = $(".scroll")

    $('.scroll').each(function(index){
        var myOffset = 0;
        if($(this).css("--offset")!="undefined") myOffset = $(this).css("--offset");
        new ScrollMagic.Scene({
            triggerElement: scrolls[index],
            offset: myOffset,												 
            triggerHook: 0.45,
    })
    .setClassToggle(scrolls[index], "animated")
    .on("enter", function (e) {
        if($(scrolls[index]).hasClass('tag')) change_content($(scrolls[index]).attr("id"),false);
        if($(scrolls[index]).hasClass('trigger')) change_char($(scrolls[index]).attr("id"),false);
    })
    .on("leave", function (e) {
        if($(scrolls[index]).hasClass('tag')) change_content($(scrolls[index]).attr("id"),true);
        if($(scrolls[index]).hasClass('trigger')) change_char($(scrolls[index]).attr("id"),true);
    })
    // .addIndicators({name}) 
    .addTo(controller);
    });

}

var imgCount;
var imgLength;
var saveOff;

function change_content(theId,back){
    id = theId.split("-")[1];
    if (back) id--;

    if (id==-1) {
        $(".twins.on").removeClass("on").addClass("off");
        $(".text-default").removeClass("off").addClass("on");
        $(".arrow").removeClass("on").addClass("off");
    }
    else{
        $(".arrow.off").removeClass("off").addClass("on");
        $(".text-default.on").removeClass("on").addClass("off");

            var off = $(".twins.off").first();
            $(off).find('.text-tag').html(data[id].tag);
            $(off).find('.text-date').html(data[id].date);
            $(off).find('.text-content').html(data[id].content);
            $(off).find('.slick-slider').slick('unslick');
            $(off).find('.photo').remove();
            // $(off).find('.slider').empty();

            if(data[id].photo.length>0) {
                $(off).prepend('<div class="photo"><div class="slider"></div></div>');

                for(i=0;i<data[id].photo.length;i++){
                    var img = new Image();
                    img.src = "photo/" +data[id].photo[i];
                    var mode = imgAttr[img.src];
                    // console.log(mode);
                    $(off).find('.slider').append('<div class="slider-img-container"><div class="slider-img-center"><div class="img-transparent-right"><img class="'+mode+' img-transparent-top" src="'+img.src+'"></div></div></div>');
                }

                if(data[id].photo.length>1) {
                    set_slick($(off).find('.slider'));
                    sliderOn = true;
                }

            }  
            
            $(".twins.on").removeClass("on").addClass("off");
            $(off).removeClass("off").addClass("on");
         
    }
}

$(document).ready(function() {
    add_to_preload();
    preload(imgAll);


    set_timeline();
    $('.timeline').css("margin-top",$('.timeline-container').height()*0.5+'px');
    $('.timeline').css("margin-bottom",$('.timeline-container').height()*0.6+'px');
    $('.month-row').after('<img src="img/line.png" height="55px" width="auto" style="margin: 3px">');

    set_tag();

    var middle_height = $('.bottom').offset().top - $('.top').offset().top - $('.top').height();
    $('.timeline-container').css("--height",middle_height+'px');
    $('.content-wrapper').css("--opened-height" , $('.content-wrapper').height()+middle_height+'px');

    set_scroll();   

    $('.twins').clone().appendTo('.content-wrapper');

    // $('.green').css('bottom', $('.myBody').height() - $('.bottom').offset().top+'px');
    // console.log($('.myBody').height());
    set_char();

    set_slick('.slider');  

    setTimeout(function() { 
        $('.green').addClass('animated');
    }, 500);
});

$('.arrow').click(function() {
    $('.arrow').css("pointer-events","none");
    if(!bottom_opened) {
        $(".twins.on").removeClass("ani-mid");
        $(".twins.on").animate({
            opacity: 0,
          }, 300, function() {
            $('.on .slick-slider').slick('refresh');
            $('body').addClass('opened');
            setTimeout(function() { 
                $(".twins.on").animate({
                    opacity: 1,
                  }, 300, function() {
                    $('.arrow').css("pointer-events","unset");
                    $('.timeline-container').css("pointer-events","none");
                   });
            }, 700);
          });
    }
    else {
        $(".twins.on").animate({
            opacity: 0,
          }, 300, function() {
            $('.on .slick-slider').slick('refresh');
            $('body').removeClass('opened');
            setTimeout(function() { 
                $(".twins.on").animate({
                    opacity: 1,
                  }, 300, function() {
                 $(".twins.on").addClass("ani-mid");
                 $('.arrow').css("pointer-events","unset");
                 $('.timeline-container').css("pointer-events","unset");
                 $('.twins.on').css("opacity","");
                });
            }, 700);
          });
    }

    bottom_opened = !bottom_opened;
});