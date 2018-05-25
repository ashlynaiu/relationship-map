
import React, { Component } from 'react';
import TreeNode from './treeNode';
import TreeLevel from './treeLevel';
class treeBranch extends Component {
  constructor(props) {
    super(props);
    //this.hasChildren= this.hasChildren.bind(this);
    this.state = {
      children: null
    };
  }

  // hasChildren(children) {
  //   console.log(children)
  //   return this.setState({ children: children})
  // }
  render () {
    const { people, changeCard, isHide } = this.props;

    let renderNewTree = (children) => {
      return (
        <TreeLevel changeCard={changeCard} people={children}/>
      )
    }

    let renderNode = (person) => {
      return (
        <TreeNode index={person.id} changeCard={changeCard} person={person} />
      )
    }

    let renderBranch = () => {
      for (let i = 0; i < people.length; i++) {
        if(people[i].children) {
          console.log('here')
          return (
            <div>
              {renderNode(people[i])}
              {renderNewTree(people[i].children)}
            </div>
          )
        }
        else {
          console.log(people[i].children)
          console.log(people[i]);
          return (
            <TreeNode index={people[i].id} changeCard={changeCard} person={people[i]} />
          )
        }
      }
    }
    return (
      <div className={`${people[0].start ? '' : 'branch'}`}>
        <div className="node-container">
        <h4>{`${people[0].object}`}</h4>
        {renderBranch()}
      </div>
    </div>
    )
  }
}

export default treeBranch; 