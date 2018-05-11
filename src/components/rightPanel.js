import React, { Component } from 'react';

class rightPanel extends Component {
  render() {
    const { card } = this.props;
    return (
        <article className="slds-card">
            <div className="slds-card__header slds-grid">
                <header className="slds-media slds-media_center slds-has-flexi-truncate">
                <div className="slds-media__figure">
                    <span className="slds-icon_container slds-icon-standard-account" title="account">
                    <svg className="slds-icon slds-icon_small" aria-hidden="true">
                        
                    </svg>
                    <span className="slds-assistive-text">{card.title}</span>
                    </span>
                </div>
                <div className="slds-media__body">
                    <h2 className="slds-card__header-title">
                    <a href="javascript:void(0);" className="slds-card__header-link slds-truncate" title="Accounts">
                        <span className="slds-text-heading_small">{card.title}</span>
                    </a>
                    </h2>
                </div>
                </header>
            </div>
            <div className="slds-card__body slds-card__body_inner">{card.info}</div>
        </article>
    );
  }
}

export default rightPanel;
