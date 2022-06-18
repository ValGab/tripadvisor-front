document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("contact").addEventListener("click", () => {
    console.log("C'est cliqué");
    document.getElementsByClassName("modal").classList.remove("hidden");
  });
});
