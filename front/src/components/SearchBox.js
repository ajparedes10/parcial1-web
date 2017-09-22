import React, {Component} from 'react';

class SearchBox extends Component{
    constructor(props){
        super(props);
    }
    handleKeyPress = (event) => {
        if (event.key == 'Enter') {

            this.props.search(event.target.value);
            console.log('enter press here! ');
        }
    }

    render(){
        return(
            <div>
                <input type='text'
                       placeholder='search user'
                       onKeyPress={this.handleKeyPress.bind(this)}
                />
            </div>
        )
    }
}
export default SearchBox;