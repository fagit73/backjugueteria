const mensajeError = document.getElementsByClassName("error")[0];
document.getElementById("register-form").addEventListener("submit", async (e) => {
    e.preventDefault();
    //con estos datos luego armaremos nuestro objeto de registro
    const user = e.target.children.user.value;
    const email = e.target.children.email.value;
    const password = e.target.children.password.value;
    //nos comunicamos con el backend para hacer el registro
    try {
        const res = await fetch ("http://localhost:3001/api/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            user : e.target.children.user.value,
            email: e.target.children.email.value,
            password : e.target.children.password.value
          }),
        });
    
        if (!res.ok) {
          return mensajeError.classList.toggle("escondido", false);
        }
    
        const resJson = await res.json();
        if (resJson.redirect) {
          window.location.href = resJson.redirect;
        }
      } catch (error) {
        console.error("Error during registration:", error);
      }
});