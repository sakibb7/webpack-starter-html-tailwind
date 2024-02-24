"use strict";
document.addEventListener("DOMContentLoaded", function () {

  //initialize wow
new WOW().init();

// Company slider
      let companyImgSlider = document.querySelector('.company-images-carousel');
    if(companyImgSlider){
      const swiper = new Swiper(companyImgSlider, {
        loop: true,
        speed:6000,
        autoplay: {
          delay: 1,
          disableOnInteraction: true,
          reverseDirection:true,
        },
        spaceBetween: 24,

        slidesPerView: 1,
        centeredSlides: true,
        clickable: true,
        breakpoints: {
          0: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          480: {
            slidesPerView: 3,
            spaceBetween: 20,
            centeredSlides: false,
          },
          576: {
            slidesPerView: 2,
            spaceBetween: 20,
            centeredSlides: false,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 24,
            centeredSlides: true,
          },
          992: {
            slidesPerView: 3,
            spaceBetween: 24,
            centeredSlides: true,
          },
          1200: {
            slidesPerView: 4,
            spaceBetween: 24,
            centeredSlides: true,
          },
        }
      });
    }

    let testimonialSlider = document.querySelector('.testimonial-carousel');
    if(testimonialSlider){
      const swiper = new Swiper(testimonialSlider, {
        loop: true,
        speed:6000,
        centeredSlides:false,
        autoplay: {
          delay: 1,
        },
        spaceBetween: 24,
        slidesPerView: 4,
        breakpoints: {
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          480: {
            slidesPerView: 1,
            spaceBetween: 20,
            centeredSlides: false,
          },
          674: {
            slidesPerView: 2,
            spaceBetween: 20,
            centeredSlides: false,
          },
          1050: {
            slidesPerView: 3,
            spaceBetween: 24,
            centeredSlides: true,
          },
          1400: {
            slidesPerView: 4,
            spaceBetween: 24,
            centeredSlides: true,
          },
        }
      });
    }


    let testimonialSlider2 = document.querySelector('.testimonial-carousel2');
    if(testimonialSlider2){
      const swiper = new Swiper(testimonialSlider2, {
        loop: true,
        speed:6000,
        autoplay: {
          delay: 1,
          reverseDirection: true,
        },
        spaceBetween: 24,
        slidesPerView: 4,
        breakpoints: {
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          480: {
            slidesPerView: 1,
            spaceBetween: 20,
            centeredSlides: false,
          },
          674: {
            slidesPerView: 2,
            spaceBetween: 20,
            centeredSlides: false,
          },
          1050: {
            slidesPerView: 3,
            spaceBetween: 24,
            centeredSlides: true,
          },
          1400: {
            slidesPerView: 4,
            spaceBetween: 24,
            centeredSlides: true,
          },
        }
      });
    }


    let reviewSlider = document.querySelector('.review-carousel');
    if (reviewSlider) {
      const swiper = new Swiper(reviewSlider, {
        loop: true,
        slidesPerView: 1,
        paginationClickable: true,
        spaceBetween: 24,
        navigation: {
          nextEl: reviewSlider.querySelector('.ara-next'),
          prevEl: reviewSlider.querySelector('.ara-prev'),
        },      
      });
    }
    



});