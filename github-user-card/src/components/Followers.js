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
        console.log('followers', followers)
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
              <a href={follower.html_url}><p>{follower.login}</p></a>
            </>
          );
        })}
      </div>
    );
  }
}

export default Followers;
