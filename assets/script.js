const petID = [0,1,2,3,4,5,6,7,8,9,10];

number = 0;

function ennumerate() {
        number++;
        console.log(number);

}

var t = setInterval(function() {
    document.getElementById("update").innerHTML = number;
}, 10);

console.log(number);