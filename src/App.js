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
    // this.calculateHeight = this.calculateHeight.bind(this);
    this.state = {
      people: data,
      cards: [],
      active: null
    };
  }

  componentDidMount() {
    this.setDefaultCards();
    // this.calculateHeight();
    return;
  }

  setDefaultCards() {
    return this.setState({ cards: this.state.people[0].cardData });
  }

  // calculateHeight() {
  //   setTimeout(() => {
  //     let height = document.getElementsByClassName('tree')[0].clientHeight;
  //     return this.setState({ height: height });
  //   }, 300);
  // }

  changeCard(newCards, active) {
    return this.setState({ cards: newCards, active: active})
  }

  render() {
    let cards = {...this.state.cards};
    let styles = {
      cardWidth: {
        minWidth: "1080px",
        height: "100%"
      },
      cardHeight: {
        height: "100%"
      }
    };

    return (
      <div style={styles.cardHeight}>
        <Header />
        <div className="card-container">
          <article className="slds-card slds-p-top_medium" style={styles.cardWidth}>
            <div className="slds-card__body slds-card__body_inner" style={styles.cardHeight}>
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
