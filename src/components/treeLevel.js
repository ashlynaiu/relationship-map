
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
    const { people, changeCard, isHide } = this.props;
    let accounts = this.state.accountChildren;
    let contacts = this.state.contactChildren;

    // let multiBranch = () => {
    //   if (accounts.length > 0 && contacts.length > 0) {
    //     return true;
    //   }
    //   else {
    //     return false;
    //   }
    // }

    // let renderChildren = (object, people) => {
    //   return (
    //     <div className={`${multiBranch() ? 'multi-tree' : ''} tree-${object} object-container`}>
    //       {Object
    //         .keys(people)
    //         .map(key => <TreeNode
    //           key={key}
    //           index={key}
    //           changeCard={changeCard}
    //           multiBranch={multiBranch()}
    //           person={people[key]}/>)
    //       }
    //     </div>
    //   )
    // }
    console.log('account' + accounts);
    return (
      <div className={`level ${isHide ? 'hide' : ''}`}>
        {accounts.length > 0 && <TreeBranch changeCard={changeCard} people={accounts} />}
        {contacts.length > 0 && <TreeBranch people={contacts} />}
      </div>
    )
  }
}

export default treeLevel; 