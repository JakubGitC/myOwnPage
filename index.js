//Mobile menu
console.log("czesc");
const btnMenu = document.querySelector("button.menuBtn");
const menu = document.querySelector("#menu");
btnMenu.addEventListener("click", () => {
  const visibility = menu.getAttribute("data-visible");
  console.log(visibility);
  if (visibility === "true") {
    menu.setAttribute("data-visible", false);
    btn.setAttribute("aria-expanded", false);
    burger.classList.toggle("fa-beat-fade");
  } else if (visibility === "false") {
    menu.setAttribute("data-visible", true);
    btn.setAttribute("aria-expanded", true);
    burger.classList.toggle("fa-beat-fade");
  }
});
let prevScrollpos = window.pageYOffset;
let currentScrollPos = window.pageYOffset;

window.addEventListener("scroll", function () {
  currentScrollPos = window.pageYOffset;
  console.log(document.querySelector("header").style.top);
  if (prevScrollpos > currentScrollPos) {
    // scrollowanie w górę
    document.querySelector("header").style.top = "0";
  } else {
    // scrollowanie w dół
    document.querySelector("header").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
});
window.onload = function () {
  var video = document.getElementById("video"); // pobranie elementu video
  video.play(); // rozpoczęcie odtwarzania wideo
};
/*
//Button to the top
const scrollToTopButton = document.querySelector(".scrollBtn");
window.addEventListener("scroll", function () {
  if (window.pageYOffset > 100) {
    // Show the button
    scrollToTopButton.setAttribute("data-btnshow", true);
  } else {
    // Hide the button
    scrollToTopButton.setAttribute("data-btnshow", false);
  }
});
scrollToTopButton.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});*/

//Parallax effects
const mainText = document.querySelector(".firstPage h1");
const subText = document.querySelector(".firstPage span.quote");
const btnAboutMe = document.querySelector(".firstPage button.btnAboutMe");
const aboutMe = document.querySelector(".firstPage .aboutMe");
const smallText = document.querySelectorAll(".smallText");
const bigText = document.querySelectorAll(".bigText");
window.addEventListener("scroll", () => {
  let value = window.scrollY;
  mainText.style.marginTop = value * 1.2 + "px";
  subText.style.marginTop = value * 1.2 + "px";
  btnAboutMe.style.marginTop = value * 1.2 + "px";
  aboutMe.style.marginTop = value * 1.2 + "px";
});
/*
window.addEventListener("scroll", function () {
  let okno = document.querySelector(".thirdPage");
  let oknoPosition = okno.getBoundingClientRect();
  let ele = document.querySelector(".thirdPage h1");
  let site = document.querySelector(".secondPage");
  let value = window.scrollY / 150;

  if (oknoPosition.top < 400) {
    console.log(ele.style.opacity);
    ele.style.opacity = ` ${value * 2}`;
  } else if (oknoPosition.top > 400) {
    console.log(ele.style.transform);
    ele.style.opacity = 1;
  }
});*/
/*
const imgs = document.querySelectorAll(".container ");
window.addEventListener("mousemove", function parallax(e) {
  imgs.forEach((layer) => {
    const speed = layer.getAttribute("data-speed");
    console.log(speed);
    const x = (window.innerWidth - e.pageX * speed) / 80;
    const y = (window.innerHeight - e.pageY * speed) / 80;
    layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
  });
});*/

let valueDisplays = document.querySelectorAll(".number");
let interval = 2;
let counters = [];

function startCounters() {
  valueDisplays.forEach((valueDisplay, index) => {
    let startValue = 0;
    let endValue = parseInt(valueDisplay.getAttribute("data-val"));
    let duration = Math.floor(interval / endValue);
    counters[index] = setInterval(function () {
      startValue += 1;
      valueDisplay.textContent = startValue;
      if (startValue == endValue) {
        clearInterval(counters[index]);
      }
    }, duration);
  });
}

function stopCounters() {
  counters.forEach((counter) => clearInterval(counter));
}

function resetCountersIfVisible() {
  let rect = valueDisplays[0].getBoundingClientRect();
  if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
    stopCounters();
    startCounters();
  }
}

startCounters();
window.addEventListener("scroll", resetCountersIfVisible);

ScrollReveal().reveal(".arrow ", {
  delay: 300,
  reset: true,
  interval: 500,
  easing: "ease-out",
});
ScrollReveal().reveal(".container ", {
  delay: 300,
  reset: true,
  easing: "ease-out",
  interval: 500,
});
