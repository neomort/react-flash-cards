import React from "react";

const Flashcards = ({ flashcards }) => (
    <div>
    <h1>Cards:</h1>
    
        {flashcards.map(card => (
    <div>
        {card.id}<br />
        {card.question} <br />
                {card.answer} <br />
                </div>
    ))
    }
    </div>

    )
    

export default Flashcards;