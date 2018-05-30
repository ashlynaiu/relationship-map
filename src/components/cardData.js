import React, { Component } from 'react';

class cardData extends Component {
  render() {
    const { data } = this.props;
    return (
        <div class="slds-form-element">
            <span class="slds-form-element__label">{data.label}</span>
                <div class="slds-form-element__control">
                    <span class="slds-form-element__static">{data.field}</span>
            </div>
        </div>
    );
  }
}

export default cardData;
