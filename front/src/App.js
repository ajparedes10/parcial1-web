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
            followers: [],
            histBusq: [],
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
    getHistorial(){
        fetch(URL+'/getFollowers', {method:'GET',
            headers: {accept:'application/json'}})
            .then((res) => {
                if(res.ok) return res.json();
            })
            .then((followers)=>{
                this.setState({
                    search:'',
                    followers: followers
                });
                console.log(followers);
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
            return <p>{chain}</p>
        }
    }
    //muestra el login del usuario actual
    user= ()=>{
        if(this.state.search !== ''){
            return (
                <div>
                    <button onClick={this.getHistorial.bind(this)}>Ver Historial de Usuarios</button>
                    <p>El usuario {this.state.search} tiene los siguientes seguidores:</p>
                </div>
            )
        }};

    renderList(){
        return <FollowersList followers={this.state.followers.data} onClick1={this.addHist.bind(this)}/>
    }
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <h2>Buscador de seguidores de GitHub</h2>
                </div>
                <div className="App-intro">
                    <SearchBox search={this.search.bind(this)}/>
                    {this.chain()}
                    {this.user()}
                    {this.renderList()}
                </div>

            </div>
        );
    }
}

export default App;
