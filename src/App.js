import { nanoid } from 'nanoid';
import React from 'react';
import InputBar from './components/InputBar';
import Overview from './components/Overview';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      tasks: [],
    };
    window.seeState = () => console.dir(this.state);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleAddTaskClicked = this.handleAddTaskClicked.bind(this);
    this.handleDeleteTask = this.handleDeleteTask.bind(this);
    this.handleEditedTask = this.handleEditedTask.bind(this);
  }

  handleInputChange(value) {
    this.setState({ input: value });
  }

  handleAddTaskClicked() {
    this.setState({
      input: '',
      tasks: [...this.state.tasks, { id: nanoid(), task: this.state.input }],
    });
  }

  handleDeleteTask(id) {
    const taskIndex = this.state.tasks.findIndex((task) => task.id === id);
    this.setState({
      tasks: this.state.tasks.filter((task, index) => taskIndex !== index),
    });
  }

  handleEditedTask(editedTask) {
    this.setState({
      tasks: this.state.tasks.reduce((tasks, task) => {
        if (task.id === editedTask.id) {
          tasks.push(editedTask);
          return tasks;
        }

        tasks.push(task);
        return tasks;
      }, []),
    });
  }

  render() {
    return (
      <div className="App">
        <InputBar
          value={this.state.input}
          onInputChange={this.handleInputChange}
          onAddTaskClicked={this.handleAddTaskClicked}
        />
        <Overview
          items={this.state.tasks}
          onEditedTask={this.handleEditedTask}
          onDeleteTask={this.handleDeleteTask}
        />
      </div>
    );
  }
}

export default App;
