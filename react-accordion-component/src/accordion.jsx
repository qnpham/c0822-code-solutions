import React from 'react';

function Elements(props) {
  // console.log(props.currentIndex);
  if (props.currentIndex) {
    return (
    <div className='topic-container' onClick={() => props.handleTrue(props.id)}>
      <div className="topic-header">
        <li>{props.name}</li>
      </div>
      <div className="topic-info">
        {props.info}
      </div>
    </div>
    );
  } else {
    return (
    <div className='topic-container' onClick={() => props.handleFalse(props.id)}>
      <div className="topic-header">
        <li>{props.name}</li>
      </div>
      <div className="topic-info hidden">
        {props.info}
      </div>
    </div>
    );
  }
}

class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: null
    };

    this.handleTrue = this.handleTrue.bind(this);
    this.handleFalse = this.handleFalse.bind(this);
  }

  handleTrue(e) {
    // console.log('true:', e);
    this.setState({ currentIndex: true });
  }

  handleFalse(e) {
    // console.log('false:', e);
    this.setState({ currentIndex: e });
  }

  render() {
    const topics = this.props.topics.map(e =>
      <Elements key={e.id} id={e.id} name={e.name} info={e.info} currentIndex={this.state.currentIndex} handleTrue={this.handleTrue} handleFalse={this.handleFalse} />
    );
    return (
      <ul>
        {topics}
      </ul>
    );
  }
}
export default Accordion;
