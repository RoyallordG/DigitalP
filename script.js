let cartIcon = document.querySelector('.bx-cart')
let closeIcon = document.getElementById('close-icon')
let overlay = document.querySelector('.overlay')
let cartSection = document.querySelector('.cart-section')
let menuIcon = document.querySelector('#menu-icon')
let list = document.querySelector('.list')
cartIcon.addEventListener('click', function(){
cartSection.classList.add('active')
overlay.classList.add('active')
})
closeIcon.addEventListener('click', function(){
    cartSection.classList.remove('active')
    overlay.classList.remove('active')
})
menuIcon.addEventListener('click', function(){
    menuIcon.classList.toggle('bx-x')
    list.classList.toggle('active')
})


// $('.popularP-container').slick({
//     slidesToShow: 5,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 2000,
//     arrows: false
//   });
  
// Function to initialize slick slider
function initializeSlick() {
    var container = $('.popularP-container');
    var containerWidth = container.width();
    var slidesToShow = calculateSlidesToShow(containerWidth);

    // Initialize slick slider with calculated slidesToShow
    container.slick({
        slidesToShow: slidesToShow,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false
    });
}

// Function to calculate number of slides to show based on container width
function calculateSlidesToShow(width) {
    if (width < 768) {
        return 2; // Adjust for smaller screens
    } else if (width < 992) {
        return 3; // Adjust for medium screens
    } else if (width < 1200) {
        return 4; // Adjust for larger screens
    } else {
        return 5; // Default number of slides to show
    }
}

// Call the function initially to initialize slick slider
initializeSlick();

// Add event listener for window resize
$(window).resize(function() {
    // Calculate new number of slides to show based on container width
    var containerWidth = $('.popularP-container').width();
    var newSlidesToShow = calculateSlidesToShow(containerWidth);

    // Slick slider's 'slickSetOption' method is used to update the 'slidesToShow' option
    $('.popularP-container').slick('slickSetOption', 'slidesToShow', newSlidesToShow, true);
});


$('.arrival-container').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: '<i class="slick-next bx bx-chevron-right-circle" aria-label="Next"></i>',
    prevArrow: '<i class="slick-prev bx bx-chevron-left-circle" aria-label="Previous"></i>',
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
     
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
let nav = document.querySelector('nav')
  let backtotop = document.querySelector('.back-to-top')
window.addEventListener('scroll', () => {
   nav.classList.toggle('shadow', window.scrollY > 0);
let scrollHeight = window.scrollY 

if(scrollHeight > 300){
    backtotop.classList.add('active')
}
else{
    backtotop.classList.remove('active') 
}
})
window.addEventListener('scroll', () => {
  nav.classList.toggle('shadow', window.scrollY > 0);
let scrollHeight = window.scrollY 

if(scrollHeight > 1100){
   backtotop.style.color = 'white'
}
else{
  backtotop.style.color = 'rgb(42, 42, 156)'
}
})

let date = document.getElementById('date')
date.innerHTML = new Date().getFullYear()
