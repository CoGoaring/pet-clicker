// This is from google, may use this for testing as a psuedo-database
//let db;

const petID = [0,1,2,3,4,5,6,7,8,9,10];

// I will need to create a pet object eventually, and have an a array of them like this.
myPet = [];

number = 0;

function ennumerate() {
        number++;
        console.log(number);
        localStorage.setItem("clicks", JSON.stringify(number))

        // 50% chance to recieve a pet, not how I want this system to work but functional
        if(getRandomInt(2) == 1) {
            myPet.push(getRandomInt(petID.length+1))
            localStorage.setItem("myPet", JSON.stringify(myPet))
        }
        // var petVal = JSON.parse(localStorage.getItem('myPet'));

         console.log(myPet);
         
}
var petVal = JSON.parse(localStorage.getItem('myPet'));

// Random number starting at 0 rounded to nearest whole float
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

// The update function itself only works when we are on the click page
if (document.URL.includes("click.html")) {
    // Calls our update id in the HTML and updates it every 10 milliseconds
    var t = setInterval(function() {
        document.getElementById("update").innerHTML = number;
    }, 10);
}
if (document.URL.includes("stables.html")) {
    // Calls our update id in the HTML and updates it every 10 milliseconds
    var t = setInterval(function() {
        document.getElementById("updatePets").innerHTML = petVal;
    }, 10);
}
//------------------------- PARTY FUNCTIONS -------------------------
var select = document.getElementById("selector");

function selectBox(value) {
    // triple equals just doesnt type convert so its stricter
    if (select.style.display === "none") {
        select.style.display = "block";
    }
    else {
        select.style.display = "none";
    }
    document.getElementById("data").innerText=document.getElementById(JSON.stringify(value)).innerText
}

console.log(number);