/*global $, window*/

// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require_tree .
//= require cocoon
//= require jquery-1.7.2.min
//= require lightbox
//= require jquery.superslides.min
//= require jquery.easing.1.3
//= require jquery.animate-enhanced.min

$(function () {
    "use strict";

    $('#slides').superslides({
        slide_speed: '1200',
        slide_easing: 'easeInOutCubic',
        pagination: true,
        hashchange: true,
        scrollable: false
        //classes:
        //    preserve: 'preserve',
        //    nav: 'slides-navigation',
        //    container: 'slides-container',
        //    pagination: 'slides-pagination
    });

    var MenuController;

    MenuController = function () {
        this.navigationEl = $('nav#menu');
        this.navigationEl.on("click", "a", $.proxy(this.chooseSection, this));

        $('a.home img').hide();
        $('footer').hide();
        $('a.top').hide();
        $(window).scroll(function () {
            if ($(window).scrollTop() < ($(this).height() - 56)) {
                $('header').removeClass('fixed');
                $('footer').fadeOut();
                $('a.home img').fadeOut();
                $('a.top').fadeOut();
            } else {
                $('header').addClass('fixed');
                $('footer').fadeIn();
                $('a.home img').fadeIn();
                $('a.top').fadeIn();
            }
        });

        $('a.top').on('click', function (event) {
            $('html, body').animate({
                scrollTop: 0
            }, 1250);
            event.preventDefault();
        });
    };

    MenuController.prototype.chooseSection  = function (event) {
        var sectionId = $(event.currentTarget).attr('href');
        $('html, body').animate({
            scrollTop: ($(sectionId).offset().top - 116)
        }, 1250);
        event.preventDefault();
    };

    window.menuController = new MenuController();

    // Add class effects
    //$(window).scroll(function () {
    //    console.log("scroll: " + $(window).scrollTop());
    //    if ($(window).scrollTop() > 320) {
    //        $('#news').addClass('animated bounceInDown');
    //    }
    //    if ($(window).scrollTop() > ) {
    //        $('#aboutus').addClass('animated bounceInDown');
    //    }
    //    if ($(window).scrollTop() > ) {
    //        $('#gallery').addClass('animated bounceInDown');
    //    }
    //    if ($(window).scrollTop() > ) {
    //        $('#units').addClass('animated bounceInDown');
    //    }
    //     if ($(window).scrollTop() > ) {
    //        $('#caps').addClass('animated bounceInDown');
    //    }
    //    if ($(window).scrollTop() > 2300) {
    //        $('#contact').addClass('animated bounceInDown');
    //    }
    //});
});
