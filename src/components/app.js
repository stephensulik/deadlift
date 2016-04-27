import React from 'react';
import Button from './button.js';
import Score from './score.js';
import Level from './level.js';


var user = {
    score: 1,
    tickRate: 1,
    level: 1,
    experience: {
        current: 1,
        nextLevelAt: 1 * 10
    },
    clickRate: 1
};

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user
        }

        this.addScore = this.addScore.bind(this);

        this.tickRate = this.tickRate.bind(this);

        setInterval(this.tickRate, 1000);
    }
    tickRate() {
        var newUser = this.state.user;

        newUser.score = this.state.user.score + this.state.user.tickRate;
        newUser.experience.current = this.state.user.experience.current + this.state.user.tickRate;
        this.setState({user: newUser});
    }

    addScore() {
        var newUser = this.state.user;

        newUser.score = this.state.user.score + this.state.user.clickRate;
        newUser.experience.current = this.state.user.experience.current + this.state.user.clickRate;
        this.setState({user: newUser});
    }

    render() {
        return (
            <div>
                <Button addScore={ this.addScore } user={this.state.user} />
                <Score user={this.state.user} />
                <Level user={this.state.user} />
            </div>
        )
    }
}
