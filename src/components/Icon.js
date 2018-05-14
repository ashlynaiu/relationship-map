import React, { Component } from 'react';
import StandardIcons from '@salesforce-ux/design-system/assets/icons/standard-sprite/svg/symbols.svg';

class Icon extends Component {
  render() {
    let object = this.props.object.toLowerCase();

    return (
        <span className={`slds-icon_container slds-m-right_x-small slds-icon-standard-${object}`} title="Description of icon when needed">
            <svg className="slds-icon" aria-hidden="true">
                <use xlinkHref={`${StandardIcons}#${object}`}></use>
            </svg>
        </span>
    );
  }
}

export default Icon;
