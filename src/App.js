import React from 'react';
import List from './List';
import './App.css';
import update from 'immutability-helper';

class App extends React.Component {
  state  = {
    lists: [
      {
        id: '1',
        header: 'First list',
        cardIds: [ 'a', 'b', 'e', 'f', 'g', 'j', 'l', 'm' ],
      },
      {
        id: '2',
        header: 'Second list',
        cardIds: ['b', 'c', 'd', 'f', 'h', 'i', 'k'],
      },
      {
        id: '3',
        header: 'Third list',
        cardIds: [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm' ],
      },
      {
        id: '4',
        header: 'Fourth list',
        cardIds: [ 'l', 'm' ],
      },
    ],
    allCards: {
      'a': { id: 'a', title: 'First card', content: 'lorem ipsum' },
      'b': { id: 'b', title: 'Second card', content: 'lorem ipsum' },
      'c': { id: 'c', title: 'Third card', content: 'lorem ipsum' },
      'd': { id: 'd', title: 'Fourth card', content: 'lorem ipsum' },
      'e': { id: 'e', title: 'Fifth card', content: 'lorem ipsum' },
      'f': { id: 'f', title: 'Sixth card', content: 'lorem ipsum' },
      'g': { id: 'g', title: 'Seventh card', content: 'lorem ipsum' },
      'h': { id: 'h', title: 'Eighth card', content: 'lorem ipsum' },
      'i': { id: 'i', title: 'Ninth card', content: 'lorem ipsum' },
      'j': { id: 'j', title: 'Tenth card', content: 'lorem ipsum' },
      'k': { id: 'k', title: 'Eleventh card', content: 'lorem ipsum' },
      'l': { id: 'l', title: 'Twelfth card', content: 'lorem ipsum' },
      'm': { id: 'm', title: 'Thirteenth card', content: 'lorem ipsum' },
    }
  }

  deleteCard = (cardId, listId) => {
    // Delete card from all cards
    let allCards = this.state.allCards;
    delete allCards[cardId];

    this.setState({
      allCards: allCards
    });

    // Delete card from all lists
    for (let i = 0; i < this.state.lists.length; i++) {
      var cardIndex = this.state.lists[i].cardIds.indexOf(cardId);
      let cards = this.state.lists[i].cardIds;
      cards.splice(cardIndex, 1);

      this.setState({
        lists: update(this.state.lists, {[i]: {cardIds: {$set: cards}}})
      });
    }
  }

  addRandomCard = (listId) => {
    let cardId = this.makeid(3);
    let cardTitle = 'Random Card: ' + cardId;
    let newCard = { id: cardId, title: cardTitle, content: 'lorem ipsum' };

    // Adds card to all cards
    this.setState({
      allCards: {
        ...this.state.allCards,
        [cardId]: newCard
      }
    });

    // Add card to list
    let i = this.state.lists.findIndex(list => list.id === listId)
    let currentCards = this.state.lists[i].cardIds;

    this.setState({
      lists: update(this.state.lists, {[i]: {cardIds: {$set: [...currentCards, cardId]}}})
    });
  }

  makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  render () {
    let lists = [];

    this.state.lists.forEach((list) => {
      lists.push(<List key={list.id} id={list.id} header={list.header} cardIds={list.cardIds} deleteCard={this.deleteCard} addRandomCard={this.addRandomCard} allCards={this.state.allCards} />);
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
}

export default App;
