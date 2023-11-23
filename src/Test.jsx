import React, { useState } from 'react';

function RestrictionsItems() {
    const [restrictions, setRestrictions] = useState([
        { id: 0, restriction: "sauter à cloche pieds" },
        { id: 1, restriction: "dessiner sans utiliser le pouce" },
        { id: 2, restriction: "dessiner les yeux fermés" }
    ]);

    const [newRestriction, setNewRestriction] = useState('');

    const handleNewRestrictionChange = (event) => {
        setNewRestriction(event.target.value);
    };

    const handleAddRestriction = () => {
        if (newRestriction.trim() !== '') {
            setRestrictions((prevRestrictions) => [
                ...prevRestrictions,
                { id: prevRestrictions.length, restriction: newRestriction }
            ]);
            setNewRestriction(''); // Clear the input field after adding the restriction
        }
    };

    return (
        <div className='container'>
            <h3>Restrictions List</h3>
            <div className='form'>
                <input type="text" value={newRestriction} onChange={handleNewRestrictionChange} />
                <button onClick={handleAddRestriction}>Add Restriction</button>
            </div>
        </div>
    );
}

export default RestrictionsItems;
