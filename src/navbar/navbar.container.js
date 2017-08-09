import { connect } from 'react-redux'

import Navbar from './navbar'

const mapStateToProps = state => ({
  nbPersons: state.persons.length
})

export default connect(mapStateToProps)(Navbar)