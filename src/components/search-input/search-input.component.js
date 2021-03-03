import React from 'react';
import './search-input.component.scss';


export class SearchInputComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchValue: ''
        }
        // need to use short functions in a JRX (otherwise need to use arrow functions)
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        let newValue = target.value;
        console.log(newValue);

        this.setState({
            searchValue: newValue
        });

        this.props.onSerachInputValueChange(newValue);
    }

    render() {
        return (
            <input className="search-input" type="text" value={this.state.searchValue} onChange={this.handleInputChange}/>
        );
    }
}
