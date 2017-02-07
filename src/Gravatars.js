import React from 'react';
import md5 from 'md5';
import Users from './data/users';

var G_URL = "http://gravatar.com/avatar";

var Gravatars = React.createClass({
  getInitialState: function () {
    return {users: Users};
  },
  render: function() {
    var users = this.state.users.map(function(user){
      var size = 36;
      var hash = md5(user.email);
      var url = G_URL + '/' + hash + '?s=' + size;
        return <li key={user.id}> <img src={url} alt={user.name} width={size}/> {user.name}</li>
    });
      return (
        <div>
          <h1>Hello, Gravatars!</h1>
          {users}
        </div>
      )
    }
})

export default Gravatars;
