// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

// Factory Function to create pAequors
function pAequorFactory(num, arr) {
  return {
    specimenNum: num,
    dna: arr,
    mutate() {
      // Select random dna base
      let rndBaseNumber = Math.floor(Math.random() * 15)
      let rndBase = this.dna[rndBaseNumber]
      // console.log(`Original Base: ${rndBase}`)
      // Create new base until it doesn't equal the original one
      do {
        dnaBaseNew = returnRandBase()
      } while (rndBase === dnaBaseNew);
      // console.log(`New Base: ${dnaBaseNew}`)
      this.dna[rndBaseNumber] = dnaBaseNew
    }
  }
};

let firstOne = (pAequorFactory(1, [ 'T', 'G', 'A', 'G', 'G', 'A', 'T', 'A', 'G', 'C', 'A', 'C', 'G', 'A', 'C' ]))
console.log(firstOne.dna)
firstOne.mutate()
console.log(firstOne.dna)

//console.log([Math.floor(Math.random() * 15)])
//console.log(returnRandBase())




