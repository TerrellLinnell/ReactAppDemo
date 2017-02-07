import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HelloWorld from './HelloWorld';
import SmartComp from './smartComp';
import NumberMapsAndFilters from './NumberMapsAndFilters';
import FoodFilter from './FoodFilter';
import Gravatars from './Gravatars';
import CatInTheHat from './CatInTheHat';
ReactDOM.render(
  <div>
    {/*}<HelloWorld name="Pony"/>*/}
    {/*<SmartComp />*/}
    <NumberMapsAndFilters />
    <FoodFilter type='italian'/>
    <Gravatars />
    <CatInTheHat />
  </div>,
  document.getElementById('root')
);
