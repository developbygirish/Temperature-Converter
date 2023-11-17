let celcius = document.querySelector('#Celcius')
let kelvin = document.querySelector('#Kelvin')
let farenheite = document.querySelector('#Farenheite')

function computTemp(event) {
    let currentValue = +event.target.value;

    switch (event.target.id) {
        case 'Celcius':
            kelvin.value = (currentValue + 273.32);
            farenheite.value = (currentValue * 1.8 + 32);
            break;

        case 'Kelvin':
            celcius.value = (currentValue - 273.32);
            farenheite.value = (currentValue - 457.87);
            break;

        case 'Farenheite':
            kelvin.value = ((currentValue - 32)/1.8 + 273.32) ;
            celcius.value = ((currentValue - 32)/1.8);
            break;

        default:
            break;
    }
}