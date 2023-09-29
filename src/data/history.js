import ships from "./ships.js";

// Filtra por pais
const filteredCountry = ships.filter ((ships) =>{
        return ships.country === 'US'
})

console.log(filteredCountry)

let toPrint = ''

// Ships Names
filteredCountry.forEach( ships => {
    toPrint += ships.name + ', '
})


let sumShipsYear = filteredCountry.reduce((prev, next) => {
    return prev + next.year;
}, 0);

let cachorro = [10, 15, 7, 8, 9]

let years = cachorro.map(cachorro => {
    return cachorro * 7

})



document.getElementById('main').innerHTML = toPrint + '<br> soma dos anos selecionados: ' + sumShipsYear + '<br> Possivel idade humana dos cachorros no espaço ' + years + ''