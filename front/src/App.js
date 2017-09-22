import React, { Component } from 'react';
import FollowersList from './components/FollowersList.js';
import SearchBox from './components/SearchBox.js';
import './App.css';

const URL ='http://localhost:8081';

class App extends Component {

    constructor(props){
        super(props);
        this.state={
            hist: [],
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
    // limpia el historial con la cadena de seguidores
    search(text){
        this.setState ({
            search: text,
            hist: [{searched: text}]
        });
    }
    // agrega el siguiente seguidor a la cadena
    addHist(text){
        const newHist = this.state.hist;
        newHist.push({searched: text});
        this.setState ({
            search: text,
            hist: newHist
        });
    }
    chain() {
        let chain = '';
        return this.state.hist.map((fActual, i) => {
            return chain = ' -> ' + fActual.searched;
        });
        return <p>{chain}</p>;

    }
    user= ()=>{
        if(this.state.search !== ''){
            return <p>El usuario {this.state.search} tiene los siguientes seguidores:</p>
        }};

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <h2>Buscador de seguidores de GitHub</h2>
                </div>
                <div className="App-intro">
                    <SearchBox search={this.search.bind(this)}/>
                    {console.log(this.state.hist)}
                    {this.chain()}
                    {this.user()}
                    <FollowersList followers={this.state.followers} onClick1={this.addHist.bind(this)}/>
                </div>

            </div>
        );
    }
}

export default App;
