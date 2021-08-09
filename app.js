var bill = document.querySelector("#bill")
var cash = document.querySelector("#cash")
var showButton = document.querySelector(".billButton")
var toBeShown = document.querySelector(".hidden")

toBeShown.style.display = "none"

var firstError = document.querySelector(".errorOne")
var hidden = document.querySelector(".hidden")
hidden.style.display = "none"
var gif = document.querySelector("#doingDishes")
gif.style.display = "none"

showButton.addEventListener("click", () => {
    // console.log(bill.value)
    if (bill.value <= 0) {
        // console.log(firstError.innerHTML);
        firstError.innerText = "Bill should atleast be 0"
    } else {
        hidden.style.display = "block"
    }

})

var calculateButton = document.querySelector(".cashButton")
var secondError = document.querySelector(".errorTwo")
var table=document.querySelector(".calculation")

calculateButton.addEventListener("click", () => {
    var returnAmount = cash.value - bill.value;
    // console.log(returnAmount);
    if (Number(cash.value) < Number(bill.value)) {
        secondError.innerText = "Make your customer do this!"
        gif.style.display = "block"
    } else if (Number(cash.value) == Number(bill.value)) {
        secondError.innerText = "Bill amount matches cash given.\nNothing to return"
    } else(Number(cash.value) > Number(bill.value)){
        calculate(returnAmount)
        calculation.style.display="block"
    }
})

var denominations=[2000,500,100,50,20,10,5,1]

function calculate(amount){
    for(i=0;i<denominations.length;i++){
        var notesNumber=Math.trunc(amount/denominations[i])
        console.log(notesNumber);
    }
}