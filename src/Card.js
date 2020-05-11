import React from 'react';
import store from './store';
import './Card.css';

function Card(props) {
  console.log(props);

  return (
    <div className="Card" key={props.id}>
      <button type="button">delete</button>
      <h3>{store.STORE.allCards[props.id].title}</h3>
      <p>{store.STORE.allCards[props.id].content}</p>
    </div>
  );
}

export default Card;
