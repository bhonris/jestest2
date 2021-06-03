import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { shallow } from 'enzyme';

test('renders learn react link', () => {
  render(<App />);
});

test('enzyme is working with Jest', ()=> {
  shallow(<App/>);
})
