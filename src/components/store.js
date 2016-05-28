import React from 'react';
import StoreItem from './store-item.js';

export default class Store extends React.Component {
    constructor(props) {
       super(props);
       this.state = {
           user: this.props.user,
           items: this.props.items
       };
       console.log(this.state.items)
    }

    outputItems() {
        var i,
            prop,
            val,
            items = [];

        for (prop in this.props.items) {
            items.push(<StoreItem key={ prop } item={ this.props.items[prop] } />)
        }

        return items;
    }

    render() {
        return (
            <ul>
                { this.outputItems() }
            </ul>
        )
    }
}
