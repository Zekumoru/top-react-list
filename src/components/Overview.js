import React from 'react';
import OverviewItem from './OverviewItem';

class Overview extends React.Component {
  render() {
    const { items, onDeleteTask, onEditedTask } = this.props;
    return (
      <ul className="Overview">
        {items.map((item, index) => (
          <OverviewItem
            key={item.id}
            item={item}
            number={index + 1}
            onDeleteTask={onDeleteTask}
            onEditedTask={onEditedTask}
          />
        ))}
      </ul>
    );
  }
}

export default Overview;
