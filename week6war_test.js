var expect = chai.expect;

var testDeck = new Deck;
var testPlayer1 = new Player('Bob');
var testPlayer2 = new Player('Frank');

describe('My Functions', function() {
    describe('#DealCards', function(){
        it('Should Deal Cards to two players', function() {
            var x = dealCards(testDeck, testPlayer1, testPlayer2);
            expect(x).to.equal();
        });

        it('Should throw and Error if it does not receive a deck and two players', function() {
            expect(function() {
                dealCards(1,2,3);
            }).to.throw(Error);
        })
    });
});