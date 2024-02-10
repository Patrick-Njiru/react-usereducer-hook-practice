const reducer = (state, action) => {
  if (action.type == 'ADD_PERSON') {
    const newPerson = {
      ...action.payload,
      id: new Date().getTime().toString()
    }

    return {
      ...state,
      people: [...state.people, newPerson],
      showModal: true,
      modalContent: 'Person added successfully'
    }
  }
  if (action.type == 'NO_VALUES') {
    return { 
      ...state,
      showModal: true,
      modalContent: 'Enter valid values'
    }
  }
  if (action.type == 'REMOVE_PERSON') {
    return {
      ...state,
      people: state.people.filter(person => person.id !== action.payload)
    }
  }
  if (action.type == 'CLOSE_MODAL') return { ...state, showModal: false }
           
  throw new Error ('No match for action type')
}

export { reducer }