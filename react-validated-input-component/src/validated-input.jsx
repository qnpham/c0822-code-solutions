import React from 'react';
class PasswordForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { password: '' };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ password: e.target.value });
  }

  render() {

    if (!this.state.password.length) {
      return (
    <form>
      <label htmlFor="password">Password</label>
      <div className='input'>
        <input id='password' type="password" value={this.state.password} onChange={this.handleChange}/>
        <i className="fa-solid fa-xmark"></i>
        </div>
        <p className="error">A password is required</p>
    </form>
      );
    } else if (this.state.password.length < 8) {
      return (
    <form>
      <label htmlFor="password">Password</label>
      <div className='input'>
        <input id='password' type="password" value={this.state.password} onChange={this.handleChange}/>
        <i className="fa-solid fa-xmark"></i>
        </div>
        <p className="error">Your password is too short</p>
    </form>
      );
    } else {
      return (
        <form>
      <label htmlFor="password">Password</label>
      <div className='input'>
        <input id='password' type="password" value={this.state.password} onChange={this.handleChange}/>
        <i className="fa-solid fa-check"></i>
        </div>
    </form>
      );
    }
  }
}

export default PasswordForm;
