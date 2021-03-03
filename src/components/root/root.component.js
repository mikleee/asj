import React from 'react';
import './root.component.scss';
import {ColumnHeaderComponent} from "../column-header/column-header.component";
import {SearchInputComponent} from "../search-input/search-input.component";


export class RootComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            columns: [
                {
                    headerText: 'column1',
                    headerImgSrc: 'https://391795-1232725-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2016/08/Bear-Worksheets.jpg',
                    searchValue: ''
                },
                {
                    headerText: 'column2',
                    headerImgSrc: 'https://391795-1232725-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2016/08/Bear-Worksheets.jpg',
                    searchValue: '',
                },
            ]
        }


    }

    onSearchValueChange(columnIndex, newValue) {
        const newState = Object.assign({}, this.state);
        const column = newState.columns[columnIndex];
        column.searchValue = newValue;

        // clone state
        this.setState(newState);
    }

    render() {
        return (
            <div className="root-component">
                <table>
                    <thead>
                        <tr>
                            <th>
                                <ColumnHeaderComponent text={this.state.columns[0].headerText} imgSrc={this.state.columns[0].headerImgSrc}/>
                            </th>
                            <th>
                                <ColumnHeaderComponent text={this.state.columns[1].headerText} imgSrc={this.state.columns[1].headerImgSrc}/>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <SearchInputComponent onSerachInputValueChange={(newValue) => this.onSearchValueChange(0, newValue)}/>
                            </td>
                            <td>
                                <SearchInputComponent onSerachInputValueChange={(newValue) => this.onSearchValueChange(1, newValue)}/>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}
