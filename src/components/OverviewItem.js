import React from 'react';

class OverviewItem extends React.Component {
  render() {
    const { item } = this.props;
    return <li className="OverviewItem">{item.task}</li>;
  }
}

export default OverviewItem;
