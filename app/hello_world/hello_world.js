import React, { Component } from 'react';
import env from '../env';

export default class HelloWorld extends Component {
 render() {
  return (
    <div>
      <h2>Hello React!</h2>
      <p>You are in {env.name} environment</p>
    </div>
  );
 }

}