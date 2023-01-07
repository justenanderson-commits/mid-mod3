import React, { Component } from 'react'
import './Form.css'

class Form extends Component {
  constructor() {
    super()
    this.state = {
      stance: '',
      name: '',
      obstacle: '',
      tutorial: ''
    }
  }

  handleChange = (event) => {
   this.setState({ [event.target.name]: event.target.value}) 
  }

  sendNewTrick = (event) => {
    event.preventDefault()
    const newTrick = {
      ...this.state,
      id: Date.now()
    }
    this.props.addTrick(newTrick)
    this.clearInputs()
  }

  clearInputs = () => {
    // This function isn't clearing the select inputs.
    this.setState({
      name: '',
      tutorial: '',
      obstacle: '',
      stance: ''
    })
  }

  render() {
    return (
      <form className="form">
        <select name="stance" onChange={ (event) => this.handleChange(event) }>
          <option value="" placeholder="Choose your Stance"> Choose your stance</option>
          <option value="Regular">Regular</option>
          <option value="Switch">Switch</option>
        </select>

        <input
          name="name"
          type="text"
          placeholder="Name of Trick"
          value={ this.state.name }
          onChange={ (event) => this.handleChange(event) }
        />

        <select name="obstacle" onChange={ (event) => this.handleChange(event) }>
          <option value="" placeholder="Choose your Obstacle">Choose your Obstacle</option>
          <option value="Flatground">Flatground</option>
          <option value="Ledge">Ledge</option>
          <option value="Rail">Rail</option>
          <option value="Stairs">Stairs</option>
          <option value="Pool" >Pool</option>
        </select>

        <input
          name="tutorial"
          type="text"
          placeholder="Link to Tutorial"
          value={ this.state.tutorial }
          onChange={ (event) => this.handleChange(event) }
        />

        <input data-cy="send-it" type="submit" value="Send It" onClick={ (event) => this.sendNewTrick(event) }></input>
      </form>
    )
  }
}

export default Form
