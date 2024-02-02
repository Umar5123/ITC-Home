
// Header Active//
document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll", function () {
        if (window.pageYOffset > 50) {
            document.querySelector("header").classList.add("active");
        } else {
            document.querySelector("header").classList.remove("active");
        }
    });
});

// Nav Toggle

function myFunction() {
    let element = document.querySelector("nav");
    element.classList.toggle("nav-show");

    let element2 = document.querySelector(".toggle-btn");
    element2.classList.toggle("toggle-open");
}

document.querySelector(".toggle-btn").addEventListener("click", myFunction)
//--- Banner Slider ---//

// $('.banner-slider').slick({
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     fade: false,
//     arrows: false,
//     vertical: true
//     // 

// });

$('.banner-slider').slick({
    dots: true,
    infinite: true,
    arrows: false,
    vertical: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                dots: false,
                vertical: false,
            }
        },
    ]
});

//--- End Banner Slider ---//

// Tabs //
const btns = document.querySelectorAll("[data-target-tab]");
btns.forEach((btn) => {
    btn.addEventListener("click", () => {
        btns.forEach((btn) => btn.classList.remove("active"));

        const items = document.querySelectorAll(".item");

        items.forEach((item) => item.classList.remove("active"));
        btn.classList.add("active");
        document.querySelector(btn.dataset.targetTab).classList.add("active");
    });
});

// Services //
$('.service-slid').slick({
    dots: false,
    infinite: true,
    speed: 500,
    fade: false,
    arrows: true,
    prevArrow: `<img src="./images/left-arrow.png" class="prev-img">`,
    nextArrow: `<img src="./images/left-arrow.png" class="next-img">`
});






