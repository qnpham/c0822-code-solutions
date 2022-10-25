import React from 'react';

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const value = this.state.counter + 1;
    this.setState({ counter: value });
  }

  render() {
    if (this.state.counter < 3) {
      return <button onClick={this.handleClick} className='zero' >Hot Button</button>;
    } else if (this.state.counter < 6) {
      return <button onClick={this.handleClick} className='three' >Hot Button</button>;
    } else if (this.state.counter < 9) {
      return <button onClick={this.handleClick} className='six'> Hot Button</button>;
    } else if (this.state.counter < 12) {
      return <button onClick={this.handleClick} className='nine' >Hot Button</button>;
    } else if (this.state.counter < 15) {
      return <button onClick={this.handleClick} className='twelve'> Hot Button</button>;
    } else if (this.state.counter < 18) {
      return <button onClick={this.handleClick} className='fifteen'> Hot Button</button>;
    } else {
      return <button onClick={this.handleClick} className='eighteen'> Hot Button</button>;
    }
  }
}
export default Button;
