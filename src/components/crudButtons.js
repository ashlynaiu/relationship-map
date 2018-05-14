import React, { Component } from 'react';

class crudButtons extends Component {
  render() {
    const { showButtons } = this.props;
    return (
        <div className={`${showButtons ? '' : 'crud-hide'}`}>
            <button className="slds-button slds-button_stateful slds-button_neutral slds-not-selected circle-button-remove slds-is-absolute" aria-live="assertive">
                <span className="slds-is-relative">
                    <svg className="slds-is-absolute" width="52" height="52" viewBox="0 0 52 52"><path fill="#D0021B" d="m31.6 25.8l13.1-13.1c0.6-0.6 0.6-1.5 0-2.1l-2.1-2.1c-0.6-0.6-1.5-0.6-2.1 0l-13.1 13.1c-0.4 0.4-1 0.4-1.4 0l-13.1-13.2c-0.6-0.6-1.5-0.6-2.1 0l-2.1 2.1c-0.6 0.6-0.6 1.5 0 2.1l13.1 13.1c0.4 0.4 0.4 1 0 1.4l-13.2 13.2c-0.6 0.6-0.6 1.5 0 2.1l2.1 2.1c0.6 0.6 1.5 0.6 2.1 0l13.2-13.1c0.4-0.4 1-0.4 1.4 0l13.1 13.1c0.6 0.6 1.5 0.6 2.1 0l2.1-2.1c0.6-0.6 0.6-1.5 0-2.1l-13.1-13.1c-0.3-0.4-0.3-1 0-1.4z"></path></svg>
                </span>
            </button>
            <button className="slds-button slds-button_stateful slds-button_neutral slds-not-selected circle-button-edit slds-is-absolute" aria-live="assertive">
                <span className="slds-is-relative">
                    <svg className="slds-is-absolute" width="52" height="52" viewBox="0 0 52 52"><g fill="#0070D2"><path d="m48.8 7.4l-4.2-4.2c-1.6-1.6-4.1-1.6-5.6 0l-3.3 3.3c-0.4 0.4-0.4 1 0 1.4l8.5 8.5c0.4 0.4 1 0.4 1.4 0l3.3-3.3c1.5-1.6 1.5-4.1-0.1-5.7z m-15.9 3.3c-0.4-0.4-1-0.4-1.4 0l-26.1 26.1-3.3 11.3c-0.3 1.1 0.7 2.2 1.8 1.9l11.4-3.2h-0.1l26.1-26.1c0.4-0.4 0.4-1 0-1.4l-8.4-8.6z"></path></g></svg>
                </span>
            </button>
            <button className="slds-button slds-button_stateful slds-button_neutral slds-not-selected circle-button-add slds-is-absolute" aria-live="assertive">
                <span className="slds-is-relative">
                    <svg className="slds-is-absolute" width="52" height="52" viewBox="0 0 52 52"><path fill="#0070D2" d="m30 29h16.5c0.8 0 1.5-0.7 1.5-1.5v-3c0-0.8-0.7-1.5-1.5-1.5h-16.5c-0.6 0-1-0.4-1-1v-16.5c0-0.8-0.7-1.5-1.5-1.5h-3c-0.8 0-1.5 0.7-1.5 1.5v16.5c0 0.6-0.4 1-1 1h-16.5c-0.8 0-1.5 0.7-1.5 1.5v3c0 0.8 0.7 1.5 1.5 1.5h16.5c0.6 0 1 0.4 1 1v16.5c0 0.8 0.7 1.5 1.5 1.5h3c0.8 0 1.5-0.7 1.5-1.5v-16.5c0-0.6 0.4-1 1-1z"></path></svg>
                </span>
            </button>
        </div>
    );
  }
}

export default crudButtons;
