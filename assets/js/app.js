window.onload = () => {
    document.querySelector(".preloader .top").style.animation = "top 2s 1.52s forwards ease"
    document.querySelector(".preloader .bottom").style.animation = "bottom 2s 1.5s forwards ease"
    document.querySelector(".top .preloader-title").style.animation = "opacity 1s 1.3s forwards ease"
    document.querySelector(".bottom .preloader-title").style.animation = "opacity 1s 1.3s forwards ease"
    document.querySelector(".preloader .loader-line").style.animation = "loader 1.52s forwards ease-in-out"
    setTimeout(() => {
        document.querySelector(".preloader").remove();
    }, 3500)
}



var swiper = new Swiper(".mySwiper", {
    loop: true,
    spaceBetween: 8,
    slidesPerView: 3,
    centeredSlides: true,
    autoplay: true,
    speed: 2500,
    freeMode: true,
    watchSlidesProgress: true,
    direction: "vertical",
});
var swiper2 = new Swiper(".mySwiper2", {
    loop: false,
    speed: 2500,
    autoplay: true,
    spaceBetween: 30,
    navigation: {
        nextEl: ".swiper-next-btn",
        prevEl: ".swiper-prev-btn",
    },
    thumbs: {
        swiper: swiper,
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


});
