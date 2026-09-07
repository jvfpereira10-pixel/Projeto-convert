const USD = 5.13
const EUR = 5.96
const JPY = 0.033
const CNY = 0.76
const ARS = 0.0034

/*  Obtendo os valores do html */
const money = document.getElementById("value-money")/*pegando o valor de input*/
const selectCurrency = document.getElementById("currency") /*valor do select*/
const form = document.querySelector("form")/*pegando o form*/


/* manipular o input pra receber apenas números */
money.addEventListener("input", function(){
    
    const hasCharRegex = /\D+/g
    money.value = money.value.replace(hasCharRegex, "")

})

/* Pegando o evento de submit no form */
form.onsubmit = function (event) {
    event.preventDefault()

    
    switch (selectCurrency.value) {
        case "USD":
            convertCurrency(money.value, USD, "US$")
            break;
        case "EUR":
            convertCurrency(money.value, EUR, "€")
            break;
        case "JPY":
            convertCurrency(money.value, JPY, "¥")
            break;
        case "ARS":
            convertCurrency(money.value, ARS, "ARS$")
            break;
        case "CNY":
            convertCurrency(money.value, CNY, "CNY¥")
            break;

    }
}
/*Function pra converter a moeda */

function convertCurrency(amount, price, symbol) {
    console.log(amount, price, symbol)
}