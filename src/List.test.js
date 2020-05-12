import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import List from './List';
import './List.css';
import store from './store';

// smoke test
it('renders without crashing', () => {
  let list = store.STORE.lists[0];

  const div = document.createElement('div');
  ReactDOM.render(<List key={list.id} header={list.header} cardIds={list.cardIds}  />, div);
  ReactDOM.unmountComponentAtNode(div);
});

// snapshot test
it('renders the UI as expected', () => {
  let list = store.STORE.lists[0];

  const tree = renderer
    .create(<List key={list.id} header={list.header} cardIds={list.cardIds} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
  });
