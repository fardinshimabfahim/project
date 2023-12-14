const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// header container
ScrollReveal().reveal(".header__container img", {
  duration: 1000,
});

ScrollReveal().reveal(".header__container h1", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".header__container p", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".header__btns", {
  ...scrollRevealOption,
  delay: 1500,
});

// about container
ScrollReveal().reveal(".about__image img", {
  ...scrollRevealOption,
  origin: "left",
});

ScrollReveal().reveal(".about__content h3", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".about__content .section__header", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".about__content .section__subheader", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".about__content .about__grid", {
  ...scrollRevealOption,
  delay: 2000,
});

// contact container
ScrollReveal().reveal(".contact__image img", {
  ...scrollRevealOption,
  origin: "left",
});

// const swiper = new Swiper(".swiper", {
//   loop: true,
//   slidesPerView: "auto",
//   centeredSlides: true,
//   spaceBetween: 30,
// });

window.onload = function () {
  const swiper = new Swiper(".swiper", {
    loop: true,
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 30,
  });
};



// Assuming you have a "Book Now" button with the ID "bookNowMaid"
document.getElementById('bookNowMaid').addEventListener('click', function() {
  window.location.href = 'maid.html';
});
document.getElementById('bookNowElectrician').addEventListener('click', function() {
  window.location.href = 'electrician.html';
});
document.getElementById('bookNowMechanic').addEventListener('click', function() {
  window.location.href = 'mechanic.html';
});
document.getElementById('bookNowDriver').addEventListener('click', function() {
  window.location.href = 'driver.html';
});
document.getElementById('bookNowCleaner').addEventListener('click', function() {
  window.location.href = 'cleaner.html';
});
document.getElementById('bookNowPlumber').addEventListener('click', function() {
  window.location.href = 'plumber.html';
});

