import React, { Component } from 'react';
import TreeLevel from './treeLevel';
import data from '../model';
class tree extends Component {
  constructor() {
    super();
    this.state = {
      treeHeight: null,
      people: data
    };
  }

  componentDidMount () {
    let height = document.getElementsByClassName('tree')[0].offsetHeight;
    return this.setState({ treeHeight: height });
  }

  render() {
    let heightStyle = {
        height: this.state.treeHeight
    }

    return (
        <div className="tree" style={heightStyle}>
            <TreeLevel people={this.state.people}></TreeLevel>
        </div>
    )
  }
}

export default tree;
