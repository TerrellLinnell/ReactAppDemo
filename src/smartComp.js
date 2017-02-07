import React from 'react';
import ListItem from './listItem';

var SmartComp = React.createClass({
getInitialState : function () {
return {numbers: [1,2,3,4,5,6,7,8]};
  },
  render: function () {
    var numList=this.state.numbers.map(function (item) {
      return <ListItem number={item} />;
    });
    return (
      <div>
    {/*this is how you have to comment using ejx */}
        <h2> List of Numbers </h2>
          <p>{this.state.numbers.toString()}</p>
        <ul>
          {numList}
        </ul>
      </div>
    );
  }
});

export default SmartComp;
