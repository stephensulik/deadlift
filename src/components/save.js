import React from 'react';

export default class Save extends React.Component {
    constructor(props) {
       super(props);
       this.state = {
           user: this.props.user,
           save: this.props.save
       };
    }
    render() {
        var styles = 'save-button';

        return (
            <button className={ styles } onClick={ this.props.save }>save</button>
        )
    }
}
