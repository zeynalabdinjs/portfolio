window.onload = () => {
    document.querySelector("body").style.overflow = "auto"
    document.querySelector(".preloader .top").style.animation = "top 2s 1.52s forwards ease"
    document.querySelector(".preloader .bottom").style.animation = "bottom 2s 1.5s forwards ease"
    document.querySelector(".top .preloader-title").style.animation = "opacity 1s 1.3s forwards ease"
    document.querySelector(".bottom .preloader-title").style.animation = "opacity 1s 1.3s forwards ease"
    document.querySelector(".preloader .loader-line").style.animation = "loader 1.52s forwards ease-in-out"

    setTimeout(() => {
        document.querySelector(".preloader").remove();
    }, 3500)
}



const swiper = new Swiper(".mySwiper", {
    loop: true,
    spaceBetween: 8,
    slidesPerView: 3,
    centeredSlides: true,
    autoplay: true,
    parallax: true,
    speed: 2500,
    freeMode: true,
    watchSlidesProgress: true,
    direction: "vertical",
});
const swiper2 = new Swiper(".mySwiper2", {
    loop: false,
    speed: 2500,
    autoplay: true,
    parallax: true,
    spaceBetween: 30,
    navigation: {
        nextEl: ".swiper-next-btn",
        prevEl: ".swiper-prev-btn",
    },
    thumbs: {
        swiper: swiper,
    },
});

const portfolio = new Swiper(".portfolio", {
    spaceBetween: 30,
    parallax: true,
    speed: 1000,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        300: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        600: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        900: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
        1800:{
            slidesPerView: 4,
            spaceBetween: 40,
        }
    },
});

const feedback = new Swiper(".feedback", {
    slidesPerView: 1,
    spaceBetween: 30,
    parallax: true,
    speed: 1000,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});


var sliderNumber = document.querySelector(".slider-number");
sliderNumber.innerHTML = "0" + (swiper2.activeIndex + 1)
swiper2.on('slideChange', function (e) {
    sliderNumber.innerHTML = "0" + (swiper2.activeIndex + 1)
    console.log(swiper2.activeIndex)
});

// Navbar
const nav_toggle = document.querySelector(".menu-toggle")
const menu_content = document.querySelector(".menu-content");
nav_toggle.addEventListener("click", () => {
    nav_toggle.classList.toggle("active");
    menu_content.classList.toggle("active");

    if (menu_content.classList.contains("active")) {
        document.body.style.overflow = "hidden";
    }
    else {
        document.body.style.overflow = "auto";
    }


});
