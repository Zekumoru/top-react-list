import React from 'react';

class InputBar extends React.Component {
  render() {
    return (
      <div className="InputBar">
        <input type="text" placeholder="Write task..." />
        <button>Add task</button>
      </div>
    );
  }
}

export default InputBar;
