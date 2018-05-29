import React, { Component } from 'react';
import TreeLevel from './treeLevel';
import TreeNode from './treeNode';

class treeBranch extends Component {
  constructor(props) {
    super();
    this.hideChildren = this.hideChildren.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
    this.calculateHeight = this.calculateHeight.bind(this);
    this.state = {
      height: 'inherit',
      isHide: false
    }
  }

  componentDidMount() {
    this.calculateHeight();
  }

  calculateHeight() {
    let person = this.props.person;
    setTimeout(() => {
      if(this.state.isHide || this.props.index >= (this.props.lastChild - 1)) {
        return this.setState({ height: 'inherit'})
      }
      else {
        if (person.children && !person.start) {
          let idNumber = person.id.toString();
          let height = document.getElementById(idNumber).offsetHeight;
          return this.setState({ height: height });
        }
        else {
            return this.setState({ height: 'inherit' });
        }
      }
    }, 100);
  }

  hideChildren() {
    if(this.props.person.children) {
      let isHide = this.state.isHide;
      this.setState({ isHide: !isHide });
      this.calculateHeight();
    }
    return
  }

  clickHandler(newCard) {
    this.hideChildren();
    this.props.changeCard(newCard);
  }

  render() {
    const { person, lastChild, changeCard } = this.props;
    let heightStyle = {
        height: this.state.height
    }
    // To do: fix the last child style render!!
    let renderLastChildStyle = () => {
      if(person.object === 'Contact' && this.props.index >= (this.props.lastChild - 1)) {
        console.log('made it')
        return 'lastChild'
      }
      return ''
    }

    return (
      <div className={`branch ${renderLastChildStyle()}`} style={heightStyle}>
        <div className={`${person.start ? 'first-node' : 'node'}`} onClick={() => this.clickHandler(person.cardData)}>
          <TreeNode person={person} />
        </div>
        {person.children && <TreeLevel index={person.id} changeCard={changeCard} people={person.children} isHide={this.state.isHide}/>}
      </div>
    )
  }
}

export default treeBranch;