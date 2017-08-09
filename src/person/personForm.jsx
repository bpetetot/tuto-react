import React, { Component } from 'react';

class PersonForm extends Component {

  handlePerson() {
    this.props.addPerson(this.refs.name.value, this.refs.company.value)
  }

  render() {
    return (
      <div>
        <input
          ref="name"
          type="text"
          name="name"
          placeholder="name"
        />
        <input
          ref="company"
          type="text"
          name="company"
          placeholder="company"
        />
        <input type="button" value="add" onClick={this.handlePerson.bind(this)} />
      </div>
    );
  }
}

export default PersonForm;