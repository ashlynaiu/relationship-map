import React, { Component } from 'react';
import CrudButtons from './crudButtons';
import TreeLevel from './treeLevel';

class treeNode extends Component {
  constructor() {
    super();
    this.hideChildren = this.hideChildren.bind(this);
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

  render() {
    const { person } = this.props;
    return (
      <div className={`${person.start ? '' : 'branch'}`}>
        <div className={`${person.start ? 'first-node' : 'node'}`}>
          <div className="button-container slds-is-relative">
            <CrudButtons></CrudButtons>
            <button className="slds-button slds-button_stateful slds-button_neutral slds-not-selected slds-is-relative node-button" aria-live="assertive" onClick={this.hideChildren}>{person.name}</button>
          </div>
        </div>
        {person.children && <TreeLevel people={person.children} isHide={this.state.isHide}/>}
      </div>
    )
  }
}

export default treeNode;
