import React from 'react';

export default class Button extends React.Component {
    constructor(props) {
       super(props);
       this.state = {
           user: this.props.user,
           addScore: this.props.addScore
       };
    }

    render() {
        return (
            <button onClick={ this.state.addScore }>deadlift</button>
        )
    }
}
