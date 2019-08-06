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
        this.setState({ users: githubUsers })
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        <h2>{this.state.users.name}</h2>
        <p>{this.state.users.login}</p>
        <p>{this.state.users.location}</p>
        <img src={this.state.users.avatar_url}/>
      </div>
    );
  }
}

export default Card;
