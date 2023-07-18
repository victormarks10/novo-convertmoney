



const convertButton = document.querySelector(".convert-button")

const currencySelect = document.querySelector(".currency-select")

function convertValues() {

    const inputcurrencyvalue = document.querySelector(".my-input").value // valor do input
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") // valor do dolar
    const currencyValueConverted = document.querySelector(".currency-value") // valor do real

    console.log(currencySelect.value)

    const bitcoinToday = 133397.08
    const dolarToday = 4.96
    const euroToday = 5.00

    //


    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency", 
        currency: "BRL"  
    }).format(inputcurrencyvalue)

    if (currencySelect.value === "dolar") { 
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency", // 
            currency: "USD"  // 
        }).format(inputcurrencyvalue / dolarToday)


    } if (currencySelect.value === "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency", 
            currency: "EUR"  
        }).format(inputcurrencyvalue / euroToday)
    }
    
    if(currencySelect.value ==="coin")
    currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency", 
        currency: "BTC"  
    }).format(inputcurrencyvalue/bitcoinToday)
    

    
}


function changeCurrency(){
    
    const currencyName = document.getElementById("currency-name")
    const currencyImg = document.querySelector(".currency-img")
   
    if (currencySelect.value === "dolar") {
        currencyName.innerHTML = "Dólar americano"
        currencyImg.src ="./assets/Dolar.png"
    }

    if (currencySelect.value ==="euro") {
        currencyName.innerHTML = "Euro"
        currencyImg.src ="./assets/Euro.png"
    }

    if (currencySelect.value ==="coin") {
        currencyName.innerHTML = "BitCoin"
        currencyImg.src ="./assets/bitcoin.png"
    }

    

    
    convertValues()

}


currencySelect.addEventListener("change",changeCurrency)

convertButton.addEventListener("click", convertValues)