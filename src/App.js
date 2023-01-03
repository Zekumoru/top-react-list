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

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleAddTaskClicked = this.handleAddTaskClicked.bind(this);
    this.handleDeleteTask = this.handleDeleteTask.bind(this);
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
          onDeleteTask={this.handleDeleteTask}
        />
      </div>
    );
  }
}

export default App;
