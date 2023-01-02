import React, { Component } from 'react'
import './Form.css'

class Form extends Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
      <form>
        <select name="trick-stance">
        <option value="" disabled selected>Choose your stance</option>
        <option value="Regular">Regular</option>
          <option value="Switch">Switch</option>
        </select>


        <input
          name="trick-name"
          type="text"
          placeholder="Name of Trick"
        />


        <select name="trick-obstacle">
        <option value="" disabled selected>Choose your Obstacle</option>
        <option value="Flatground">Flatground</option>
        <option value="Ledge">Ledge</option>
        <option value="Rail">Rail</option>
        <option value="Stairs">Stairs</option>
        <option value="Pool">Pool</option>
        </select>


        <input
          name="tutorial-link"
          type="text"
          placeholder="Link to Tutorial"
        />

        <input type="submit" value="Send It"></input>
      </form>
    )
  }
}

export default Form
