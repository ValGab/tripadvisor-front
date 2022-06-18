document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("contact").addEventListener("click", () => {
    document.querySelector(".modal").classList.remove("hidden");
    document.querySelector("body").classList.add("disable");
  });

  document.querySelector(".icon-times").addEventListener("click", () => {
    document.querySelector(".modal").classList.add("hidden");
    document.querySelector("body").classList.remove("disable");
  });

  // Requête du formulaire -----------------------------------------------------
  document
    .getElementById("contact")
    .addEventListener("submit", async (event) => {
      event.preventDefault(); // annule le comportement par défaut de rafraichissement

      // const response = await axios.post("http://localhost:3000/form", {
      //   firstname: document.getElementById("firstname").value,
      //   lastname: document.getElementById("lastname").value,
      //   email: document.getElementById("email").value,
      //   message: document.getElementById("message").value,
      // });

      // if (response.status === 200) {
      //   document.querySelector("#validation").classList.remove("hidden");
      // }
    });
});
