const Header = document.querySelector("header");
const Main = document.querySelector("main");
const Buttin__Main__Search__Open = document.querySelector("[Buttin-Main__Search__Open]");
const Input__Main__Search = document.querySelector("[Input-Main__Search]");
const Active__Search__Result = document.querySelector("[Active__Search__Result]");
const Search__Query = document.querySelector("[Search__Query]");
const Buttin__Category__Dropdown = document.querySelector("[Buttin-Category__Dropdown]");
const Search__Overlay = document.querySelector("[Search__Overlay]");
const button_open_auth_form = document.querySelector("[button-open-auth-form]");
const open_auth_form_container = document.querySelector("[show-auth-form-container]");
const header_cart_container = document.querySelector("[Header-Basket-container]");
const button_open_cart = document.querySelector("[button-show-cart]");
const button_close_cart = document.querySelector("[button-close-cart]");
const Form__Active__Name = document.querySelector("[Form__Active__Name]");
const Overlays = document.querySelectorAll("[Overlay]");
const Navigation__List = document.querySelectorAll("[Navigation__List]");
const Category__Name = document.querySelectorAll("[Category__Name]");
const Navigation__Wrapper = document.querySelector("[Navigation__Wrapper]");
const aside = document.querySelector("aside");
const buttin_open_navigation = document.querySelector("[buttin-open-navigation]");
const button_close_aside = document.querySelector("[button-close-aside]");
const buttons_aside_navigation = document.querySelectorAll("[navigation-target]");
const aside_category_contaner = document.querySelector("[category-target-name]");



let Last__Scorll__Top = 0;

window.onscroll = () => {
  let Scroll__Top = window.pageYOffset || document.documentElement.scrollTop;

  if (Scroll__Top > Header.clientHeight) {
    Header.classList.add("Sticky");
  } else {
    Header.classList.remove("Sticky");
  }

  Last__Scorll__Top = Scroll__Top;
}

Buttin__Main__Search__Open.addEventListener('click', toggleShearch);
Buttin__Category__Dropdown.addEventListener('click', toggleCategoryDropdown);
button_open_auth_form.addEventListener('click', showAuthFormContainer);
button_open_cart.addEventListener('click', showCart);
button_close_cart.addEventListener('click', closeCart);
buttin_open_navigation.addEventListener('click', showNavigation);
button_close_aside.addEventListener('click', closeNavigation);

Input__Main__Search.addEventListener('input', showSearchResult);
Input__Main__Search.addEventListener('focuse', showSearchResult);

Overlays.forEach(overlay =>{
  overlay.addEventListener('click', closeAllByOverlay);
})


Navigation__List.forEach((List) => {
  List.addEventListener('mouseenter', () => {
    let NavName = List.getAttribute("Category__Nav__Name");
    Navigation__List.forEach(List => List.setAttribute("Nav__List__Active", "false"));
    List.setAttribute("Nav__List__Active", "true");
    Category__Name.forEach(Category => {
      let CategoryName = Category.getAttribute("Category__Name");
      if (NavName == CategoryName) {
        Category__Name.forEach(Name => Name.setAttribute("Category__Active", "false"));
        Category.setAttribute("Category__Active", "true");
      }
    });
  });
  Navigation__Wrapper.addEventListener('mouseleave', () => {
    Category__Name.forEach(Name => Name.setAttribute("Category__Active", "false"));
    Navigation__List.forEach(List => List.setAttribute("Nav__List__Active", "false"));
  })
})

buttons_aside_navigation.forEach((List) => {
  List.addEventListener('click', () => {
    let NavName = List.getAttribute("navigation-target");
    buttons_aside_navigation.forEach(List => List.setAttribute("active", "false"));
    List.setAttribute("active", "true");
    List.scrollIntoView({block: "center", behavior: "smooth", inline: "center"});
    aside_category_contaner.setAttribute('category-target-name', `${NavName}`);
  });
})

  
function toggleCategoryDropdown() {
  if(Buttin__Category__Dropdown.getAttribute("Active__Dropdown") == "true"){
    Buttin__Category__Dropdown.setAttribute("Active__Dropdown", "false");
  } else {
    Buttin__Category__Dropdown.setAttribute("Active__Dropdown", "true");
  }
}

function showSearchResult() {
  Search__Query.textContent = Input__Main__Search.value;
  if (Input__Main__Search.value.trim() != "") {
    Active__Search__Result.setAttribute("Active__Search__Result", "true");
    document.body.style.overflow = "hidden";
  } else {
    Active__Search__Result.setAttribute("Active__Search__Result", "false");
    document.body.style.overflow = "visible";
  }
}

function toggleShearch(){
  if(document.querySelector("[Show__Main__Search]").getAttribute("Show__Main__Search") == "true"){
    document.querySelector("[Show__Main__Search]").setAttribute("Show__Main__Search", "false");
  } else {
    document.querySelector("[Show__Main__Search]").setAttribute("Show__Main__Search", "true");
  }
}

function showAuthFormContainer() {
  open_auth_form_container.setAttribute("show-auth-form-container", "true");
  document.body.style.overflow = "hidden";
}

function closeAuthFormContainer() {
  open_auth_form_container.setAttribute("show-auth-form-container", "false");
  document.body.style.overflow = "auto";
}

function showCart(){
  header_cart_container.setAttribute("Header-Basket-container", "active");
  document.body.style.overflow = "hidden";
}

function closeCart(){
  header_cart_container.setAttribute("Header-Basket-container", "inactive");
  document.body.style.overflow = "auto";
}

function showNavigation(){
  aside.setAttribute("aside-active", "true");
  document.body.style.overflow = "hidden";
}

function closeNavigation(){
  aside.setAttribute("aside-active", "false");
  document.body.style.overflow = "auto";
}

function closeAllByOverlay() {
  closeCart();
  closeAuthFormContainer();
  closeNavigation();
  document.querySelector("[Show__Main__Search]").setAttribute("Show__Main__Search", "false");
  Active__Search__Result.setAttribute("Active__Search__Result", "false");
  document.body.style.overflow = "auto";
}

new Swiper("[Main__Carousel]", {
  slidesPerView: 1,
  spaceBetween: 0,
  slidesPerGroup: 1,
  loop: true,
  // rewind: true,
  loopFillGroupWithBlank: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".Main__Pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".Button-Main__Slider__Next",
    prevEl: ".Button-Main__Slider__Prev",
  },
});

new Swiper("[Product__Image__Carousel]", {
  cssMode: false,
  loop: true,
  navigation: {
    nextEl: ".Button-Product__Image__Slider__Next",
    prevEl: ".Button-Product__Image__Slider__Prev",
  },
});

new Swiper("[Product__Slider__Wrapper]", {
  slidesPerView: 2,
  spaceBetween: 0,
  slidesPerGroup: 2,
  loop: false,
  loopFillGroupWithBlank: false,
  navigation: {
    nextEl: ".Button-Product__Slider__Next",
    prevEl: ".Button-Product__Slider__Prev",
  },
  breakpoints: {
    "@0.00": {
      slidesPerView: 2,
      spaceBetween: 0,
      slidesPerGroup: 2,
    },
    "@0.75": {
      slidesPerView: 3,
      spaceBetween: 0,
      slidesPerGroup: 3,

    },
    "@1.10": {
      slidesPerView: 3,
      spaceBetween: 0,
      slidesPerGroup: 3,

    },
    "@1.45": {
      slidesPerView: 4,
      spaceBetween: 0,
      slidesPerGroup: 4,
    },
  },
});

new Swiper("[Manufacturer__Slider__Wrapper]", {
  slidesPerView: 2,
  spaceBetween: 10,
  slidesPerGroup: 2,
  loop: false,
  loopFillGroupWithBlank: false,
  navigation: {
    nextEl: ".Button-Manufacturer__Slider__Next",
    prevEl: ".Button-Manufacturer__Slider__Prev",
  },
  breakpoints: {
    "@0.00": {
      slidesPerView: 2,
      spaceBetween: 0,
      slidesPerGroup: 2,
    },
    "@0.75": {
      slidesPerView: 3,
      spaceBetween: 0,
      slidesPerGroup: 3,
    },
    "@1.00": {
      slidesPerView: 4,
      spaceBetween: 0,
      slidesPerGroup: 4,
    },
    "@1.35": {
      slidesPerView: 5,
      spaceBetween: 0,
      slidesPerGroup: 5,
    },
  },
});