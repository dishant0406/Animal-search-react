
import React from 'react';
import { CardList } from './components/card-list/card-list.component';
import { Boxsearch } from './components/search-box/search-box.component';
import './App.css';

class App extends React.Component {

  constructor() {

    super();

    this.state = {

      PersonNames: [],
      searchfield: '',
    };
  }


  componentDidMount() {

    fetch('https://zoo-animal-api.herokuapp.com/animals/rand/10')
      .then(response => response.json())
      .then(animals => this.setState({ PersonNames: animals }));


  }

  handleChange = (e) => {
    this.setState({ searchfield: e.target.value });
  }

  render() {

    const { PersonNames, searchfield } = this.state;
    const filterNames = PersonNames.filter(animals => animals.animal_type.toLowerCase().includes(searchfield.toLocaleLowerCase()));

    return (

      <div className="App">
        <h1 className='heading'>Search Animals</h1>
        <Boxsearch placeholder='Search Animal Type' handleChange={this.handleChange} />

        <CardList PersonNames={filterNames} />

      </div>
    );
  }
}

export default App;
