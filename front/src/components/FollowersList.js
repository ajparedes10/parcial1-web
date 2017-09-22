import React, {Component} from 'react';
import Follower from './Follower.js';
import PropTypes from 'prop-types';

class FollowersList extends Component {
    constructor(props){
        super(props);
    }

    renderFollowers() {
        return this.props.followers.map( (fActual,i) => {
            return <Follower follower = {fActual} key={i}/>
        });
    }

    render(){
        return(
            <div>
                {this.props.followers ? this.renderFollowers() : 'No hay seguidores'}
            </div>
        )
    }
}

FollowersList.propTypes = {
    followers: PropTypes.array.isRequired
};

export default FollowersList;