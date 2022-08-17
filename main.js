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
    'mutate': []
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
    //console.log(`mutated DNA ${mutateDNA}`)
    //console.log(`DNA that corresponds with random number ${randomNum} is ${specObject.mutate[randomNum]}`);
    specObject.mutate[randomNum] = mutateDNA;
    //checking if the random mutateDNA is the same as the DNA in the object.dna array.
    if(specObject.mutate[randomNum] === specObject.dna[randomNum])
    {
      //calling returnRandBase again to get a different DNA.
      mutateDNA = returnRandBase();
      //console.log(`mutated DNA ${mutateDNA}`)
      specObject.mutate[randomNum] = mutateDNA;
    }
    //console.log(specObject.mutate)
  }

  return specObject;
};


//testing functions
let spec1;
let test = pAequorFactory(1, spec1);

console.log(`Specimen Number: ${test.specimenNum}`);
console.log(`Specimen DNA: ${test.dna.join('')}`);
console.log(`Mutated DNA: ${test.mutate.join('')}`);






