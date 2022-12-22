import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import Landing from './Landing';

//smoke test
test('loads and displays heading', async () => {
    const { getByText } = render(<Landing />);
    const linkElement = getByText(/login/i);
    expect(linkElement).toBeInTheDocument();
    await userEvent.click(screen.getByText('Welcome to Charles Vehicle Requests'))
    await waitFor(() => screen.getByRole('heading'))
    expect(screen.getByRole('heading')).toHaveTextContent('Welcome to Charles Vehicle Requests')
    expect(screen.getByRole('button')).toBeEnabled()

});