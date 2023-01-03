import React from 'react';
import './OverviewItem.scss';

class OverviewItem extends React.Component {
  render() {
    const { number, item, onDeleteTask } = this.props;
    return (
      <li className="OverviewItem">
        <span className="number">{number}.</span>
        <span className="text">{item.task}</span>
        <i
          className="fa-solid fa-trash"
          onClick={() => onDeleteTask(item.id)}
        />
      </li>
    );
  }
}

export default OverviewItem;
