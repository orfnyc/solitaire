import Card from './Card';

export default class CardStack
{
    #cards
    // TODO make this pascal case
    #numVisible

    /**
     * Constructor for a CardStack
     */
    contructor()
    {
        this.cards = [];
        this.numVisible = 0;
    }

    /**
     * Removes the top-most card of the card stack and returns it. 
     * Decrements the number of visible cards by one to account for the 
     * removed card.
     * If this would result in no cards being visible in the stack,
     * make the next topmost card visible.
     * @returns {Card} returns the first element in cards.
     */
    removeTop()
    {
        if (this.#cards.length != 0)
        { 
            this.#numVisible = Math.min(this.#cards.length-1, Math.max(1, this.#numVisible-1));
            return this.#cards.shift();
        }
        return null;
    }

    /**
     * Returns the card at the given index of the card stack.
     * @param {Number} index - the index being accessed.
     * @returns {Card} returns the first element in cards. 
     */
    getCard(index)
    {
        if (index < this.#cards.Length && index >= 0)
        {
            return this.#cards[index];
        }
        return null;
    }

    /**
     * Checks if a card is valid to add to the card stack, by solitaire rules.
     * A card is valid to add if it's value is one less than the top-most card
     * and its color is different from the top-most card's color.
     * If the card stack is currently empty, only Kings are valid to add.
     * @param {Card} card  the card to be added.
     * @returns {boolean} true if card can be added, false if it cannot.
     */
    validToAdd(card)
    {
        if (this.#cards.length === 0)
        {
            return card.value === 13;
        }
        if (this.getCard(0).color !== card.color && this.getCard(0).value+1 === card.value)
        {
            return true;
        }
        return false;
    }

    /**
     * Adds a card to the top of the card stack. 
     * @param {Card} card - the card to be added
     */
    add(card)
    {
        this.#cards.add(card);
    }
        
    /**
     * Adds one to the num_visible attribute
     */
    incremenetNumVisible()
    {
        this.#numVisible += 1;
    }
}