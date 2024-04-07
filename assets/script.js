// This is from google, may use this for testing as a psuedo-database
//let db;

// TODO: Can I use some form of reload cache? for certain things only but might reduce network lag
// This is API specific but potentially useful, mostly just keep memory usage as low as possible

const petID = [0,1,2,3,4,5,6,7,8,9,10];
// your img for both egg and pokemon has to equal your id so there arent 10 million if statements
const pet = {
    id: 0,
    level: 0,
    experience: 0,
    stats: [0,0,0,0,0,0],
    type: ["",""],
    gender: "",

}

const myPet = [];

let number=0;

function ennumerate() {
        number++;
        console.log(number);
        localStorage.setItem("clicks", JSON.stringify(number));

        // 50% chance to recieve a pet, not how I want this system to work but functional
        if(getRandomInt(2) == 1) {
            myPet.push(getRandomInt(petID.length+1));
            localStorage.setItem("myPet", JSON.stringify(myPet));
        }
        console.log(myPet);
         
}

function reset() {
    const reset = [];
    localStorage.setItem("myPet", reset);
}
let petVal = JSON.parse(localStorage.getItem('myPet'));
myPet.push(petVal);
// GLOBAL FUNCTIONS -----------------------------------------------------------------
// Random number starting at 0 rounded to nearest whole float
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
// GLOBAL FUNCTIONS -----------------------------------------------------------------

// UPDATE FOR CLICK PAGE -----------------------------------------------------------------
if (document.URL.includes("click.html")) {
    // Calls our update id in the HTML and updates it every 10 milliseconds
    let time = setInterval(function() {
        document.getElementById("update").innerHTML = number;
    }, 10);
} 

// UPDATE FOR STABLES PAGE -----------------------------------------------------------------
if (document.URL.includes("stables.html")) {
    // Calls our update id in the HTML and updates it every 10 milliseconds
    let time = setInterval(function() {
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