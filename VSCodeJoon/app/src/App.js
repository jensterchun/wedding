import React, { Component } from 'react';
import logo from './logo.svg';

class App extends Component {

  state = {
    originalData : []
  }

  clickHandler = () => {
    console.log('yo');
  }



  render() {
    return (
      <div className="App">
        <form>
          <label>Title</label><input type="text" />
          <label>Author</label><input type="text" />          
          <label>Quote</label><input type="text" />
          <select>
            <option>boring</option>
            <option>girly</option>
            <option>lame</option>
          </select>
          <button onClick={}>Submit</button>
        </form>

        <div clasName="imgContainer">
          <img onClick={this.clickHandler} className="imgBlock" src="http://via.placeholder.com/350x150"/>
          
          <img onClick={this.clickHandler} className="imgBlock" src="http://via.placeholder.com/350x150"/>
          
          <img onClick={this.clickHandler} className="imgBlock" src="http://via.placeholder.com/350x150"/>
        </div>
      </div>
    );
  }
}

export default App;
