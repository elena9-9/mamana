console.log("helo word!");

const logo = document.querySelector(".box-img");
const filter = document.querySelector(".filter");
const p = document.querySelector(".p");
const Hoping = "Nothing can dim the light that shines from within";
logo.addEventListener("click", function () {
  filter.classList.remove("filter");
  p.textContent = Hoping;
});
