const cart = [];
let ticket = 0;
const series = [
    ' How I Met Your Mother ',
    ' Peaky Blinders ',
    ' La casa de papel ',
    ' Greys Anatomy ',
    ' Arrow ',
    ' Friends ',
    ' Game of Thrones ',
    ' Breaking Bad ',
    ' The 100 ',
]
//                                  CARRITO DE COMPRA SERIES
const howIMetYourMother = () => {
    swal({
        title: "Queres alquilar How I Met Your Mother?",
        text: "La serie cuesta $800 la queres alquilar?",
        icon: "warning",
        buttons: true,
    })
        .then((compraHowIMetYourMother) => {
            if (compraHowIMetYourMother) {
                swal("Gracias por alquilar en Fenflix", {
                    icon: "./img/pochoclos2.png",
                });
                ticket += 800;
                cart.push(series[0])
            } else {
                swal("No queres alquilarla?,tranqui no pasa nada 😉");
            }
        });

}

const peakyBlinders = () => {
    swal({
        title: "Queres alquilar Peaky Blinders?",
        text: "La serie cuesta $1500 la queres alquilar?",
        icon: "warning",
        buttons: true,
    })
        .then((compraPeakyBlinders) => {
            if (compraPeakyBlinders) {
                swal("Gracias por alquilar en Fenflix", {
                    icon: "./img/pochoclos2.png",
                });
                ticket += 1500;
                cart.push(series[1])
            } else {
                swal("No queres alquilarla?,tranqui no pasa nada 😉");
            }
        });
}

const CasaDePapel = () => {
    swal({
        title: "Queres alquilar La casa de papel?",
        text: "La serie cuesta $900 la queres alquilar?",
        icon: "warning",
        buttons: true,
    })
        .then((compraCasaDePapel) => {
            if (compraCasaDePapel) {
                swal("Gracias por alquilar en Fenflix", {
                    icon: "./img/pochoclos2.png",
                });
                ticket += 900;
                cart.push(series[2])
            } else {
                swal("No queres alquilarla?,tranqui no pasa nada 😉");
            }
        });
}

const greysAnatomy = () => {
    swal({
        title: "Queres alquilar Greys Anatomy?",
        text: "La serie cuesta $1200 la queres alquilar?",
        icon: "warning",
        buttons: true,
    })
        .then((compraGreysAnatomy) => {
            if (compraGreysAnatomy) {
                swal("Gracias por alquilar en Fenflix", {
                    icon: "./img/pochoclos2.png",
                });
                ticket += 1200;
                cart.push(series[3])
            } else {
                swal("No queres alquilarla?,tranqui no pasa nada 😉");
            }
        });
}

const arrow = () => {
    swal({
        title: "Queres alquilar Arrow?",
        text: "La serie cuesta $1000 la queres alquilar?",
        icon: "warning",
        buttons: true,
    })
        .then((compraArrow) => {
            if (compraArrow) {
                swal("Gracias por alquilar en Fenflix", {
                    icon: "./img/pochoclos2.png",
                });
                ticket += 1000;
                cart.push(series[4])
            } else {
                swal("No queres alquilarla?,tranqui no pasa nada 😉");
            }
        });
}

const friends = () => {
    swal({
        title: "Queres alquilar Friends?",
        text: "La serie cuesta $1300 la queres alquilar?",
        icon: "warning",
        buttons: true,
    })
        .then((compraFriends) => {
            if (compraFriends) {
                swal("Gracias por alquilar en Fenflix", {
                    icon: "./img/pochoclos2.png",
                });
                ticket += 1300;
                cart.push(series[5])
            } else {
                swal("No queres alquilarla?,tranqui no pasa nada 😉");
            }
        });
}

const gameOfThrones = () => {
    swal({
        title: "Queres alquilar Game of Thrones?",
        text: "La serie cuesta $1800 la queres alquilar?",
        icon: "warning",
        buttons: true,
    })
        .then((compraGameOfThrones) => {
            if (compraGameOfThrones) {
                swal("Gracias por alquilar en Fenflix", {
                    icon: "./img/pochoclos2.png",
                });
                ticket += 1800;
                cart.push(series[6])
            } else {
                swal("No queres alquilarla?,tranqui no pasa nada 😉");
            }
        });
}

const BreakingBad = () => {
    swal({
        title: "Queres alquilar Breaking Bad?",
        text: "La serie cuesta $1600 la queres alquilar?",
        icon: "warning",
        buttons: true,
    })
        .then((compraBreakingBad) => {
            if (compraBreakingBad) {
                swal("Gracias por alquilar en Fenflix", {
                    icon: "./img/pochoclos2.png",
                });
                ticket += 1600;
                cart.push(series[7])
            } else {
                swal("No queres alquilarla?,tranqui no pasa nada 😉");
            }
        });
}

const The100 = () => {
    swal({
        title: "Queres alquilar The 100?",
        text: "La serie cuesta $1400 la queres alquilar?",
        icon: "warning",
        buttons: true,
    })
        .then((compraThe100) => {
            if (compraThe100) {
                swal("Gracias por alquilar en Fenflix", {
                    icon: "./img/pochoclos2.png",
                });
                ticket += 1400;
                cart.push(series[8])
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
            text: "No alquilaste ninguna serie",
            icon: "error",
        });
    } else {
        swal({
            title: "Tus alquileres",
            text: "Alquilaste estas series: " + cart + "\n" + "El precio final es: $" + ticket,
            buttons: ["Cancelar", "Alquilar"]
        })
            .then((mensajeCompra) => {
                if (mensajeCompra) {
                    swal("Tenes que abonar la suma de: $" + ticket, {
                        content: "input",
                    })
                        .then((value) => {
                         if(value===ticket){  
                             swal({
                            title: "Pago realizado",
                            text: `¡Muchas gracias por su alquiler! \n Abonaste $ ${value}`,
                            icon: "./img/pochoclos2.png",
                        })}   
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
