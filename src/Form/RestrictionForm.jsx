import React, { useState } from 'react';
import "./Form.css";

function RestrictionForm({ onAddRestriction }) {

    const [newRestriction, setNewRestriction] = useState('');

    const handleNewRestrictionChange = (event) => {
        setNewRestriction(event.target.value);
    };

    const handleAddNewRestriction = () => {
        if (newRestriction.trim() !== '') {
            onAddRestriction(newRestriction);
            setNewRestriction('');
        }
    };

    return (
        <div className='restriction-form-container'>
            <h3>Restrictions List</h3>
            <form className='form' onSubmit={(e) => e.preventDefault()}>
                <input
                    id='restriction-input'
                    type="text"
                    value={newRestriction}
                    onChange={handleNewRestrictionChange}
                />
                <button
                    id='restriction-button'
                    onClick={handleAddNewRestriction}
                    disabled={!newRestriction.trim()}
                >
                    Add Restriction
                </button>
            </form>
        </div>
    );
}

export default RestrictionForm;
