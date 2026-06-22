window.addEventListener("load", () => {

  const intro = document.getElementById("intro-screen");

  // Step 1: open the book at 600ms
  setTimeout(() => {
    intro.classList.add("open");
  }, 600);

  // Step 2: fade out at 5.5 seconds
  setTimeout(() => {
    intro.classList.add("fade-out");
  }, 5500);

  // Step 3: fully hide at 7 seconds
  // This is the critical fix — without this the invisible
  // intro screen sits on top and blocks ALL button clicks
  setTimeout(() => {
    intro.style.display = "none";
    intro.classList.add("hide");
  }, 7000);

});

