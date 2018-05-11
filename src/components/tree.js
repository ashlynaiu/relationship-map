import React, { Component } from 'react';
import TreeLevel from './treeLevel';
class tree extends Component {
  constructor() {
    super();
    this.state = {
      treeHeight: null,
    };
  }

  componentDidMount () {
    let height = document.getElementsByClassName('tree')[0].offsetHeight;
    return this.setState({ treeHeight: height });
  }

  render() {
    const { people, changeCard } = this.props;
    let heightStyle = {
        height: this.state.treeHeight
    }

    return (
        <div className="tree" style={heightStyle}>
            <TreeLevel people={people} changeCard={changeCard}></TreeLevel>
        </div>
    )
  }
}

export default tree;
