import React from 'react';
import ReactDOM from 'react-dom/client';

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.counterValue = 0;
    this.state = { counter: this.counterValue };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.counterValue++;
    this.setState({ counter: this.counterValue });
  }

  render() {
    if (this.counterValue < 3) {
      return <button onClick={this.handleClick} className='zero' >Hot Button</button>;
    } else if (this.counterValue < 6) {
      return <button onClick={this.handleClick} className='three' >Hot Button</button>;
    } else if (this.counterValue < 9) {
      return <button onClick={this.handleClick} className='six'> Hot Button</button>;
    } else if (this.counterValue < 12) {
      return <button onClick={this.handleClick} className='nine' >Hot Button</button>;
    } else if (this.counterValue < 15) {
      return <button onClick={this.handleClick} className='twelve'> Hot Button</button>;
    } else if (this.counterValue < 18) {
      return <button onClick={this.handleClick} className='fifteen'> Hot Button</button>;
    } else {
      return <button onClick={this.handleClick} className='eighteen'> Hot Button</button>;
    }
  }
}

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);
root.render(<Button />);
