const items = document.querySelectorAll(".item");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  const vh = window.innerHeight;

  const visibleCount = Math.floor(scrollY / vh) + 1;

  items.forEach((item, index) => {
    if (index < visibleCount) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
});
