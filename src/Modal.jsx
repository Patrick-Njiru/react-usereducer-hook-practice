import { useEffect } from 'react'
import PropTypes from 'prop-types'

const Modal = ({ closeModal, modalContent }) => {
  const classes = modalContent == 'Person added successfully' ?
    'alert alert-success fw-bold mt-3' : 'alert alert-warning fw-bold mt-3'
  
  useEffect(() => {
    setTimeout(() => {
      closeModal()
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
  closeModal: PropTypes.any.isRequired
}

  export default Modal