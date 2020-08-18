class Country{
    constructor(name, lang, greeting, colors, flagImg){
        this.name = name;
        this.lang = lang;
        this.greeting = greeting;
        this.colors = colors;
        this.flagImg = flagImg;
    }
}

let usa = new Country("USA", "Murican", "Why Hello there world! Have some McDonalds", ["red", "white", "blue"],"Images/usa-flag-icon-256.png");
let mexico = new Country("Mexico", "Spanish", "Hola mundo!", ["red", "white", "green"],"Images/mexico-flag-icon-256.png");
let algeria = new Country("Algeria", "Arabic and Berber", "Sup", ["white", "green", "red"],"Images/algeria-flag-icon-256.png");
let india = new Country("India", "Hindi", "Namaste", ["orange", "white", "green"],"Images/india-flag-icon-256.png");

function SwitchCountry() {
    let input = "USA";
    let country;

    input = document.getElementById("CountryList").value;

    if (input === "USA") {
        //set country to usa 
        country = usa;
    }
    else if (input === "Mexico") {
        country = mexico;
    }
    else if (input === "Algeria") {
        country = algeria;
    }
    else if (input === "India") {
        country = india;
    }
    displayCountryInfo(country);
}
    
function displayCountryInfo(country){
    let nameElement = document.getElementById("CountryName");
    nameElement.innerText = country.name;
    let langElement = document.getElementById("OfficialLanguage");
    langElement.innerText = country.lang;
    let greetingElement = document.getElementById("HelloWorld");
    greetingElement.innerText = country.greeting;

    let bodyElement = document.getElementById("Color1");
    bodyElement.style.background = country.colors[0];
    let cenElement1 = document.getElementById("Color2");
    cenElement1.style.background = country.colors[1];
    let cenElement2 = document.getElementById("Color3");
    cenElement2.style.background = country.colors[2];

    let flagElement = document.getElementById("flagSrc");
    flagElement.src = country.flagImg;
}