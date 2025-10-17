export default class Discard
{
    #cards

    /**
     * Constructs a new Discard pile
     */
    constructor()
    {
        this.#cards = [];
    }

    /**
     * Removes the top card off the discard pile
     * @returns the top card
     */
    removeTop()
    {
        if (this.#cards.length > 0)
        {
            return this.#cards.pop();
        }
        return null;
    }

    /**
     * Adds a card to the top of the discard pile
     * @param {Card} card - the card to be added
     */
    addToTop(card)
    {
        this.#cards.push(card);
    }

    /**
     * Empties the discard pile
     * @returns the array of cards that were removed from the discard pile
     */
    empty()
    {
        let temp = this.#cards;
        this.#cards = [];
        return temp;
    }

    /**
     * Returns the card at the given index, where lower indices are closer to the top
     * @param {number} index - the index to be returned
     * @returns the card at the index
     */
    getCard(index)
    {
        return this.#cards[index];
    }

}