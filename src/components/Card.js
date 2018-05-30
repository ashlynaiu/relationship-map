import React, { Component } from 'react';
import Icon from './Icon';
import CardData from './cardData';

class Card extends Component {
  render() {
    const { card } = this.props;
    return (
      <article className="slds-card">
        <div className="slds-card__header slds-grid">
          <header className="slds-media slds-media_center slds-has-flexi-truncate">
            <div className="slds-media__figure">
              <Icon object='{card.object}' type='standard' size="small"></Icon>
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
        <div className="slds-card__body slds-card__body_inner">
          {Object
            .keys(card.info)
            .map(key => <CardData
                key={key}
                index={key}
                data={card.info[key]}/>)
          }
        </div>
      </article>
    );
  }
}

export default Card;
