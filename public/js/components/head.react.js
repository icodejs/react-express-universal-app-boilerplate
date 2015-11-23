
import React from 'react';

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = { showDiv: false };
    }

    _handleClick(e) {
        e.preventDefault();
        this.setState({ showDiv: true });
    }

    _renderDiv() {
        let text = '';

        if (this.state.showDiv) text = 'You clicked me!';

        return (
            <div className="my-div">{text}</div>
        );
    }

    render() {
        return (
            <div>
                <h1>Universal JavaScript Example</h1>
                <button onClick={this._handleClick.bind(this)}>Click</button>
                {this._renderDiv()}
                <hr />
            </div>
        );
    }
}