import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Follower extends Component {
    constructor(props){
        super(props);
    }
    handleClick(){
        this.props.onClick2(this.props.follower.login)
    }
    renderButton(){
        return (<button onClick={this.handleClick.bind(this)}>Ver Seguidores</button>);
    }
    render(){
        return(
            <div>
                <div>{this.props.follower.login}</div>
                {this.renderButton()}
            </div>
        );
    }
}

Follower.propTypes = {
    follower: PropTypes.object.isRequired,
    onClick2: PropTypes.func.isRequired
};
export default Follower;