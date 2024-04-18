// This is from google, may use this for testing as a psuedo-database
//let db;

// TODO: Can I use some form of reload cache? for certain things only but might reduce network lag
// This is API specific but potentially useful, mostly just keep memory usage as low as possible

const petID = [0,1,2,3,4,5];
// constructor pog
// okay so basically each id is both its image and its type if you think about it
// normal :1, etc, shinies: s1, etc.
class creature {
    constructor (id, sprite, gender,  type, level, experience, stats, ev, iv,) {
    this.id = id;
    this.sprite = sprite;
    this.gender = gender;
    this.type = type;
    this.level = level;
    this.experience = experience;
    this.stats = stats;
    this.ev = ev;
    this.iv = iv;
    // most likely we will use states/enums here
    }

    getID() {
        return this.id;
    };
    getSprite() {
        return this.sprite;
    };
    getGender() {
        return this.gender;
    };
    getType() {
        return this.type;
    };
    getLevel() {
        return this.level;
    };
    getExperience() {
        return this.experience;
    };
    getStats() {
        return this.stats;
    };
    getEV() {
        return this.ev;
    };
    getIV() {
        return this.iv;
    };
}


// your img for both egg and pokemon has to equal your id so there arent 10 million if statements

// THIS IS A FAKE CONSTRUCTOR im making a better one
// const pet = {
//     id: 0,
//     level: 0,
//     experience: 0,
//     stats: [0,0,0,0,0,0],
//     type: ["",""],
//     gender: "",

// }

const myPet = [];

let number=0;

function ennumerate() {
        number++;
        console.log(number);
        localStorage.setItem("clicks", JSON.stringify(number));

        // 50% chance to recieve a pet, not how I want this system to work but functional
        if(getRandomInt(2) == 1) {
            myPet.push(getRandomInt(petID.length));
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
const updater = document.querySelector(`#updatePets`);
const fields = document.querySelector(`.selected-field`);

function updateCreatures(petArray) {
    // purely visual
    updater.innerHTML = petArray;

    // the sprite is generated purely off the number of the pet 
    for (let i = 0; i < petArray.length; i++) {
        const generateSprite = document.createElement(`img`);
        generateSprite.setAttribute(`src`, `../assets/images/creatures/${petArray[i]}.png`);
        fields.appendChild(generateSprite);
    }
}

if (document.URL.includes("stables.html")) {
    // Calls our update id in the HTML and updates it every 10 milliseconds
    let time = setInterval(updateCreatures(petVal), 10);
}
//------------------------- PARTY FUNCTIONS -------------------------
const select = document.querySelector(`#selector`);
const data = document.querySelector(`#data`);

function selectBox(value) {
    // triple equals just doesnt type convert so its stricter
    if (select.style.display === "none") {
        select.style.display = "block";
    }
    else {
        select.style.display = "none";
    }
    data.innerText=document.getElementById(JSON.stringify(value)).innerText
}

console.log(number);