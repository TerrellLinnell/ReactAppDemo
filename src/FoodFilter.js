import React from 'react';
import Foods from './data/food';
import FoodsHeading from './FoodsHeading';

function FoodItem (props) {
  return (<li> Food Name: {props.food.name}, type: {props.food.type}</li>)
}

var FoodFilter = React.createClass({
  render: function() {
    var foodType = this.props.type;
    var filteredFoods = Foods.items.filter(function (item) {
      return item.type === foodType;
    }).map(function (item) {
      return <FoodItem food={item} />
    });
    return (
      <div>
        <h1>Hello, Food filter!</h1>
        <FoodsHeading title={Foods.title} phone={Foods.phone} />
      <ul>
      {filteredFoods}
      </ul>
      </div>
    )
  }
})

export default FoodFilter;
