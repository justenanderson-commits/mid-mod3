import { Component } from 'react';
import './App.css';
import Form from '../Form/Form'
import TrickContainer from '../TrickContainer/TrickContainer'
import getAllTricks from '../../apiCalls';

class App extends Component {
  constructor() {
    super()
    this.state = {
      tricks: [
       
        ]
    }
  }

  componentDidMount = () => {
    getAllTricks()
      .then(data => {
        this.setState({ tricks: data })
      })
  }

  addTrick = (newTrick) => {
    this.setState({ tricks: [...this.state.tricks, newTrick] })
  }

  render() {
    return (
      <div className="App">
        <h1>Sick Trick Wish List</h1>
        <Form addTrick={ this.addTrick } />
        <TrickContainer tricks={ this.state.tricks }/>
      </div>
    );
  }
}

export default App;