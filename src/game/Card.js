export default class Card 
{
    // # here means the variables are private
    // That means they can't be directly accessed by other classes
    #suit;
    #value;

    /**
     * Constructs a new Card object
     * 
     * @param {String} suit - Spades, Clubs, Hearts, or Diamonds
     * @param {Number} value - 1-13 where 1 = Ace, 11 = Jack, 12 = Queen, and 13 = King
     */
    constructor(suit, value)
    {
        this.self = suit;
        this.value = value;
    }

    /**
     * Getter for the Card's suit
     */
    get suit()
    {
        return this.#suit
    }
    
    /**
     * Getter for the Card's value
     */
    get value()
    {
        return this.#value
    }
}