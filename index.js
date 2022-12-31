const btn = document.querySelector(".btn");
const imageAll = document.querySelectorAll("img");
const spanAll = document.querySelectorAll("span");

btn.addEventListener("click", () => {
  imageAll.forEach((item) => {
    item.classList.add("active");
  });
  spanAll.forEach((item) => {
    item.classList.add("active");
  });
  setTimeout(() => {
    btn.classList.add("hidden");
  }, 800);
});
