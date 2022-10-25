import React from 'react';
class Stopwatch extends React.Component {
  render() {
    return (
      <div className='container'>
    <div className='circle'>
      <h1>0</h1>
    </div>
      <i className='fa-solid fa-play' ></i>
    </div>
    );
  }
}
export default Stopwatch;
