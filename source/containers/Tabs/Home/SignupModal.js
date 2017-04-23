import React, {Component} from 'react';
import Button from 'components/Button';
import {
  Modal, ModalHeader, ModalBody, ModalFooter,
  Form, FormGroup, Label, Input
} from 'reactstrap';

export default class SignupModal extends Component {
  constructor() {
    super()
    this.state = {
      username: '',
      password: ''
    }
  }

  render() {
    const {isOpen, toggle, signup} = this.props;
    const {username, password} = this.state;
    return (
      <Modal isOpen={isOpen} toggle={toggle}>
        <ModalHeader toggle={toggle}>회원가입</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label>사용자이름</Label>
              <Input
                name="username"
                placeholder="이름 입력"
                value={username}
                onChange={event => this.setState({username: event.target.value})}
              />
            </FormGroup>
            <FormGroup>
              <Label>비밀번호</Label>
              <Input
                type="password"
                name="password"
                placeholder="비밀번호 입력"
                value={password}
                onChange={event => this.setState({password: event.target.value})} />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={() => {
            signup(username, password)
            toggle()
          }}>회원가입</Button>{' '}
          <Button color="secondary" onClick={toggle}>취소</Button>
        </ModalFooter>
      </Modal>
    )
  }
}
