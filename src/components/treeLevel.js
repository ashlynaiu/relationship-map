
import React, { Component } from 'react';
import TreeBranch from './treeBranch';
class treeLevel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      accountChildren: [],
      contactChildren: []
    };
  }

  componentDidMount() {
    let children = this.props.people;
    let accounts = [];
    let contacts = [];
    for (let i = 0; i < children.length; i++) {
      if (children[i].object === 'Account') {
        accounts.push(children[i]);
      }
      else if (children[i].object === 'Contact') {
        contacts.push(children[i]);
      }
    }

    return this.setState({
      accountChildren: accounts,
      contactChildren: contacts
    })
  }

  render () {
    const { people, changeCard, index, isHide } = this.props;
    let accounts = this.state.accountChildren;
    let contacts = this.state.contactChildren;

    let renderTitle = () => {
      if(!people[0].start) {
        return (<h4>{people[0].object}</h4>)
      }
    }

    let renderChildren = (object, people) => {
      return (
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
      )
    }

    return (
      <div id={index} className={`${people[0].start ? 'parent-level' : 'child-level'} ${isHide ? 'hide' : ''}`}>
          {accounts.length > 0 && renderChildren('account', accounts)}
          {contacts.length > 0 && renderChildren('contact', contacts)}
      </div>
    )
  }
}

export default treeLevel;