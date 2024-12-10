const API_KEY = 'LtVDvvkDZ3kQrHL8Q9z1eqrGDMsm5KWkSKX4xAXBlfXkqrMA2cTL2XIa';
const mainUl = document.getElementById("houses");
const loadMore = document.getElementById("loadMore");
const main = document.getElementById("main")

const locationOfHouse = document.getElementById("location");
var searchLocation = document.getElementById("searchLocation");

const maxImages = 70;
let loadedImages = 0;
var firstPage = 20;

let priceAndAddress = [
    {
        price:"3 400 000$",
        address: "84, Lage Hoek"
    },
    {
        price:"1 050 100$",
        address: "25, Krypska"
    },
    {
        price:"15 000 000$",
        address: "4, Am Erlenbach"
    },
    {
        price:"5 450 000$",
        address: "5, Novykova-Pryboia Street"
    },
    {
        price:"1 350 000$",
        address: " 8, Helperzoom"
    },
    {
        price:"8 000 000$",
        address: "91, Pannestraat"
    },
    {
        price:"9 900 000$",
        address: "38 к1, Яхтенная улица"
    },
    {
        price:"10 000 000$",
        address: "4, Avenida da Liberdade"
    },
    {
        price:"5 555 000$",
        address: "40, Holmingevägen"
    },
    {
        price:"6 500 000$",
        address: "12, Camino del Romeral"
    },
    {
        price:"20 000 000$",
        address: "60E, Route de Valavran"
    },
    {
        price:"1 000 000$",
        address: "251, Strada Livădarilor"
    },
    {
        price:"5 640 000$",
        address: "124B, Krokemoveien"
    },
    {
        price:"18 200 000$",
        address: "2, Московська вулиця"
    },
    {
        price:"1 400 000$",
        address: "3a, Spitzhubelstrasse"
    },
    {
        price:"5 555 555$",
        address: "36, Urðarbakki"
    },
    {
        price:"7 777 777$",
        address: "2, Rue Saint-Paul"
    },
    {
        price:"2 222 222$",
        address: "56 к3, улица Плеханова"
    },
    {
        price:"3 333 333$",
        address: "33, Pleasants Street"
    },
    {
        price:"2 250 000$",
        address: "56, Naustavör"
    },
    {
        price:"1 000 030$",
        address: "10, Calle Capitán Montoro"
    },
    {
        price:"6 666 666$",
        address: "21, Ömer Muhtar Caddesi"
    },
    {
        price:"2 000 000$",
        address: "11, Cornflower Terrace"
    },
    {
        price:"5 000 000$",
        address: "137, Filip Kutev str."
    },
    {
        price:"1 900 000$",
        address: "17, Paseo marítimo"
    },
    {
        price:"3 320 000$",
        address: " 43, Avenue Sainte-Foy"
    },
    {
        price:"8 700 000$",
        address: "42, Mazurka"
    },
    {
        price:"11 000 000$",
        address: "116, Μιχαήλ Βόδα"
    },
    {
        price:"1 000 000$",
        address: "6, Weegse"
    },
    {
        price:"4 000 000$",
        address: " 3258, Route de Saint-Porquier"
    },
    {
        price:"1 111 111$",
        address: "32, Rue des Romains"
    },
    {
        price:"2 404 502$",
        address: "4, Trutenäcker"
    },
    {
        price:"6 650 000$",
        address: "10, Virbi"
    },
    {
        price:"3 100 000$",
        address: "18, Helmiku tee"
    },
    {
        price:"9 999 999$",
        address: "Bellavista 79"
    },
    {
        price:"2 888 000$",
        address: "Avenida Cervantes 5"
    },
    {
        price:"9 990 000$",
        address: "Herrería 68"
    },
    {
        price:"3 400 500$",
        address: "Celso Emilio Ferreiro 70"
    },
    {
        price:"1 200 400$",
        address: "Alcon Molina 25"
    },
    {
        price:"3 000 200$",
        address: "Quevedo 67"
    },
    {
        price:"1 650 000$",
        address: "Plaza Colón 89"
    },
    {
        price:"1 030 030$",
        address: "415, Via Flaminia"
    },
    {
        price:"3 760 000$",
        address: "31, Skoon"
    },
    {
        price:"1 224 000$",
        address: "163, Gabriela Narutowicza"
    },
    {
        price:"22 000 000$",
        address: "9, Zúzmara utca"
    },
    {
        price:"1 321 000$",
        address: "149, Миронівська вулиця"
    },
    {
        price:"7 654 321$",
        address: "13А, Набережная улица"
    },
    {
        price:"2 222 500$",
        address: "4, Triebweg"
    },
    {
        price:"2 111 111$",
        address: "27, Tähe"
    },
    {
        price:"3 334 502$",
        address: "16, Allée de la Fontaine"
    },
    {
        price:"7 750 000$",
        address: "32, Eigenstrasse"
    },
    {
        price:"4 410 000$",
        address: "37, Jutrzenki"
    },
    {
        price:"5 555 111$",
        address: "197, Vuka Karadžića"
    },
    {
        price:"8 888 000$",
        address: "1, James Road"
    },
    {
        price:"1 290 000$",
        address: "57, Punane"
    },
    {
        price:"1 231 500$",
        address: "7, Rue du Bignon"
    },
    {
        price:"30 000 000$",
        address: "14, Tyers Street"
    },
    {
        price:"14 000 200$",
        address: "29c, Жикице Јовановића Шпанца"
    },
    {
        price:"1 000 010$",
        address: "49, Rak"
    },
    {
        price:"2 199 030$",
        address: "17, Rue Lecaillon"
    },
]

function fetchHouses(page, searchTerm = "") {
    const API_URL = `https://api.pexels.com/v1/search?query=modern%20mansion&per_page=${page}`; 
    
    const xhr = new XMLHttpRequest();

    xhr.open('GET', API_URL, true);
    xhr.setRequestHeader('Authorization', API_KEY);

    xhr.onload = function () {
        if (xhr.status == 200) {
            const data = JSON.parse(xhr.responseText);
            displayHouses(data.photos, searchTerm);
            
            loadedImages += data.photos.length; 
           
            if (loadedImages >= maxImages) {
                loadMore.disabled = true;
                loadMore.innerText = "reached the end";
            } else {
                loadMore.disabled = false;
            }
        } 
    };

    xhr.send();
}



function displayHouses(houses, searchTerm = "") {
    mainUl.innerHTML ='';
    var comboNum = 0;
    mainUl.style.listStyleType = "none"; 
    mainUl.style.marginTop= "30px"

    houses.forEach(house => {
        const newLi = document.createElement("li");
        newLi.style.display = "inline-block";
        newLi.style.marginRight= "5px";
        newLi.style.marginBottom= "70px";
        const imgElement = document.createElement("img");
        imgElement.src = house.src.large;
        imgElement.style.marginLeft = "30px";
        imgElement.style.border = "1px solid rgb(0,0,0)"
        imgElement.style.width = "240px";
        imgElement.style.height = "150px";
        
        const priceElement = document.createElement("h4");
        const addressElement = document.createElement("p");
        const likeButton = document.createElement("button");
        likeButton.classList.add("favoriteButton");
        likeButton.type = "button";
        likeButton.innerText = "<3";
        priceElement.innerText = priceAndAddress[comboNum].price;
        priceElement.classList.add("alignPrice")
        
        
        const address = priceAndAddress[comboNum].address;

        if (searchTerm) {
            addressElement.innerHTML = highlightMatches(address, searchTerm);
        } else {
            addressElement.innerText = address;
            addressElement.classList.add("alignAddress");
        }
    

        likeButton.addEventListener("click", function () {
            if (likeButton.classList.contains("clicked")) {
                likeButton.classList.remove("clicked");
        } else {
                likeButton.classList.add("clicked");
            }
        });
        
        newLi.appendChild(imgElement);
        newLi.appendChild(addressElement);
        newLi.appendChild(priceElement);
        newLi.appendChild(likeButton);
        mainUl.appendChild(newLi);

        comboNum++;
    });
    
}

const highlightMatches = (text, searchTerm) => {
    const regex = new RegExp(`(${searchTerm})`, "gi"); //g modifier: global. All matches (don't return on first match) from:https://stackoverflow.com/questions/27916055/whats-the-meaning-of-gi-in-a-regex
                                                        // a literal notation and a constructor.
    return text.replace(regex, "<span class='highlight'>$1</span>"); 
};

fetchHouses(firstPage);

searchLocation.addEventListener("click", () => {
    var searchingWord = locationOfHouse.value;

    if (searchingWord) {
        fetchHouses(firstPage, searchingWord);
    } else {
        fetchHouses(firstPage); 
    }
   
})


loadMore.addEventListener("click", function () {
    if (loadedImages < maxImages) {
        firstPage += 20;
        newHeight();
        fetchHouses(firstPage);
    }
});

function newHeight() {
    var newMainHeight = main.offsetHeight + 1150;
    main.style.height = newMainHeight + "%";
}

