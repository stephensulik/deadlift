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
        var style='deadlift-button';
        return (
            <button className={ style } onClick={ this.state.addScore }>deadlift</button>
        )
    }
}
