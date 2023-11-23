import React from 'react'
import RestrictionForm from "../Form/RestrictionForm";
import './ModalContent.css'
export default function ModalContent({closeModal, onAddRestriction }) {
  return (
    <>
        <div 
            id='overlay' 
            onClick={closeModal}
        >
        </div>
        <div id="modal">
            <RestrictionForm onAddRestriction={onAddRestriction} />
            <button
                id='close-modal'
                onClick={closeModal}
            >
                X
            </button>
        </div>
    </>
  )
}
