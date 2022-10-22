// import logo from './logo.svg';
import React, { Component } from 'react';
import Web3 from 'web3';
import './index.css';

class App extends Component { // function App() before
//class App uses the render() function to return the html / jsx code while function App() uses return direct without render() function
  async componentWillMount(){
    await this.loadWeb3()
    await this.fetchSmartContData()
  }


  //Loading web3
  async loadWeb3(){
    if(window.ethereum){
      window.web3 = new Web3(window.ethereum);
      //enable
      await window.ethereum.enable()
      console.log(window.web3)
    }else if(window.web3){
      window.web3 = new Web3(window.web3.currentProvider);
    }else{
      window.alert("Install MetaMask to commounicate with blockchain")
    }
  }

  //Loading web3
  async fetchSmartContData(){
    const web3 = window.web3
    const fetchaccount = await web3.eth.getAcccounts()
    console.log(fetchaccount)
  }

  render(){
    return (
      <div className="App">
        <header>BOOK MARKETPLACE WITH SOLIDITY AND REACT
          <nav>Welcome to React!</nav>
        </header>
        <div className="wrapper">
          <h2>Add A Book</h2>
          <input type="text" placeholder="Book Name" className="fields" /><br />
          <input type="text" placeholder="Book Price" className="fields" /><br />
          <input type="text" placeholder="Book Author" className="fields" /><br />
          <button>Add Item</button><br />
  
          <h2>Rent Books</h2>
          <table width="60%" border="0.5" border-collapse="collapse">
            <tr>
              <th>S/N</th><th>Product</th><th>Price</th><th>Owner</th><th></th>
            </tr>
            <tr>
              <td></td>
            </tr>
          </table>
        </div>
        
      </div>
  
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <p>
      //       Edit <code>src/App.js</code> and save to reload.
      //     </p>
      //     <a
      //       className="App-link"
      //       href="https://reactjs.org"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       Learn React
      //     </a>
      //   </header>
      // </div>
    );
  }
}

export default App;
