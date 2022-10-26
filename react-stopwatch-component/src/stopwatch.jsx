import React from 'react';
class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      intervalId: null,
      pause: true
    };
    this.handlePlay = this.handlePlay.bind(this);
    this.handlePause = this.handlePause.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handlePlay() {
    const Id = setInterval(() => {
      this.setState(
        { counter: this.state.counter + 1 });
    }, 1000)
    ;
    this.setState({ intervalId: Id, pause: false });
  }

  handlePause() {
    clearInterval(this.state.intervalId);
    this.setState({ pause: true });
  }

  handleReset() {
    this.setState({ counter: 0 });

  }

  render() {
    if (this.state.pause) {
      return (
      <div className='container'>
    <div className='circle'>
      <h1 onClick={this.handleReset} >{this.state.counter}</h1>
    </div>
    <div className='buttons'>
      <i className='fa-solid fa-play' onClick={this.handlePlay} ></i>
      </div>
    </div>
      );
    } else {
      return (
      <div className='container'>
    <div className='circle'>
      <h1>{this.state.counter}</h1>
    </div>
    <div className='buttons'>
      <i className='fa-solid fa-pause' onClick={this.handlePause}></i>
      </div>
    </div>
      );
    }
  }
}
export default Stopwatch;
