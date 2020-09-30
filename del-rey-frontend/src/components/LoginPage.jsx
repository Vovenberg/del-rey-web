import { Link } from "react-router-dom";
import React from 'react';
import { authService } from "../service/authentication.service";
import { connect } from "react-redux";

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    const { username, password } = this.state;
    if (username && password) {
      this.props.login(username, password);
    }
  }


  handleInputChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  render() {
    const { username, password } = this.state;
    return <div className="col-md-6 col-md-offset-3">
      <form onSubmit={this.handleSubmit}>
        <div class="form-group">
          <label class="text-sm">Instagram login</label>
          <input type="text" class="form-control" name="username" value={username} onChange={this.handleInputChange}></input>
        </div>
        <div class="form-group">
          <label>Password</label>
          <input type="text" class="form-control" name="password" value={password} onChange={this.handleInputChange}></input>
        </div>
        <div class="form-group d-flex justify-content-center">
          <button class="btn btn-outline-secondary mr-auto">Вход</button>
          <button class="btn btn-outline-info">Регистрация</button>
        </div>
      </form>

      <br></br>
      <a>Params: {username} - {password}</a>
      <br></br>
      <Link to="/client">Зайти как Пациент</Link>
      <br></br>
      <Link to="/admin">Зайти как Администратор</Link>
    </div>
  }
}


function mapState(state) {
  return {};
}

const actionCreators = {
  login: authService.login,
  logout: authService.logout
};

const connectedLoginPage = connect(mapState, actionCreators)(LoginPage);

export { connectedLoginPage as LoginPage };