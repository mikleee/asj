import React from 'react';
import './root.component.scss';
import {ColumnHeaderComponent} from "../column-header/column-header.component";
import {SearchInputComponent} from "../search-input/search-input.component";


export class RootComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            headerText: 'column1',
            headerImgSrc: 'https://391795-1232725-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2016/08/Bear-Worksheets.jpg',
            searchValue: ''
        }
    }

    onSearchValueChange(newValue) {
        this.setState({
            searchValue: newValue
        });
    }

    render() {
        return (
            <div className="root-component">
                <table>
                    <thead>
                        <tr>
                            <th>
                                <ColumnHeaderComponent text={this.state.headerText} imgSrc={this.state.headerImgSrc}/>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <SearchInputComponent onSerachInputValueChange={(newValue) => this.onSearchValueChange(newValue)}/>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}
