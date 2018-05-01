import React, { Component } from 'react';
import CrudButtons from './crudButtons';
import TreeLevel from './treeLevel';
import data from '../model';
class tree extends Component {
  constructor() {
    super();
    this.hideChildren = this.hideChildren.bind(this);
    this.state = {
      isHide: false,
      treeHeight: null,
      people: data
    };
  }

  componentDidMount () {
    let height = document.getElementsByClassName('tree')[0].offsetHeight;
    return this.setState({ treeHeight: height });
  }

  hideChildren() {
    let isHide = this.state.isHide;
    setTimeout(() => {
			this.setState(
				{ isHide: !isHide }
			);
		}, 300);
  }

  render() {
    let heightStyle = {
        height: this.state.treeHeight
    }

    return (
        <div className="tree" style={heightStyle}>
            <TreeLevel people={this.state.people} className="test"></TreeLevel>
        </div>
    )
  }
}

export default tree;
