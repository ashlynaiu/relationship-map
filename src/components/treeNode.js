import React, { Component } from 'react';
import CrudButtons from './crudButtons';
import Icon from './Icon';

class treeNode extends Component {
  constructor(props) {
    super();
    this.hoverHandler = this.hoverHandler.bind(this);
    this.state = {
      showButtons: false
    }
  }

  hoverHandler() {
    let showButtons = this.state.showButtons;
    return this.setState({ showButtons: !showButtons });
  }

  render() {
    const { person } = this.props;
    return (
        <div className="button-container slds-is-relative" onMouseEnter={this.hoverHandler} onMouseLeave={this.hoverHandler}>
            <CrudButtons showButtons={this.state.showButtons}></CrudButtons>
            <div className="slds-button slds-button_stateful slds-button_neutral slds-not-selected slds-is-relative node-button" aria-live="assertive">
                <Icon object={person.object}></Icon>
                {person.name}
            </div>
        </div>
    )
  }
}

export default treeNode;