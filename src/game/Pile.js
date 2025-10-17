export default class Pile
{
    #suit
    constructor(suit)
    {
        this.Pile = [];
        this.#suit = suit;
    }

    isValidtoAdd(card)
    {
        if (card.suit == this.#suit && ((Pile.length == 0 && card.value == 1) || card.value == Pile[Pile.length - 1].value - 1))
        {
            return true;
        }
        return false;
    }
    
    isFull()
    {
        if (Pile.length == 13){return true;}
        return false;
    }

}