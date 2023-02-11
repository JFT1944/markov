const {makeNewTextFile, makeNewTextURL} = require("./makeText.js");

describe("makeText", function () {

test("this test should run if the path is empty", function () {
    let testText = makeNewTextFile();
    expect(testText).toEqual("no data");})

test("this test should run if the path does not include a .txt", function () {
    let testText = makeNewTextFile('gorilla');
    expect(testText).toEqual("no data");})


});

describe("makeTextURL", function () {

test("this test should run if the path is empty", function () {
    let testText = makeNewTextURL(undefined);
    expect(testText).toEqual("no data");
})

test("this test should run if the path does not include a http", function () {
    let testText = makeNewTextURL('gorilla');
    expect(testText).toEqual("no data");})
});

