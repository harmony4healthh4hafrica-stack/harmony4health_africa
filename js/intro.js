window.addEventListener("load", () => {

  const intro = document.getElementById("intro-screen");

  setTimeout(() => {
    intro.classList.add("open");
  }, 600);


  
setTimeout(() => {
  intro.classList.add("fade-out");
}, 5500);
});
