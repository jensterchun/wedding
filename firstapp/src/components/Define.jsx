import React, { Component } from 'react';

class define extends Component {
    render() {
        return (
            <div>
                <h1>
                    Ready? Set. Go!
                </h1>
                <p>
                    {this.props.exclaim}
                </p>
            </div>
        );
    }
}

export default define;