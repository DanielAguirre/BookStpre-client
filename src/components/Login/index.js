import React, { Component } from 'react';
import { Form, Input, Button, Label, Select } from '../Form';

const Login = () => (
  <Form>
    <Input/>
    <passwordInput/>
    <Button className="button-sigup"/>
  </Form>
);

module.exports = Login;