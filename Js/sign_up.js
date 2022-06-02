window.addEventListener("DOMContentLoaded", () => {
    localStorage.clear()
    console.log("La pagina esta cargada")

    const formRegister = document.querySelector("form")
    const registerName = formRegister.querySelector("#name")
    const registerLastName = formRegister.querySelector("#lastName")
    const registerEmail = formRegister.querySelector("#email")
    const registerPassword = formRegister.querySelector("#password")
    const registerPassword2 = formRegister.querySelector("#password2")
    const registerDate = formRegister.querySelector("#date")
    const buttonRegister = formRegister.querySelector("#register")

    // mandar datos al localStorage

    buttonRegister.addEventListener("click", (event) => {
        event.preventDefault()
        const userData = {
            Name: registerName.value,
            lastName: registerLastName.value,
            Email: registerEmail.value,
            Password: registerPassword.value,
            Password2: registerPassword2.value,
            Date: registerDate.value,
        }
        window.localStorage.setItem("name", userData.Name)
        window.localStorage.setItem("lastName", userData.lastName)
        window.localStorage.setItem("email", userData.Email)
        window.localStorage.setItem("password", userData.Password)
        window.localStorage.setItem("password2", userData.Password2)
        window.localStorage.setItem("date", userData.Date)

        // Verificarcion para registrarse

        if (userData.Name === "" || userData.lastName === "" || userData.Email === "" || userData.Password === "" || userData.Password2 === "" || userData.Date === "") {
            swal({
                title: "Error",
                text: "Por favor completa todos los campos",
                icon: "warning",
            })
        } else if (userData.Password != userData.Password2) {
            swal({
                title: "Error",
                text: "Las contraseñas no coinciden 🤷‍♀️",
                icon: "error",
            })
        }
        else {
            swal({
                title: "Perfecto",
                text: "Te registraste con exito 👌",
                icon: "success",
            })
                .then((registroExitoso) => {
                    if (registroExitoso) {
                        const url = window.location.href.replace("sign_up.html", "sign_in.html")
                        window.location.href = url
                    }
                })
        }
    })
});

