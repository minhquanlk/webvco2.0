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
$('#gpa-scale-4').on('click', function() {
    document.getElementById('gpa-score').innerHTML = `<label for="gpa" class="form-label">12. Your GPA: <strong style="color: red;">*</strong></label>
<input type="number" id="gpa" name="gpa" class="form-control" required min="0" max="4">`
})

$('#gpa-scale-10').on('click', function() {
    document.getElementById('gpa-score').innerHTML = `<label for="gpa" class="form-label">12. Your GPA: <strong style="color: red;">*</strong></label>
<input type="number" id="gpa" name="gpa" class="form-control" required min="0" max="10">`
})

$('#job2').on('click', function() {
    document.getElementById('apply-form-1').innerHTML = ``;
    document.getElementById('apply-form-3').innerHTML = ``;
    document.getElementById('apply-form-4').innerHTML = ``;
    document.getElementById('apply-form-5').innerHTML = ``;
    document.getElementById('apply-form-2').innerHTML = `<form id="register-form" class="row form needs-validation avd-form" data-submit-ajax="false" data-redirect="true" novalidate="novalidate">
    <div id="form1" class="mb-4">
        <strong style="color: red;">*</strong> Required
    </div>
    <input type="hidden" id="formFile" name="position" value="B2B">
    <div class="mb-3 right-pd">
        <label for="formFile" class="form-label">Your Resume/CV (Filetype: PDF) <strong style="color: red;">*</strong></label>
        <input class="form-control required" type="file" id="formFile" name="formFile" required aria-required="true">
        <div id="formFile-help" class="form-text"><i>Please name your resume file as: Full Name - Your Year of Birth. Example: Nguyen Van A - 2000</i></div>
        <div class="invalid-feedback"> Please upload your resume. </div>

    </div>
    <input type="hidden" id="cvname" name="cvname" value="trống">
    <h4 class="mb-3 "><b>I. Personal Information</b></h4>
    <div class="mb-3 right-pd">
        <label for="fullName" class="form-label">1. Full Name: <strong style="color: red;">*</strong></label>
        <input type="text" id="fullName" name="fullName" class="form-control required" placeholder="Enter your name" required="true" aria-required="true">
        <div class="invalid-feedback"> Please fill your name. </div>
    </div>
    <div class="row">
        <div class="col-md-6 mb-3">
            <label for="year-of-birth" class="form-label">2. Year of birth: <strong style="color: red;">*</strong></label>
            <input class="form-control" type="date" id="year-of-birth" name="year-of-birth" required>

            <div class="invalid-feedback"> Please select. </div>
        </div>
        <div class="col-md-6 mb-3">
            <label for="gender" class="form-label">3. Gender: <strong style="color: red;">*</strong></label>
            <select class="form-select required" id="gender" name="gender">
            <option selected disabled value="">Choose your gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Others">Others</option>
        </select>
            <div class="invalid-feedback"> Please select. </div>
        </div>
    </div>
    <div class="row">
        <div class="col-md-6 mb-3">
            <label for="phone-number" class="form-label">4. Phone Number: <strong style="color: red;">*</strong> </label>

            <input type="tel" id="phone-number" name="phone-number" class="form-control" aria-describedby="phone-addon" placeholder="Enter your phone number" required>


        </div>
        <div class="col-md-6 mb-3">
            <label for="email" class="form-label">5. Email: <strong style="color: red;">*</strong> </label>
            <input type="email" id="email" name="email" class="form-control" placeholder="Enter your email" required>
            <div class="invalid-feedback"> Please fill your email correctly. </div>
        </div>
    </div>
    <div class="row">
        <div class="col-md-6 mb-3">
            <label for="facebook" class="form-label">6. Facebook cá nhân: <strong style="color: red;">*</strong> </label>

            <input type="text" id="facebook" name="facebook" class="form-control" aria-describedby="phone-addon" placeholder="Enter your facebook link" required>


        </div>
        <div class="col-md-6 mb-3">
            <label for="linkedin" class="form-label">7. Linkedin cá nhân: <strong style="color: red;">*</strong> </label>
            <input type="text" id="linkedin" name="linkedin" class="form-control" placeholder="Enter your linkedin link" required>
        </div>
    </div>
    <div class="col-md-12 mb-3 right-pd">
        <label for="location" class="form-label">8. Your current living city: <strong style="color: red;">*</strong> </label>
        <select class="form-select" id="location" name="location" required>
        <option selected disabled value="">Choose your city</option>
        <option value="Ho Chi Minh City">Ho Chi Minh City</option>
        <option value="Ha Noi City">Ha Noi City</option>
        <option value="Da Nang City">Da Nang City</option>
        <option value="Oversea">Oversea</option>
        <option value="Other">Other provinces</option>
    </select>
        <div class="invalid-feedback"> Please select. </div>
        <input type="text" id="other-location" name="other-location" class="mt-3 form-control hidden" placeholder="Enter your city">
    </div>

    <h4 class="mt-4 mb-3"><strong>II. Education</strong></h4>
    <div class="row">
        <div class="col-md-6 mb-3">
            <label for="university" class="form-label">9. Your university: <strong style="color: red;">*</strong></label>
            <select class="form-select" id="university" name="university" required>
            <option selected disabled value="">Choose your university</option>
            <option value="HANU - Hanoi University">  HANU - Hanoi University</option>
            <option value="VNU-ULIS - University of Languages and International Studies">VNU-ULIS - University of Languages and International Studies</option>
            <option value="FTU - Foreign Trade University">FTU - Foreign Trade University</option>
            <option value="FTU2 - Foreign Trade University Ho Chi Minh City Campus">FTU2 - Foreign Trade University Ho Chi Minh City Campus</option>
            <option value="IU-VNUHCM - International University">IU-VNUHCM - International University</option>
            <option value="UEH - University of Economics Ho Chi Minh City">UEH - University of Economics Ho Chi Minh City</option>
            <option value="HUFLIT - HCMC University of Foreign Languages and Information Technology">HUFLIT - HCMC University of Foreign Languages and Information Technology</option>
            <option value="TLU - Thuyloi University">TLU - Thuyloi University</option>
            <option value="USSH-VNUHCM - University of Social Sciences and Humanities">USSH-VNUHCM - University of Social Sciences and Humanities</option>
            <option value="VLU - Van Lang University">VLU - Van Lang University</option>
            <option value="HSU - Hoa Sen University">HSU - Hoa Sen University</option>
            <option value="TDTU - Ton Duc Thang University">TDTU - Ton Duc Thang University</option>
            <option value="Other">Other</option>
        </select>
            <div class="invalid-feedback"> Please select. </div>
            <input type="text" id="other-university" name="other-university" class="mt-3 form-control hidden" placeholder="Enter your University/College">

        </div>
        <div class="col-md-6 mb-3">
            <label for="major" class="form-label">10. Major: <strong style="color: red;">*</strong></label>
            <input type="text" id="major" name="major" class="form-control" placeholder="Enter your major" required>
            <div class="invalid-feedback"> Please fill your major. </div>

        </div>
    </div>



    <h4 class="mt-4 mb-3"><strong>III. Application</strong></h4>
    <div class="mb-3 right-pd">
        <label for="taskques" class="form-label">11. What is the most significant personal change you hope to achieve by joining VCO Group?</label>
        <textarea class="form-control" id="taskques" name="taskques" rows="3" placeholder="Enter your answer" maxlength="1200" required></textarea>
        <div id="introduce-help" class="form-text"><i>Please limit your answer in 300 words in English.</i></div>

    </div>

    <button class="btn btn-l mt-4" type="submit">
        <span class="btn__background bg-danger"></span>
        <span class="btn__text text-white">
        <em class="btn-title">Apply</em>
        <em class="btn-hover">Apply</em>
        </span>
    </button>
    <div id="loading" style="display: none; ">
        <p>Đang xử lý...</p>
    </div>
</form>`;
    const selectReasonUni = document.getElementById('university');
    const otherReasonInputUni = document.getElementById('other-university');
    const selectReasonMajor = document.getElementById('major');
    const otherReasonInputMajor = document.getElementById('other-major');
    const selectReasonCity = document.getElementById('location');
    const otherReasonInputCity = document.getElementById('other-location');
    // Lắng nghe sự kiện thay đổi chọn
    selectReasonUni.addEventListener('change', function() {
        if (selectReasonUni.value === 'Other') {
            otherReasonInputUni.classList.remove('hidden');
            otherReasonInputUni.setAttribute('required', "");
        } else {
            otherReasonInputUni.classList.add('hidden');
            otherReasonInputUni.removeAttribute('required');
        }
    });
    selectReasonMajor.addEventListener('change', function() {
        if (selectReasonMajor.value === 'Other') {
            otherReasonInputMajor.classList.remove('hidden');
            otherReasonInputMajor.setAttribute('required', "");
        } else {
            otherReasonInputMajor.classList.add('hidden');
            otherReasonInputMajor.removeAttribute('required');
        }
    });
    selectReasonCity.addEventListener('change', function() {
        if (selectReasonCity.value === 'Other') {
            otherReasonInputCity.classList.remove('hidden');
            otherReasonInputCity.setAttribute('required', "");
        } else {
            otherReasonInputCity.classList.add('hidden');
            otherReasonInputCity.removeAttribute('required');
        }
    });
})

$('#job1').on('click', function() {
    document.getElementById('apply-form-2').innerHTML = ``;
    document.getElementById('apply-form-3').innerHTML = ``;
    document.getElementById('apply-form-4').innerHTML = ``;
    document.getElementById('apply-form-5').innerHTML = ``;
    document.getElementById('apply-form-1').innerHTML = `<form id="register-form" class="row form needs-validation avd-form" data-submit-ajax="false" data-redirect="true" novalidate="novalidate">
    <div id="form1" class="mb-4">
        <strong style="color: red;">*</strong> Required
    </div>
    <input type="hidden" id="formFile" name="position" value="B2C">
    <div class="mb-3 right-pd">
        <label for="formFile" class="form-label">Your Resume/CV (Filetype: PDF) <strong style="color: red;">*</strong></label>
        <input class="form-control required" type="file" id="formFile" name="formFile" required aria-required="true">
        <div id="formFile-help" class="form-text"><i>Please name your resume file as: Full Name - Your Year of Birth. Example: Nguyen Van A - 2000</i></div>
        <div class="invalid-feedback"> Please upload your resume. </div>

    </div>
    <input type="hidden" id="cvname" name="cvname" value="trống">
    <h4 class="mb-3 "><b>I. Personal Information</b></h4>
    <div class="mb-3 right-pd">
        <label for="fullName" class="form-label">1. Full Name: <strong style="color: red;">*</strong></label>
        <input type="text" id="fullName" name="fullName" class="form-control required" placeholder="Enter your name" required="true" aria-required="true">
        <div class="invalid-feedback"> Please fill your name. </div>
    </div>
    <div class="row">
        <div class="col-md-6 mb-3">
            <label for="year-of-birth" class="form-label">2. Year of birth: <strong style="color: red;">*</strong></label>
            <input class="form-control" type="date" id="year-of-birth" name="year-of-birth" required>

            <div class="invalid-feedback"> Please select. </div>
        </div>
        <div class="col-md-6 mb-3">
            <label for="gender" class="form-label">3. Gender: <strong style="color: red;">*</strong></label>
            <select class="form-select required" id="gender" name="gender">
            <option selected disabled value="">Choose your gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Others">Others</option>
        </select>
            <div class="invalid-feedback"> Please select. </div>
        </div>
    </div>
    <div class="row">
        <div class="col-md-6 mb-3">
            <label for="phone-number" class="form-label">4. Phone Number: <strong style="color: red;">*</strong> </label>

            <input type="tel" id="phone-number" name="phone-number" class="form-control" aria-describedby="phone-addon" placeholder="Enter your phone number" required>


        </div>
        <div class="col-md-6 mb-3">
            <label for="email" class="form-label">5. Email: <strong style="color: red;">*</strong> </label>
            <input type="email" id="email" name="email" class="form-control" placeholder="Enter your email" required>
            <div class="invalid-feedback"> Please fill your email correctly. </div>
        </div>
    </div>
    <div class="row">
        <div class="col-md-6 mb-3">
            <label for="facebook" class="form-label">6. Facebook cá nhân: <strong style="color: red;">*</strong> </label>

            <input type="text" id="facebook" name="facebook" class="form-control" aria-describedby="phone-addon" placeholder="Enter your facebook link" required>


        </div>
        <div class="col-md-6 mb-3">
            <label for="linkedin" class="form-label">7. Linkedin cá nhân: <strong style="color: red;">*</strong> </label>
            <input type="text" id="linkedin" name="linkedin" class="form-control" placeholder="Enter your linkedin link" required>
        </div>
    </div>
    <div class="col-md-12 mb-3 right-pd">
        <label for="location" class="form-label">8. Your current living city: <strong style="color: red;">*</strong> </label>
        <select class="form-select" id="location" name="location" required>
        <option selected disabled value="">Choose your city</option>
        <option value="Ho Chi Minh City">Ho Chi Minh City</option>
        <option value="Ha Noi City">Ha Noi City</option>
        <option value="Da Nang City">Da Nang City</option>
        <option value="Oversea">Oversea</option>
        <option value="Other">Other provinces</option>
    </select>
        <div class="invalid-feedback"> Please select. </div>
        <input type="text" id="other-location" name="other-location" class="mt-3 form-control hidden" placeholder="Enter your city">
    </div>

    <h4 class="mt-4 mb-3"><strong>II. Education</strong></h4>
    <div class="row">
        <div class="col-md-6 mb-3">
            <label for="university" class="form-label">9. Your university: <strong style="color: red;">*</strong></label>
            <select class="form-select" id="university" name="university" required>
            <option selected disabled value="">Choose your university</option>
            <option value="HANU - Hanoi University">  HANU - Hanoi University</option>
            <option value="VNU-ULIS - University of Languages and International Studies">VNU-ULIS - University of Languages and International Studies</option>
            <option value="FTU - Foreign Trade University">FTU - Foreign Trade University</option>
            <option value="FTU2 - Foreign Trade University Ho Chi Minh City Campus">FTU2 - Foreign Trade University Ho Chi Minh City Campus</option>
            <option value="IU-VNUHCM - International University">IU-VNUHCM - International University</option>
            <option value="UEH - University of Economics Ho Chi Minh City">UEH - University of Economics Ho Chi Minh City</option>
            <option value="HUFLIT - HCMC University of Foreign Languages and Information Technology">HUFLIT - HCMC University of Foreign Languages and Information Technology</option>
            <option value="TLU - Thuyloi University">TLU - Thuyloi University</option>
            <option value="USSH-VNUHCM - University of Social Sciences and Humanities">USSH-VNUHCM - University of Social Sciences and Humanities</option>
            <option value="VLU - Van Lang University">VLU - Van Lang University</option>
            <option value="HSU - Hoa Sen University">HSU - Hoa Sen University</option>
            <option value="TDTU - Ton Duc Thang University">TDTU - Ton Duc Thang University</option>
            <option value="Other">Other</option>
        </select>
            <div class="invalid-feedback"> Please select. </div>
            <input type="text" id="other-university" name="other-university" class="mt-3 form-control hidden" placeholder="Enter your University/College">

        </div>
        <div class="col-md-6 mb-3">
            <label for="major" class="form-label">10. Major: <strong style="color: red;">*</strong></label>
            <input type="text" id="major" name="major" class="form-control" placeholder="Enter your major" required>
            <div class="invalid-feedback"> Please fill your major. </div>

        </div>
    </div>



    <h4 class="mt-4 mb-3"><strong>III. Application</strong></h4>
    <div class="mb-3 right-pd">
        <label for="taskques" class="form-label">11. What is the most significant personal change you hope to achieve by joining VCO Group?</label>
        <textarea class="form-control" id="taskques" name="taskques" rows="3" placeholder="Enter your answer" maxlength="1200" required></textarea>
        <div id="introduce-help" class="form-text"><i>Please limit your answer in 300 words in English.</i></div>

    </div>

    <button class="btn btn-l mt-4" type="submit">
        <span class="btn__background bg-danger"></span>
        <span class="btn__text text-white">
        <em class="btn-title">Apply</em>
        <em class="btn-hover">Apply</em>
        </span>
    </button>
    <div id="loading" style="display: none; ">
        <p>Đang xử lý...</p>
    </div>
</form>`;
    const selectReasonUni = document.getElementById('university');
    const otherReasonInputUni = document.getElementById('other-university');
    const selectReasonMajor = document.getElementById('major');
    const otherReasonInputMajor = document.getElementById('other-major');
    const selectReasonCity = document.getElementById('location');
    const otherReasonInputCity = document.getElementById('other-location');
    // Lắng nghe sự kiện thay đổi chọn
    selectReasonUni.addEventListener('change', function() {
        if (selectReasonUni.value === 'Other') {
            otherReasonInputUni.classList.remove('hidden');
            otherReasonInputUni.setAttribute('required', "");
        } else {
            otherReasonInputUni.classList.add('hidden');
            otherReasonInputUni.removeAttribute('required');
        }
    });
    selectReasonMajor.addEventListener('change', function() {
        if (selectReasonMajor.value === 'Other') {
            otherReasonInputMajor.classList.remove('hidden');
            otherReasonInputMajor.setAttribute('required', "");
        } else {
            otherReasonInputMajor.classList.add('hidden');
            otherReasonInputMajor.removeAttribute('required');
        }
    });
    selectReasonCity.addEventListener('change', function() {
        if (selectReasonCity.value === 'Other') {
            otherReasonInputCity.classList.remove('hidden');
            otherReasonInputCity.setAttribute('required', "");
        } else {
            otherReasonInputCity.classList.add('hidden');
            otherReasonInputCity.removeAttribute('required');
        }
    });
})
$('#job3').on('click', function() {
    document.getElementById('apply-form-1').innerHTML = ``;
    document.getElementById('apply-form-2').innerHTML = ``;
    document.getElementById('apply-form-4').innerHTML = ``;
    document.getElementById('apply-form-5').innerHTML = ``;
    document.getElementById('apply-form-3').innerHTML = `<form id="register-form" class="row form needs-validation avd-form" data-submit-ajax="false" data-redirect="true" novalidate="novalidate">
    <div id="form1" class="mb-4">
        <strong style="color: red;">*</strong> Required
    </div>
    <input type="hidden" id="formFile" name="position" value="SS">
    <div class="mb-3 right-pd">
        <label for="formFile" class="form-label">Your Resume/CV (Filetype: PDF) <strong style="color: red;">*</strong></label>
        <input class="form-control required" type="file" id="formFile" name="formFile" required aria-required="true">
        <div id="formFile-help" class="form-text"><i>Please name your resume file as: Full Name - Your Year of Birth. Example: Nguyen Van A - 2000</i></div>
        <div class="invalid-feedback"> Please upload your resume. </div>

    </div>
    <input type="hidden" id="cvname" name="cvname" value="trống">
    <h4 class="mb-3 "><b>I. Personal Information</b></h4>
    <div class="mb-3 right-pd">
        <label for="fullName" class="form-label">1. Full Name: <strong style="color: red;">*</strong></label>
        <input type="text" id="fullName" name="fullName" class="form-control required" placeholder="Enter your name" required="true" aria-required="true">
        <div class="invalid-feedback"> Please fill your name. </div>
    </div>
    <div class="row">
        <div class="col-md-6 mb-3">
            <label for="year-of-birth" class="form-label">2. Year of birth: <strong style="color: red;">*</strong></label>
            <input class="form-control" type="date" id="year-of-birth" name="year-of-birth" required>

            <div class="invalid-feedback"> Please select. </div>
        </div>
        <div class="col-md-6 mb-3">
            <label for="gender" class="form-label">3. Gender: <strong style="color: red;">*</strong></label>
            <select class="form-select required" id="gender" name="gender">
            <option selected disabled value="">Choose your gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Others">Others</option>
        </select>
            <div class="invalid-feedback"> Please select. </div>
        </div>
    </div>
    <div class="row">
        <div class="col-md-6 mb-3">
            <label for="phone-number" class="form-label">4. Phone Number: <strong style="color: red;">*</strong> </label>

            <input type="tel" id="phone-number" name="phone-number" class="form-control" aria-describedby="phone-addon" placeholder="Enter your phone number" required>


        </div>
        <div class="col-md-6 mb-3">
            <label for="email" class="form-label">5. Email: <strong style="color: red;">*</strong> </label>
            <input type="email" id="email" name="email" class="form-control" placeholder="Enter your email" required>
            <div class="invalid-feedback"> Please fill your email correctly. </div>
        </div>
    </div>
    <div class="row">
        <div class="col-md-6 mb-3">
            <label for="facebook" class="form-label">6. Facebook cá nhân: <strong style="color: red;">*</strong> </label>

            <input type="text" id="facebook" name="facebook" class="form-control" aria-describedby="phone-addon" placeholder="Enter your facebook link" required>


        </div>
        <div class="col-md-6 mb-3">
            <label for="linkedin" class="form-label">7. Linkedin cá nhân: <strong style="color: red;">*</strong> </label>
            <input type="text" id="linkedin" name="linkedin" class="form-control" placeholder="Enter your linkedin link" required>
        </div>
    </div>
    <div class="col-md-12 mb-3 right-pd">
        <label for="location" class="form-label">8. Your current living city: <strong style="color: red;">*</strong> </label>
        <select class="form-select" id="location" name="location" required>
        <option selected disabled value="">Choose your city</option>
        <option value="Ho Chi Minh City">Ho Chi Minh City</option>
        <option value="Ha Noi City">Ha Noi City</option>
        <option value="Da Nang City">Da Nang City</option>
        <option value="Oversea">Oversea</option>
        <option value="Other">Other provinces</option>
    </select>
        <div class="invalid-feedback"> Please select. </div>
        <input type="text" id="other-location" name="other-location" class="mt-3 form-control hidden" placeholder="Enter your city">
    </div>

    <h4 class="mt-4 mb-3"><strong>II. Education</strong></h4>
    <div class="row">
        <div class="col-md-6 mb-3">
            <label for="university" class="form-label">9. Your university: <strong style="color: red;">*</strong></label>
            <select class="form-select" id="university" name="university" required>
            <option selected disabled value="">Choose your university</option>
            <option value="HANU - Hanoi University">  HANU - Hanoi University</option>
            <option value="VNU-ULIS - University of Languages and International Studies">VNU-ULIS - University of Languages and International Studies</option>
            <option value="FTU - Foreign Trade University">FTU - Foreign Trade University</option>
            <option value="FTU2 - Foreign Trade University Ho Chi Minh City Campus">FTU2 - Foreign Trade University Ho Chi Minh City Campus</option>
            <option value="IU-VNUHCM - International University">IU-VNUHCM - International University</option>
            <option value="UEH - University of Economics Ho Chi Minh City">UEH - University of Economics Ho Chi Minh City</option>
            <option value="HUFLIT - HCMC University of Foreign Languages and Information Technology">HUFLIT - HCMC University of Foreign Languages and Information Technology</option>
            <option value="TLU - Thuyloi University">TLU - Thuyloi University</option>
            <option value="USSH-VNUHCM - University of Social Sciences and Humanities">USSH-VNUHCM - University of Social Sciences and Humanities</option>
            <option value="VLU - Van Lang University">VLU - Van Lang University</option>
            <option value="HSU - Hoa Sen University">HSU - Hoa Sen University</option>
            <option value="TDTU - Ton Duc Thang University">TDTU - Ton Duc Thang University</option>
            <option value="Other">Other</option>
        </select>
            <div class="invalid-feedback"> Please select. </div>
            <input type="text" id="other-university" name="other-university" class="mt-3 form-control hidden" placeholder="Enter your University/College">

        </div>
        <div class="col-md-6 mb-3">
            <label for="major" class="form-label">10. Major: <strong style="color: red;">*</strong></label>
            <input type="text" id="major" name="major" class="form-control" placeholder="Enter your major" required>
            <div class="invalid-feedback"> Please fill your major. </div>

        </div>
    </div>



    <h4 class="mt-4 mb-3"><strong>III. Application</strong></h4>
    <div class="mb-3 right-pd">
        <label for="taskques" class="form-label">11. What is the most significant personal change you hope to achieve by joining VCO Group?</label>
        <textarea class="form-control" id="taskques" name="taskques" rows="3" placeholder="Enter your answer" maxlength="1200" required></textarea>
        <div id="introduce-help" class="form-text"><i>Please limit your answer in 300 words in English.</i></div>

    </div>

    <button class="btn btn-l mt-4" type="submit">
        <span class="btn__background bg-danger"></span>
        <span class="btn__text text-white">
        <em class="btn-title">Apply</em>
        <em class="btn-hover">Apply</em>
        </span>
    </button>
    <div id="loading" style="display: none; ">
        <p>Đang xử lý...</p>
    </div>
</form>`;
    const selectReasonUni = document.getElementById('university');
    const otherReasonInputUni = document.getElementById('other-university');
    const selectReasonMajor = document.getElementById('major');
    const otherReasonInputMajor = document.getElementById('other-major');
    const selectReasonCity = document.getElementById('location');
    const otherReasonInputCity = document.getElementById('other-location');
    // Lắng nghe sự kiện thay đổi chọn
    selectReasonUni.addEventListener('change', function() {
        if (selectReasonUni.value === 'Other') {
            otherReasonInputUni.classList.remove('hidden');
            otherReasonInputUni.setAttribute('required', "");
        } else {
            otherReasonInputUni.classList.add('hidden');
            otherReasonInputUni.removeAttribute('required');
        }
    });
    selectReasonMajor.addEventListener('change', function() {
        if (selectReasonMajor.value === 'Other') {
            otherReasonInputMajor.classList.remove('hidden');
            otherReasonInputMajor.setAttribute('required', "");
        } else {
            otherReasonInputMajor.classList.add('hidden');
            otherReasonInputMajor.removeAttribute('required');
        }
    });
    selectReasonCity.addEventListener('change', function() {
        if (selectReasonCity.value === 'Other') {
            otherReasonInputCity.classList.remove('hidden');
            otherReasonInputCity.setAttribute('required', "");
        } else {
            otherReasonInputCity.classList.add('hidden');
            otherReasonInputCity.removeAttribute('required');
        }
    });
})
$('#job4').on('click', function() {
    document.getElementById('apply-form-1').innerHTML = ``;
    document.getElementById('apply-form-3').innerHTML = ``;
    document.getElementById('apply-form-2').innerHTML = ``;
    document.getElementById('apply-form-5').innerHTML = ``;
    document.getElementById('apply-form-4').innerHTML = `<form id="register-form" class="row form needs-validation avd-form" data-submit-ajax="false" data-redirect="true" novalidate="novalidate">
    <div id="form1" class="mb-4">
        <strong style="color: red;">*</strong> Required
    </div>
    <input type="hidden" id="formFile" name="position" value="MBS">
    <div class="mb-3 right-pd">
        <label for="formFile" class="form-label">Your Resume/CV (Filetype: PDF) <strong style="color: red;">*</strong></label>
        <input class="form-control required" type="file" id="formFile" name="formFile" required aria-required="true">
        <div id="formFile-help" class="form-text"><i>Please name your resume file as: Full Name - Your Year of Birth. Example: Nguyen Van A - 2000</i></div>
        <div class="invalid-feedback"> Please upload your resume. </div>

    </div>
    <input type="hidden" id="cvname" name="cvname" value="trống">
    <h4 class="mb-3 "><b>I. Personal Information</b></h4>
    <div class="mb-3 right-pd">
        <label for="fullName" class="form-label">1. Full Name: <strong style="color: red;">*</strong></label>
        <input type="text" id="fullName" name="fullName" class="form-control required" placeholder="Enter your name" required="true" aria-required="true">
        <div class="invalid-feedback"> Please fill your name. </div>
    </div>
    <div class="row">
        <div class="col-md-6 mb-3">
            <label for="year-of-birth" class="form-label">2. Year of birth: <strong style="color: red;">*</strong></label>
            <input class="form-control" type="date" id="year-of-birth" name="year-of-birth" required>

            <div class="invalid-feedback"> Please select. </div>
        </div>
        <div class="col-md-6 mb-3">
            <label for="gender" class="form-label">3. Gender: <strong style="color: red;">*</strong></label>
            <select class="form-select required" id="gender" name="gender">
            <option selected disabled value="">Choose your gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Others">Others</option>
        </select>
            <div class="invalid-feedback"> Please select. </div>
        </div>
    </div>
    <div class="row">
        <div class="col-md-6 mb-3">
            <label for="phone-number" class="form-label">4. Phone Number: <strong style="color: red;">*</strong> </label>

            <input type="tel" id="phone-number" name="phone-number" class="form-control" aria-describedby="phone-addon" placeholder="Enter your phone number" required>


        </div>
        <div class="col-md-6 mb-3">
            <label for="email" class="form-label">5. Email: <strong style="color: red;">*</strong> </label>
            <input type="email" id="email" name="email" class="form-control" placeholder="Enter your email" required>
            <div class="invalid-feedback"> Please fill your email correctly. </div>
        </div>
    </div>
    <div class="row">
        <div class="col-md-6 mb-3">
            <label for="facebook" class="form-label">6. Facebook cá nhân: <strong style="color: red;">*</strong> </label>

            <input type="text" id="facebook" name="facebook" class="form-control" aria-describedby="phone-addon" placeholder="Enter your facebook link" required>


        </div>
        <div class="col-md-6 mb-3">
            <label for="linkedin" class="form-label">7. Linkedin cá nhân: <strong style="color: red;">*</strong> </label>
            <input type="text" id="linkedin" name="linkedin" class="form-control" placeholder="Enter your linkedin link" required>
        </div>
    </div>
    <div class="col-md-12 mb-3 right-pd">
        <label for="location" class="form-label">8. Your current living city: <strong style="color: red;">*</strong> </label>
        <select class="form-select" id="location" name="location" required>
        <option selected disabled value="">Choose your city</option>
        <option value="Ho Chi Minh City">Ho Chi Minh City</option>
        <option value="Ha Noi City">Ha Noi City</option>
        <option value="Da Nang City">Da Nang City</option>
        <option value="Oversea">Oversea</option>
        <option value="Other">Other provinces</option>
    </select>
        <div class="invalid-feedback"> Please select. </div>
        <input type="text" id="other-location" name="other-location" class="mt-3 form-control hidden" placeholder="Enter your city">
    </div>

    <h4 class="mt-4 mb-3"><strong>II. Education</strong></h4>
    <div class="row">
        <div class="col-md-6 mb-3">
            <label for="university" class="form-label">9. Your university: <strong style="color: red;">*</strong></label>
            <select class="form-select" id="university" name="university" required>
            <option selected disabled value="">Choose your university</option>
            <option value="HANU - Hanoi University">  HANU - Hanoi University</option>
            <option value="VNU-ULIS - University of Languages and International Studies">VNU-ULIS - University of Languages and International Studies</option>
            <option value="FTU - Foreign Trade University">FTU - Foreign Trade University</option>
            <option value="FTU2 - Foreign Trade University Ho Chi Minh City Campus">FTU2 - Foreign Trade University Ho Chi Minh City Campus</option>
            <option value="IU-VNUHCM - International University">IU-VNUHCM - International University</option>
            <option value="UEH - University of Economics Ho Chi Minh City">UEH - University of Economics Ho Chi Minh City</option>
            <option value="HUFLIT - HCMC University of Foreign Languages and Information Technology">HUFLIT - HCMC University of Foreign Languages and Information Technology</option>
            <option value="TLU - Thuyloi University">TLU - Thuyloi University</option>
            <option value="USSH-VNUHCM - University of Social Sciences and Humanities">USSH-VNUHCM - University of Social Sciences and Humanities</option>
            <option value="VLU - Van Lang University">VLU - Van Lang University</option>
            <option value="HSU - Hoa Sen University">HSU - Hoa Sen University</option>
            <option value="TDTU - Ton Duc Thang University">TDTU - Ton Duc Thang University</option>
            <option value="Other">Other</option>
        </select>
            <div class="invalid-feedback"> Please select. </div>
            <input type="text" id="other-university" name="other-university" class="mt-3 form-control hidden" placeholder="Enter your University/College">

        </div>
        <div class="col-md-6 mb-3">
            <label for="major" class="form-label">10. Major: <strong style="color: red;">*</strong></label>
            <input type="text" id="major" name="major" class="form-control" placeholder="Enter your major" required>
            <div class="invalid-feedback"> Please fill your major. </div>

        </div>
    </div>



    <h4 class="mt-4 mb-3"><strong>III. Application</strong></h4>
    <div class="mb-3 right-pd">
        <label for="taskques" class="form-label">11. What is the most significant personal change you hope to achieve by joining VCO Group?</label>
        <textarea class="form-control" id="taskques" name="taskques" rows="3" placeholder="Enter your answer" maxlength="1200" required></textarea>
        <div id="introduce-help" class="form-text"><i>Please limit your answer in 300 words in English.</i></div>

    </div>

    <button class="btn btn-l mt-4" type="submit">
        <span class="btn__background bg-danger"></span>
        <span class="btn__text text-white">
        <em class="btn-title">Apply</em>
        <em class="btn-hover">Apply</em>
        </span>
    </button>
    <div id="loading" style="display: none; ">
        <p>Đang xử lý...</p>
    </div>
</form>`;
    const selectReasonUni = document.getElementById('university');
    const otherReasonInputUni = document.getElementById('other-university');
    const selectReasonMajor = document.getElementById('major');
    const otherReasonInputMajor = document.getElementById('other-major');
    const selectReasonCity = document.getElementById('location');
    const otherReasonInputCity = document.getElementById('other-location');
    // Lắng nghe sự kiện thay đổi chọn
    selectReasonUni.addEventListener('change', function() {
        if (selectReasonUni.value === 'Other') {
            otherReasonInputUni.classList.remove('hidden');
            otherReasonInputUni.setAttribute('required', "");
        } else {
            otherReasonInputUni.classList.add('hidden');
            otherReasonInputUni.removeAttribute('required');
        }
    });
    selectReasonMajor.addEventListener('change', function() {
        if (selectReasonMajor.value === 'Other') {
            otherReasonInputMajor.classList.remove('hidden');
            otherReasonInputMajor.setAttribute('required', "");
        } else {
            otherReasonInputMajor.classList.add('hidden');
            otherReasonInputMajor.removeAttribute('required');
        }
    });
    selectReasonCity.addEventListener('change', function() {
        if (selectReasonCity.value === 'Other') {
            otherReasonInputCity.classList.remove('hidden');
            otherReasonInputCity.setAttribute('required', "");
        } else {
            otherReasonInputCity.classList.add('hidden');
            otherReasonInputCity.removeAttribute('required');
        }
    });
})
$('#job5').on('click', function() {

    document.getElementById('apply-form-1').innerHTML = ``;
    document.getElementById('apply-form-3').innerHTML = ``;
    document.getElementById('apply-form-4').innerHTML = ``;
    document.getElementById('apply-form-2').innerHTML = ``;
    document.getElementById('apply-form-5').innerHTML = `<form id="register-form" class="row form needs-validation avd-form" data-submit-ajax="false" data-redirect="true" novalidate="novalidate">
    <div id="form1" class="mb-4">
        <strong style="color: red;">*</strong> Required
    </div>
    <input type="hidden" id="formFile" name="position" value="CEO">
    <div class="mb-3 right-pd">
        <label for="formFile" class="form-label">Your Resume/CV (Filetype: PDF) <strong style="color: red;">*</strong></label>
        <input class="form-control required" type="file" id="formFile" name="formFile" required aria-required="true">
        <div id="formFile-help" class="form-text"><i>Please name your resume file as: Full Name - Your Year of Birth. Example: Nguyen Van A - 2000</i></div>
        <div class="invalid-feedback"> Please upload your resume. </div>

    </div>
    <input type="hidden" id="cvname" name="cvname" value="trống">
    <h4 class="mb-3 "><b>I. Personal Information</b></h4>
    <div class="mb-3 right-pd">
        <label for="fullName" class="form-label">1. Full Name: <strong style="color: red;">*</strong></label>
        <input type="text" id="fullName" name="fullName" class="form-control required" placeholder="Enter your name" required="true" aria-required="true">
        <div class="invalid-feedback"> Please fill your name. </div>
    </div>
    <div class="row">
        <div class="col-md-6 mb-3">
            <label for="year-of-birth" class="form-label">2. Year of birth: <strong style="color: red;">*</strong></label>
            <input class="form-control" type="date" id="year-of-birth" name="year-of-birth" required>

            <div class="invalid-feedback"> Please select. </div>
        </div>
        <div class="col-md-6 mb-3">
            <label for="gender" class="form-label">3. Gender: <strong style="color: red;">*</strong></label>
            <select class="form-select required" id="gender" name="gender">
            <option selected disabled value="">Choose your gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Others">Others</option>
        </select>
            <div class="invalid-feedback"> Please select. </div>
        </div>
    </div>
    <div class="row">
        <div class="col-md-6 mb-3">
            <label for="phone-number" class="form-label">4. Phone Number: <strong style="color: red;">*</strong> </label>

            <input type="tel" id="phone-number" name="phone-number" class="form-control" aria-describedby="phone-addon" placeholder="Enter your phone number" required>


        </div>
        <div class="col-md-6 mb-3">
            <label for="email" class="form-label">5. Email: <strong style="color: red;">*</strong> </label>
            <input type="email" id="email" name="email" class="form-control" placeholder="Enter your email" required>
            <div class="invalid-feedback"> Please fill your email correctly. </div>
        </div>
    </div>
    <div class="row">
        <div class="col-md-6 mb-3">
            <label for="facebook" class="form-label">6. Facebook cá nhân: <strong style="color: red;">*</strong> </label>

            <input type="text" id="facebook" name="facebook" class="form-control" aria-describedby="phone-addon" placeholder="Enter your facebook link" required>


        </div>
        <div class="col-md-6 mb-3">
            <label for="linkedin" class="form-label">7. Linkedin cá nhân: <strong style="color: red;">*</strong> </label>
            <input type="text" id="linkedin" name="linkedin" class="form-control" placeholder="Enter your linkedin link" required>
        </div>
    </div>
    <div class="col-md-12 mb-3 right-pd">
        <label for="location" class="form-label">8. Your current living city: <strong style="color: red;">*</strong> </label>
        <select class="form-select" id="location" name="location" required>
        <option selected disabled value="">Choose your city</option>
        <option value="Ho Chi Minh City">Ho Chi Minh City</option>
        <option value="Ha Noi City">Ha Noi City</option>
        <option value="Da Nang City">Da Nang City</option>
        <option value="Oversea">Oversea</option>
        <option value="Other">Other provinces</option>
    </select>
        <div class="invalid-feedback"> Please select. </div>
        <input type="text" id="other-location" name="other-location" class="mt-3 form-control hidden" placeholder="Enter your city">
    </div>

    <h4 class="mt-4 mb-3"><strong>II. Education</strong></h4>
    <div class="row">
        <div class="col-md-6 mb-3">
            <label for="university" class="form-label">9. Your university: <strong style="color: red;">*</strong></label>
            <select class="form-select" id="university" name="university" required>
            <option selected disabled value="">Choose your university</option>
            <option value="HANU - Hanoi University">  HANU - Hanoi University</option>
            <option value="VNU-ULIS - University of Languages and International Studies">VNU-ULIS - University of Languages and International Studies</option>
            <option value="FTU - Foreign Trade University">FTU - Foreign Trade University</option>
            <option value="FTU2 - Foreign Trade University Ho Chi Minh City Campus">FTU2 - Foreign Trade University Ho Chi Minh City Campus</option>
            <option value="IU-VNUHCM - International University">IU-VNUHCM - International University</option>
            <option value="UEH - University of Economics Ho Chi Minh City">UEH - University of Economics Ho Chi Minh City</option>
            <option value="HUFLIT - HCMC University of Foreign Languages and Information Technology">HUFLIT - HCMC University of Foreign Languages and Information Technology</option>
            <option value="TLU - Thuyloi University">TLU - Thuyloi University</option>
            <option value="USSH-VNUHCM - University of Social Sciences and Humanities">USSH-VNUHCM - University of Social Sciences and Humanities</option>
            <option value="VLU - Van Lang University">VLU - Van Lang University</option>
            <option value="HSU - Hoa Sen University">HSU - Hoa Sen University</option>
            <option value="TDTU - Ton Duc Thang University">TDTU - Ton Duc Thang University</option>
            <option value="Other">Other</option>
        </select>
            <div class="invalid-feedback"> Please select. </div>
            <input type="text" id="other-university" name="other-university" class="mt-3 form-control hidden" placeholder="Enter your University/College">

        </div>
        <div class="col-md-6 mb-3">
            <label for="major" class="form-label">10. Major: <strong style="color: red;">*</strong></label>
            <input type="text" id="major" name="major" class="form-control" placeholder="Enter your major" required>
            <div class="invalid-feedback"> Please fill your major. </div>

        </div>
    </div>



    <h4 class="mt-4 mb-3"><strong>III. Application</strong></h4>
    <div class="mb-3 right-pd">
        <label for="taskques" class="form-label">11. What is the most significant personal change you hope to achieve by joining VCO Group?</label>
        <textarea class="form-control" id="taskques" name="taskques" rows="3" placeholder="Enter your answer" maxlength="1200" required></textarea>
        <div id="introduce-help" class="form-text"><i>Please limit your answer in 300 words in English.</i></div>

    </div>

    <button class="btn btn-l mt-4" type="submit">
        <span class="btn__background bg-danger"></span>
        <span class="btn__text text-white">
        <em class="btn-title">Apply</em>
        <em class="btn-hover">Apply</em>
        </span>
    </button>
    <div id="loading" style="display: none; ">
        <p>Đang xử lý...</p>
    </div>
</form>`;
    const selectReasonUni = document.getElementById('university');
    const otherReasonInputUni = document.getElementById('other-university');
    const selectReasonMajor = document.getElementById('major');
    const otherReasonInputMajor = document.getElementById('other-major');
    const selectReasonCity = document.getElementById('location');
    const otherReasonInputCity = document.getElementById('other-location');
    // Lắng nghe sự kiện thay đổi chọn
    selectReasonUni.addEventListener('change', function() {
        if (selectReasonUni.value === 'Other') {
            otherReasonInputUni.classList.remove('hidden');
            otherReasonInputUni.setAttribute('required', "");
        } else {
            otherReasonInputUni.classList.add('hidden');
            otherReasonInputUni.removeAttribute('required');
        }
    });
    selectReasonMajor.addEventListener('change', function() {
        if (selectReasonMajor.value === 'Other') {
            otherReasonInputMajor.classList.remove('hidden');
            otherReasonInputMajor.setAttribute('required', "");
        } else {
            otherReasonInputMajor.classList.add('hidden');
            otherReasonInputMajor.removeAttribute('required');
        }
    });
    selectReasonCity.addEventListener('change', function() {
        if (selectReasonCity.value === 'Other') {
            otherReasonInputCity.classList.remove('hidden');
            otherReasonInputCity.setAttribute('required', "");
        } else {
            otherReasonInputCity.classList.add('hidden');
            otherReasonInputCity.removeAttribute('required');
        }
    });
})

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
(function() {


    // Initialize Firebase
    var firebaseConfig = {

        apiKey: "AIzaSyDbYob_QjKN8M_umN7Ct9OdkEH08y7RF2w",
        authDomain: "ad-form-94890.firebaseapp.com",
        databaseURL: "https://ad-form-94890.firebaseio.com",
        projectId: "ad-form-94890",
        storageBucket: "ad-form-94890.appspot.com",
        messagingSenderId: "458557667857",
        appId: "1:458557667857:web:a50446fc2f126bf6a20fb0"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    var database = firebase.database();


    /**
     * Initializes the app.
     */
    var initApp = function() {
        var fileButton = document.getElementById('formFile');
        var inputfile = document.getElementById('cvname');
        document.getElementById('job5').addEventListener('click', function() {

            fileButton = document.getElementById('formFile');
            inputfile = document.getElementById('cvname');
            if (!!fileButton) {

                fileButton.addEventListener('change', function(e) {

                    console.log('connect to firebase');

                    var fileName = e.target.files[0].name;
                    inputfile.value = fileName;
                    uploadFile(e.target.files[0]);

                });
            }
        });
        document.getElementById('job4').addEventListener('click', function() {
            fileButton = document.getElementById('formFile');
            inputfile = document.getElementById('cvname');
            if (!!fileButton) {

                fileButton.addEventListener('change', function(e) {



                    var fileName = e.target.files[0].name;
                    inputfile.value = fileName;
                    uploadFile(e.target.files[0]);

                });
            }
        });

        document.getElementById('job3').addEventListener('click', function() {
            fileButton = document.getElementById('formFile');
            inputfile = document.getElementById('cvname');
            if (!!fileButton) {

                fileButton.addEventListener('change', function(e) {



                    var fileName = e.target.files[0].name;
                    inputfile.value = fileName;
                    uploadFile(e.target.files[0]);

                });
            }
        });
        document.getElementById('job2').addEventListener('click', function() {
            fileButton = document.getElementById('formFile');
            inputfile = document.getElementById('cvname');
            if (!!fileButton) {

                fileButton.addEventListener('change', function(e) {



                    var fileName = e.target.files[0].name;
                    inputfile.value = fileName;
                    uploadFile(e.target.files[0]);

                });
            }
        });
        document.getElementById('job1').addEventListener('click', function() {
            fileButton = document.getElementById('formFile');
            inputfile = document.getElementById('cvname');
            if (!!fileButton) {

                fileButton.addEventListener('change', function(e) {



                    var fileName = e.target.files[0].name;
                    inputfile.value = fileName;
                    uploadFile(e.target.files[0]);

                });
            }
        });
    };

    function uploadFile(file) {


        var metadata = {

            contentType: file.type,
        };
        var uploadTask = firebase.storage().ref('VCO2024/' + file.name).put(file, metadata);


    }


    window.addEventListener('load', initApp);

}());

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