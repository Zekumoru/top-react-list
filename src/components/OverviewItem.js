import React from 'react';

class OverviewItem extends React.Component {
  render() {
    const { number, item } = this.props;
    return (
      <li className="OverviewItem">
        {number}. {item.task}
      </li>
    );
  }
}

export default OverviewItem;
