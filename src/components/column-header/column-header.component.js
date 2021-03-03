import React from 'react';
import './column-header.component.scss';


export class ColumnHeaderComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="column-header">
                <div>
                    <img src={this.props.imgSrc} alt=""/>
                </div>
                <div>{this.props.text}</div>
            </div>
        );
    }
}
