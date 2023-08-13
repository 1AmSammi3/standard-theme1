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

const moreElements = document.querySelectorAll(".more");

for (let more of moreElements) {
   more.addEventListener('click', createShowTabFunction);
}

function createShowTabFunction(event) {
   const clickedMore = event.currentTarget; // The clicked "more" element
   const parentBox = clickedMore.parentElement; // The parent box-cells element
   const hidSibling = parentBox.nextElementSibling; // The corresponding "hid" element
   
   clickedMore.classList.toggle('active'); // Toggle 'active' class on the clicked "more" element
   hidSibling.classList.toggle('show'); // Toggle 'show' class on the corresponding "hid" element
}

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

const downElements = document.querySelectorAll("#down, #left, #right, .box-cells");
downElements.forEach(section => {
  downObserver.observe(section);
});