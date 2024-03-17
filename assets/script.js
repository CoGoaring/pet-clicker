const petID = [0,1,2,3,4,5,6,7,8,9,10];

number = 0;

function ennumerate() {
        number++;
        console.log(number);
        localStorage.setItem("clicks", JSON.stringify(number))

}
// The update function itself only works when we are on the click page
if (document.URL.includes("click.html")) {
    // Calls our update id in the HTML and updates it every 10 milliseconds
    var t = setInterval(function() {
        document.getElementById("update").innerHTML = number;
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