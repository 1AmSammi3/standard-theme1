/*alert(`🎉🎊In celebration of our newly launched website🎉🎊
We are giving out 50% discount rate for the next 24 hours on all our services.
Don't miss out! 😉`);*/

let menu = document.querySelector(".menu");
let but = document.querySelector(".back");
let links = document.querySelectorAll(".link");
let ham = document.querySelector(".hamburger");

function show() {
   if (menu.classList.contains("active")) {
      menu.classList.remove("active");
   } else {
      menu.classList.add("active");
   }
}

function back() {
   if (menu.classList.contains("active")) {
      menu.classList.remove("active");
   }
}

for (let link of links) {
   link.addEventListener("click", back);
}

but.addEventListener("click", back);
ham.addEventListener("click", show);

function handleIntersection(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    } else {
      entry.target.classList.remove("active");
    }
  });
}

const downObserver = new IntersectionObserver(handleIntersection, {
  root: null,
  rootMargin: "0px",
  threshold: 0.2 // Adjust the threshold as needed
});

const downElements = document.querySelectorAll("#down, #left, #right");
downElements.forEach(section => {
  downObserver.observe(section);
});