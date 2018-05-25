import React, { Component } from 'react';
import CrudButtons from './crudButtons';
import TreeLevel from './treeLevel';
import TreeNode from './treeNode';
import Icon from './Icon';

class treeBranch extends Component {
    constructor(props) {
        super();
        this.hideChildren = this.hideChildren.bind(this);
        this.clickHandler = this.clickHandler.bind(this);
        this.state = {
            height: 'inherit',
            isHide: false
        }
    }

    componentDidMount() {
        //LOL Hack the children
        setTimeout(() => {
            if (this.props.person.children) {
                let idNumber = this.props.person.id.toString();
                let height = document.getElementById(idNumber).offsetHeight;
                return this.setState({ height: height });
            }
            else {
                return this.setState({ height: 'inherit' });
            }
        }, 300);
    }

  hideChildren() {
    if(this.props.person.children) {
      let isHide = this.state.isHide;
      this.setState({ isHide: !isHide });
    }
    return
  }

  clickHandler(newCard) {
    this.hideChildren();
    this.props.changeCard(newCard);
  }

  render() {
    const { person, changeCard } = this.props;
    let heightStyle = {
        height: this.state.height
    }
    return (
      <div className="branch" style={heightStyle}>
        <div className={`${person.start ? 'first-node' : 'node'}`} onClick={() => this.clickHandler(person.cardData)}>
          <TreeNode person={person} />
        </div>
        {person.children && <TreeLevel index={person.id} changeCard={changeCard} people={person.children} />}
      </div>
    )
  }
}

export default treeBranch;