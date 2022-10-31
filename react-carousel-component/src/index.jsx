import React from 'react';
import ReactDOM from 'react-dom/client';
import Carousel from './carousel';

const images = [
  'https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png',
  'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png',
  'https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png',
  'https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png',
  'https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png',
  'https://assets.pokemon.com/assets/cms2/img/pokedex/full/151.png'

];

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);
root.render(<Carousel images={images}/>);
