import React, { Component } from 'react';
import StandardIcons from '@salesforce-ux/design-system/assets/icons/standard-sprite/svg/symbols.svg';
import UtilityIcons from '@salesforce-ux/design-system/assets/icons/utility-sprite/svg/symbols.svg';

class Icon extends Component {
  render() {
    let object = this.props.object.toLowerCase();
    let type = this.props.type;
    let renderStandard = () => {
        return (
            <span className={`slds-icon_container slds-m-right_x-small slds-icon-standard-${object}`} title="">
                <svg className="slds-icon slds-icon_x-small" aria-hidden="true">
                    <use xlinkHref={`${StandardIcons}#${object}`}></use>
                </svg>
            </span>
        );
    }

    let renderUtility = () => {
        return (
            <span className={`slds-icon_container slds-icon-utility-${object}`} title="">
                <svg className="slds-icon slds-icon-text-default slds-icon_x-small" aria-hidden="true">
                    <use xlinkHref={`${UtilityIcons}#${object}`}></use>
                </svg>
            </span>
        );
    }

    //Replace with Switch
    let renderIcon = () => {
        if (type === 'standard') {
            return renderStandard();
        }
        else if (type === 'utility') {
            return renderUtility();
        }
    }

    return (
        <div>
            {renderIcon()}
        </div>
    );
  }
}

export default Icon;
