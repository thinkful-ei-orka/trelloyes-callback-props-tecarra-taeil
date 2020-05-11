import React from 'react';
import List from './List';
import './App.css';

function App(props) {
  let lists = [];

  props.store.STORE.lists.forEach((list) => {
    lists.push(<List key={list.id} header={list.header} cardIds={list.cardIds} />);
  });

  return (
    <main className='App'>
      <header className='App-header'>
        <h1>Trelloyes!</h1>
      </header>
      <div className="App-list">
        {lists}
      </div>
    </main>
  );
}

export default App;
