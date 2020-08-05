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
    "content": "這應該是，我們第一次兩個人獨處在一個空間吧。當時我只覺得妳是個蠻漂亮的女生，還不知道妳有多好，還不知道妳會為我的人生帶來這麼多快樂。"},

    {"date": "2016JUN", 
    "offset": "40",
    "tag": "#FirstDate",
    "photo": ["firstdate.jpeg"], 
    "content": "這是我們的第一次約會，應該是在黑壽外排隊的時候拍的照。當然的氣氛也不怎麼尷尬，可能因為我們已認識一段時間了，也可能因為，在妳在一起總是讓我覺得很自在。"},

    {"date": "2016AUG", 
    "tag": "#WeBecomeCouple",
    "photo": [], 
    "content": "我們在一起了，我好像沒有任何紀錄這一刻的照片。就像我也曾跟妳說過的，那時我可能只想找個漂亮女生談談戀愛，還未懂什麼是愛。"},

    {"date": "2016SEP", 
    "tag": "#FirstLittleB’sBD ",
    "photo": [], 
    "content": "這是我第一次和妳過生日，這可以說是我最大的污點吧哈哈。我什麼也沒準備，完全沒有認真想想如何令妳的生日過得開心。但這也可能是我們關係的轉捩點，從這時開始，妳慢慢讓我學會，怎樣去愛一個人。我也開始明白，怎樣去對一個人好。"},

    {"date": "2016DEC", 
    "offset": "-10",
    "tag": "#FirstNightTogether",
    "photo": ["firstnight1.jpg","firstnight2.jpg"], 
    "content": "我們第一次在外共度一個晚上（若果不算上莊或在studio哈哈），是個很珍貴的回憶呢。還記得我們一起用很大的煲打邊爐，還記得有蛇出現有人來捉，還記得我在房間裡打蟲，所有片段都還是那麼清晰。"},

    {"date": "2016DEC", 
    "offset": "40",
    "tag": "#FirstChristmas",
    "photo": ["FirstChristmas1.jpg","FirstChristmas2.jpg","FirstChristmas3.jpg","FirstChristmas4.jpg"], 
    "content": "在台灣回來後，我們第一次一起過聖誕節，這也是我第一次和情侶過聖誕節呢。我知道，妳很喜歡聖誕節這個節日，我真的很想，每一年的聖誕，都一直和你一起，一直讓你感動。"},

    //2017

    {"date": "2017JAN", 
    "tag": "#FirstNewYear",
    "photo": ["year1.jpg","year2.jpg","year.gif"], 
    "content": "我們一起在你家附近看煙火，迎接新一年的到來。當妳看著燦爛的煙火，心裡想的是什麼呢？我那時只希望，我們的愛情，不會像煙火一樣，雖然美麗，卻是那麼的短暫。"},

    {"date": "2017JUN", 
    "tag": "#FirstLittle6’sBD",
    "photo": ["6bd3.jpg","6bd4.jpg","6bd2.gif","6bd1.gif",],
    "content": "這是妳和我過的第一個生日呢，很輕易地超越了以往的所有生日，成為我過得最快樂的生日哈哈。原來被愛的感覺是這麼幸福的，謝謝你。"},

    {"date": "2017SEP", 
    "tag": "#FirstTrip@Osaka",
    "photo": ["osaka1.jpeg","osaka2.jpeg","osaka3.jpeg","osaka4.jpeg"], 
    "content": "我們第一次一起旅行，原本預計的京阪神奈最後變成只得京阪哈哈。這次旅行也是我們一個很重要很重要的回憶呢，不如道我有沒有對妳說過，從這次旅程後，我開始真的覺得，我想永遠都和妳在一起，或許妳就是我生命中的那個女主角嗎？想再和妳分享一件事，如果要我選我們這差不多四年中，最最最快樂的那一刻，我會選的是，妳看見bobo video後，喜極而泣的那一刻。那一刻對我來說，是人生中一個很很很重要的moment。因為那時我才發覺，原來我也有能力令別人幸福，原來讓我愛的人快樂，會為我帶來更大的快樂。這些事都是妳讓我明白的，真的很感謝你。"},

    //2018

    {"date": "2018JAN", 
    "offset": "-10",
    "tag": "#Trip@Taichung",
    "photo": ['taichung0.png','taichung01.jpeg','taichung1.jpg','taichung2.jpg','taichung3.jpeg',], 
    "content": "經過上次的旅行，去台中已經很得心應手了哈哈。回想起這些甜蜜的時光，那時無憂無慮的我們，真的很幸福呢。"},

    {"date": "2018JAN", 
    "offset": "40",
    "tag": "#EndyConcert",
    "photo": ["endy1.jpg","endy3.jpg","endy2.jpg"], 
    "content": "這可以想是，妳給過我的其中一個最大的驚喜了。我還記得你給我那張票時，我心中那激動又混亂的心情。那時的我完全不敢相信，原來這世界有人會對我這麼好，有人會願意為了我，花心思去準備一個驚喜。真的真的很感謝你，讓我知道原來我真的可以找到一個願意愛我的人。"},

    {"date": "2018APR", 
    "tag": "#Trip@KL",
    "photo": ["kl2.jpeg","kl1.jpeg","kl.gif"], 
    "content": "每天睡到下午才出門的吉隆坡之旅哈哈，這次的行程可能沒其他幾次那麼吸引，但只要和你一起，無論到哪個地方，都是這麼快樂。"},


    {"date": "2018SEP", 
    "tag": "#Trip@Tokyo",
    "photo": ["tokyo1.jpeg","tokyo2.gif","tokyo3.jpg"], 
    "content": "果然我們最喜歡的旅行地點還是日本哈哈，東京之旅有很多難忘的回憶。這次我也有用心為小琳的生日作準備喔，妳也應該頗滿意這次的禮物吧。當然，美中不足的是，我丟下了妳的那次不快的回憶。如果經過這次後，我可以汲取教訓，真的學懂如何好好愛護你的話，我們可能會有不一樣的結局嗎。"},

    //2019

    {"date": "2019MAR", 
    "tag": "#FirstBreakup",
    "photo": [], 
    "content": "這是我們第一次分開。這對我來說是一次很大的衝擊，我們之前每次吵架，從來不會持續到第二天的。但那一次，第一次你完全不聽我電話，也block了我whatsapp，並第一次要跟我說分手。我那時的感受和現在很像吧，思緒一直很混亂。我很想知道，什麼讓你不愛我了；有時候很不甘心，很氣憤你拋下了我；有時候很傷心，很不捨，內心一直有一種揮之不去的痛。那時候，我唯一想到的解決方法，便是想辦法令妳回到我身邊，才能使那痛楚消失。最後，如我所願地，我們復合了。不知道現在的妳會怎樣想呢，你會覺得那是一個錯誤的決定嗎？我不知道，但對我來說，我很感恩，我有多一年的時間跟妳在一起。但如果我能想到去做更多的事，更用心地對妳好，去防止這種事再次發生，可能現在的我，便不用再一次經歷吧。"},

    {"date": "2019JUL", 
    "tag": "#SummerExchange",
    "photo": ["summer1.png","summer2.png","summer3.jpeg"], 
    "content": "這一個月，我們不再每天黏在一起，你去了日本，我去了瑞典。那我們還是每天facetime，我聽著你分享你每天買了什麼東西，去了什麼地方，看著你睡著時那可愛的臉龐。妳應該還記得我說的那張臉吧哈哈，我真的覺得，這是我一輩子也不會看膩的一張臉。"},

    {"date": "2019AUG", 
    "tag": "#Trip@Europe",
    "photo": ["europe1.jpeg","europe2.jpeg","europe3.jpeg","europe4.jpeg","europe5.jpeg","europe.gif"], 
    "content": "我還記得在葡萄牙機場，焦急地等待你的一刻。我終於可以又見到，我最可愛的小琳了。這次歐洲之旅，是我們最長的一次旅行，也是我們最後的一次旅行。旅程中許多快樂的片段仍歷歷在目，現在回想起覺得很不真實。當然，還是有一些遺憾，有一些地方我們去不到，甚至因為我的疏忽，我的第一場球賽妳也不能陪我看。我只想告訴妳，有很多事情，我不是現在才想起、才想去彌補。其實我真的有很多事情，想要去和妳完成。但可能真的是我不夠努力，失去了妳對我的信任吧。"},

    {"date": "2019OCT", 
    "tag": "#OurFirstJob",
    "photo": [],  
    "content": "我們開始上班了。很感謝、真的很感謝你，會每天來九龍灣找我，甚至等我等了一個多小時。我其中一件最後悔的事，是我太少向你表達我的感受了。你每次見到我，會很可愛、很雀躍地跑過來抱住我，真的讓我感到很幸福。但其實，我每次看見你，我也一樣，很高興，很幸福，我應該每次都把你緊緊抱在懷內，永遠都不放開。"},

    //2020
    {"date": "2020JAN", 
    "tag": "",
    "photo": [],  
    "content": "來到2020年了，不止對這個世界來說，還是對於我們的關係來說，也是充滿不愉快的一年。在年頭的這段時間，其實我是過得很不愉快的，我想你也感覺得到吧。因為我自己的煩惱，令我很多時候忽略了好好去照顧妳，讓妳慢慢地對我感覺變啖，可能也很合理吧。我知道，妳很難理解我有什麼煩惱，你經常說你每天上班才應該有壓力吧，我每天在家中可以有什麼壓力。的確，在你的角度，這樣想也是很合理的吧。謝謝你，在這段時間裡，也繼續陪伴著我，吃飯、買什麼也會借錢給我，很感謝你。我很多時候都喜歡裝沒事，其實我內心很感動、也很掙扎。我真的很希望，可以有能力給你好的生活，所以我最後選擇了一個未來有更多機會賺更多錢的行業。我單純地以為，當我有了工作，一切的事情都會慢慢重回正軌吧，但很可惜地，在我開始上班的一個星期前，我們便分開了。"},


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
    id = theId.split("-")[1];
    // if (back) id--;

    if(theId.split("-")[0]=='green'){
        // $('.green-img img.animated').removeClass('animated');
        if(back)$('.green-img img').eq(id).removeClass('animated');
            else $('.green-img img').eq(id).addClass('animated');

        $('.green .mark span.animated').removeClass('animated');
        if(!back)$('.green .mark span').eq(id).addClass('animated');
            else $('.green .mark span').eq(id-1).addClass('animated');
        // if(back)$('.green .mark span').eq(id).removeClass('animated');
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
    add_months(2020,1,4);   

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
        dots: false,
        arrows: true,
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
    if (back) {
        id--;
        theId=theId.split("-")[0]+'-'+id;
    }

    if (!back) $('.tag.highlighted').removeClass('highlighted');

    if (id==-1) {
        $(".twins.on").removeClass("on").addClass("off");
        $(".text-default").removeClass("off").addClass("on");
        $(".arrow-button").removeClass("on").addClass("off");
    }
    else{
        $('#'+theId).addClass('highlighted');
        $(".arrow-button.off").removeClass("off").addClass("on");
        $(".text-default.on").removeClass("on").addClass("off");

            var off = $(".twins.off").first();
            $(off).find('.text-tag').html(data[id].tag);
            $(off).find('.text-date').html(data[id].date);
            $(off).find('.text-content').html(data[id].content);

            if(id==data.length-1){
                $(off).find('.text-tag').html("#2020");
                $(off).find('.text-date').addClass('hide');
            }
            else $(off).find('.text-date').removeClass('hide');

            if ($(off).find('.text-box').prop('offsetHeight') < $(off).find('.text-box').prop('scrollHeight')) $(off).find('.scroll-arrow').css("display","flex");
                else $(off).find('.scroll-arrow').css("display","none");
            
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
    $('.twins').clone().appendTo('.content-wrapper');

    set_timeline();
    
    $('.month-row').after('<img src="img/line.png" height="55px" width="auto" style="margin: 3px">');

    set_tag();

    set_scroll();   
    // $('.green').css('bottom', $('.myBody').height() - $('.bottom').offset().top+'px');
    // console.log($('.myBody').height());
    set_char();

    set_slick('.slider');  

    setTimeout(function() { 
        $('.green').addClass('animated');
    }, 500);

    add_to_preload();
    preload(imgAll);

});

$(window).on('load', function () {
    var middle_height = $('.bottom').offset().top - $('.top').offset().top - $('.top').height();
    $('.timeline-container-outer').css("height",middle_height+'px');
    $('.timeline').css("margin-top",middle_height*0.3+'px');
    $('.timeline').css("margin-bottom",middle_height*0.6+'px');
    $('.content-wrapper').css("--opened-height" , $('.content-wrapper').height()+middle_height+'px');
    
    $('.loading').fadeOut();
});

$('.arrow-button').click(function() {
    $('.arrow-button').css("pointer-events","none");
    $('.arrow-button').addClass('touched');
    if(!bottom_opened) {
        $(".twins.on").removeClass("ani-mid");
        $(".twins.on").animate({
            opacity: 0,
          }, 300, function() {
            $('.arrow-button').removeClass('touched')
            $('.on .slick-slider').slick('refresh');
            $('body').addClass('opened');
            setTimeout(function() { 
                if ($('.on .text-box').prop('offsetHeight') < $('.on .text-box').prop('scrollHeight')) $('.on .scroll-arrow').css("opacity",1);
                else $('.on .scroll-arrow').css("opacity",0);
                $(".twins.on").animate({
                    opacity: 1,
                  }, 300, function() {
                    $('.arrow-button').css("pointer-events","unset");
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
            $('.on .scroll-arrow').css("opacity","1");
            setTimeout(function() { 
                $(".twins.on").animate({
                    opacity: 1,
                  }, 300, function() {
                 $('.arrow-button').removeClass('touched')
                 $(".twins.on").addClass("ani-mid");
                 $('.arrow-button').css("pointer-events","unset");
                 $('.timeline-container').css("pointer-events","unset");
                 $('.twins.on').css("opacity","");
                });
            }, 700);
          });
    }

    bottom_opened = !bottom_opened;
});