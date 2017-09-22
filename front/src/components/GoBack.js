import React, {Component} from 'react';
import PropTypes from 'prop-types';

class GoBack extends Component{
    constructor(props){
        super(props);
        this.state= {
            cont: 0
        }
    }
    incCont(){
        console.log(this.state.cont);
        const inc = this.state.cont + 1;
        this.setState({
            cont: inc
        });
        this.handleAtras();
    }
    handleAtras = () => {

        console.log(this.state.cont);
        const pos = this.props.chain.length - this.state.cont;
        const user = this.props.chain[pos].login;
        if (pos >=0) {

           // this.props.search(user);
        }
    };

    renderAdelante(){
        if(this.cont > 0){
            return <button onClick={this.incCont.bind(this)}>Adelante</button>

        }
    }

    render(){
        return(
            <div>
                <button onClick={this.incCont.bind(this)}>Atras</button>
                {this.renderAdelante()}
            </div>
        )
    }
}
GoBack.propTypes = {
    chain: PropTypes.array.isRequired,
    search: PropTypes.func.isRequired
};
export default GoBack;