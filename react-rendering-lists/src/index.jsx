import React from 'react';
import ReactDOM from 'react-dom/client';
const pokedex = [
  { number: '001', name: 'Bulbasaur' },
  { number: '004', name: 'Charmander' },
  { number: '007', name: 'Squirtle' },
  { number: '025', name: 'Pikachu' },
  { number: '039', name: 'Jigglypuff' }
];

function ListElements(props) {
  return <li>{props.name}</li>;
}

function List(props) {
  const mapped = props.pokedex.map(e => {
    return <ListElements key={e.number} name= {e.name} />;
  });
  return <ul> {mapped} </ul>;
}

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);
root.render(<List pokedex={pokedex} />);
