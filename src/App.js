import React, { Component } from 'react';
import Tree from './components/tree';
import Card from './components/Card';
import Header from './components/Header';
import data from './model';

class App extends Component {
  constructor() {
    super();
    this.changeCard = this.changeCard.bind(this);
    this.state = {
      people: data,
      cards: [],
      active: null
    };
  }

  componentDidMount() {
    return this.setState({ cards: this.state.people[0].cardData })
  }

  changeCard(newCards, active) {
    return this.setState({ cards: newCards, active: active})
  }

  render() {
    let cards = {...this.state.cards};
    return (
      <div>
        <Header />
        <div className="card-container">
          <article className="slds-card">
            <div className="slds-card__header slds-grid">
              <header className="slds-media slds-media_center slds-has-flexi-truncate">
                <div className="slds-media__body">
                  <h2 className="slds-card__header-title">
                    <a href="" className="slds-card__header-link slds-truncate" title="Accounts">
                      <span className="slds-text-heading_small">Relationship Map</span>
                    </a>
                  </h2>
                </div>
              </header>
            </div>
            <div className="slds-card__body slds-card__body_inner">
              <div className="container">
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
