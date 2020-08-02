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

var reality = [
    {"year": "1947", "name": "Roswell incident", "image": "Reality_1947Roswellincident.jpg"}
    ,{"year": "1952", "name": "Washington incident", "image": "Reality_1952Washingtonincident.gif"}
    ,{"year": "1958", "name": "NASA begins"}
    ,{"year": "1961", "name": "蘇聯人類首次進入太空", "image": "Reality_1961蘇聯人類首次進入太空.jpg"}
    ,{"year": "1962", "name": "Project Mercury 美國第一個載人太空飛行", "image": "Reality_1962ProjectMercury.jpg"}
    ,{"year": "1969", "name": "Moon Landing", "image": "Reality_1969MoonLanding.jpg"}
    ,{"year": "1970", "name": "阿波羅13號事故"}
    ,{"year": "1971", "name": "禮炮一號 蘇聯歷史上第一個太空站", "image": "Reality_1971蘇聯禮炮一號.jpg"}
    ,{"year": "1973", "name": "先鋒10號飛越過木星 人類首次對木星探測任務"}
    ,{"year": "1984", "name": "列根星球大戰", "image": "Reality_1984列根星球大戰.jpg"}
    ,{"year": "1986", "name": "挑戰者號災難"}
    ,{"year": "1994", "name": "俄羅斯太空最長時間宇航員"}
    ,{"year": "2002", "name": "SpaceX成立", "image": "Reality2002SpaceX成立.jpg"}
    ,{"year": "2003", "name": "神舟五號楊利偉"}
    ,{"year": "2003", "name": "哥倫比亞號災難"}
    ,{"year": "2007", "name": "嫦娥一號探月衛星"}
    ,{"year": "2008", "name": "Space X 獵鷹1號成功"}
    ,{"year": "2011", "name": "首個太空實驗艙天宮一號"}
    ,{"year": "2015", "name": "Space X 獵鷹9號事故"}
    ,{"year": "2017", "name": "中國墨子號量子傳送實驗", "image": "Reality_2017中國墨子號量子傳送實驗.jpg"}
    ,{"year": "2018", "name": "人工智慧機器人 Cimon"}
    ,{"year": "2018", "name": "Mars Landing"}
    ,{"year": "2019", "name": "U.S.Space Force"}
    ,{"year": "2019", "name": "First Image of a Black Hole"}
    ,{"year": "2019", "name": "嫦娥四號月球背面着陸"}
    ,{"year": "2020", "name": "Space X Dragon"}
    ,{"year": "2007", "name": "Fast radio burst"}
]

var match_pair = [
    {"scifi": "Star Trek", "reality": "中國墨子號量子傳送實驗"}
    ,{"scifi": "2001: A Space Odyssey", "reality": "禮炮一號 蘇聯歷史上第一個太空站"}
    ,{"scifi": "Star Wars", "reality": "列根星球大戰"}
    ,{"scifi": "Alien", "reality": "SpaceX成立"}
    ,{"scifi": "Contact", "reality": "Fast radio burst"}
    ,{"scifi": "Moon", "reality": "嫦娥四號月球背面着陸"}
    ,{"scifi": "Interstellar", "reality": "First Image of a Black Hole"}
    ,{"scifi": "The Martian", "reality": "Mars Landing"}
    ,{"scifi": "The Sky Calls", "reality": "Space X Dragon"}
    ,{"scifi": "Countdown", "reality": "Moon Landing"}
    ,{"scifi": "Marooned", "reality": "阿波羅13號事故"}
    //fake
    // ,{"scifi": "Gravity", "reality": "U.S.Space Force"}
    // ,{"scifi": "Ad Astra", "reality": "Roswell incident"}
]

var months = [
    "JAN", "FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"
]

function add_months(start,end){
    $('.timeline').append( '<div class="month-wrapper"></div>');
        for (i = start-1; i < end;i++){
            $('.month-wrapper').last().append( '<div class="month">'+months[i]+'</div>');
            if(i%2==0) $('.month').last().css("align-self", "flex-end");
            else $('.month').last().css("align-self", "flex-start");
        }   
}
function set_timeline() {
    $('.timeline').append( '<div class="year">'+(2015)+'</div>');

    $('.timeline').append( '<div class="year">'+(2016)+'</div>');
    $('.timeline').append( '<div class="month-wrapper"></div>');
    add_months(6,12);  

    for ( i = 0; i < 3;i++){
        $('.timeline').append( '<div class="year">'+(2017+i)+'</div>');
        add_months(6,12);         
    }

    $('.timeline').append( '<div class="year">'+(2020)+'</div>');
    add_months(1,8);   

};

// set_timeline();

$(document).ready(function() {
    set_timeline();
    $('.month:not(:last-child)').after('<div class="line"></div>');
});

$("#match-button").click(function(){
    if (info_showed){
        info_showed=false;
        $("#info").removeClass("show");
    }

    matched = !matched;
    choose_part();
    
    if (matched){
        the_match = dat[part_selected][item_selected[part_selected]].match;
        if (typeof the_match=="undefined") {
            item_selected[1-part_selected] = item_selected[part_selected];
        }
        else {
            $("body").addClass("matched");
            item_selected[1-part_selected] = the_match;

            $(".part").each(function(index) {
                $(this).append("<div class='no-scroll'></div>");
                $(this).find(".no-scroll").width($(this).width()).height($(this).height()).offset($(this).offset());
                the_image = dat[index][item_selected[index]].image;
                if (typeof the_image =="undefined") $(this).css("--myBg",bg[index]);
                else $(this).css("--myBg", "url('img/bg/" + dat[index][item_selected[index]].image);
            });

            the_image = dat[part_selected][item_selected[part_selected]].image;
            $("#info-small").find('.swiper-slide').each(function(){
                if (typeof the_image =="undefined") $(this).css('background-image', bg[item_selected[part_selected]%3]);
                else $(this).css('background-image', "url('img/bg/" + dat[part_selected][item_selected[part_selected]].image);
            });

            $("#year-gap").html(Math.abs(dat[part_selected][item_selected[part_selected]].year - dat[1-part_selected][item_selected[1-part_selected]].year));

            $(".list").each(function(index) {
                //hide others
                $(this).find(".list-item").not(':eq('+item_selected[index]+')').removeClass("selected");
                $(this).find(".list-item").eq(item_selected[index]).addClass("selected");

                //scroll list
                var diff = $(this).find(".list-item").eq(item_selected[index]).find(".item-content").offset().top - the_pos ;
                $(this).animate(
                    {
                    scrollTop: $(this).scrollTop() + diff ,
                    },
                    600
                );
            });
        }
    }
    else{
        $("body").removeClass("matched");
        $(".part").each(function(index) {
            $(this).find(".no-scroll").remove();
            $(this).css("--myBg",'none');
        });
    }
});




