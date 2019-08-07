import React from 'react';
import Followers from './Followers';

class Card extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [],
      repos: []
    };
  };

  componentDidMount() {
    this.fetchUser();
    this.fetchRepos();
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

  fetchRepos = () => {
    fetch('https://api.github.com/users/elagat/repos')
      .then(response => {
        return response.json();
      })
      .then(repos => {
        console.log('fetchRepos', repos)
        this.setState({ repos: repos })
      })
      .catch(error => {
        console.log(error);
      })
  }

  render() {
    return (
      <div>
        <h2>{this.state.users.name}</h2>
        <p>{this.state.users.login}</p>
        <p>{this.state.users.location}</p>
        <img src={this.state.users.avatar_url}/>
        <Followers />
        {this.state.repos.map(repo => {
          return (
            <a href={repo.html_url}><p>{repo.name}</p></a>
          );
        })}
      </div>
    );
  }
}

export default Card;
