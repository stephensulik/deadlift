import React from 'react';
import Button from './button.js';
import Score from './score.js';
import Save from './save.js';
import Store from './store.js';
import Level from './level.js';

var user = {
    score: 1,
    tickRate: 1,
    level: 1,
    experience: {
        current: 1,
        nextLevelAt: 1 * 10
    },
    items: [],
    clickRate: 1
},
    items {
        1: {
            name: 'Wrist wraps',
            cost: 30,
            tickRateAdd: 2,
            clickRateAdd: 1
        },
        2: {
            name: 'Weightlifting belt',
            cost: 2000,
            tickRateAdd: 2,
            clickRateAdd: 1
        },
        3: {
            name: 'Wrist straps',
            cost: 6000,
            tickRateAdd: 2,
            clickRateAdd: 1
        },
        4: {
            name: 'Chalk',
            cost: 30,
            tickRateAdd: 2,
            clickRateAdd: 1
        },
        5: {
            name: 'Platform',
            cost: 30,
            tickRateAdd: 2,
            clickRateAdd: 1
        },
        6: {
            name: '"Medicine"',
            cost: 30,
            tickRateAdd: 2,
            clickRateAdd: 1
        },
        7: {
            name: 'Bands',
            cost: 30,
            tickRateAdd: 2,
            clickRateAdd: 1
        }
    };



if (localStorage.getItem('the-game')) {
    user = JSON.parse(localStorage.getItem('the-game'));
}

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user
        };

        this.addScore = this.addScore.bind(this);
        this.save = this.save.bind(this);

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

    save() {
        localStorage.setItem('the-game', JSON.stringify(user));
    }

    render() {
        return (
            <div>
                <Button addScore={ this.addScore } user={this.state.user} />
                <Save save={ this.save } user={this.state.user} />
                <Score user={this.state.user} />
                <Level user={this.state.user} />
                <Store user={this.state.user} items={this.state.items} />
            </div>
        )
    }
}
