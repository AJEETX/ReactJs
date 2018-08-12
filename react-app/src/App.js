import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg';
import Fruits from './fruits'
import Add from './add'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { fruits: [] };
    fetch('/api/fruits')
      .then(res => res.json())
      .then(fruitsRes => this.setState({ fruits: fruitsRes }));
  }

  handleAdd = fruit => {
    const fruits = [...this.state.fruits]
    const index = fruits.indexOf(fruit)
    console.log(index)
    fruits[index].quantity++;
    this.setState({ fruits })
  }
  handleRemove = fruit => {
    const fruits = [...this.state.fruits]
    const index = fruits.indexOf(fruit)

    if (fruits[index].quantity > 0)
      fruits[index].quantity--;
    this.setState({ fruits })
  }
  handleDelete = fruit => {
    const fruits = this.state.fruits.filter(f => f !== fruit)
    this.setState({ fruits })
  }
  handleAddNew = (name, quantity) => {
    if (name === '' || quantity === '') return;
    let fruits = [...this.state.fruits]
    let fruit = fruits[fruits.length - 1]
    console.log(fruit)
    let count = fruit.id + 1
    console.log(count, name, quantity)
    fruits.push({
      id: count,
      Name: name,
      quantity: quantity
    })
    this.setState({ fruits })
  }
  render() {
    return (
      <React.Fragment>
        <hr />
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <hr />
          <Add
            onAddNew={this.handleAddNew}
          />
          <Fruits
            onAddNew={this.handleAddNew}
            fruits={this.state.fruits}
            onAdd={this.handleAdd}
            onRemove={this.handleRemove}
            onDelete={this.handleDelete} />
        </div>
      </React.Fragment>

    );
  }
}

export default App;
