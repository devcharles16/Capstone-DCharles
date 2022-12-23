import React from 'react';
import { render } from '@testing-library/react';
import Landing from './Landing';
import { BrowserRouter } from 'react-router-dom';

//smoke test
    test('renders without crashing', () => {
      <BrowserRouter>
      render(<Landing />);
      </BrowserRouter>
      });
