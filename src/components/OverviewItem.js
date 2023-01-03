import React from 'react';
import './OverviewItem.scss';

class OverviewItem extends React.Component {
  render() {
    const { number, item, onDeleteTask } = this.props;
    return (
      <li className="OverviewItem">
        <span className="number">{number}.</span>
        <span className="text">{item.task}</span>
        <span className="buttons">
          <i className="fa-solid fa-pen-to-square" />
          <i
            className="fa-solid fa-trash"
            onClick={() => onDeleteTask(item.id)}
          />
        </span>
      </li>
    );
  }
}

export default OverviewItem;
