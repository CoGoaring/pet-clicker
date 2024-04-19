let number = 0;

function ennumerate() {
        number++;
        console.log(number);
        localStorage.setItem("clicks", JSON.stringify(number));


        let generatedCreature = 0;
        // 50% chance to recieve a pet, not how I want this system to work but functional
        if(getRandomInt(2) == 1) {
            generatedCreature = getRandomInt(petID.length);
        }
        saveCreatures(generatedCreature);
}

if (document.URL.includes(`click.html`)) {
    // Calls our update id in the HTML and updates it every 10 milliseconds
    let time = setInterval(function() {
        document.getElementById(`update`).innerHTML = number;
    }, 10);
} 