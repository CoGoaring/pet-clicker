//------------------------- PARTY FUNCTIONS -------------------------
const select = document.querySelector(`#selector`);
const data = document.querySelector(`#data`);

function selectBox(value) {
    // triple equals just doesnt type convert so its stricter
    if (select.style.display === `none`) {
        select.style.display = `block`;
    }
    else {
        select.style.display = `none`;
    }
    data.innerText = document.getElementById(JSON.stringify(value)).innerText
}