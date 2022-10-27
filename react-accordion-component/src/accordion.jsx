import React from 'react';

function Elements(props) {
  const id = props.id;

  if (props.element) {
    return (
    <div className='topic-container' onClick={e => props.handleTrue(id)}>
      <div className="topic-header">
        <li>{props.name}</li>
      </div>
      <div className="topic-info hidden">
        {props.info}
      </div>
    </div>
    );
  } else {
    return (
    <div className='topic-container' onClick={e => props.handleFalse(id)}>
      <div className="topic-header">
        <li>{props.name}</li>
      </div>
      <div className="topic-info">
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
      1: true,
      2: true,
      3: true
    };

    this.handleTrue = this.handleTrue.bind(this);
    this.handleFalse = this.handleFalse.bind(this);
  }

  handleTrue(e) {

    for (const key in this.state) {
      if (Number(key) === e) {
        this.setState({ [e]: false });
      } else {
        this.setState({ [key]: true });
      }
    }
  }

  handleFalse(e) {
    this.setState({ [e]: true });
  }

  render() {
    const topics = this.props.topics.map(e =>
      <Elements key={e.id} id={e.id} name={e.name} info={e.info} element={this.state[e.id]} handleTrue={this.handleTrue} handleFalse={this.handleFalse} />
    );
    return (
      <ul>
        {topics}
      </ul>
    );
  }
}
export default Accordion;
