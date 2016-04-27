import React from 'react';

export default class Score extends React.Component {
    render() {
        console.log(this.props.user)
        return (
            <h1>{ this.props.user.score }</h1>
        )
    }
}
