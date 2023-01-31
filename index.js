// Creați un obiect care descrie să descrie o masina. 
// Obiectul va avea următoarele proprietăți:  brand , model,  year, price, km bord

const masina = {
    brand: "Renault",
    model: "berlina",
    year: 2014,
    price: 5000,
    kmBoard: 160000
}

console.log(masina);

// 1.1. Modificați numărul de km cu o valoare mai mica
masina.kmBoard= 12000;
console.log(masina)

// 1.2. Adaugati o proprietate nouă, description, cu o valoare corespunzătoare

masina.description = "diesel engine";
console.log(masina)

// 1.3. Stergeti proprietatea description

delete masina.description;
console.log(masina)

//  Cerinte optionale:
//- Rezolvați cerințele de mai sus cu ajutorul unei funcții, care ia ca parametru o masina

function cerinte(masina) {
    masina.kmBoard =  11000;
    masina.description = "diesel engine";
    delete masina.description; 
}

cerinte(masina);
console.log(masina);

// - Creati o functie createOrDeleteProp, care sa adauge/modifice sau sa stearga 
//  proprietate data ca parametru

function createOrDeleteProp(prop, value) {
    if( value !== undefined ) {
        masina[prop]= value;
    } else {
        delete masina[prop]
    }
   
}

createOrDeleteProp("description", "motor diesel");
console.log(masina.description);
createOrDeleteProp("description", undefined);
console.log(masina.description);
createOrDeleteProp("description");
console.log(masina.description);

/* 2. Faceti o functie tuneCar, care ia ca parametru o masina.
 Funcția va returna un obiect nou, fără să îl modifice pe cel trimis ca parametru.
Obiectul returnat de funcția va avea km injumatatiti, iar prețul cu 50% mai mare.
Puteți pasa la funcție obiectul creat la punctul anterior
Grija mare sa nu modificati obiectul trimis ca parametru! */

function tuneCar(masina) {
    const copieMasina = {...masina};
    copieMasina.kmBoard = masina.kmBoard / 2;
    copieMasina.price = masina.price + 0.5 * masina.price;

    // console.log(copieMasina.kmBoard); 
    // console.log(copieMasina.price); 

    return copieMasina;
}

const masinaTunata = tuneCar(masina);
console.log("Masina tunata :", masinaTunata);
console.log("Masina initiala: ", masina);


/* 3. Folosind metodele de pe obiectul Date, afișează data curentă în următorul format: HH:MM:SS
Formatul de mai sus descrie practic ce va vedea utilizatorul, ex: 17:03:30 */
 

function AddZero(number) {
    if(number < 10) {
        return "0" + number;
    }
    return number;
}

const currentTime = new Date();
console.log(currentTime);

const hours = AddZero(currentTime.getHours());
const minutes = AddZero(currentTime.getMinutes());
const seconds = AddZero(currentTime.getSeconds());
const formatedTime = hours + ":" + minutes + ":" + seconds;
console.log("Este ora: ", formatedTime);


//Bonus:
// - Afișați ziua curentă în formatul MMMM DD YYYY, HH:MM:SS

const monthArray = ["January","February","March","April","May",
"June","July","August","September","October","November","December"];
const month = monthArray[currentTime.getMonth()];
const year = currentTime.getFullYear();
const day = currentTime.getDate();
const currentDate = month + ' ' + day + ' '+ year;
console.log(currentDate + ', ' + formatedTime )


// -  Calculati și afișați cat timp a trecut de la o data până în data de azi, 
// formatul in care il afisati e la latitudinea voastra.

const eveniment = new Date(2022, 11, 22) // Data 22.12.2022
console.log(eveniment);
const today = new Date();
var one_day = 1000 * 60 * 60 * 24; //1 day in miliseconds 
console.log(today.getTime()); // today miliseconds
console.log(eveniment.getTime()); //event miliseconds

const elapsed = Math.ceil((today.getTime() - eveniment.getTime())/(one_day)) + " days has gone"; //miliseconds
console.log(elapsed);
// 40 days