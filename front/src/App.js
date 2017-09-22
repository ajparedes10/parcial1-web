import React, { Component } from 'react';
import FollowersList from './components/FollowersList.js';
import SearchBox from './components/SearchBox.js';
import './App.css';
import Follower from "./components/Follower";

const URL ='http://localhost:8081';

class App extends Component {

    constructor(props){
        super(props);
        this.state={
            followers: [
                {login: 'user1'},
                {login: 'user2'},
                {login: 'user3'},
                {login: 'user4'},
                {login: 'user5'}
            ],
            search: ''
        };
    }
    search(text){
        this.setState ({
            search: text
        });
    }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Buscador de seguidores de GitHub</h2>
        </div>
          <div>
              <SearchBox search={this.search.bind(this)}/>
              <FollowersList followers={this.state.followers}/>
          </div>

      </div>
    );
  }
}

export default App;
