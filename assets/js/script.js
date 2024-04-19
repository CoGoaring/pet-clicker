// This is from google, may use this for testing as a psuedo-database
//let db;

// TODO: Can I use some form of reload cache? for certain things only but might reduce network lag
// This is API specific but potentially useful, mostly just keep memory usage as low as possible

const creatureStorage = JSON.parse(localStorage.getItem(`myCreatures`) || `[]`);

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



// GLOBAL FUNCTIONS -----------------------------------------------------------------
// Random number starting at 0 rounded to nearest whole float
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
// Saving stuffs, could maybe be implemented better? Think they could be modular potentially if im smart
function saveCreatures(creature) {
    console.log(creature);
    creatureStorage.push(creature);
    localStorage.setItem(`myCreatures`, JSON.stringify(creatureStorage));
}
function deleteCreatures() {
    localStorage.setItem(`myCreatures`, `[]`);
}
function deleteCreatureItem(index) {
    const removed = creatureStorage.splice(index, 1)
    localStorage.setItem(`myCreatures`, JSON.stringify(creatureStorage));
}
// GLOBAL FUNCTIONS -----------------------------------------------------------------
