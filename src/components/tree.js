import React, { Component } from 'react';
import TreeLevel from './treeLevel';
class tree extends Component {

  render() {
    const { people, changeCard } = this.props;

    return (
        <div className="tree">
            <TreeLevel people={people} changeCard={changeCard}></TreeLevel>
        </div>
    )
  }
}

export default tree;
