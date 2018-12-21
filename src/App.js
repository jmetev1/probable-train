import './App.css';
import React, { Component } from 'react';
import OneInput from './OneInput'
import { validators } from './util'

class App extends Component {
  constructor() {
    super()
    let start = false
    this.things = {
      Name: start, CardNumber: start, CVV2: start, Date: start, ccType: '' 
    }
  }
  nameValidation = validators.nameValidation.bind(this)
  cardValidation = validators.cardValidation.bind(this)
  cvvValidation = validators.cvvValidation.bind(this)
  dateValidation = validators.dateValidation.bind(this)



  onSubmit = e => {
    if (!Object.keys(this.things).every(key => !!this.things[key] )) e.preventDefault()
  }
  render() {
    return (
      <div id='container'>
        <form onSubmit={this.onSubmit}>
          <h2>Enter Your Credit Card Info</h2>
          <OneInput 
            id='Name' 
            ermsg="Your name doesn't have enough letters, please buy another letter"
            validation={this.nameValidation} 
          />
          <OneInput 
            id='Card Number' 
            ermsg='Only Visa or Amex accepted'
            validation={this.cardValidation} 
          />
          <OneInput
            ermsg="Amex has 4 digits, Visa has 3" 
            validation={this.cvvValidation} 
            id='CCV2' 
          />
          <OneInput 
            id='date' 
            ermsg='Your card has expired'
            type='month' 
            validation={this.dateValidation} 
          />
          <button type="submit" className="btn btn-primary">Submit</button> 
        </form>
      </div>
      );
  }
}

export default App;
