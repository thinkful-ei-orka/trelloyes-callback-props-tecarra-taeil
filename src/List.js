import React from 'react';
import Card from './Card';
import './List.css';

function List(props) {
  let cards = [];

  props.cardIds.forEach((card, index) => {
    cards.push(<Card key={index} id={card} listId={props.id} deleteCard={props.deleteCard} allCards={props.allCards} />);
  });

  return (
    <section className="List">
      <header className="List-header">
        <h2>{props.header}</h2>
      </header>
      <div className="List-cards">
        {cards}
        <button type="button" className="List-add-button" onClick={() => props.addRandomCard(props.id)}>
          + Add Random Card
        </button>
      </div>
    </section>
  );
}

export default List;
