import React, { Component } from 'react';
import CrudButtons from './crudButtons';
import TreeLevel from './treeLevel';
import Icon from './Icon';

class treeNode extends Component {
    constructor(props) {
        super();
        this.state = {
            height: 'inherit'
        }
    }

        componentDidMount() {
        console.log(this.props.person.children)
        if (this.props.person.children) {
            console.log('has children');
            let idNumber = this.props.person.id.toString();
            let height = document.getElementById(idNumber).offsetHeight;
            return this.setState({ height: height });
        }
        else {
            return this.setState({ height: 'inherit' });
        }
    }
//   constructor(props) {
//     super(props);
//     this.hideChildren = this.hideChildren.bind(this);
//     this.clickHandler = this.clickHandler.bind(this);
//     this.hoverHandler = this.hoverHandler.bind(this);
//     this.state = {
//       isHide: false,
//       showButtons: false
//     };
//   }

//   hideChildren() {
//     if(this.props.person.children) {
//       let isHide = this.state.isHide;
//       this.setState({ isHide: !isHide });
//     }
//     return
//   }

//   clickHandler(newCard) {
//     this.hideChildren();
//     this.props.changeCard(newCard);
//   }

//   hoverHandler() {
//     let showButtons = this.state.showButtons;
//     return this.setState({ showButtons: !showButtons });
//   }

  render() {
    const { person, changeCard } = this.props;
    let heightStyle = {
        height: this.state.height
    }
    return (
      <div className="branch" style={heightStyle}>
        <div className={`${person.start ? 'first-node' : 'node'}`}>
          <div className="button-container slds-is-relative">
            <div className="slds-button slds-button_stateful slds-button_neutral slds-not-selected slds-is-relative node-button" aria-live="assertive">
              <Icon object={person.object}></Icon>
              {person.name}
            </div>
          </div>
        </div>
        {person.children && <TreeLevel index={person.id} changeCard={changeCard} people={person.children} />}
      </div>
    )
  }
}

export default treeNode;