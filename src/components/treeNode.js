import React, { Component } from 'react';
import CrudButtons from './crudButtons';
import TreeLevel from './treeLevel';

class treeNode extends Component {
  constructor(props) {
    super(props);
    this.hideChildren = this.hideChildren.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
    this.hoverHandler = this.hoverHandler.bind(this);
    this.state = {
      isHide: false,
      showButtons: false
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

  hoverHandler() {
    let showButtons = this.state.showButtons;
    console.log(showButtons)
    return this.setState({ showButtons: !showButtons });
  }
  
  render() {
    const { person, changeCard } = this.props;

    return (
      <div className={`${person.start ? '' : 'branch'}`}>
        <div className={`${person.start ? 'first-node' : 'node'}`}>
          <div className="button-container slds-is-relative" onMouseEnter={this.hoverHandler} onMouseLeave={this.hoverHandler}>
            <CrudButtons showButtons={this.state.showButtons} ></CrudButtons>
            <button className="slds-button slds-button_stateful slds-button_neutral slds-not-selected slds-is-relative node-button" aria-live="assertive" onClick={() => this.clickHandler(person.cardData)}>{person.name}</button>
          </div>
        </div>
        {person.children && <TreeLevel changeCard={changeCard} people={person.children} isHide={this.state.isHide}/>}
      </div>
    )
  }
}

export default treeNode;
