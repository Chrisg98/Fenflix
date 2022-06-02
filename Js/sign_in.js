window.addEventListener("DOMContentLoaded", () => {
    console.log("La pagina esta cargada");
    const buttonLogin = document.querySelector("#login")
    const inputEmail = document.querySelector("#email")
    const inputPassword = document.querySelector("#password")

    // verificacion  con datos del localStorage para iniciar session
    
    buttonLogin.addEventListener("click", (event) => {
        event.preventDefault()
        const userData = {
            email: inputEmail.value,
            password: inputPassword.value
        }
        if (userData.email == localStorage.email && userData.password == localStorage.password) {
            swal({
                title: "Datos correctos",
                text: "Redirigiendo a la pagina de Peliculas",
                icon: "success",
            })
                .then((redirigir) => {
                    if (redirigir) {
                        const url = window.location.href.replace("sign_in.html", "movies.html")
                        window.location.href = url
                    }
                });
        } else {
            swal({
                title: "Datos incorrectos",
                text: "Usuario o Contraseña incorrectos ",
                icon: "error",
            })
        }

    })
})



