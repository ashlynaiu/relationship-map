import React, { Component } from 'react';
import CrudButtons from './crudButtons';
import TreeLevel from './treeLevel';

class treeNode extends Component {
  constructor() {
    super();
    this.hideChildren = this.hideChildren.bind(this);
    this.state = {
      isHide: false,
    };
  }

  hideChildren() {
    let isHide = this.state.isHide;
    setTimeout(() => {
			this.setState(
				{ isHide: !isHide }
			);
		}, 300);
  }

  render() {
    const { person } = this.props;
    return (
      <div className="branch">
        <div className={`${person.start ? 'first-node' : 'node'}`}>
          <div className="button-container slds-is-relative">
            <CrudButtons></CrudButtons>
            <button className="slds-button slds-button_stateful slds-button_neutral slds-not-selected slds-is-relative node-button" aria-live="assertive">{person.name}</button>
          </div>
        </div>
        {person.children && <TreeLevel people={person.children} />}
      </div>
    )
  }
}

export default treeNode;
