﻿
/*=============================================================
    Authour URI: www.binarytheme.com
    License: Commons Attribution 3.0

    http://creativecommons.org/licenses/by/3.0/

    100% Free To use For Personal And Commercial Use.
    IN EXCHANGE JUST GIVE US CREDITS AND TELL YOUR FRIENDS ABOUT US
   
    ========================================================  */

(function ($) {
    "use strict";
    var mainApp = {
        scrollAnimation_fun: function () {

            /*====================================
             ON SCROLL ANIMATION SCRIPTS 
            ======================================*/


            window.scrollReveal = new scrollReveal();

        },
        scroll_fun: function () {

            /*====================================
                 EASING PLUGIN SCRIPTS 
                ======================================*/
            $(function () {
                $('.move-me a').bind('click', function (event) { //just pass move-me in design and start scrolling
                    var $anchor = $(this);
                    $('html, body').stop().animate({
                        scrollTop: $($anchor.attr('href')).offset().top
                    }, 1000, 'easeInOutQuad');
                    event.preventDefault();
                });
            });

        },

        top_flex_slider_fun: function () {
            /*====================================
             FLEX SLIDER SCRIPTS 
            ======================================*/
            $('#main-section').flexslider({
                animation: "fade", //String: Select your animation type, "fade" or "slide"
                slideshowSpeed: 3000,           //Integer: Set the speed of the slideshow cycling, in milliseconds
                animationSpeed: 1000,           //Integer: Set the speed of animations, in milliseconds
                startAt: 0,    //Integer: The slide that the slider should start on. Array notation (0 = first slide)

            });
        },

        custom_fun: function () {
            /* Counters  */
            if ($(".section-counters .start").length > 0) {
                $(".section-counters .start").each(function () {
                    var stat_item = $(this),
                        offset = stat_item.offset().top;
                    $(window).scroll(function () {
                        if ($(window).scrollTop() > (offset - 1000) && !(stat_item.hasClass('counting'))) {
                            stat_item.addClass('counting');
                            stat_item.countTo();
                        }
                    });
                });
            };

            // another custom callback for counting to infinity
            $('#infinity').data('countToOptions', {
                onComplete: function (value) {
                    count.call(this, {
                        from: value,
                        to: value + 1
                    });
                }
            });

            $('#infinity').each(count);

            function count(options) {
                var $this = $(this);
                options = $.extend({}, options || {}, $this.data('countToOptions') || {});
                $this.countTo(options);
            }


        },

    }


    $(document).ready(function () {
        mainApp.scrollAnimation_fun();
        mainApp.scroll_fun();
        mainApp.top_flex_slider_fun();
        mainApp.custom_fun();
    });
}(jQuery));


