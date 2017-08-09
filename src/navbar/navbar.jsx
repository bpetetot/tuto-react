import React from 'react'
import PropTypes from 'prop-types'

import './navbar.css'

class NavBar extends React.Component {

  render() {
    const { title, nbPersons } = this.props
    return (
      <div className="navbar">
        <span>{title}</span>
        <span>{nbPersons} personne(s)</span>
      </div>
    );
  }
}

NavBar.propTypes = {
  title: PropTypes.string.isRequired
}

export default NavBar