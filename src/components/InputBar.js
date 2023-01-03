import React from 'react';

class InputBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleAddTaskClicked = this.handleAddTaskClicked.bind(this);
    this.handleInputKeyDown = this.handleInputKeyDown.bind(this);
  }

  handleInputChange(e) {
    this.props.onInputChange(e.target.value);
  }

  handleInputKeyDown(e) {
    if (e.target.value === '') return;
    if (e.key !== 'Enter') return;

    this.handleAddTaskClicked();
  }

  handleAddTaskClicked() {
    this.props.onAddTaskClicked();
  }

  render() {
    const { value } = this.props;
    return (
      <div className="InputBar">
        <input
          type="text"
          placeholder="Write task..."
          value={value}
          onChange={this.handleInputChange}
          onKeyDown={this.handleInputKeyDown}
        />
        <button onClick={this.handleAddTaskClicked}>Add task</button>
      </div>
    );
  }
}

export default InputBar;
