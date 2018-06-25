//Component contains the logic on how many object
//branches to make.
import React, { Component } from 'react';
import TreeContainer from './treeContainer';

class treeLevel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      accountChildren: [],
      contactChildren: []
    };
  }

  getHeight(){
    let height = this.props.childLevel.getBoundingClientRect().height;
    this.props.getChildsHeight(height);
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
    if(this.props.getChildsHeight){
      window.requestAnimationFrame(this.getHeight.bind(this));
    }
    return this.setState({
      accountChildren: accounts,
      contactChildren: contacts
    })
  }

  render () {
    const { people, changeCard, active, index, isHide } = this.props;
    let accounts = this.state.accountChildren;
    let contacts = this.state.contactChildren;

    //To Do: Validate the index is not duplicating
    return (
      <div id={index} ref={this.props.treeLevel} className={`${people[0].start ? 'parent-level' : 'child-level'} ${isHide ? 'hide' : ''}`}>
        {accounts.length > 0 && <TreeContainer people={accounts} changeCard={changeCard} active={active} objectType='accounts' />}
        {contacts.length > 0 && <TreeContainer people={contacts} changeCard={changeCard} active={active} objectType='contacts' />}
      </div>
    )
  }
}

export default treeLevel;