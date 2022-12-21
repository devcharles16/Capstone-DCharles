import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import Login from './Login';

test('loads and displays heading', async () => {
    render (<Login />)
    await userEvent.click(screen.getByText('Login'))
    await waitFor(() => screen.getByRole('heading'))
    expect(screen.getByRole('heading')).toHaveTextContent('Login')
    expect(screen.getByRole('button')).toBeEnabled()

});


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
 
  