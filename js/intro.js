window.addEventListener("load", () => {

  const intro = document.getElementById("intro-screen");

  // Step 1: open the book
  setTimeout(() => {
    intro.classList.add("open");
  }, 600);

  // Step 2: fade out
  setTimeout(() => {
    intro.classList.add("fade-out");
  }, 5500);

  // Step 3: fully remove from page so it stops blocking clicks
  setTimeout(() => {
    intro.classList.add("hide");
  }, 7000);

});
