
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
  componentDidMount() {
    return this.setState({ children: this.props.people });
  }
  // hasChildren(children) {
  //   console.log(children)
  //   return this.setState({ children: children})
  // }
  render () {
    const { changeCard, isHide } = this.props;
    let people = this.state.children
    let renderNewTree = (person) => {
      console.log('render new tree')
      console.log(person)
      return (
        <TreeLevel index={person.id} changeCard={changeCard} people={person}/>
      )
    }

    let renderNode = (person) => {
      console.log(person)
      return (
        <TreeNode index={person.id} changeCard={changeCard} person={person} />
      )
    }

    let renderBranch = () => {
      for (let i = 0; i < people.length; i++) {
        if(people[i].children) {
          console.log('multi')
          return (
            <div>
              {renderNode(people[i])}
              {renderNewTree(people[i])}
            </div>
          )
        }
        else {
          console.log('no children')
          return (
            <div>
              {renderNode(people[i])}
            </div>
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