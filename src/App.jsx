import { useReducer, useState } from 'react'
import { reducer } from './reducer'
import Modal from './Modal'

const defaultState = {
  people: [],
  showModal: false,
  modalContent: ''    
},
defaultPerson = {
  firstName: '',
  lastName: ''
}

function App() {
  const [person, setPerson] = useState(defaultPerson)
  const [state, dispatch] = useReducer(reducer, defaultState)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (person.firstName && person.lastName) {
      dispatch({ type: 'ADD_PERSON', payload: person })
      setPerson(defaultPerson)
    } else {
      dispatch({type: 'EMPTY_PERSON'})
    }
  }

  const modalDisplay = () => { dispatch({type: 'HIDE_MODAL'})}

  console.log('Re-render');

  return (
    <div className="app text-center">
      {state.showModal && <Modal modalContent={state.modalContent} modalDisplay={modalDisplay} />}

      <form className="form w-50 mx-auto mt-5">
        <fieldset className="form-floating my-3">
          <input
            type="text"
            name="firstName"
            id="firstName"
            className="form-control"
            placeholder="john"
            value={person.firstName}
            onChange={e => setPerson({...person, firstName: e.target.value})}
          />
          <label htmlFor="name">first name</label>
        </fieldset>
        <fieldset className="form-floating">
          <input
            type="text"
            name="lastName"
            id="lastName"
            className="form-control"
            placeholder="doe"
            value={person.lastName}
            onChange={e => setPerson({...person, lastName: e.target.value})}
          />
          <label htmlFor="name">last name</label>
        </fieldset>
        <button
          type="submit"
          className="btn btn-success mx-auto d-block my-3"
          onClick={handleSubmit}
        >
          Add Person
        </button>
      </form>
      <div className="mt-5">
        <h2 className='mb-3'>People</h2>
        {state.people.map((person, index) => {
          <p
            className="list-item-group h4 text-center capitalize border border-top-0 border-secondary"
            key={person.id || index}
          >
            {`${person.firstName} ${person.lastName} `}
          </p>
        })}
      </div>
    </div>
  )
}

export default App
