let cartIcon = document.querySelector('.bx-cart')
let closeIcon = document.getElementById('close-icon')
let overlay = document.querySelector('.overlay')
let cartSection = document.querySelector('.cart-section')
let menuIcon = document.querySelector('#menu-icon')
let list = document.querySelector('.list')
let navbar = document.querySelector('nav');
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


let product = [
  {
    id : 1,
    img : 'product/img1.jpg',
    amount : '2500',
    bookName : 'Walk into Shadow'
  },
  {
    id : 2,
    img : 'product/img2.jpg',
    amount : '1500',
    bookName : 'Alone'
  },
  {
    id : 3,
    img : 'product/img3.jpg',
    amount : '3500',
    bookName : 'Prayer Journal'
  },
  {
    id : 4,
    img : 'product/img4.jpg',
    amount : '4500',
    bookName : 'Soul'
  },
  {
    id : 5,
    img : 'product/img5.jpg',
    amount : '5500',
    bookName : 'Young Wizard'
  },
  {
    id : 6,
    img : 'product/img6.jpg',
    amount : '9000',
    bookName : 'Conquest of Flames'
  }
]
let arrival = [
  {
    id : 7,
    kind : 'arrival',
    img : 'arrival/img.jpg',
    amount : '1000',
    bookName : 'Solo'
  },
  {
    id : 8,
    kind : 'arrival',
    img : 'arrival/img2.jpg',
    amount : '2000',
    bookName : 'Xennix'
  },
  {
    id : 9,
    kind : 'arrival',
    img : 'arrival/img3.jpg',
    amount : '3000',
    bookName : 'Ranch'
  },
  {
    id : 10,
    kind : 'arrival',
    img : 'arrival/img4.jpg',
    amount : '4000',
    bookName : 'The whispering Throne'
  },
  {
    id : 11,
    kind: 'arrival',
    img : 'arrival/img5.jpg',
    amount : '5000',
    bookName : 'Love'
  }
]
let allProducts = product.concat(arrival)

let popularpContainer = document.querySelector('.popularP-container')
let i = 0
let category = product.map(function(item, index){
  return ` <div class="porpularP-item" id=${item.id}>
  <a href=""><img src="${item.img}" alt=""></a> 
  <div class="popularP-text">
  <span class="category">Category</span>
  <span class="Book-name">${item.bookName}</span>
  <button>$<span>${item.amount}</span></button>
 <button class="addToCart" onclick='addToCart(event, ${i++})'>Add to Cart</button>
</div>
</div>`
}).join('')

popularpContainer.innerHTML = category

let arrivalContainer = document.querySelector('.arrival-container')
let arrivalcategory = arrival.map(function(item, index){
return ` <div class="arrival-item" id=${item.id}>
<a href=""><img src="${item.img}" alt=""></a> 
<div class="arrival-text">
<span class="category">Category</span>
<span class="Book-name">${item.bookName}</span>
<button>$<span>${item.amount}</span></button>
<button class="addToCart" onclick='addToCart(event, ${i++})'>Add to Cart</button>
</div>
</div>`
}).join("")

arrivalContainer.innerHTML =  arrivalcategory




 

let cartContent = document.querySelector('.cart-content')
let countercount = document.getElementById('count-counter')
let countercount2 = document.getElementById('cartCounter')
let totale = document.getElementById('total')
let price = document.getElementById('amount')


let cart = []

function addToCart(event, index){
  let addToCartbtn = event.target;
  if(addToCartbtn.textContent === "Add to Cart"){
    cart.push({ ...allProducts[index]});
    navbar.style.top = '0';
    displayCart();
    console.log(addToCartbtn)
    addToCartbtn.textContent = 'Already in Cart';
    }
  }
 
function deleteItem(index, id){
  cart.splice(index, 1)
  displayCart()
const elementDelete = document.getElementById(id)
button = elementDelete.querySelector('.addToCart')
button.textContent = 'Add to Cart'
}

function displayCart(){
  let j, total = 0
  countercount.innerHTML = cart.length
  countercount2.innerHTML = cart.length
  if (cart.length === 0){
  cartContent.innerHTML = `<h3 style="text-align: center; margin-top: 30px;">Your Cart is Empty</h3>`
  totale.innerHTML = `0.00`
}
else {
  let cartItems = cart.map(function(item){
    total = total + parseInt(item.amount, 10);
    
    
    totale.innerHTML = `${total}`
    
    return `<div class="cart-body">
    <img src="${item.img}" alt="">
    <div class="nameQuantity">
      <p id="name">${item.bookName}</p>
      <span>1</span>
      <i class='bx bxs-trash-alt' onclick="deleteItem(${j++}, ${item.id})"></i>
    </div>
    <div class="price">$<span id="amount">${item.amount}</span></div>
  </div>`
  }).join('')
  cartContent.innerHTML =cartItems
}

}

  
//START OF Function to initialize slick slider
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
//END OF Function to initialize slick slider

// BACK TO TOP LOGIC
  
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


if(scrollHeight > 1510){
   backtotop.style.color = 'white'
}
else{
  backtotop.style.color = 'rgb(42, 42, 156)'
}
})

let date = document.getElementById('date')
date.innerHTML = new Date().getFullYear()

//END OF BACK TO TOP LOGIC


// NAVBAR DISPLAY

let lastScrollTop = 0;


window.addEventListener('scroll', () => {
  if (window.innerWidth <= 730) {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
      
      navbar.style.top = '-80px'; 
    } else {
      // Scrolling up
      navbar.style.top = '0';
    }

    lastScrollTop = scrollTop;
  }
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 730) {
    navbar.style.top = '0'; // Reset navbar position when resizing above 730px
  }
});

//END OF NAVBAR DISPLAY
