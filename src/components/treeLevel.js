
import React, { Component } from 'react';
import TreeNode from './treeNode';
import CrudButtons from './crudButtons';
import TreeLevel from './treeLevel';
class treeLevel extends Component {
    // className={`level ${this.state.isHide ? 'hide' : ''}`}
    render () {
        const { people } = this.props;
        return (
            <div className="level">
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