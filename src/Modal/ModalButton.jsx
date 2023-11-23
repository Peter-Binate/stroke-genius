import React, {useState} from 'react'
import { createPortal } from 'react-dom'
import ModalContent from './ModalContent'
import './ModalButton.css'

export default function ModalButton({onAddRestriction}) {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
        <button 
            id='modal-button'
            onClick={() => setShowModal(true)}
        >
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                <path fill="#4caf50" d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"></path><path fill="#fff" d="M21,14h6v20h-6V14z"></path><path fill="#fff" d="M14,21h20v6H14V21z"></path>
              </svg>
              Add new Restriction
            </span>
        </button>
        <button 
            id='modal-button'
            onClick={() => setShowModal(true)}
        >
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                <path fill="#4caf50" d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"></path>
                <path fill="#fff" d="M21,14h6v20h-6V14z"></path>
                <path fill="#fff" d="M14,21h20v6H14V21z"></path>
              </svg>
              Rules
            </span>
        </button>
        {showModal && 
            createPortal(<ModalContent onAddRestriction={onAddRestriction} closeModal = {() => setShowModal
                (false)} />, 
        document.body)}
    </>
  )
}
