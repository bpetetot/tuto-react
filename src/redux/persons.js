const initState = [{ name: 'b', company: 'toto' }]

const persons = (state = initState, action) => {
  switch (action.type) {
    case 'ADD_PERSON':
      return [...state, { name: action.payload.name, company: action.payload.company }]
    default:
      return state
  }
}

export default persons