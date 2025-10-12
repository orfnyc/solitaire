import react from 'react'
import '../styles/CardStyles.css';

function Card({suit, value}) 
{
    return (
        <div onClick={() => console.log("clicked")} className={`Card ${suit}`}>
            <div className="card_num_1">{value}</div>
            <div className="card_num_2">{value}</div>
        </div>
    );
}

export default Card;