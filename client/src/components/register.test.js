import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import Register from './Register';


//smoke test
test('renders without crashing', () => {
    render(<Register />);
  });

test ('successfuly register', async () => {
  render(<Register />);
  const email = screen.getByPlaceholderText('email');
  const password = screen.getByPlaceholderText('password');
  const name = screen.getByPlaceholderText('name');
  const signup = screen.getByLabelText("submit")
  

//need a way to randomize input
await userEvent.type(email, 'dee2@test.com');
await userEvent.type(password, '123');
await userEvent.type(name, 'dee1');
userEvent.click(signup);



})