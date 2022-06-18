document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("contact").addEventListener("click", () => {
    document.querySelector(".modal").classList.remove("hidden");
  });

  document.querySelector(".icon-times").addEventListener("click", () => {
    document.querySelector(".modal").classList.add("hidden");
  });
});
