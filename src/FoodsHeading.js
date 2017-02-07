import React from 'react';

var FoodsHeading = React.createClass({
  render: function() {
    return (<div>
              <h1> Welcome to {this.props.title} </h1>
              <h3> Our Phone Number is: {this.props.phone}</h3>
            </div>
        )}
});

export default FoodsHeading;
