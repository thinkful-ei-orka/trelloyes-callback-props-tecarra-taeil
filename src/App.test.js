import React from 'react';
// import { render } from '@testing-library/react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import App from './App';
import store from './store';

// smoke test
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App store={store}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
