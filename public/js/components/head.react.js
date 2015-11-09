
import React from 'react';

export default class extends React.Component {
    _handleClick(e) {
        e.preventDefault();
        alert('You clicked me!');
    }

    render() {
        return (
            <div>
                <h1>Universal JavaScript Example</h1>
                <button onClick={this._handleClick.bind(this)}>Click</button>
                <hr />
            </div>
        );
    }
}