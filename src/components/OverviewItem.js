import React from 'react';
import './OverviewItem.scss';

class OverviewItem extends React.Component {
  render() {
    const { number, item } = this.props;
    return (
      <li className="OverviewItem">
        <span className="number">{number}.</span>
        <span className="text">{item.task}</span>
        <i className="fa-solid fa-trash" />
      </li>
    );
  }
}

export default OverviewItem;
