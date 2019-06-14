"use strict";

;(function($){

    $('.js-slider').slick({
        arrows: false,
        dots: true,
        //appendDots: '.dots',
        appendDots: $('.dots'),
        customPaging : function(slider, i) {
            return '<span class="slider-dot"></span>';
        },
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true
    });

}(jQuery));

;(function($){

    $('.js-content-slider').slick({
        arrows: true,
        prevArrow: '<button class="arrowPrew"><i class="fas fa-chevron-left"></i></button>',
        nextArrow: '<button class="arrowNext"><i class="fas fa-chevron-right"></i></button>',
        dots: true,
        appendDots: $('.dot_two'),
        customPaging : function(slider, i) {
            return '<span class="slider-dot"></span>';
        },
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
    });

}(jQuery));

// Initialize and add the map
function initMap() {
    // The location of Suger Head
    var sugerHead = {lat: 44.5829049, lng: 33.6329423},
    // The map, centered at Suger Head

    image = {
        url: '../img/mapMar.svg',
        size: new google.maps.Size(71, 71),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(40, 40),
        scaledSize: new google.maps.Size(80, 80)
    };

    var map = new google.maps.Map(
        document.getElementById('map'), {
            zoom: 14, 
            center: sugerHead
        });
    // The marker, positioned at Suger Head
    var marker = new google.maps.Marker({
        position: sugerHead,
        map: map,
        icon: image
    });

   
}

