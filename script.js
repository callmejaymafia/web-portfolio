document.addEventListener("DOMContentLoaded", () => {
  const progressBars = document.querySelectorAll("[data-width]");
  progressBars.forEach((bar) => {
    const width = bar.getAttribute("data-width");
    bar.style.width = width;
  });
});

const backToTopButton = document.getElementById("back-to-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    backToTopButton.classList.remove("hidden");
  } else {
    backToTopButton.classList.add("hidden");
  }
});

backToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Smooth scrolling effect
  });
});
