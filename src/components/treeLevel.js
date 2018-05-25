
import React, { Component } from 'react';
import TreeNode from './treeNode';
class treeLevel extends Component {
  constructor() {
    super();
    this.getChildHeight = this.getChildHeight.bind(this);
    this.state = {
      parentHeight: null
    }
  }

  getChildHeight() {
    if(this.props.person[0].start) {
      return
    }
    else {

    }
  }

  render () {
    const { people, changeCard, isHide, index } = this.props;

    let renderTitle = () => {
      if(!people[0].start) {
        return (<h4>{people[0].object}</h4>)
      }
    }

    return (
      <div id={index} className={`${people[0].start ? 'parent-level' : 'child-level'} ${isHide ? 'hide' : ''}`}>
        <div className="container">
          {renderTitle()}
          {Object
            .keys(people)
            .map(key => <TreeNode
              key={key}
              index={key}
              changeCard={changeCard}
              person={people[key]}/>)
          }
        </div>
      </div>
    )
  }
}

export default treeLevel; 