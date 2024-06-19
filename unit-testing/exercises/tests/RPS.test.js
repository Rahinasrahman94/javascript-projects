const whoWon = require('../RPS.js');
describe("Rock Paper scissor", function(){
    test("should return tie", function() {
        expect(whoWon("rock","rock")).toBe("TIE!");
     });
     test("Player 2 wins", function() {
        expect(whoWon("rock","paper")).toBe("Player 2 wins!");
     });
     test("Player 2 wins", function() {
        expect(whoWon("paper","scissors")).toBe("Player 2 wins!");
     });
     test("Player 2 wins", function() {
        expect(whoWon("scissors","rock")).toBe("Player 1 wins!");
     });
     test("Player 1 wins", function() {
        expect(whoWon("rock","scissors")).toBe("Player 1 wins!");
     });
     test("Player 1 wins", function() {
        expect(whoWon("scissors","paper")).toBe("Player 1 wins!");
     });
     test("Player 1 wins", function() {
        expect(whoWon("paper","rock")).toBe("Player 1 wins!");
     });
     



});