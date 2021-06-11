const escribeTuNombre = () => {
    let myName = prompt("Ingresa tu nombre");
    console.log(myName);
}

const perrosOGatos = () => {
    let response = prompt("¿Qué animal eres?");

    switch(response){
         case "perro":
            console.log("Guau");
            break;

        case "gato":
            console.log("Miau");
            break;

        default:
            console.log("A la verga");
            break;
    }
}

const claseFor = () => {
    let movies = [
        "Luna de miel en familia",
        "Escuadron Suicida",
        "Malefica",
        "Terminator Genisys",
        "Star trek",
        "Captain Philips",
        "La quinta ola",
        "El arte de robar",
        "The martian",
        "Sospechosos"
    ];

    for (let i = 0; i < movies.length; i++) {
        console.log(`${i}. ${movies[i]}`);

        if(movies[i] == "The Martian") {
            console.log("Que buena pelicula");
        } else {
            console.log("jajajaja");
        }
    }
}

const menu = () => {
    let responseMenu = parseInt(
        prompt("¿Qué quieres hacer?\n1.Imprimir tu nombre\n2.¿Qué animal eres?" )
    );
    
    switch(responseMenu) {
        case 1:
            escribeTuNombre();
            break;
    
        case 2:
            perrosOGatos();
            break;
    
        default:
            console.log("opción erronea");
            break;
    }
}

const buttonStart = document.getElementById("button-start");
buttonStart.addEventListener("click", menu);