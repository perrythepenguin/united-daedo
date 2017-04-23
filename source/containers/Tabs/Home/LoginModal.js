import React from 'react';
import Button from 'components/Button';
import {
  Modal, ModalHeader, ModalBody, ModalFooter,
  Form, FormGroup, Label, Input
} from 'reactstrap';

export default function LoginModal({isOpen, toggle, login}) {
  return (
    <Modal isOpen={isOpen} toggle={toggle}>
      <ModalHeader toggle={toggle}>로그인</ModalHeader>
      <ModalBody>
        <Form>
          <FormGroup>
            <Label>사용자이름</Label>
            <Input name="사용자이름" placeholder="이름 입력" />
          </FormGroup>
          <FormGroup>
            <Label>비밀번호</Label>
            <Input type="비밀번호" name="비밀번호" placeholder="비밀번호 입력" />
          </FormGroup>
        </Form>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={login}>로그인</Button>{' '}
        <Button color="secondary" onClick={toggle}>취소</Button>
      </ModalFooter>
    </Modal>
  )
}
