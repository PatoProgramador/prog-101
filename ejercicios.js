const ejercicio1 = () => {
    console.log("Pato");
};

const ejercicio2 = () => {
    console.log("Pato\nCra 98 # 2-32\n3507810906");
};

const ejercicio3 = () => {
    let words = [
        "Apple",
        "Boat",
        "Car",
        "Dinosaur",
        "External",
        "Face",
        "Goat",
        "House",
        "island",
        "joke"
    ];
    let palabras = [
        "Manzana",
        "Bote",
        "Carro",
        "Dinosaurio",
        "Externo",
        "Cara",
        "Cabra",
        "Casa",
        "Isla",
        "Broma"
    ];

    for (let i = 0; i < words.length; i++) {
        console.log(`${words[i]}:${palabras[i]}`);
    }
};

const ejercicio4 = () => {
    for (let i = 0; i < 9; i++) {
        let str = '';

        // Añade asteriscos
        for(let j = 0; j <= i; j++) {
            str = str + "*";
        }

        // Añade espacios
        let temp = 9 - str.length;
        for( let k = 0; k < temp; k++) {
            str = str + " ";
        }

        let arrayStr = str.split("");
        let reversedArryStr = arrayStr.reverse();
        str = reversedArryStr.join("") + str;

        console.log(str);
    }
};

const ejercicio5 = () => {
    console.log("    * ");
    console.log("   * * ");
    console.log("  *   * ");
    console.log(" *     * ");
    console.log("*********");
}

let responseMenu = parseInt(
    prompt("¿Que ejercicio quieres ver?")
);

switch (responseMenu) {
    case 1:
        ejercicio1();
        break;
        
    case 2:
        ejercicio2();
        break;
    
    case 3:
        ejercicio3();
        break;

    case 4:
        ejercicio4();
        break;
    case 5:
        ejercicio5();
        break;

    default:
        console.log("Ejercicio incorrecto");
        break;
}