/*global document: false, $:false, jQuery:false, window: false */

var variables = {
    IMAGE_1: "http://farm6.staticflickr.com/5444/17679973232_568353a624_b.jpg",
    IMAGE_2: "http://farm6.staticflickr.com/5444/17679973232_568353a624_m.jpg"
};

window.onload = function() {
    var body = document.body.innerHTML;
    for(var varname in variables) {
        body = body.replace(new RegExp('#'+varname+'#', 'g'),
        variables[varname]);
    }
    document.body.innerHTML = body;
};

$(document).ready(function () {

    /* for the sticky navigation */
    $('.js--section-features').waypoint(function (direction) {
        if (direction === "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '60px'
    });

    /* Scroll on buttons */

    $('.js--scroll-to-plan').click(function () {
        $('html, body').animate({
            scrollTop: $('.js--section-plans').offset().top
        }, 1000);
    });

    $('.js--scroll-to-start').click(function () {
        $('html, body').animate({
            scrollTop: $('.js--section-features').offset().top
        }, 1000);
    });

    /* Navigation scroll */

    $(function () {
        $('a[href*=#]:not([href=#])').click(function () {
            if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });

    /* Animations on scroll */

    $('.js--wp-1').waypoint(function (direction) {
        $('.js--wp-1').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });

    $('.js--wp-2').waypoint(function (direction) {
        $('.js--wp-2').addClass('animated fadeInUp');
    }, {
        offset: '50%'
    });

    $('.js--wp-3').waypoint(function (direction) {
        $('.js--wp-3').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });

    $('.js--wp-4').waypoint(function (direction) {
        $('.js--wp-4').addClass('animated pulse');
    }, {
        offset: '50%'
    });

    /* Mobile navigation */

    $('.js--nav-icon').click(function () {
        var nav = $('.js--main-nav');
        nav.slideToggle(200);
        var icon = $('.js--nav-icon i');
        if (icon.hasClass('ion-navicon-round')) {
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        } else {
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
        }
    });

    /* Maps */
    var map = new GMaps({
        div: '.map',
        lat: 40.739657,
        lng: -73.85,
        zoom: 12
    });

    map.addMarker({
        lat: 40.739657,
        lng: -73.979412,
        title: 'New York',
        infoWindow: {
            content: '<p>New York City Headquarters</p>'
        }
    });
});
