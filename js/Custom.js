$(function(){
 
    'use strict';

    // Adjust Header Height 
    $('.header').height($(window).height());

    $(window).resize(function(){

        $('.header').height($(window).height());

    });

    // links Add Class Active

    $('.links li a').click(function(){
        $(this).parent().addClass('active').siblings().removeClass('active');
    });

    // Adjust ScrollTop smooth
    $('.links li a').click(function(){

        $('html , body').animate({

            scrollTop : $('#'+ $(this).data('value')).offset().top

        } , 1000);
    });
    //  //Adjust bxslider list item center
    // $('.slider').each(function(){
    //     $(this).css('paddingTop',($(window).height()-$('.slider div').height() / 2 ));
    // });
    // // bxslider smooth

    //     $('.slider').bxSlider({
    //         pager: false
    //     });
    

    //Slider Auto

    // (function autoSlider(){
    //     $('.slider .active').each(function () {
    //         if(!$(this).is(':last-child')){
    //             $(this).delay(3000).fadeout(1000,function (){
    //                 $(this).removeClass('active').next().addClass('active').fadeIn();
    //                 autoSlider();
    //             });
    //         }
    //     });


    // }());

    // var mixitup = require('mixitup');
    // require(['mixitup'], function(mixitup) {

    // });
    // var mixer = mixitup('.container');
    // var mixer = mixitup(containerEl);
    // var mixer = mixitup(containerEl, {
    //     selectors: {
    //         target: '.blog-item'
    //     },
    //     animation: {
    //         duration: 300
    //     }
    // });
    // var mixer = mixitup(containerEl);

    // mixer.filter('.Mobile');
    $('#Container').mixItUp();

    $('.shuffle li').click(function (){
        $(this).addClass('active').siblings().removeClass('active');
    })
});