
import React, { Component } from 'react';
import TreeBranch from './treeBranch';
class treeLevel extends Component {
  render () {
    const { people, changeCard, index, isHide } = this.props;

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
            .map(key => <TreeBranch
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