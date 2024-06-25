document
   .getElementById("formLogin")
   .addEventListener("submit", async function (event) {
      event.preventDefault();

      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;

      try {
         const response = await fetch("https://desafio-4.onrender.com/signin", {
            method: "POST",
            headers: {
               "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
         });


         if (!response.ok) {
            throw new Error("Erro na requisição");
         }

         const data = await response.json();
         console.log(data.token);
      } catch (error) {
         console.error("Erro:", error);
      }
   });