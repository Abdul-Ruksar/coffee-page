// Fade-in and scroll animations (from previous answer)
document.addEventListener("DOMContentLoaded", function () {
  const animateElements = document.querySelectorAll(
    ".animate-fade-in, .animate-slide-up"
  );
  function showOnScroll() {
    animateElements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 80) {
        el.style.opacity = 1;
        el.style.transform = "none";
      }
    });
  }
  showOnScroll();
  window.addEventListener("scroll", showOnScroll);
});

// Pour animation logic
const pourButton = document.getElementById("pourButton");
const coffeeStream = document.getElementById("coffeeStream");

pourButton.addEventListener("click", () => {
    coffeeStream.classList.add("active");
    coffeeStream.style.animationPlayState = "running";
    setTimeout(() => {
        coffeeStream.classList.remove("active");
        coffeeStream.style.animationPlayState = "paused";
    }, 2300); // Duration matches animation
});


