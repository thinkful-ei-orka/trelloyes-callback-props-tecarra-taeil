import React from 'react';
import Card from './Card';
import './List.css';

function List(props) {
  let cards = [];

  props.cardIds.forEach((card, index) => {
    cards.push(<Card key={index} id={card} />);
  });

  return (
    <section className="List">
      <header className="List-header">
        <h2>{props.header}</h2>
      </header>
      <div className="List-cards">
        {cards}
        <button type="button" class="List-add-button">
          + Add Random Card
        </button>
      </div>
    </section>
  );
}

export default List;
