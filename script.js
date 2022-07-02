const botton = document.getElementById('convert-button')
const select = document.getElementById('currency-select')

const dolar = 5.2
const euro = 5.5

const convertValues = () => {
    const inputReais = document.getElementById('input-real').value
    const realValueText = document.getElementById('real-value-text')
    const currencyValueText = document.getElementById('currency-value-text')            
    
    realValueText.innerHTML = new Intl.NumberFormat("pt-BR",{
        style: "currency",
        currency: "BRL",
    }).format(inputReais)
    
    if(select.value === "US$ Dólar Americano"){
        currencyValueText.innerHTML = new Intl.NumberFormat("en-US",{
            style: "currency",
            currency: "USD",
        }).format(inputReais / dolar)
    }

    if(select.value === "€ Euro"){
        currencyValueText.innerHTML = new Intl.NumberFormat("de-DE",{
            style: "currency",
            currency: "EUR",
        }).format(inputReais / euro)
    }
}

const changeCurrency = () => {
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.getElementById("currency-image")

    if(select.value === 'US$ Dólar Americano') {
        currencyName.innerHTML = "Dólar Americano"
        currencyImage.src = "./img/eua.svg"
    }

    if(select.value === '€ Euro') {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./img/euro.svg"
    }

    convertValues()
}

botton.addEventListener('click', convertValues)
select.addEventListener("change", changeCurrency)


