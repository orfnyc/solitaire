export default class Pile
{
    #suit

    /**
     * creates the ace piles, with a built in suit
     * 
     * @param{string} suit - suit of the pile
     */
    constructor(suit)
    {
        this.Pile = [];
        this.#suit = suit;
    }

    /**
     * checks if a particular card can be added to the top of the pile
     * @param {Card} card - card whose validity is to be checked
     * @returns 
     */
    isValidtoAdd(card)
    {
        if (card.suit == this.#suit && ((Pile.length == 0 && card.value == 1) || card.value == Pile[Pile.length - 1].value - 1))
        {
            return true;
        }
        return false;
    }
    
    /**
     * checks if the pile is full, for win condition
     * @returns
     */
    isFull()
    {
        if (Pile.length == 13){return true;}
        return false;
    }

}