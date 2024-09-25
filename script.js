const activeA = document.querySelectorAll(".navigation a");
let hill1 = document.querySelector("#hill1");
let hill2 = document.querySelector("#hill2");
let hill3 = document.querySelector("#hill3");
let hill4 = document.querySelector("#hill4");
let hill5 = document.querySelector("#hill5");
let leafImg = document.querySelector("#leaf");
let treeImg = document.querySelector("#tree");
let text = document.querySelector("#text");

window.addEventListener("scroll", () => {
  let values = window.scrollY;

  text.style.marginTop = values * 2.5 + "px";
  hill1.style.top = values * 1 + "px";
  hill2.style.right = values * 1 + "px";
  hill4.style.right = values * 1 + "px";
  hill5.style.top = values * 1 + "px";
  treeImg.style.right = values * 2 + "px";
  leafImg.style.left = values * -2 + "px";
});

// window.addEventListener("scrollend", () => {
//   let values = window.scrollY;

//   text.style.marginTop = 0;
//   hill1.style.top = 0;
//   hill2.style.right = 0;
//   hill4.style.right = 0;
//   hill5.style.top = values * 0.1 + "px";
//   treeImg.style.right = values * 1 + "px";
// });

activeA.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    activeA.forEach((links) => {
      links.classList.remove("active");
    });
    link.classList.add("active");
  });
});
