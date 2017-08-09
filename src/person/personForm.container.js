import { connect } from 'react-redux'

import PersonForm from './personForm'

const mapDispatchToProps = dispatch => ({
  addPerson: (name, company) => dispatch({
    type: 'ADD_PERSON',
    payload: { name, company }
  })
})

export default connect(undefined, mapDispatchToProps)(PersonForm)