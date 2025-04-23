document.addEventListener("DOMContentLoaded", () => {
  const progressBars = document.querySelectorAll("[data-width]");
  progressBars.forEach((bar) => {
    const width = bar.getAttribute("data-width");
    bar.style.width = width;
  });
});
