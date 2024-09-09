// gsap.from(".img", {
//   opacity: 0,
//   stagger: 0.4,

//   scrollTrigger: {
//     trigger: ".img",
//     scroller: "body",
//     start: "top 60%",
//     markers: true,
//   },
// });

// gsap.from(".about-me", {
//   ease: Expo.easeInOut,
//   width: "100%",
//   duration: 2,
// });
// var t1 = gsap.timeline()
// t1.from("#layout", {
//   y:"100vh",
//   scale:0.6,
//   duration: 2
// })

let btn = document.querySelector(".fa-bars");
let xm = document.querySelector(".fa-xmark");
let mi = document.querySelector(".menu-items");
// let ab = document.querySelector("#about-btn");
// let about = document.querySelector(".about-me");

btn.addEventListener("click", () => {
  mi.setAttribute("style", "display: grid;");
  btn.setAttribute("style", "display: none");
  xm.setAttribute("style", "display: grid;");
});
xm.addEventListener("click", () => {
  mi.setAttribute("style", "display: none;");
  btn.setAttribute("style", "display: flex");
  xm.setAttribute("style", "display: none");
});

// matr.addEventListener("click", () => {
//     vdo.setAttribute("style", "display: flex;");
// });

function toggleHide() {
  let matr = document.querySelector("#mat");
  let vdo = document.querySelector("#vdo");

  if (vdo.style.display != "none") {
    vdo.style.display = "none";
    // vdo.setAttribute("style", "display: none;");
  } else {
    vdo.style.display = "flex";
    // vdo.setAttribute("style", "display: flex;");
  }
}

//top btn
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0; 
}


//time
function updateDateTime() {
  var now = new Date();

  var options = {
    timeZone: 'Asia/Kolkata',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true
  };

  var currentDateTime = now.toLocaleString('en-IN', options);

  document.getElementById("tim").innerText = currentDateTime;
}

updateDateTime();
setInterval(updateDateTime, 1000);


//loader

let loaderp = document.querySelector(".ld"); 
setTimeout(() => {
  // document.querySelector(".layout").style.display = "none";
  loaderp.setAttribute("style", "transform: translateY(-100%);", "transition: all 2s cubic-bezier(0, 0, 0, 1.09);");
  document.querySelector(".ld").style.display = "none";
}, 2000);


let anm = document.querySelector(".mid");

// setTimeout(() => {
//   anm.setAttribute("style", "transform: scale(1.2); transition: all 0.1s ease-out;");
// }, 2000);






//GSAP

