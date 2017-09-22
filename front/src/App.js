import React, { Component } from 'react';
import FollowersList from './components/FollowersList.js';
import SearchBox from './components/SearchBox.js';
import './App.css';
import GoBack from "./components/GoBack";

const URL ='http://localhost:8081';

class App extends Component {

    constructor(props){
        super(props);
        this.state={
            hist: [],
            followers: [],
            search: ''
        };
    }

    getFollowers(text){
        fetch(URL+'/getFollowers/'+text, {method:'GET',
            headers: {accept:'application/json'}})
            .then((res) => {
                if(res.ok) return res.json();
            })
            .then((followers)=>{
                this.setState({
                    followers: followers
                });
            });
    }
    // limpia el historial de la cadena de seguidores
    search(text){
        this.setState ({
            search: text,
            hist: [{searched: text}]
        });
        this.getFollowers(text);
    }

    // agrega el siguiente seguidor al arreglo de la cadena
    addHist(text){
        const newHist = this.state.hist;
        newHist.push({searched: text});
        this.setState ({
            search: text,
            hist: newHist
        });
        this.getFollowers(text);
    }
    // agrega el siguiente seguidor a la cadena
    chain() {
        let chain = '';
        if( this.state.hist.length > 1) {
            return this.state.hist.map((fActual, i) => {
                return chain = ' -> ' + fActual.searched;
            });
            return <p>{chain}</p>;
        }
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
                    <FollowersList followers={this.state.followers.data} onClick1={this.addHist.bind(this)}/>
                </div>

            </div>
        );
    }
}

export default App;
