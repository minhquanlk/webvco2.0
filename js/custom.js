// ------------------------------------------------
// Project Name: Emeric - Coming Soon and Portfolio Template
// Project Description: Emeric - clean and functional coming soon and portfolio template to kick-start your project
// Tags: mix_design, coming soon, under construction, template, landing page, portfolio, one page, responsive, html5, css3, creative, clean, agency, personal page
// Version: 1.0.0
// Build Date: September 2023
// Last Update: September 2023
// This product is available exclusively on Themeforest
// Author: mix_design
// Author URI: https://themeforest.net/user/mix_design
// File name: custom.js
// ------------------------------------------------

// ------------------------------------------------
// Table of Contents
// ------------------------------------------------
//
//  1. Loader & Loading Animation
//  2. Swiper Slider
//  3. Skillbars
//  4. Magnific Popup Video
//  5. KBW-Countdown
//  6. Vegas Kenburns
//  7. Mailchimp Notify Form
//  8. Contact Form
//
// ------------------------------------------------
// Table of Contents End
// ------------------------------------------------

$(window).on("load", function() {

    "use strict";

    // --------------------------------------------- //
    // Loader & Loading Animation Start
    // --------------------------------------------- //
    $(".loader__logo").addClass('scaleOut');

    setTimeout(function() {
        $(".loader").addClass('loaded');
        $("#main").addClass('active animate-in');
        $('#home-trigger').addClass('active-link');
    }, 300);

    setTimeout(function() {
        $("body").addClass('loaded');
    }, 950);
    // --------------------------------------------- //
    // Loader & Loading Animation End
    // --------------------------------------------- //

});

$(function() {

    "use strict";

    // --------------------------------------------- //
    // Swiper Slider Start
    // --------------------------------------------- //
    var swiper = new Swiper('.swiper', {
        // Optional parameters
        grabCursor: true,
        effect: "creative",
        creativeEffect: {
            prev: {
                translate: ["-20%", 0, -1],
            },
            next: {
                translate: ["100%", 0, 0],
            },
        },
        parallax: true,
        speed: 1300,
        loop: true,


        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

    });
    // --------------------------------------------- //
    // Swiper Slider End
    // --------------------------------------------- //

    // --------------------------------------------- //
    // Skillbars Settings Start
    // --------------------------------------------- //
    $('.skillbar').skillBars({
        from: 0,
        speed: 4000,
        interval: 100,
    });
    // --------------------------------------------- //
    // Skillbars Settings End
    // --------------------------------------------- //
    // --------------------------------------------- //
    // Smooth Scroll To Top Start
    // --------------------------------------------- //
    var offset = 300,
        offset_opacity = 1200,
        scroll_top_duration = 500,
        $back_to_top = $('.to-top');

    $(window).scroll(function() {
        ($(this).scrollTop() > offset) ? $back_to_top.addClass('is-visible'): $back_to_top.removeClass('is-visible fade-out');
        if ($(this).scrollTop() > offset_opacity) {
            $back_to_top.addClass('fade-out');
        }
    });

    $back_to_top.on('click', function(event) {
        event.preventDefault();
        $('body,html').animate({
            scrollTop: 0,
        }, scroll_top_duration);
    });
    // --------------------------------------------- //
    // Smooth Scroll To Top End
    // --------------------------------------------- //
    // --------------------------------------------- //
    // Magnific Popup Video Start
    // --------------------------------------------- //
    $('#inner-video-trigger').magnificPopup({
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false,
        callbacks: {
            beforeOpen: function() { $('body').addClass('overflow-hidden'); },
            close: function() { $('body').removeClass('overflow-hidden'); }
        }
    });

    $('#showreel-trigger').magnificPopup({
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false,
        callbacks: {
            beforeOpen: function() { $('body').addClass('overflow-hidden'); },
            close: function() { $('body').removeClass('overflow-hidden'); }
        }
    });
    // --------------------------------------------- //
    // Magnific Popup Video End
    // --------------------------------------------- //

    // --------------------------------------------- //
    // KBW-Countdown Start
    // --------------------------------------------- //
    $('#countdown').countdown({ until: $.countdown.UTCDate(+10, 2024, 3, 17), format: 'D' });
    $('#countdownLine').countdown({ until: $.countdown.UTCDate(+10, 2024, 3, 17), format: 'D' });
    // --------------------------------------------- //
    // KBW-Countdown End
    // --------------------------------------------- //

    // --------------------------------------------- //
    // Vegas Kenburns Start
    // --------------------------------------------- //
    var bgndKenburns = $('#bgndKenburns');
    if (bgndKenburns.length) {
        bgndKenburns.vegas({
            timer: false,
            delay: 8000,
            transition: 'fade2',
            transitionDuration: 2000,
            slides: [
                { src: "https://dummyimage.com/1000x1500/4d4d4d/636363" },
                { src: "https://dummyimage.com/1000x1500/4d4d4d/636363" },
                { src: "https://dummyimage.com/1000x1500/4d4d4d/636363" }
            ],
            animation: ['kenburnsUp', 'kenburnsDown', 'kenburnsLeft', 'kenburnsRight']
        });
    }
    // --------------------------------------------- //
    // Vegas Kenburns End
    // --------------------------------------------- //

    // --------------------------------------------- //
    // Mailchimp Notify Form Start
    // --------------------------------------------- //
    $('.notify-form').ajaxChimp({
        callback: mailchimpCallback,
        url: 'https://besaba.us10.list-manage.com/subscribe/post?u=e8d650c0df90e716c22ae4778&amp;id=54a7906900'
    });

    function mailchimpCallback(resp) {
        if (resp.result === 'success') {
            $('.notify').find('.form').addClass('is-hidden');
            $('.notify').find('.subscription-ok').addClass('is-visible');
            setTimeout(function() {
                // Done Functions
                $('.notify').find('.subscription-ok').removeClass('is-visible');
                $('.notify').find('.form').delay(300).removeClass('is-hidden');
                $('.notify-form').trigger("reset");
            }, 5000);
        } else if (resp.result === 'error') {
            $('.notify').find('.form').addClass('is-hidden');
            $('.notify').find('.subscription-error').addClass('is-visible');
            setTimeout(function() {
                // Done Functions
                $('.notify').find('.subscription-error').removeClass('is-visible');
                $('.notify').find('.form').delay(300).removeClass('is-hidden');
                $('.notify-form').trigger("reset");
            }, 5000);
        }
    };
    // --------------------------------------------- //
    // Mailchimp Notify Form End
    // --------------------------------------------- //

    // --------------------------------------------- //
    // Contact Form Start
    // --------------------------------------------- //
    $("#contact-form").submit(function() { //Change
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "mail.php", //Change
            data: th.serialize()
        }).done(function() {
            $('.contact').find('.form').addClass('is-hidden');
            $('.contact').find('.reply-group').addClass('is-visible');
            setTimeout(function() {
                // Done Functions
                $('.contact').find('.reply-group').removeClass('is-visible');
                $('.contact').find('.form').delay(300).removeClass('is-hidden');
                th.trigger("reset");
            }, 5000);
        });
        return false;
    });
    // --------------------------------------------- //
    // Contact Form End
    // --------------------------------------------- //

});

function pauseVideo() {
    var videos = document.querySelectorAll('.slider-video');

    videos.forEach(function(video) {
        video.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*')
    });
}

function filterContent(category) {
    // Lấy tất cả các div nội dung
    var contents = document.querySelectorAll('.content-nav');
    var button = document.getElementById(category);
    document.querySelectorAll('.btn-nav').forEach(function(btn) {
        btn.classList.remove('btn-active');
    });
    button.classList.add('btn-active');
    // Ẩn tất cả các div
    contents.forEach(function(div) {
        div.style.opacity = '0';
        div.style.transform = 'translateY(20px)'; // Di chuyển xuống một chút trước khi ẩn
        setTimeout(function() {

            div.setAttribute('style', 'display:none !important; opacity: 0; transform: translateY(20px);');
        }, 500); // Đợi cho hiệu ứng fade out hoàn thành rồi mới ẩn
    });

    // Hiển thị div của category được chọn
    var activeContents = document.querySelectorAll('.' + category);
    activeContents.forEach(function(div) {
        // Cần delay một chút để display: block có hiệu lực trước khi fade in
        setTimeout(function() {
            div.style.display = 'block';

        }, 600);
        setTimeout(function() {
            div.style.opacity = '1';
            div.style.transform = 'translateY(0px)';

        }, 650);
    });


}

function setActiveButtonBasedOnHash() {
    const currentHash = window.location.hash.substring(1); // Lấy giá trị hash và loại bỏ ký tự '#'
    if (currentHash != '') {
        const activeButton = document.getElementById(currentHash + '-nav');
        var button = document.getElementById('home-nav');
        // Nếu có nút tương ứng với hash và nút đó là một phần của navigation
        if (currentHash != 'home') {
            button.classList.remove('btn-active');
            activeButton.classList.add('btn-active');
            filterContent(currentHash + '-nav');
        }
    }
}

// Gọi hàm khi trang tải xong hoặc khi URL thay đổi
window.onload = setActiveButtonBasedOnHash();
$(document).ready(function() {
    $('.career-card').click(function(e) {
        // Remove greyed-out class from all cards and add it back to all except the active one
        $('.career-card').not(this).addClass('greyed-out');
        $(this).removeClass('greyed-out');
    });
});

document.querySelectorAll('.career-card').forEach(function(div) {

    div.addEventListener('click', function() {
        // Hide all B divs
        var jobDT = document.querySelectorAll('.job-dt-card');
        jobDT.forEach(function(contentDiv) {
            contentDiv.style.opacity = '0';
            contentDiv.style.transform = 'translateY(20px)';
            setTimeout(function() {

                contentDiv.setAttribute('style', 'display:none; opacity: 0; transform: translateY(20px);');
            }, 500);
        });

        var className = "." + this.id;
        var jobShow = document.querySelector(className);
        setTimeout(function() {
            jobShow.style.display = 'block';

        }, 500);
        setTimeout(function() {
            jobShow.style.opacity = '1';
            jobShow.style.transform = 'translateY(0px)';
            var offsetTop = jobShow.getBoundingClientRect().top + window.scrollY - 140;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }, 650);
    });
});