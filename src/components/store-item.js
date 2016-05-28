import React from 'react';

export default class StoreItem extends React.Component {
    constructor(props) {
       super(props);
       this.state = {
           user: this.props.user,
           item: this.props.item
       };
    }
    render() {
        return (
            <li>{ this.state.item.name } <button>Buy</button></li>
        )
    }
}
