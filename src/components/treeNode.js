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
    let renderExtension = () => {
      return(
        <button className="slds-button slds-button_stateful slds-button_neutral slds-not-selected circle-button-extender slds-is-absolute" aria-live="assertive">{person.children.length}</button>
      )
    }

    return (
        <div className="button-container slds-is-relative" onMouseEnter={this.hoverHandler} onMouseLeave={this.hoverHandler}>
            <CrudButtons showButtons={this.state.showButtons}></CrudButtons>
            {person.children !== null && renderExtension()}
            <div className="node-button" aria-live="assertive">
                <Icon object={person.object} type='standard'></Icon>
                <div>
                  <span className="node-name">{person.name}</span>
                  <span className="node-role">{person.role}</span>
                </div>
            </div>
        </div>
    )
  }
}

export default treeNode;