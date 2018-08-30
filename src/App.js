import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
      this.state = {
        inputValue: '',
        list: [],
      };
  }
  // user has to add items to the list
  handleInputChange=(e) => {
    this.setState({inputValue: e.target.value})
  };

  handleInputSubmit=(e) => {
    e.preventDefault();
    const newList = this.state.list;
    newList.push(this.state.inputValue);
    this.setState({list: newList, inputValue: ''});
  };

  renderList=() => {
    return this.state.list.map((item, index) => {
      return <div><p key={index}>{item}<button>X</button></p></div>
    })
  };

  render() {
    return (
      <div>
        <form>
        <h2>My Todo List</h2>
        <input value={this.state.inputValue} onChange={this.handleInputChange} type = "text"></input>
        <button onClick={this.handleInputSubmit}>Add Todo</button>
        </form>
        {this.renderList()}
      </div>
    );
  }
}

export default App;
