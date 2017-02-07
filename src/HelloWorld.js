import React from 'react';

var HelloWorld = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Hello, {this.props.name? this.props.name : 'World'}!</h1>
      </div>
    )
  }
})
export default HelloWorld;
