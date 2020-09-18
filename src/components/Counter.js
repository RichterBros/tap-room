import React, {Component} from 'react';
import Keg from './Keg';

class Counter extends Component {

    constructor(props) {
      super(props)

      this.state = {count: 5}
      this.handleClick = this.handleClick.bind(this)
      this.count = this.handleClick.bind(this)
    }

    handleClick() {
        this.setState({count: this.state.count-1})
    }
    
    
    render() {
      return(
          //<button onClick = {this.handleClick}>pints remaining: {this.state.count}</button>
          <button onClick={() => this.setState({ count: Keg.props.count + 1 })}>pints remaining: {this.state.count}</button>
          )
    }
}

export default Counter;

//<button onClick = {this.handleClick}>upvote: {this.state.count}</button>