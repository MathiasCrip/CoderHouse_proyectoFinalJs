
const API_KEY_CLIMA = '0e420d21f1b3ded061c1dae5c6e6780d'

const datosClima = async (localizacion) => {
    const { latitude, longitude } = localizacion.coords;
    await fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${latitude}&lon=${longitude}&appid=${API_KEY_CLIMA}`)
        .then(response => response.json())
        .then(datos => setDatosClima(datos))

}

function setDatosClima(datosClima) {

    let date = new Date()
    console.log(datosClima)
    document.getElementById("inicio-clima").innerHTML = `
    <div class="img-clima">
    <img src="http://openweathermap.org/img/wn/${datosClima.weather[0].icon}@2x.png"></strong></div>
    <div class="texto-clima1"><h3><strong> ${datosClima.name}</strong></h3>
    
    <h3><strong> ${datosClima.main.temp}°c </strong></h3>
    <h3><strong> ${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} </strong></h3></div>
    `
    // <h3><strong> ${datosClima.main.humidity}% </strong></h3></div>
}



const onload = () => {
    navigator.geolocation.getCurrentPosition(datosClima)
}


function seleccionar(link) {
    var opciones = document.querySelectorAll('a');
    for (const iterator of opciones) {
        iterator.className = "";
    }
    link.className = "seleccionado";
    //Hacemos desaparecer el menu una vez que se ha seleccionado una opcion
    //en modo responsive
    document.getElementById("nav").className = ""

}

//Función que me aplica el estilo a la opciòn seleccionada y quita la previamente seleccionada
//función que muestra el menu responsive
function responsiveMenu() {
    var x = document.getElementById("nav");
    if (x.className === "") {
        x.className = "responsive";
    } else {
        x.className = ""
    }
}

//detecto el scrolling para aplicar la animación del la barra de habilidades
//funcion que aplica la animación de la barra de habilidades

window.onscroll = () => {
    let skills = document.getElementById("skills");
    let distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;

    if (distancia_skills >= 320) {
        document.getElementById("html").classList.add("barra-progreso1");
        document.getElementById("js").classList.add("barra-progreso2");
        document.getElementById("bd").classList.add("barra-progreso3");
        document.getElementById("ps").classList.add("barra-progreso4");
    }
}

const servicio1 = document.getElementsByClassName("service-tag")


// Loop through each nested sortable element
for (var i = 0; i < servicio1.length; i++) {
    new Sortable(servicio1[i], {
        group: 'listado-servicio',
        fallbackOnBody: true,
        swapThreshold: 0.65,
        swap: true,
        swapClass: 'highlight', // The class applied to the hovered swap item
        animation: 150,
        onEnd: () => {
            console.log(servicio1.length)

        }

    });
}





