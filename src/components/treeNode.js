import React, { Component } from 'react';
import CrudButtons from './crudButtons';
// import TreeLevel from './treeLevel';
import Icon from './Icon';

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

  // componentDidMount() {
  //   if(this.props.person.children) {
  //     this.props.hasChildren(this.props.person.children);
  //   }
  // }

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
    return this.setState({ showButtons: !showButtons });
  }

  render() {
    const { person, changeCard } = this.props;

    return (
        <div className="node">
          <div className="button-container slds-is-relative" onMouseEnter={this.hoverHandler} onMouseLeave={this.hoverHandler}>
            <CrudButtons showButtons={this.state.showButtons} ></CrudButtons>
            <button className="slds-button slds-button_stateful slds-button_neutral slds-not-selected slds-is-relative node-button" aria-live="assertive" onClick={() => this.clickHandler(person.cardData)}>
              <Icon object={person.object}></Icon>
              {person.name}
            </button>
          </div>
        </div>
    )
  }
}

export default treeNode;
