import React, { useState } from 'react';
import ModalButton from '../Modal/ModalButton'
import './restriction.css';

function RestrictionsItems() {
    const [restrictions, setRestrictions] = useState([
        { id: 0, restriction: "Draw while standing on one leg" },
        { id: 1, restriction: "Draw without using your thumb" },
        { id: 2, restriction: "Draw without your eyes open" },
        { id: 3, restriction: "Draw without taking your pen off the paper" },
        { id: 4, restriction: "Draw 2 words instead of 1" },
        { id: 5, restriction: "Draw for only 30 seconds" },
        { id: 6, restriction: "Draw with your non dominant hand" },

    ]);

    const [randomRestriction, setRandomRestriction] = useState("");
    const [prevRandomIndex, setPrevRandomIndex] = useState(null);

    const handleDisplayRestriction = () => {
        let randomIndex;

        // Keep generating a new random index until it's different from the previous one
        do {
            randomIndex = Math.floor(Math.random() * restrictions.length);
        } while (randomIndex === prevRandomIndex);

        const newRandomRestriction = restrictions[randomIndex].restriction;
        setRandomRestriction(newRandomRestriction);
        setPrevRandomIndex(randomIndex);
        console.log(newRandomRestriction);
    };

    const handleAddNewRestriction = (newRestriction) => {
        setRestrictions((prevRestrictions) => [
            ...prevRestrictions,
            { id: prevRestrictions.length, restriction: newRestriction }
        ]);
    };

    return (
        <>
            {/* <RestrictionForm onAddRestriction={handleAddNewRestriction} /> */}
            <div id="quote-box">
                <h3>Random Restriction</h3>
                <div id="text">
                    <p>{randomRestriction}</p>
                </div>
                <div id="buttons">
                    <button id="new-restriction" className="button" onClick={handleDisplayRestriction}>New Restriction</button>
                </div>
                <div id="modal-container">
                    <ModalButton onAddRestriction={handleAddNewRestriction} />
                </div>
            </div>
        </>
    );
}

export default RestrictionsItems;
