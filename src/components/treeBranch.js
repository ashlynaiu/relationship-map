//Every Node has a branch that allow children to render if they exist
//Credit to Jordan Wright for the animation additions to component

import React, { Component } from 'react';
import TreeLevel from './treeLevel';
import TreeNode from './treeNode';
import TweenMax, { Back, Power3 } from 'gsap';

class treeBranch extends Component {
  constructor(props) {
    super(props);
    this.getChildsHeight = this.getChildsHeight.bind(this);
    this.state = {
      height: 'inherit',
      nodeHeight: '',
      childsHeight: '',
      isHide: false
    }
  }

  componentDidMount() {
    this.setState({ nodeHeight: this.refs.node.getBoundingClientRect().height });
  }

  updateHeight() {
    let properAction = this.getProperAction();
    const config = {
      setHeightAsNode : this.state.nodeHeight,
      setHeightAsChild : this.state.childsHeight,
      hideBranchNodes : {scale:0, opacity:0, ease:Back.easeOut.config(1.7)},
      showBranchNodes : {scale:1, opacity:1, ease:Back.easeOut.config(1.7)},
      hideBranch: { opacity: 0, left:'14.7rem' },
      showBranch: { opacity: 1, left:'15rem' }
    }
    TweenMax.to(this.refs.branch, .2, { height: config[properAction.heightProps] + 'px', ease:Power3.easeOut });
    TweenMax.to(this.childLevel, .2, config[properAction.BranchProps]);
    TweenMax.to(this.childLevel.querySelectorAll('.node'), .3, config[properAction.BranchNodeProps]);
  }

  getProperAction(){
    let properAction = {};
    let person = this.props.person;
    const nodeProps = {
      hidden: this.state.isHide,
      lastChild: parseInt(this.props.index, 10) === parseInt(this.props.lastChild - 1, 10),
      hasChildren: person.children && !person.start,
      isRoot: person.start
    };

    if(nodeProps.hidden || nodeProps.lastChild || nodeProps.isRoot) {
      properAction.heightProps = 'setHeightAsNode';
    } else if (!nodeProps.hidden && !nodeProps.lastChild && nodeProps.hasChildren ) {
      properAction.heightProps = 'setHeightAsChild';
    }
    if(nodeProps.hidden){
      properAction.BranchProps = 'hideBranch';
      properAction.BranchNodeProps = 'hideBranchNodes';
    }else{
      properAction.BranchProps = 'showBranch';
      properAction.BranchNodeProps = 'showBranchNodes';
    }
    return properAction;
  }

  getChildsHeight(childsHeight) {
    this.setState({childsHeight});
    this.updateHeight();
  }

  hideChildren() {
    let isHide = this.state.isHide;
    this.setState({ isHide: !isHide });
    window.requestAnimationFrame(this.updateHeight.bind(this));
  }

  render() {
    const { person, changeCard, active } = this.props;

    let renderBranchClasses = () => {
      let classesToReturn = this.state.isHide ? 'branch-hidden' : '';
      classesToReturn =+ person.start ? ' first-branch' : '';
      return classesToReturn;
    }

    return (
      <div ref='branch' className={`branch ${renderBranchClasses()}`} style={{height: this.state.height}}>
        <div ref='node' className={`${person.start ? 'first-node' : 'node'} ${active === person.id ? 'active' : ''}`} onClick={() => changeCard(person.cardData, person.id)}>
          <TreeNode person={person} hideChildren={this.hideChildren.bind(this)}/>
        </div>
        {person.children && <TreeLevel childLevel={this.childLevel} treeLevel={node => this.childLevel = node} getChildsHeight={this.getChildsHeight} index={person.id} changeCard={changeCard} active={active} people={person.children} isHide={this.state.isHide}/>}
      </div>
    )
  }
}

export default treeBranch;