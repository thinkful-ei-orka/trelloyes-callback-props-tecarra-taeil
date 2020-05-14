import React from 'react';
import './Card.css';

function Card(props) {
  return (
    <div className="Card" key={props.id}>
      <button type="button" onClick={() => props.deleteCard(props.id, props.listId)}>delete</button>
      <h3>{props.allCards[props.id].title}</h3>
      <p>{props.allCards[props.id].content}</p>
    </div>
  );
}

export default Card;
