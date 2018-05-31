import React, { Component } from 'react';
import Tree from './components/tree';
import Card from './components/Card';
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
    )
  }
}

export default App;
