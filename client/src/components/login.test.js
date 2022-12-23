import React from 'react';
import { render } from '@testing-library/react';
//import userEvent from '@testing-library/user-event'
import Login from './Login';

//smoke test
test('renders without crashing', () => {
    render(<Login />);
  });

/*
test('render email and password fields and submit button', () => {
    render (<Login/>)

    const emailField = screen.getByPlaceholderText('email');
    const passwordField = screen.getByPlaceholderText('password');
    const submitButton = screen.getByText(/Submit/i);


    expect(emailField).toBeInTheDocument();
    expect(passwordField).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
    

  });
 
  test('pass valid email and password to input fields', () => {
    render (<Login submit={submitButton}/>)
 
    const emailField = screen.getByPlaceholderText("email");
    const passwordField = screen.getByPlaceholderText("password");
    const submitButton = screen.getByText(/submit/i);

    userEvent.type(emailField, "dee@test.com");
    userEvent.type(passwordField, "123");
    userEvent.click(submitButton)

 
    expect(submitButton).toHaveBeenCalledWith({
        email: "dee@test.com",
        password: "123"
    })

});
 */
  