const slideshow = document.querySelector("[data-slideshow]");

if (slideshow) {
  const slides = [...slideshow.querySelectorAll(".slide")];
  const pagination = slideshow.querySelector("[data-pagination]");
  const status = slideshow.querySelector("[data-status]");
  const previousButton = slideshow.querySelector("[data-previous]");
  const nextButton = slideshow.querySelector("[data-next]");
  const emptyState = document.querySelector(".empty-state");

  if (slides.length > 0 && pagination && status && previousButton && nextButton) {
    let activeIndex = 0;
    const paginationButtons = slides.map((slide, index) => {
      slide.setAttribute("role", "group");
      slide.setAttribute("aria-roledescription", "slide");

      const button = document.createElement("button");
      button.className = "slide-dot";
      button.type = "button";
      button.setAttribute("aria-label", `Show photo ${index + 1} of ${slides.length}`);
      button.addEventListener("click", () => showSlide(index));
      pagination.append(button);
      return button;
    });

    function showSlide(index) {
      activeIndex = (index + slides.length) % slides.length;

      slides.forEach((slide, slideIndex) => {
        const isActive = slideIndex === activeIndex;
        slide.hidden = !isActive;
        slide.setAttribute("aria-label", `${slideIndex + 1} of ${slides.length}`);
        paginationButtons[slideIndex].setAttribute("aria-current", String(isActive));
      });

      status.textContent = `Photo ${activeIndex + 1} of ${slides.length}`;
    }

    previousButton.addEventListener("click", () => showSlide(activeIndex - 1));
    nextButton.addEventListener("click", () => showSlide(activeIndex + 1));
    slideshow.addEventListener("keydown", (event) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        showSlide(activeIndex - 1);
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        showSlide(activeIndex + 1);
      }
    });

    showSlide(0);
    slideshow.hidden = false;
    if (emptyState) emptyState.hidden = true;
  }
}
