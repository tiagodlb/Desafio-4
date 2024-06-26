document
   .getElementById("formLogin")
   .addEventListener("click", async function (event) {
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

document
   .getElementById("formRegister")
   .addEventListener("submit", async function (event) {
      event.preventDefault();

      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
      const nickname = document.getElementById("nome").value;
      const birthday = document.getElementById("data_nascimento").value;

      const data2 = {
         email: email,
         nickname: nickname,
         password: password,
         birthday: birthday
      }

      try {
         const response = await fetch("https://desafio-4.onrender.com/signup", {
            method: "POST",
            headers: {
               "Content-Type": "application/json",
            },
            body: JSON.stringify(data2),
         });


         if (!response.ok) {
            throw new Error("Erro na requisição");
         }

         const data3 = await response.json();
         console.log(data3.token);
      } catch (error) {
         console.error("Erro:", error);
      }
   });