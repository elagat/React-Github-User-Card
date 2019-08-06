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
      .then(followers => {
        console.log(followers)
        this.setState({ followers: followers })
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
            <>
              <p>{this.state.followers.login}</p>
              <img src={this.state.followers.avatar_url} />
            </>
          );
        })}
      </div>
    );
  }
}

export default Followers;
