/*  Obtendo os valores do html */
const money = document.getElementById("value-money")
const selectCurrency = document.getElementById("currency")
const form = document.querySelector("form")


/* manipular o input pra receber apenas números */
money.addEventListener("input", function(){
    
    const hasCharRegex = /\D+/g
    money.value = money.value.replace(hasCharRegex, "")

})


form.onsubmit = function () {

}