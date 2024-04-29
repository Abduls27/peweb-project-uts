const checkbox = document.querySelector("#toggle");
const html = document.querySelector("html");
let navbar = document.getElementById("navbar");
let darkmode = document.getElementById("dark");
const instagram = document.querySelector("#instagram");
const linkedin = document.querySelector("#linkedin");
const github = document.querySelector("#github");

html.classList.add("dark");
instagram.src = "src/icon/instagram-dark.svg";
linkedin.src = "src/icon/linkedin-dark.svg";
github.src = "src/icon/github-dark.svg";

checkbox.addEventListener("click", function () {
  if (checkbox.checked) {
    html.classList.add("dark");
    instagram.src = "src/icon/instagram-dark.svg";
    linkedin.src = "src/icon/linkedin-dark.svg";
    github.src = "src/icon/github-dark.svg";
    navbar.classList.remove("text-zinc-800");
    navbar.classList.add("text-zinc-50");
    darkmode.src = "src/icon/dark-mode.svg";
  } else {
    html.classList.remove("dark");
    instagram.src = "src/icon/instagram.svg";
    linkedin.src = "src/icon/linkedin.svg";
    github.src = "src/icon/github.svg";
    navbar.classList.remove("text-zinc-50");
    navbar.classList.add("text-zinc-800");
    darkmode.src = "src/icon/light-mode-light.svg";
  }
});

document
  .getElementById("formMessage")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    window.location.href =
      "mailto:" + email + "&message=" + encodeURIComponent(message);
  });

let btn = document.getElementById("navbar-btn");
let svg = btn.querySelector("svg");
let path = svg.querySelector("path");

let originalSvgFill = svg.style.fill;
let originalPathStroke = path.style.stroke;

btn.addEventListener("click", function () {
  if (checkbox.checked) {
    btn.classList.remove("text-zinc-100");
    btn.classList.add("text-zinc-800")
  } else{
    btn.classList.remove("text-zinc-100")
    btn.classList.add("text-zinc-800")

  }

  document.getElementById("navbar-default").classList.toggle("hidden");
});

// animasi loading
window.addEventListener('load', function () {
  const loadingScreen = document.getElementById('loading-screen');
  setTimeout(function () {
    loadingScreen.style.display = 'none';
  }, 2000);
});

anime({
  targets: ".animate-loading-text",
  translateX: "50px",
  translateX: "-10px",
  opacity: 1,
  duration: 2000,
  easing: "easeOutExpo",
});

function submitMail() {
  const subject = document.getElementById("subject").value;
  const body = document.getElementById("body").value;
  const emailLink = `mailto:fahmi.muslimin22@student.uisi.ac.id?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;
  window.location.href = emailLink;
}

window.addEventListener("scroll", function () {
  const img = document.getElementsByClassName("img-card");
  
  for (let i = 0; i < img.length; i++) {
    const imgs = img[i];
    const position = imgs.getBoundingClientRect();
    
    // Cek jika elemen sudah discroll
    if (position.top < window.innerHeight && position.bottom >= 0) {
      imgs.classList.add(
        "animate-fade-down",
        "animate-once",
        "animate-duration-1000",
        "animate-delay-500",
        "animate-ease-in-out"
      );
    } else {
      imgs.classList.remove(
        "animate-fade-down",
        "animate-once",
        "animate-duration-1000",
        "animate-delay-500",
        "animate-ease-in-out"
      );
    }
  }
});
