// src/App.js

import React from 'react';
import ships from './data/ships'; // Certifique-se de que o caminho esteja correto
import './App.css';

function App() {
  // Filtra por país
  const filteredCountry = ships.filter((ship) => {
    return ship.country === 'US';
  });

  // Ships Names
  let toPrint = '';
  filteredCountry.forEach((ship, index) => {
    toPrint += ship.name;
    if (index < filteredCountry.length - 1) {
      toPrint += ', ';
    }
  });

  // Soma dos anos selecionados
  let sumShipsYear = filteredCountry.reduce((prev, ship) => {
    return prev + ship.year;
  }, 0);

  // Possível idade humana dos cachorros no espaço
  let cachorro = [10, 15, 7, 8, 9];
  let years = cachorro.map((age) => {
    return age * 7;
  });

  return (
    <div className="App">
      <h1>Lista de Naves Espaciais</h1>
      <p><strong>Ships Names:</strong> {toPrint}</p>
      <p><strong>Soma dos anos selecionados:</strong> {sumShipsYear}</p>
      <p><strong>Possível idade humana dos cachorros no espaço:</strong> {years.join(', ')}</p>
    </div>
  );
}

export default App;
