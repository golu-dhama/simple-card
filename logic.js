let nameText = "Danto Ghodi";
let i = 0;

function typeWriter(){
  if(i < nameText.length){
    document.querySelector(".name").innerHTML += nameText.charAt(i);
    i++;
    setTimeout(typeWriter, 120);
  }
}

window.addEventListener("load", typeWriter);

let quotes = [
  "You are the most beautiful part of my life 💖",
  "Every moment with you feels magical ✨",
  "Your smile is my favorite thing 😊",
  "You make my world complete 🌎",
  "Forever grateful to have you 💕"
];

window.addEventListener("load", () => {
  document.querySelector(".text").innerText =
  quotes[Math.floor(Math.random() * quotes.length)];
});

function playMusic(){
  let song = document.getElementById("song");

  if(song.paused){
    song.play();
  } else {
    song.pause();
  }
}

let images = [
  "images/image-1.jpg",
  "images/image-2.jpg",
  "images/image-3.jpg",
  "images/image-4.jpeg",
  "images/image-5.jpeg",
  "images/image-6.jpg",
  "images/image-7.jpeg",
  "images/image-8.jpg"
];

let index = 0;

function showImage(){
  let memory = document.getElementById("memory");

  memory.style.opacity = "0";

  setTimeout(() => {
    memory.src = images[index];
    memory.style.opacity = "1";
  }, 300);
}

function nextImage(){
  index = (index + 1) % images.length;
  showImage();
}

function prevImage(){
  index = (index - 1 + images.length) % images.length;
  showImage();
}

setInterval(nextImage, 4000);

const card = document.querySelector(".card");

if(card){
  card.addEventListener("mousemove", (e) => {

    let rect = card.getBoundingClientRect();

    let x = e.clientX - rect.left;
    let y = e.clientY - rect.top;

    let xPercent = (x / rect.width) - 0.5;
    let yPercent = (y / rect.height) - 0.5;

    let rotateX = yPercent * 20;
    let rotateY = xPercent * -20;

    card.style.transform = 
      `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "rotateX(0deg) rotateY(0deg)";
  });
}
