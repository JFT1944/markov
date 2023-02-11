const { MarkovMachine } = require("./markov.js");

describe('markov', function () {

test('should return I like this', function () {
    let newMarkov = new MarkovMachine("I like this");
    let newData = newMarkov.makeText((numWords = 100));
    expect(newData).toEqual("I like this");
})});

