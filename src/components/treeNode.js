import React, { Component } from 'react';
import CrudButtons from './crudButtons';
class treeNode extends Component {
  constructor() {
    super();
    this.hideChildren = this.hideChildren.bind(this);
    this.state = { 
      isHide: false,
      treeHeight: null 
    };
  }

  componentDidMount () {
    let height = document.getElementsByClassName('tree')[0].offsetHeight;
    return this.setState({ treeHeight: height });
  }

  hideChildren() {
    let isHide = this.state.isHide;
    return this.setState({ isHide: !isHide });
  }

  render() {
    let heightStyle = {
      height: this.state.treeHeight
    }

    return (
      <div className="tree" style={heightStyle}>
        <div className="first-node"> 
          <div className="button-container slds-is-relative">
            <CrudButtons></CrudButtons>
            <button className="slds-button slds-button_stateful slds-button_neutral slds-not-selected slds-is-relative node-button" aria-live="assertive" onClick={this.hideChildren}>Rachel Adams</button>
          </div>
        </div>
        <div className={`level ${this.state.isHide ? 'hide' : ''}`}>
          <div className="branch">
            <div className="node">
              <div className="button-container slds-is-relative">
                <CrudButtons></CrudButtons>
                <button className="slds-button slds-button_stateful slds-button_neutral slds-not-selected slds-is-relative node-button" aria-live="assertive">Nigel Adams</button>
              </div>
            </div>
          </div>
          <div className="branch">
            <div className="node">
              <div className="button-container slds-is-relative">
                <CrudButtons></CrudButtons>
                <button className="slds-button slds-button_stateful slds-button_neutral slds-not-selected slds-is-relative node-button" aria-live="assertive">Claire Adams</button>
              </div>
            </div>
          </div>
          <div className="branch">
            <div className="node">
              <div className="button-container slds-is-relative">
                <CrudButtons></CrudButtons>
                <button className="slds-button slds-button_stateful slds-button_neutral slds-not-selected slds-is-relative node-button" aria-live="assertive">Katrina Adams</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default treeNode;
