// const princip = document.getElementById("principal").value;
// const rat = document.getElementById("rate").value;
// const tim = document.getElementById("time").value;
const btn = document.getElementById("submit")

function calc(princip,rat,tim){
     let value = Number(princip) * Number(rat)* Number(tim);
     value = value/100;
    //  alert(`hi value is ${value}`)
     const result = document.getElementById("results");
     document.getElementById("results").innerText = `The Simple Interest is ${value}`;}
     results.style.display = "block";

btn.addEventListener("click", function(event) {
    event.preventDefault(); // Prevent form submission
    const princip = document.getElementById("principal").value;
    const rat = document.getElementById("rate").value;
    const tim = document.getElementById("time").value;
    calc(princip, rat, tim);
    document.getElementById("principal").value = "";
    document.getElementById("rate").value = "";
    document.getElementById("time").value = "";
        
});