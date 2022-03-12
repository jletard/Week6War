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

    
    create() {
        this.cards = [];
        /*
        Clubs: U+2663
        Diamonds: U+2662
        Hearts: U+2661
        Spades: U+2660
        */
        const suits = ['\u2663', '\u2662', '\u2661', '\u2660'];
        const ranks = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

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

function dealCards(deck, player1, player2){     //deals 26 Cards to two players from a deck
    
    while (deck.cards.length > 0) {
        player1.hand.push(deck.deal());
        player2.hand.push(deck.deal());
    }
}

function war(deck, player1, player2){
    dealCards(deck, player1, player2);
    let p1Card, p2Card;
    
    while (player1.hand.length > 0){
        p1Card = player1.hand.pop();
        p2Card = player2.hand.pop();
        if (p1Card.power > p2Card.power) {
            player1.points ++;
            console.log(`${player1.name} plays ${p1Card.displayCard()} beating ${player2.name}'s  ${p2Card.displayCard()} `)
        }
        else if (p2Card.power > p1Card.power) {
            player2.points ++;
            console.log(`${player2.name} plays ${p2Card.displayCard()} beating ${player1.name}'s  ${p1Card.displayCard()} `)
        }
        else {
            console.log(`${player1.name} plays ${p1Card.displayCard()} drawing ${player2.name}'s  ${p2Card.displayCard()} `)
        }
    
    }
    
    if (player1.points > player2.points) {
        return `${player1.name} has defeated ${player2.name} in a serious game of war ${player1.points}-${player2.points}`;
    }
    else if (player2.points > player1.points) {
        return `${player2.name} has defeated ${player1.name} in a serious game of war ${player2.points}-${player1.points}`;
    } 
    else {
        return `The War between ${player1.name} and ${player2.name} has ended in a stalemate`;
    }
}



let deck = new Deck;
let player1 = new Player('John');
let player2 = new Player('Nash');
console.log(war(deck,player1,player2));