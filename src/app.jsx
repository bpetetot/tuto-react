import React from "react";

import Navbar from "./navbar/navbar.container";
import Person from "./person/person.container";
import PersonForm from './person/personForm.container'

class App extends React.Component {

  componentDidMount() {
    fetch("./list.json")
      .then(response => response.json())
      .then(json => console.log(json));
  }

  render() {
    const { title } = this.props;
    return (
      <div>
        <Navbar title={title} />
        <h2>Persons</h2>
        <Person />
        <PersonForm />
      </div>
    );
  }
}

export default App;
