import React from 'react';
import toFixedValue from './../lib/utils.js';

export default class Level extends React.Component {
    constructor(props) {
       super(props);
       this.state = {
           user: this.props.user
       };
    }
    componentWillReceiveProps() {
        if(this.state.user.experience.current >= this.state.user.experience.nextLevelAt) {
            this.state.user.level++;
            this.state.user.experience.nextLevelAt =  Number(this.state.user.level * Math.pow(Math.log(this.state.user.level), 10));
            this.state.user.tickRate = Number((this.state.user.tickRate * 1.1));
        }
    }

    displayFloat(number) {
        return number.toFixed(1);
    }

    render() {
        var styles = {
            position: 'fixed',
            right: '20px',
            top: '20px'
        }
        return (
            <div style={ styles }>
                <h1>{ this.props.user.level }</h1>
                <div>{ toFixedValue(this.props.user.experience.current) }/<strong>{ toFixedValue(this.props.user.experience.nextLevelAt) }</strong></div>
            </div>
        )
    }
}
