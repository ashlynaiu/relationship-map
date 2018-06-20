import React, { Component } from 'react';
import Tree from './components/tree';
import Card from './components/Card';
import Header from './components/Header';
import data from './model';

class App extends Component {
  constructor() {
    super();
    this.changeCard = this.changeCard.bind(this);
    this.setDefaultCards = this.setDefaultCards.bind(this);
    this.state = {
      people: data,
      cards: [],
      active: null
    };
  }

  componentDidMount() {
    this.setDefaultCards();
    return;
  }

  setDefaultCards() {
    return this.setState({ cards: this.state.people[0].cardData });
  }

  changeCard(newCards, active) {
    return this.setState({ cards: newCards, active: active})
  }

  render() {
    let cards = {...this.state.cards};

    return (
      <div className="fullHeight">
        <Header />
        <div className="app-container">
          <article className="slds-card slds-p-top_medium app-container-card">
            <div className="slds-card__body slds-card__body_inner fullHeight">
              <div className="map-container">
                <Tree people={this.state.people} changeCard={this.changeCard} active={this.state.active} ></Tree>
                <div className="right-panel">
                  {Object
                    .keys(cards)
                    .map(key => <Card
                        key={key}
                        index={key}
                        card={cards[key]}/>)
                  }
                </div>
              </div>
            </div>
            <footer className="slds-card__footer"></footer>
          </article>
        </div>
      </div>
    )
  }
}

export default App;
