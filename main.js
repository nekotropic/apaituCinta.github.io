var button = document.getElementById("mybtn");
var valueA = document.getElementById("inputA");
var valueB = document.getElementById("inputB");
var generateP1 = document.getElementById("generateP1");
var generateP2 = document.getElementById("generateP2");

function handler() {
    let x = Math.floor(Math.random() * 100) + 1;
    let y = Math.floor(Math.random() * 100) + 1;
    
    console.log(x);
    console.log(y);

    generateP1.innerHTML = x + "%";
    generateP2.innerHTML = y + "%";

    var z = (x + y) / 2;

    if (z >= 50) {
        document.getElementById("result").innerHTML = "Kayanya pikir-pikir lagi deh 😏";
    } else {
        document.getElementById("result").innerHTML = "Tancap aja mANKKKK 💌";
    }

}


function generateNumber() {
    setTimeout(handler, 500);
    // generateP1.innerHTML = "0%";
    // generateP2.innerHTML = "0%";
    console.log(valueA)
}


// Reset input placeholder and enable button after 3 seconds
// setTimeout(function () {
//     button.disabled = false;
//     valueA.placeholder = "ketik disini";
//     valueB.placeholder = "ketik disini";
// }, 1000);
