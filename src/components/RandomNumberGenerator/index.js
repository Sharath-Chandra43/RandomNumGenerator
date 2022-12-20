import './index.css'

import {Component} from 'react'

class RandomNumberGenerator extends Component {
  state = {num: 0}

  generateRandomNumber = () => {
    this.setState({num: parseInt(Math.random() * 100)})
  }

  render() {
    const {num} = this.state
    return (
      <div className="bg-container">
        <div className="container">
          <h1 className="heading">Random Number</h1>
          <p className="description">
            Generate a random number in the range of 0 to 100
          </p>
          <button
            type="button"
            className="generate-button"
            onClick={this.generateRandomNumber}
          >
            {' '}
            Generate
          </button>
          <p className="Random-Number">{num}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
