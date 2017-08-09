import { connect } from 'react-redux'

import Person from './person'

const mapStateToProps = state => ({
  persons: state.persons
})

export default connect(mapStateToProps)(Person)