var bill=document.querySelector("#bill")
var cash=document.querySelector("#cash")
var showButton=document.querySelector(".billButton")
var toBeShown=document.querySelector(".hidden")

toBeShown.style.display="none"

var firstError=document.querySelector(".errorOne")
var hidden=document.querySelector(".hidden")
hidden.style.display="none"

showButton.addEventListener("click",()=>{
    // console.log(bill.value)
    if(bill.value<=0){
        // console.log(firstError.innerHTML);
        firstError.innerText="Bill should atleast be 0"
    }else{
        hidden.style.display="block"
    }

})