/** Command-line tool to generate Markov text. */
console.log(process.argv[2]);
const fs = require("fs");
const axios = require("axios");
const { MarkovMachine } = require("./markov.js");

function makeNewTextFile(path) {
  if (!path || path.indexOf(".txt") === -1) {
    return "no data";
  }
  readFile = fs.readFile(path, "utf-8", (err, data) => {
    if (err) {
      console.log(err);
      process.exit(1);
    } else {
      console.log(data);
    }

    let newMarkov = new MarkovMachine(data);
    let newData = newMarkov.makeText((numWords = 100));
    console.log(newData);
    fs.writeFile("neweggs.txt", newData, (err) => {
      if (err) {
        console.log(err);
        process.exit(1);
      }
    });
  });
}

async function makeNewTextURL(path) {
    console.log(path)
  if (!path || path.indexOf("http") === -1) {
    return "no data";
  }
  // readFile = fs.readFile(path, 'utf-8', (err, data) => {
  readURL = await axios.get(path);

  console.log(readURL);

  let newMarkov = new MarkovMachine(readURL);
  let newData = newMarkov.makeText((numWords = 100));
  console.log(newData);
  fs.writeFile("neweggs.txt", newData, (err) => {
    if (err) {
      console.log(err);
      process.exit(1);
    }
  });
}

if (process.argv[2] === "file") {
  makeNewTextFile(process.argv[3]);
} else if (process.argv[2] === "url") {
  makeNewTextURL(process.argv[3]);
} else {
  console.log("error");
}

module.exports = { makeNewTextFile, makeNewTextURL };
