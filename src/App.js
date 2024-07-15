import './App.css';

import React, { Component } from 'react'
import NavBar from './Componenets/NavBar';
import AxiosMethod from '../src/AxiosMethod'
// import News from './Componenets/News';


export default class App extends Component {
  a = 'Ahmed';
  render() {
    return (
      <div>

    <NavBar/>
<AxiosMethod/>
    {/* <News/> */}
  
      </div>
    )
  }
}
