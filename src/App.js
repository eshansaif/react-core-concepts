import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const nayoks = ['Piyash Kabir','Ujjol Khan', 'Eshan Saif', 'Jashim', 'Alamagir', 'Manna'];
  const jobs = ['Zoologist', 'Mathematician', 'Software Engineer'];

  const products = [
    {name: 'Photoshop', price: '$90.99'},
    {name: 'Illsutrator', price: '60.99'},
    {name: 'PDF Reader', price: '6.99'}
  ];

  const productNames = products.map(product => product.name);
  console.log(productNames);
  return (
    <div className="App">
      <header className="App-header">

        

        <p>I am a React Person</p>
        <Counter></Counter>

        <Users></Users>

        <ul>
            <h1>Nayoks</h1>
            {
              nayoks.map(nayok => <li>{nayok}</li> )
            }

            <h1>Products</h1>
            {
              products.map(product => <li>{product.name}</li> )
            }
        </ul>

            {
              products.map(product => <Product product={product}></Product>)
            }

        {/* <Product product={products[0]}></Product>
        <Product product={products[1]} price={products[1]}></Product>
        <Product product={products[2]} price={products[2]}></Product> */}
          <br/><br/><br/><br/>
        <Person name={nayoks[0]} job={jobs[0]}></Person>
        <Person name={nayoks[1]} job={jobs[1]}></Person>
        <Person name={nayoks[2]} job={jobs[2]}></Person>
      </header>
    </div>
  );
}

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() =>{
    fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(res => res.json())
    .then(data => setUsers(data))
  }, [])
  return (
    <div>
      <h3>Dynamic Users: {users.length} </h3>
      <ul>
        {
          users.map(user => <li>{user.email}</li> )
        }
      </ul>
    </div>
  )
}

function Counter() {
  const [state, setState] = useState(10);
  // const handleIncrease = () => setState(state + 1);
  return (
    <div>
      <h1>Count: {state} </h1>
      <button onClick={() => setState(state + 1)}>Increase</button>
      <button onClick={() => setState(state - 1)}>Decrease</button>
    </div>
  )
}

function Product(props) {
  // console.log(props);
  const productStyle = {
    border: '1px solid gray',
    borderRadius: '5px',
    backgroundColor: 'lightgray',
    width: '250px',
    height: '250px',
    float: 'left',
    color: 'black'

  }

  const {name, price} = props.product;
  return (
    <div style={productStyle}>
        <h3>Name: {name} </h3>
        <h2>Price: {price}</h2>
        <button>Buy Now</button>

    </div>
  )
}

function Person(props) {
  console.log(props);
  const personStyle = {
    border:'2px dotted cyan', 
    borderRadius: '10px', 
    margin:"5px", 
    padding:"10px", 
    width:"300px"
  }
  return (
    <div style={personStyle}>
      <h3>Name: {props.name}</h3>
      <p>Position: {props.job}</p>
    </div>
  )
}

export default App;
