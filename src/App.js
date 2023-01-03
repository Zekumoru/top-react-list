import React from 'react';
import InputBar from './components/InputBar';
import Overview from './components/Overview';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      tasks: [
        { id: 0, task: 'Wash dishes' },
        { id: 1, task: 'Hang clothes' },
        { id: 2, task: 'Study bible' },
        { id: 3, task: 'Take bath' },
        { id: 4, task: 'Exercise for 10 minutes' },
      ],
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleAddTaskClicked = this.handleAddTaskClicked.bind(this);
  }

  handleInputChange(value) {
    this.setState({ input: value });
  }

  handleAddTaskClicked() {}

  render() {
    return (
      <div className="App">
        <InputBar
          value={this.state.input}
          onInputChange={this.handleInputChange}
          onAddTaskClicked={this.handleAddTaskClicked}
        />
        <Overview items={this.state.tasks} />
      </div>
    );
  }
}

export default App;
