//Intro to JavaScript
//Week 6 Coding Assignment: Card Game War
//John LeTard

class WarCard {
    constructor(suit, rank, power){
        this.suit = suit;
        this.rank = rank;
        this.power = power;
    }

    displayCard() {
        return `${this.rank}${this.suit}`;
    }
}

class Deck {
    constructor() {
        this.cards =[];
        this.create();
        this.shuffle();
    }

    /*note to self: maybe unicode characters for suits will work
    Clubs: U+2663
    Diamonds: U+2662
    Hearts: U+2661
    Spades: U+2660
    */
    create() {
        this.cards = [];
        const suits = ['C', 'D', 'H', 'S'];
        const ranks = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
        let power = 0;

        for (let j=0; j<4; j++){
            for (let i=0; i<13; i++){
                this.cards.push(new WarCard(suits[j], ranks[i], (i +1)));
            }
        }

    }

    shuffle() {
        let j = this.cards.length, i;
        while (j){
            i = Math.floor(Math.random() * j--);

            [this.cards[j], this.cards[i]] = [this.cards[i], this.cards[j]];

        }
        return this;

    }

    deal() {
        return this.cards.pop();
    }
}


class Player {
    constructor(name){
        this.name = name;
        this.hand = []
        this.points = 0
    }
}

function dealCards(deck, player1, player2){
    
    while (deck.cards.length > 0) {
        player1.hand.push(deck.deal());
        player2.hand.push(deck.deal());
    }
}

function war(player1, player2){
    let 
}



let deck = new Deck;
let player1 = new Player('John');
let player2 = new Player('Nash');

dealCards(deck, player1, player2);
console.log(`${player1.name} has ${player1.hand.length} cards`);
console.log(`${player2.name} has ${player2.hand.length} cards`);