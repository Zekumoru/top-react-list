import React from 'react';
import './OverviewItem.scss';

class OverviewItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: props.item,
      editMode: false,
    };

    this.handleEditClicked = this.handleEditClicked.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleInputKeyDown = this.handleInputKeyDown.bind(this);
  }

  handleEditClicked() {
    this.setState(
      {
        editMode: !this.state.editMode,
      },
      () => {
        if (this.state.editMode) return;
        if (this.state.item.task === '') {
          this.setState({ item: this.props.item });
          return;
        }

        this.props.onEditedTask(this.state.item);
      }
    );
  }

  handleInputChange(e) {
    this.setState({
      item: { ...this.state.item, task: e.target.value },
    });
  }

  handleInputKeyDown(e) {
    if (e.key !== 'Enter') return;
    this.handleEditClicked();
  }

  render() {
    const { number, onDeleteTask } = this.props;
    const { item, editMode } = this.state;

    const text = editMode ? (
      <input
        type="text"
        className="input"
        placeholder="Edit task..."
        value={item.task}
        onChange={this.handleInputChange}
        onKeyDown={this.handleInputKeyDown}
        autoFocus
      />
    ) : (
      <span className="text">{item.task}</span>
    );

    const editIcon = editMode ? (
      <i className="fa-solid fa-check" onClick={this.handleEditClicked} />
    ) : (
      <i
        className="fa-solid fa-pen-to-square"
        onClick={this.handleEditClicked}
      />
    );

    return (
      <li className="OverviewItem">
        <span className="number">{number}.</span>
        {text}
        <span className="buttons">
          {editIcon}
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
