document.addEventListener("DOMContentLoaded", () => {
  const dateButtons = document.querySelectorAll(".grid-day, .day");
  dateButtons.forEach((button) => {
    button.addEventListener("click", () => {
      if (!button.classList.contains("muted")) {
        dateButtons.forEach((el) => el.classList.remove("selected"));
        button.classList.add("selected");
      }
    });
  });
});
