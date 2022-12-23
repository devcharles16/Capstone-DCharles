import React from 'react';
import { render } from '@testing-library/react';
//import userEvent from '@testing-library/user-event'
import Register from './Register';

//smoke test
test('renders without crashing', () => {
    render(<Register />);
  });