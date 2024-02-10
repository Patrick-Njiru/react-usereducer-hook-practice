import { useEffect } from 'react'
import PropTypes from 'prop-types'

const Modal = ({ modalDisplay, modalContent }) => {
  const classes = modalContent == 'Person added successfully' ?
    'alert alert-success fw-bold my-2' : 'alert alert-warning fw-bold my-2'
  
  useEffect(() => {
    setTimeout(() => {
      modalDisplay()
    }, 3000);
  })
  
  return (
    <div className="mx-auto" style={{width: 'fit-content'}}>
      <div className={classes}>
        {modalContent}
      </div>
    </div>
  )
}

Modal.propTypes = {
  modalContent: PropTypes.string.isRequired,
  modalDisplay: PropTypes.any.isRequired
}

  export default Modal