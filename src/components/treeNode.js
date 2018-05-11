import React, { Component } from 'react';
import CrudButtons from './crudButtons';
import TreeLevel from './treeLevel';

class treeNode extends Component {
  constructor(props) {
    super(props);
    this.hideChildren = this.hideChildren.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
    this.state = {
      isHide: false
    };
  }

  hideChildren() {
    if(this.props.person.children) {
      let isHide = this.state.isHide;
      this.setState({ isHide: !isHide });
    }
    return
  }

  clickHandler(newCard) {
    this.hideChildren();
    this.props.changeCard(newCard);
  }

  render() {
    const { person, changeCard } = this.props;
    console.log(this.props.changeCard)
    return (
      <div className={`${person.start ? '' : 'branch'}`}>
        <div className={`${person.start ? 'first-node' : 'node'}`}>
          <div className="button-container slds-is-relative">
            <CrudButtons></CrudButtons>
            <button className="slds-button slds-button_stateful slds-button_neutral slds-not-selected slds-is-relative node-button" aria-live="assertive" onClick={() => this.clickHandler(person.cardData)}>{person.name}</button>
          </div>
        </div>
        {person.children && <TreeLevel changeCard={changeCard} people={person.children} isHide={this.state.isHide}/>}
      </div>
    )
  }
}

export default treeNode;
