import React, { Component } from 'react';

class Mantra extends Component {
  render() {
    return (
        <div>
          Welcome to runner's connect
          <h2>
            where runners unite
          </h2>
          <h1>
            Run {this.props.piffy}
          </h1>
          <h1>
            this.props.children{this.props.children}
          </h1>
        </div>
    );
  }
}

export default Mantra;
