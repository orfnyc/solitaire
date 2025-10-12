import React from 'react';
import Card from './Card.jsx';
import '../styles/CardStyles.css';

function CardStack()
{
    return (
        <div className='CardStack'>
            <Card suit='Spades' value='9'/>
            <Card suit='Hearts' value='8'/>
            <Card suit='Clubs' value='7'/>
            <Card suit='Diamonds' value='6'/>
        </div>
    );
}

export default CardStack;