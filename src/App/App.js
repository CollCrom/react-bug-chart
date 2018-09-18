import React, { Component } from 'react';
import { ApiCall } from '../ApiCall'
import BugGraph from '../BugGraph/BugGraph'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        amount: 0,
        data: []
      },
      Ui: {

      },
      Sim: {

      },
      Api: {
        
      },
    }
  }

  componentDidMount() {
    ApiCall()
    .then(response => response.json())
    .then(data => this.setState({ data }));
  }

  parseData()

  render() {
    if (!this.state.data.data.length || !this.state.data.amount) return null;

    return (
      <div className='container'>
        <div className="status">status</div>
        <div id="graphContainer">
          <BugGraph/>
          <BugGraph/>
          <BugGraph/>
          <BugGraph/>
        </div>
      </div>
    );
  }
}

export default App;
