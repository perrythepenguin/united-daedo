import React, {Component} from 'react';
import PageHeading from 'components/PageHeading';
import Button from 'components/Button';
import LoginModal from './LoginModal';
import SignupModal from './SignupModal';
import {ButtonGroup} from 'reactstrap';
import {connect} from 'react-redux';
import {login, signup} from 'redux/actions';

class Home extends Component {
  constructor() {
    super()
    this.state = {
      loginModalShown: false,
      signupModalShown: false
    }
    this.login = this.login.bind(this)
    this.signup = this.signup.bind(this)
    this.toggleLogin = this.toggleLogin.bind(this)
    this.toggleSignup = this.toggleSignup.bind(this)
  }

  render() {
    const {loginModalShown, signupModalShown} = this.state;
    const {username} = this.props
    return (
      <div>
        <PageHeading
          title={`환영합니다! ${username}님`}
        />
        <ButtonGroup style={{marginTop: '1em'}}>
          <Button
            color="warning"
            onClick={this.toggleLogin}
          >
            로그인
          </Button>
          <Button
            color="success"
            onClick={this.toggleSignup}
          >
            회원가입
          </Button>
        </ButtonGroup>
        <LoginModal isOpen={loginModalShown} toggle={this.toggleLogin} login={this.login} />
        <SignupModal isOpen={signupModalShown} toggle={this.toggleSignup} signup={this.signup} />
      </div>
    )
  }

  login() {
    const {login} = this.props;
    login()
  }

  signup(username, password) {
    const {signup} = this.props;
    signup(username, password)
  }

  toggleLogin() {
    this.setState({loginModalShown: !this.state.loginModalShown})
  }

  toggleSignup() {
    this.setState({signupModalShown: !this.state.signupModalShown})
  }
}

export default connect(
  state => ({
    username: state.users.username
  }),
  {
    login,
    signup
  }
)(Home)
