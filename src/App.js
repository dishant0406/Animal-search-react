
import React from 'react';
import { CardList } from './components/card-list/card-list.component';
import './App.css';

class App extends React.Component {

  constructor() {

    super();

    this.state = {

      PersonNames: []
    };
  }


  componentDidMount() {

    fetch('https://nekos.best/api/v1/nekos?amount=12')
      .then(response => response.json())
      .then(nekos => this.setState({ PersonNames: nekos.url }));


  }

  render() {
    return (

      <div className="App">
        <CardList PersonNames={this.state.PersonNames} />

      </div>
    );
  }
}

export default App;
