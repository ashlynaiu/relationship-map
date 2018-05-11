import React, { Component } from 'react';
import Tree from './components/tree';
import RightPanel from './components/rightPanel';
import data from './model';

class App extends Component {
  constructor() {
    super();
    this.changeCard = this.changeCard.bind(this);
    this.state = {
      people: data,
      cards: []
    };
  }

  componentDidMount() {
    return this.setState({ cards: this.state.people[0].cardData })
  }

  changeCard(newCards) {
    return this.setState({ cards: newCards })
  }

  render() {
    let cards = {...this.state.cards};
    return (
      <div className="container">
        <Tree people={this.state.people} changeCard={this.changeCard}></Tree>
        <div className="right-panel">
          { Object
            .keys(cards)
            .map(key => <RightPanel
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
