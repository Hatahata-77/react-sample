import React, { Component } from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="container text-center">
      <Clock />
    </div>
  )
  // const items = [
  //   {"name": "イチゴ", "price": "180"},
  //   {"name": "りんご", "price": "150"},
  //   {"name": "バナナ", "price": "230"}
  // ]

  // return (
  //   <div className="App">
  //     <table className="table table-striped">
  //       <tbody>
  //         {items.map(value => (
  //           <tr>
  //             <th scope="row">{value.name}</th>
  //             <td>{value.price}</td>
  //           </tr>
  //         ))}
  //       </tbody>
  //     </table>
  //   </div>
  // )  
}

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.now = new Date();
    this.state = {
      time: `${this.now.getHours()}:${this.now.getMinutes()}:${this.now.getSeconds()}`    
    }

    this.refresh = this.refresh.bind(this);
  }

  refresh() {
    this.now = new Date();
    this.setState(state => ({
      time: `${this.now.getHours()}:${this.now.getMinutes()}:${this.now.getSeconds()}`    
    }));
  }
  render() {
    return <p onClick={this.refresh}>{this.state.time}</p>
  }
}

export default App;
