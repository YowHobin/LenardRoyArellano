function befReveal(el) {
  el.classList.add("is-animating");
}

function afReveal(el) {
  el.classList.remove("is-animating");
  el.classList.add("is-visible");
}

ScrollReveal({ distance: "6%", mobile: true, desktop: true });
//navbar
ScrollReveal().reveal(".navbar", {
  origin: "top",
  reset: true,
  delay: 1500,
  duration: 1300,
  easing: "ease",
  afterReveal: afReveal,
  beforeReveal: befReveal,
});



//home
ScrollReveal().reveal(".h1-header", {
  origin: "left",
  reset: true,
  delay: 1000,
  duration: 1300,
  easing: "ease-in-out",
  afterReveal: afReveal,
  beforeReveal: befReveal,
});

ScrollReveal().reveal(".typewriter", {
  origin: "left",
  reset: true,
  delay: 1500,
  duration: 1000,
  easing: "ease-in-out",
  afterReveal: afReveal,
  beforeReveal: befReveal,
});

ScrollReveal().reveal(".description", {
  origin: "left",
  reset: true,
  delay: 1700,
  duration: 1000,
  easing: "ease-in-out",
  afterReveal: afReveal,
  beforeReveal: befReveal,
});

ScrollReveal().reveal(".blob-container", {
  origin: "right",
  reset: true,
  delay: 2300,
  duration: 1000,
  easing: "ease-in-out",
  afterReveal: afReveal,
  beforeReveal: befReveal,
});

//about-me
ScrollReveal().reveal(".about-header", {
  origin: "bottom",
  reset: true,
  delay: 300,
  duration: 1500,
  easing: "ease-in-out",
  afterReveal: afReveal,
  beforeReveal: befReveal,
});

ScrollReveal().reveal(".about-description", {
  origin: "right",
  reset: true,
  delay: 600,
  interval: 2000,
  duration: 1000,
  easing: "ease-in-out",
  afterReveal: afReveal,
  beforeReveal: befReveal,
});

ScrollReveal().reveal(".download-container", {
  origin: "right",
  reset: true,
  delay: 1000,
  duration: 1000,
  easing: "ease-in-out",
  afterReveal: afReveal,
  beforeReveal: befReveal,
});


ScrollReveal().reveal(".about-blob-container", {
  origin: "left",
  reset: true,
  delay: 600,
  duration: 1000,
  easing: "ease-in-out",
  afterReveal: afReveal,
  beforeReveal: befReveal,
});


//education
ScrollReveal().reveal(".education-header", {
  origin: "bottom",
  reset: true,
  delay: 300,
  duration: 1500,
  easing: "ease-in-out",
  afterReveal: afReveal,
  beforeReveal: befReveal,
});

ScrollReveal().reveal(".educ-description", {
  origin: "left",
  reset: true,
  delay: 600,
  duration: 1000,
  easing: "ease-in-out",
  afterReveal: afReveal,
  beforeReveal: befReveal,
});

ScrollReveal().reveal(".timeline-educ-container", {
  origin: "right",
  reset: true,
  delay: 600,
  duration: 2000,
  easing: "ease-in-out",
  afterReveal: afReveal,
  beforeReveal: befReveal,
});

