const reducer = (state, action) => {
  if (action.type == 'ADD_PERSON') {
    const newPerson = {
      ...action.payload,
      id: new Date().getDate().toString()
    }

    return {
      ...state,
      people: [...state.people, newPerson],
      showModal: true,
      modalContent: 'Person added successfully'
    }
  }
  if (action.type == 'EMPTY_PERSON') {
    return { 
      ...state,
      showModal: true,
      modalContent: 'Enter valid values'
    }
  }
  if (action.type == 'REMOVE_PERSON') {
    return {
      ...state,
      people: state.people.filter(person => person.id !== action.payload.id)
    }
  }
  if (action.type == 'HIDE_MODAL') return { ...state, showModal: false }
           
  throw new Error ('No Match For Action Type Found')
}

export { reducer }