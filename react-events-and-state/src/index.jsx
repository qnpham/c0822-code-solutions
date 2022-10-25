import React from 'react';
import ReactDOM from 'react-dom/client';
class CustomButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isClicked: false };
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    if (this.state.isClicked === true) {
      return <button>Thanks!</button>;
    } else {
      return <button onClick={(this.handleClick)} >{this.props.text}</button>;
    }
  }

  handleClick() {
    this.setState({ isClicked: true });
  }
}

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);
root.render(<CustomButton text = 'click me!' />);
