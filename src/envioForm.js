document.getElementById("formLogin").onsubmit = async function (event) {
   event.preventDefault();
   await handleLogin();
};

document.getElementById("formSignup").onsubmit = async function (event) {
   event.preventDefault();
   await handleSignup();
};

async function handleLogin() {
   const email = document.getElementById("email").value;
   const password = document.getElementById("password").value;
   console.log("login do Body:", JSON.stringify({ email, password }));

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
}

async function handleSignup() {
   const name = document.getElementById("nome").value;
   const email = document.getElementById("email").value;
   const password = document.getElementById("password").value;
   console.log("signup do body: ", JSON.stringify({ name, email, password }));

   try {
      const response = await fetch("https://desafio-4.onrender.com/signup", {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify({ name, email, password }),
      });

      if (!response.ok) {
         throw new Error("Erro na requisição");
      }

      const data = await response.json();
      console.log(data);
   } catch (error) {
      console.error("Erro:", error);
   }
}
