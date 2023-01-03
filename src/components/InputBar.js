import React from 'react';

class InputBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleAddTaskClicked = this.handleAddTaskClicked.bind(this);
  }

  handleInputChange(e) {
    this.props.onInputChange(e.target.value);
  }

  handleAddTaskClicked() {}

  render() {
    const { value } = this.props;
    return (
      <div className="InputBar">
        <input
          type="text"
          placeholder="Write task..."
          value={value}
          onChange={this.handleInputChange}
        />
        <button>Add task</button>
      </div>
    );
  }
}

export default InputBar;
