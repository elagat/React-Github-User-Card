import React from 'react';

class Card extends React.Component {
  constructor() {
    super();
    this.state = {
      users: []
    };
  };

  componentDidMount() {
    this.fetchUser();
  };

  fetchUser = () => {
    fetch('https://api.github.com/users/elagat')
      .then(response => {
        return response.json();
      })
      .then(githubUsers => {
        console.log('fetchUser', githubUsers)
        this.setState({ users: githubUsers.name })
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        {this.state.users}
      </div>
    );
  }
}

export default Card;
