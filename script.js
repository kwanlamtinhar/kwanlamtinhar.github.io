var scifi = [
    {"year": "1966", "name": "Star Trek"}
    ,{"year": "1968", "name": "2001: A Space Odyssey"}
    ,{"year": "1969", "name": "Journey to Sun"}
    ,{"year": "1972", "name": "Solaris"}
    ,{"year": "1977", "name": "Star Wars"}
    ,{"year": "1977", "name": "Third Kind", "image": "Sci-Fi_1977ThirdKind.gif"}
    ,{"year": "1979", "name": "Alien", "image": "Sci-Fi_1979Alien.jpg"}
    ,{"year": "1982", "name": "Tron / daftpunk", "image": "Sci-Fi_1982Tron.jpg"}
    ,{"year": "1997", "name": "Fifth Element", "image": "Sci-Fi_1997FifthElement.jpg"}
    ,{"year": "1997", "name": "Contact"}
    ,{"year": "2019", "name": "流浪地球"}
    ,{"year": "2009", "name": "Moon"}
    ,{"year": "2012", "name": "Prometheus"}
    ,{"year": "2013", "name": "Gravity"}
    ,{"year": "2014", "name": "Interstellar"}
    ,{"year": "2015", "name": "The Martian"}
    ,{"year": "2016", "name": "Arrival"}
    ,{"year": "2019", "name": "Ad Astra"}
    ,{"year": "2020", "name": "Dune"}
    ,{"year": "2020", "name": "Proxima"}
    ,{"year": "1959", "name": "The Sky Calls"}
    ,{"year": "1969", "name": "Countdown"}
    ,{"year": "1969", "name": "Marooned", "image": "Sci-Fi_1969JourneytoSun.jpg"}
]

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

};

function set_tag(){
    for (i = 0; i < data.length; i++){
        $('#'+data[i].date).find('.month-text').append('<div class="tag animate fadeIn ani-fast">'+data[i].tag+'</div>');
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

    $('.green').css('bottom', $( window ).height() - $('.bottom').offset().top+'px');
    
    set_slick('.slider');  
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

function set_scroll() {
    var controller = new ScrollMagic.Controller({container: ".timeline-container"})

    var animateElements = $(".animate")

    $('.animate').each(function(index){
        var myOffset = 0;
        if($(this).css("--offset")!="undefined") myOffset = $(this).css("--offset");
        new ScrollMagic.Scene({
            triggerElement: animateElements[index],
            offset: myOffset,												 
            triggerHook: 0.45,
    })
    .setClassToggle(animateElements[index], "animated")
    .on("enter", function (e) {
        if($(animateElements[index]).hasClass('tag')) change_content($(animateElements[index]).attr("id"));
    })
    .on("leave", function (e) {
        if($(animateElements[index]).hasClass('tag')) change_content($(animateElements[index]).attr("id")-1);
    })
    // .addIndicators({name}) 
    .addTo(controller);
    });

}

var imgCount;
var imgLength;
var saveOff;

function change_content(theId){
    id = theId.split("-")[1];
    console.log(id);

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