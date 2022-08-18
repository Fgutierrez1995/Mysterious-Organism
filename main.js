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

//function used to create multiple specimen objects.
//The first parameter is a number (no two organisms should have the same number).
//The second parameter is an array of 15 DNA bases.
const pAequorFactory = (specNum, specDna) => {
  //object specObject
  const specObject = {
    'specimenNum': specNum,
    'dna': specDna = mockUpStrand(),
    'mutate': [],
    //adding function that compares 2 different specimens DNA
    //and logs the percentage of common DNA.
    //function takes another obj paremeter
    compareDNA(pAequor) {
      //creating empty array for common DNA.
      let commonDna = [];
      for (let i = 0; i < specObject.dna.length; i++)
      {
        //if both specimen DNA is the same, then add to the commonDNA array.
        if (pAequor.dna[i] === specObject.dna[i])
        {
          commonDna.push(specObject.dna[i]);
        }
      }
      //calculating the percentage of common DNA.
      let numOfDNA = (commonDna.length / 15) * 100;
      console.log(`Specimen #1 and Specimen #2 have ${numOfDNA.toFixed(0)}% DNA in common.`)
    },
    //.willLikelySurvive() returns true if the object’s .dna array contains 
    //at least 60% 'C' or 'G' bases. Otherwise, .willLikelySurvive() returns false.
    willLikelySurvive() {
      //creating empty array for DNA that equals to C or G.
      let commonDna = [];
      for (let i = 0; i < specObject.dna.length; i++)
      {
        //checking if the DNA strand is C or G
        if (specObject.dna[i] === "C" || specObject.dna[i] === "G")
        {
          //adding C and G to the commonDna array.
          commonDna.push(specObject.dna[i]);
        }
      }
      //checking if the length is greater than or equal to 9 which would be 60% or greater.
      //specObject.dna has a array of 15 values, 9/15 = 60%
      if (commonDna.length >= 9)
      {
        console.log(`Specimen #${specObject.specimenNum} will survive`);
        return true;
      }
      else
      {
        console.log(`Specimen #${specObject.specimenNum} will NOT survive`)
        return false;
      }
      
    }
  };

  if (specObject.mutate)
  {
    //copying specObject.dna array into specObject.mutate
    for (let i = 0; i < specObject.dna.length; i++)
    {
      specObject.mutate.push(specObject.dna[i])
    }
    //calling returnRandBase function to return random DNA base ['A', 'T', 'C', 'G']
    let mutateDNA = returnRandBase();
    // assigning variable to a random number between 0 - 15
    let randomNum = Math.floor(Math.random() * 15)
    specObject.mutate[randomNum] = mutateDNA;
    //checking if the random mutateDNA is the same as the DNA in the object.dna array.
    if(specObject.mutate[randomNum] === specObject.dna[randomNum])
    {
      //calling returnRandBase again to get a different DNA.
      mutateDNA = returnRandBase();
      specObject.mutate[randomNum] = mutateDNA;
    }
  }

  return specObject; 

};


//testing functions
let spec1;
let spec2;
let test1 = pAequorFactory(1, spec1);
let test2 = pAequorFactory(2, spec2);

console.log(`Specimen Number: ${test1.specimenNum}`);
console.log(`Specimen #1 DNA: ${test1.dna.join('')}`);
console.log(`Mutated DNA: ${test1.mutate.join('')}`); 
console.log(`Specimen Number: ${test2.specimenNum}`);
console.log(`Specimen #2 DNA: ${test2.dna.join('')}`);
test1.compareDNA(test2);
console.log(test1.willLikelySurvive());