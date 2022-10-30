import React from 'react';

class Carousel extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      index: 0,
      intervalId: null
    };
    this.handleBack = this.handleBack.bind(this);
    this.handleForward = this.handleForward.bind(this);
    this.handleSkip = this.handleSkip.bind(this);
    this.autoScroll = this.autoScroll.bind(this);

    setTimeout(this.autoScroll);
  }

  autoScroll() {
    clearInterval(this.state.intervalId);
    const intervalId = setInterval(() => {
      let currentIndex = this.state.index;
      currentIndex++;
      if (currentIndex === this.props.images.length) {
        currentIndex = 0;
      }
      this.setState({ index: currentIndex });
    }, 3000);
    this.setState({ intervalId });
  }

  handleBack() {
    let currentIndex = this.state.index;
    currentIndex--;
    if (currentIndex === -1) {
      currentIndex = this.props.images.length - 1;
    }
    this.setState({ index: currentIndex });
    this.autoScroll();
  }

  handleForward() {
    let currentIndex = this.state.index;
    currentIndex++;
    if (currentIndex === this.props.images.length) {
      currentIndex = 0;
    }
    this.setState({ index: currentIndex });
    this.autoScroll();
  }

  handleSkip(e) {
    clearInterval(this.state.intervalId);
    if (!e.target.className.includes('dots')) return;
    const index = Number(e.target.getAttribute('index'));
    this.setState({ index });
    this.autoScroll();
  }

  render() {
    const dots = this.props.images.map((element, index) => {
      if (index === this.state.index) {
        return <i className="fa-solid fa-circle dots" key={index} index={index}></i>;
      } else {
        return <i className="fa-regular fa-circle dots" key={index} index={index}></i>;
      }
    });
    return (
    <div className='container'>
      <div className="column-full top">
        <div className="left-arrow" onClick={this.handleBack}>
          <i className="fa-solid fa-arrow-left arrow"></i>
        </div>
        <div className='img-container'>
          <img src={this.props.images[this.state.index]} alt="" />
        </div>
        <div className="right-arrow" onClick={this.handleForward}>
          <i className="fa-solid fa-arrow-right arrow"></i>
        </div>
      </div>
      <div className="column-full circles" onClick={this.handleSkip}>
        {dots}
      </div>
    </div>
    );
  }
}

export default Carousel;
