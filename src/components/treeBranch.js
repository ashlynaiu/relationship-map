import React, { Component } from 'react';
import TreeLevel from './treeLevel';
import TreeNode from './treeNode';

class treeBranch extends Component {
  constructor(props) {
    super();
    this.hideChildren = this.hideChildren.bind(this);
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
    let isHide = this.state.isHide;
    this.setState({ isHide: !isHide });
    this.calculateHeight();
  }

  render() {
    const { person, lastChild, changeCard, index, multiBranch} = this.props;
    let heightStyle = {
        height: this.state.height
    }

    //The ultimate class hack. Please fix me.
    let renderBranchClasses = () => {
      let branchHidden = this.state.isHide ? 'branch-hidden ' : '';
      let lastLevelNode = () => {
        if (multiBranch && index >= (lastChild - 1) && person.object === 'Contact') {
          return 'last-node';
        }
        else if (!multiBranch && index >= (lastChild - 1)) {
          return 'last-node';
        }
        else {
          return '';
        }
      }
      return (branchHidden.concat(lastLevelNode()));
    }

    return (
      <div className={`branch ${renderBranchClasses()}`} style={heightStyle}>
        <div className={`${person.start ? 'first-node' : 'node'}`} onClick={() => changeCard(person.cardData)}>
          <TreeNode person={person} hideChildren={this.hideChildren}/>
        </div>
        {person.children && <TreeLevel index={person.id} changeCard={changeCard} people={person.children} isHide={this.state.isHide}/>}
      </div>
    )
  }
}

export default treeBranch;