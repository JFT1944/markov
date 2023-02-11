/** Textual markov chain generator */


class MarkovMachine {

  /** build markov machine; read in text.*/

  constructor(text) {
    let words = text.split(/[ \r\n]+/);
    this.words = words.filter(c => c !== "");
    this.makeChains();
  }

  /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

  makeChains() {
// This function creates the word chains. 
// console.log(this.words)
let newChain = {}

for(let i=0; i<this.words.length; i++){
  // console.log(this.words[i])
  // console.log(newChain[this.words[i]])
  if(!newChain[this.words[i]]){
    newChain[this.words[i]] = [this.words[i + 1] || null]
  } else{
    newChain[this.words[i]].push(this.words[i + 1])
  }
  // console.log(newChain) 
  // return newChain
}
console.log(newChain)
    this.newChain = newChain
  }


  /** return random text from chains */

  makeText(numWords = 100) {
    // TODO
    
    let random_starter = []
    for (let i of Object.keys(this.newChain)){
      console.log(i)
      random_starter.push(i)
    }
    let superRandomNum = Math.floor(Math.random() * random_starter.length)
    let newPhrase = []
    console.log('***********************************')
    console.log('***********************************')
    console.log('***********************************')
    console.log(random_starter[superRandomNum])
    newPhrase.push(random_starter[superRandomNum])
    console.log(newPhrase)
    // console.log(this.newChain[newPhrase[0]])


    for(let x=0;x<numWords; x++){
      console.log('in the loop')
      let lens = this.newChain[newPhrase[x]]
      console.log(`lens: ${lens}`)
      console.log(lens.length)
      let rNum = Math.floor(Math.random() * lens.length)
      console.log(x)
      if(!this.newChain[newPhrase[x]][rNum]) break
      newPhrase.push(this.newChain[newPhrase[x]][rNum])


    }
    // console.log(`${newPhrase}`)
    return newPhrase.join(" ")
  }
}

// mm = new MarkovMachine("hello world everything is just so beautiful and great and amazing and i love the world so much")
// console.log(mm.newChain)

// console.log(mm.makeText())
module.exports = {MarkovMachine};