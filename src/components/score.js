import React from 'react';
import toFixedValue from './../lib/utils.js';

export default class Score extends React.Component {
    render() {
        return (
            <h1>{ toFixedValue(this.props.user.score) }</h1>
        )
    }
}
