
import React, { Component } from 'react';
import TreeNode from './treeNode';
class treeLevel extends Component {
    // className={`level ${this.state.isHide ? 'hide' : ''}`}
    render () {
        const { people, isHide } = this.props;
        return (
            <div className={`${people[0].start ? '' : 'level'} ${isHide ? 'hide' : ''}`}>
                {Object
                    .keys(people)
                    .map(key => <TreeNode
                        key={key}
                        index={key}
                        person={people[key]}/>)
                }
            </div>
        )
    }
}

export default treeLevel; 