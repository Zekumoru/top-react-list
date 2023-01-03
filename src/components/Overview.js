import React from 'react';
import OverviewItem from './OverviewItem';

class Overview extends React.Component {
  render() {
    const { items } = this.props;
    return (
      <ul className="Overview">
        {items.map((item) => (
          <OverviewItem key={item.id} item={item} />
        ))}
      </ul>
    );
  }
}

export default Overview;
