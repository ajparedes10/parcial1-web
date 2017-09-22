import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Follower extends Component {
    constructor(props){
        super(props);
    }
    handleClick(){
        this.props.onClick2(this.props.follower.login)
    }

    render(){
        return(
            <div>
                <div>{this.props.follower.login}</div>
                <button onClick={this.handleClick.bind(this)}>Ver Seguidores</button>
            </div>
        );
    }
}

Follower.propTypes = {
    follower: PropTypes.object.isRequired,
    onClick2: PropTypes.func.isRequired
};
export default Follower;