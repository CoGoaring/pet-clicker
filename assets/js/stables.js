const updater = document.querySelector(`#updatePets`);
const fields = document.querySelector(`.selected-field`);

function updateCreatures(petArray) {
    // purely visual
    updater.innerHTML = petArray;

    // the sprite is generated purely off the number of the pet 
    for (let i = 0; i < petArray.length; i++) {
        const generateSprite = document.createElement(`img`);
        generateSprite.setAttribute(`src`, `../../assets/images/creatures/${petArray[i]}.png`);
        fields.appendChild(generateSprite);
    }
}

if (document.URL.includes("stables.html")) {
    // Calls our update id in the HTML and updates it every 10 milliseconds
    let time = setInterval(updateCreatures(creatureStorage), 10);
}