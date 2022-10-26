import React from 'react';
class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = { viewing: false };
    this.handleEnter = this.handleEnter.bind(this);
    this.handleExit = this.handleExit.bind(this);
  }

  handleEnter() {
    this.setState({ viewing: true });
  }

  handleExit(e) {
    if (e.target.matches('a') || e.target.className.includes('black')) {
      this.setState({ viewing: false });
    }
  }

  render() {
    if (!this.state.viewing) {
      return (
    <div className="container">
      <i className="fa-solid fa-bars" onClick={this.handleEnter}></i>
      <div className='sidebar'>
          <div className="menu-container">
            <div className="menu">
              <h2>Menu</h2>
              <a href="#" onClick={this.handleExit}>About</a>
              <a href="#" onClick={this.handleExit}>Get Started</a>
              <a href="#" onClick={this.handleExit}>Sign in</a>
            </div>
          </div>
        <div className="black" onClick={this.handleExit}></div>
      </div>
    </div>
      );
    } else {
      return (
    <div className="container">
      <i className="fa-solid fa-bars" onClick={this.handleEnter}></i>
      <div className='sidebar'>
          <div className="menu-container">
            <div className="menu onscreen" onClick={this.handleExit}>
              <h2>Menu</h2>
              <a href="#">About</a>
              <a href="#">Get Started</a>
              <a href="#">Sign in</a>
            </div>
          </div>
        <div className="black show-black" onClick={this.handleExit}></div>
      </div>
    </div>
      );
    }
  }
}
export default Menu;
