export default class Deck
{
    /**
     * Constructor for Deck
     */
    constructor()
    {
        this.Deck = [];
        this.fillDeck();
    }

    /**
     * adds to the deck 13 cards of each suit, and then shuffles the deck
     */
    fillDeck()
    {
        for (const suit of ['Spades', 'Clubs', 'Hearts', 'Diamonds'])
        {
            for (let val = 1; val < 14; val++)
            {
                this.Deck.push(suit, val);
            }
        }
        this.shuffle(Deck);
    }

    //shuffles an array
    shuffle(array)
    {
        for(let i = array.length - 1; i > 0; i--)
        {
            let j = Math.floor(Math.random * currentIndex);
            let temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }

    /**
     * Takes the discard pile, and shuffles it back into a new deck
     * 
     * @param {array} discard 
     *
     */
    refillDeck(discard)
    {
        for (let i = this.length.discard - 1; i >= 0; i--)
        {
            this.Deck.push(discard(i))
        }
        this.shuffle(Deck)
    }

    /**
     * removes the top card from the deck
     */
    removeTop()
    {
        this.Deck.pop()
    }
}
