import React from 'react';

class Followers extends React.Component {
  constructor() {
    super();
    this.state = {
      followers: []
    };
  };

  componentDidMount() {
    this.fetchFollowers();
  };

  fetchFollowers = () => {
    fetch('https://api.github.com/users/elagat/followers')
      .then(response => {
        return response.json();
      })
      .then(githubFollowers => {
        console.log('followers', githubFollowers)
        this.setState({ followers: githubFollowers })
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        Followers:{this.state.followers.map(follower => {
          return (
            <a href={follower.html_url} key={follower}><p key={follower}>{follower.login}</p></a>
          );
        })}
      </div>
    );
  }
}

export default Followers;
