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

// USE CASES FOR useReducer
// when you have multiple pieces of state that depend on each other or on complex logic
// to optimize performance by avoiding unnecessary re-renders or calculations
// when you want to manage global or shared state across components