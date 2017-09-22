import React, {Component} from 'react';

class SearchBox extends Component{
    constructor(props){
        super(props);
    }

    onEnter(event) {
        this.props.search(event.target.value);
    }
    render(){
        return(
            <div>
                <input type='text'
                       placeholder='search'
                       onInput = {this.onEnter.bind(this)}
                />
            </div>
        )
    }
}
export default SearchBox;