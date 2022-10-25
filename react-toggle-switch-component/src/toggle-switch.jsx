import React from 'react';
class Switch extends React.Component {
  constructor() {
    super();
    this.state = { on: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (this.state.on) {
      this.setState({ on: false });
    } else {
      this.setState({ on: true });
    }
  }

  render() {
    if (this.state.on) {
      return (
    <div className='container'>
      <div>
        <div className='switch green' onClick={this.handleClick}>
          <div className='circle on' ></div>
        </div>
      </div>
      <h3>ON</h3>
    </div>
      );
    } else {
      return (
    <div className='container'>
      <div>
        <div className='switch gray' onClick={this.handleClick}>
          <div className='circle' ></div>
        </div>
      </div>
      <h3>OFF</h3>
    </div>
      );
    }
  }
}
export default Switch;
