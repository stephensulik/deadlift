import React from 'react';

export default class Store extends React.Component {
    constructor(props) {
       super(props);
       this.state = {
           user: this.props.user,
           items: this.props.items
       };
    }
    render() {
        return (
            <ul>
                <li>item 1</li>
            </ul>
        )
    }
}
