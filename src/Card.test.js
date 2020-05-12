import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import Card from './Card';
import './Card.css';
import store from './store';

// smoke test
it('renders without crashing', () => {
  let card = store.STORE.lists[0].cardIds[0];

  const div = document.createElement('div');
  ReactDOM.render(<Card key="0" id={card} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

// snapshot test
it('renders the UI as expected', () => {
  let card = store.STORE.lists[0].cardIds[0];

  const tree = renderer
    .create(<Card key="0" id={card} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
  });
