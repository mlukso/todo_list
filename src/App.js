import React, { Component } from 'react';
import './App.css';

const stylingObject  = {
  color: 'blue'
}

const strikeThrough  = {
  textDecorationLine: 'line-through'
}

class App extends Component {
  constructor(props) {
    super(props);
      this.state = {
        inputValue: '',
        list: [],
        done: false,
      };
  }
  // user has to add items to the list
  handleInputChange=(e) => {
    this.setState({inputValue: e.target.value})
  };

  handleInputSubmit=(e) => {
    e.preventDefault();
    const newList = this.state.list;
    if(this.state.inputValue){
    newList.push(this.state.inputValue);
    this.setState({list: newList, inputValue: ''});
    } 
  };

  handleRemoveItem=(item, index) => {
    const removeItem = this.state.list.slice();
    removeItem.splice(index, 1)
    this.setState({
      list: removeItem
    })
  };

  toggleTodoDone=(item, index) =>{
    if (this.state.done === false){
      this.setState({
        done: true,
      }) 
    } else {
      this.setState({
        done: false
      }) 
    }
  }

  // isDone(e){
  //   e.target.value = 'new'
  // }

  renderButton=() => {
    if(this.state.inputValue){
      return <button onClick={this.handleInputSubmit}>Add ToDo</button>
    }
  };

  // renderList=() => {
  //   return this.state.list.map((item, id) => {
  //     const listItems = `${item}`
  //     return <ul><li key={id}>{listItems}<button>X</button></li></ul>
  //   })
  // };

  renderList = () => {
    return this.state.list.map((item, index) => 
      <ul>
        <li key={index} style={this.props.className}>
          {item} 
          <button onClick={()=>{this.toggleTodoDone(item, index)}}>✓</button>
          <button onClick={()=>{this.handleRemoveItem(item, index)}}>X</button>
        </li>
      </ul>)
  }
  
  render() {
    return (
      <div>
        <form>
        <h2 style={stylingObject}>My ToDo List</h2>
        <input placeholder='type something...' value={this.state.inputValue} onChange={this.handleInputChange} type = "text"></input>
        {this.renderButton()}
        </form>
        {this.renderList()}
      </div>
    );
  }
}

export default App;
