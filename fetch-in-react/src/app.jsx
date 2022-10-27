import React from 'react';
import UserList from './user-list';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      isLoading: true
    };
  }

  componentDidMount() {
    /* your code here */
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(r => r.json())
      .then(r => {
        const array = [];
        r.forEach(e => { array.push(e); });
        this.setState({
          users: array,
          isLoading: false
        });
      })
      .catch(err => console.error(err));
  }

  render() {
    return this.state.isLoading
      ? <p>Loading...</p>
      : <UserList users={this.state.users} />;
  }
}

export default App;
