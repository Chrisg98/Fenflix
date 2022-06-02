const cart = [];
let ticket = 0;
const movies = [
    ' E.T ',
    ' Batman ',
    ' IT ',
    ' Proxecto X ',
    ' Toy Story ',
    ' Spider Man ',
    ' Los juegos del hambre ',
    ' Jurassic Word ',
    ' Volver al futuro ',
]
//                                  CARRITO DE COMPRA MOVIES
const et = () => {
    swal({
        title: "Queres alquilar E.T?",
        text: "La pelicula cuesta $250 la queres alquilar?",
        icon: "warning",
        buttons: true,
    })
        .then((compraEt) => {
            if (compraEt) {
                swal("Gracias por alquilar en Fenflix", {
                    icon: "./img/pochoclos2.png",
                });
                ticket += 250;
                cart.push(movies[0])
            } else {
                swal("No queres alquilarla?,tranqui no pasa nada 😉");
            }
        });

}

const batman = () => {
    swal({
        title: "Queres alquilar Batman?",
        text: "La pelicula cuesta $500 la queres alquilar?",
        icon: "warning",
        buttons: true,
    })
        .then((compraBatman) => {
            if (compraBatman) {
                swal("Gracias por alquilar en Fenflix", {
                    icon: "./img/pochoclos2.png",
                });
                ticket += 500;
                cart.push(movies[1])
            } else {
                swal("No queres alquilarla?,tranqui no pasa nada 😉");
            }
        });
}

const it = () => {
    swal({
        title: "Queres alquilar IT?",
        text: "La pelicula cuesta $600 la queres alquilar?",
        icon: "warning",
        buttons: true,
    })
        .then((compraIt) => {
            if (compraIt) {
                swal("Gracias por alquilar en Fenflix", {
                    icon: "./img/pochoclos2.png",
                });
                ticket += 600;
                cart.push(movies[2])
            } else {
                swal("No queres alquilarla?,tranqui no pasa nada 😉");
            }
        });
}

const proxectoX = () => {
    swal({
        title: "Queres alquilar Proxecto X?",
        text: "La pelicula cuesta $450 la queres alquilar?",
        icon: "warning",
        buttons: true,
    })
        .then((compraProxectoX) => {
            if (compraProxectoX) {
                swal("Gracias por alquilar en Fenflix", {
                    icon: "./img/pochoclos2.png",
                });
                ticket += 450;
                cart.push(movies[3])
            } else {
                swal("No queres alquilarla?,tranqui no pasa nada 😉");
            }
        });
}

const toyStory = () => {
    swal({
        title: "Queres alquilar Toy Story?",
        text: "La pelicula cuesta $600 la queres alquilar?",
        icon: "warning",
        buttons: true,
    })
        .then((compratoyStory) => {
            if (compratoyStory) {
                swal("Gracias por alquilar en Fenflix", {
                    icon: "./img/pochoclos2.png",
                });
                ticket += 600;
                cart.push(movies[4])
            } else {
                swal("No queres alquilarla?,tranqui no pasa nada 😉");
            }
        });
}
const spiderMan = () => {
    swal({
        title: "Queres alquilar Spider Man?",
        text: "La pelicula cuesta $750 la queres alquilar?",
        icon: "warning",
        buttons: true,
    })
        .then((compraSpiderMan) => {
            if (compraSpiderMan) {
                swal("Gracias por alquilar en Fenflix", {
                    icon: "./img/pochoclos2.png",
                });
                ticket += 750;
                cart.push(movies[5])
            } else {
                swal("No queres alquilarla?,tranqui no pasa nada 😉");
            }
        });
}

const juegosDelHambre = () => {
    swal({
        title: "Queres alquilar Los juegos del hambre?",
        text: "La pelicula cuesta $900 la queres alquilar?",
        icon: "warning",
        buttons: true,
    })
        .then((compraJuegosDelHambre) => {
            if (compraJuegosDelHambre) {
                swal("Gracias por alquilar en Fenflix", {
                    icon: "./img/pochoclos2.png",
                });
                ticket += 900;
                cart.push(movies[6])
            } else {
                swal("No queres alquilarla?,tranqui no pasa nada 😉");
            }
        });
}

const jurassicWord = () => {
    swal({
        title: "Queres alquilar Jurassic Word?",
        text: "La pelicula cuesta $1200 la queres alquilar?",
        icon: "warning",
        buttons: true,
    })
        .then((compraJurassicWord) => {
            if (compraJurassicWord) {
                swal("Gracias por alquilar en Fenflix", {
                    icon: "./img/pochoclos2.png",
                });
                ticket += 1200;
                cart.push(movies[7])
            } else {
                swal("No queres alquilarla?,tranqui no pasa nada 😉");
            }
        });
}

const volverAlFuturo = () => {
    swal({
        title: "Queres alquilar Volver al futuro?",
        text: "La pelicula cuesta $120 la queres alquilar?",
        icon: "warning",
        buttons: true,
    })
        .then((compraVolverAlFuturo) => {
            if (compraVolverAlFuturo) {
                swal("Gracias por alquilar en Fenflix", {
                    icon: "./img/pochoclos2.png",
                });
                ticket += 120;
                cart.push(movies[8])
            } else {
                swal("No queres alquilarla?,tranqui no pasa nada 😉");
            }
        });
}

// CARRITO DE COMPRA
const theCart = () => {
    if (ticket === 0) {
        swal({
            title: "Tus alquileres",
            text: "No alquilaste ninguna pelicula",
            icon: "error",
        });
    } else {
        swal({
            title: "Tus alquileres",
            text: "Alquilaste estas peliculas: " + cart + "\n" + "El precio final es: $" + ticket,
            buttons: ["Cancelar", "Alquilar"]
        })
            .then((mensajeCompra) => {
                if (mensajeCompra) {
                    swal("Tenes que abonar la suma de: $" + ticket, {
                        content: "input",
                    })
                        .then((value) => {
                            swal({
                                title: "Pago realizado",
                                text: `¡Muchas gracias por su alquiler! \n Abonaste $ ${value}`,
                                icon: "./img/pochoclos2.png",
                            })
                            ticket = 0
                            cart = [];
                        });

                } else {
                    ticket = 0;
                    cart = [];
                }
            })
    }
}




