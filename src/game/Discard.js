export default class Discard
{
    #cards
    #numVisible

    constructor()
    {
        this.#cards = [];
    }

    removeTop()
    {
        if (this.#cards.length > 0)
        {
            return this.#cards.pop();
        }
        return null;
    }

    addToTop(card)
    {
        this.#cards.push(card);
    }

    empty()
    {
        let temp = this.#cards;
        this.#cards = [];
        return temp;
    }

    getCard(index)
    {
        return this.#cards[index];
    }

}