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
      cards: []
    };
  }

  componentDidMount() {
    return this.setState({ cards: this.state.people[0].cardData })
  }

  changeCard(newCards) {
    return this.setState({ cards: newCards })
  }
  //Card
  // <div className="right-panel">
  //         { Object
  //           .keys(cards)
  //           .map(key => <Card
  //               key={key}
  //               index={key}
  //               card={cards[key]}/>)
  //         }
  //       </div>
  render() {
    let cards = {...this.state.cards};
    return (
      <div className="container">
        <Tree people={this.state.people} changeCard={this.changeCard}></Tree>
        
      </div>
    )
  }
}

export default App;
