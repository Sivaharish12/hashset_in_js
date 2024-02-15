const hashset=new Set()
hashset.add('a')
hashset.add('b')
hashset.add('c')

console.log(hashset);
// length of the hasmap and the hashset
console.log(hashset.size);

// for (of) iterator 
for (const item of hashset){
    console.log(item);
}

// the in iterates the keys or index here the key is same as value so it prints the value in this for loop
for (const item in hashset){
    console.log(item);
}

// clear method
hashset.clear()
console.log(hashset);

hashset.add('a')
hashset.add('b')
hashset.add('c')

// delete method
console.log(hashset);
hashset.delete('a');
console.log("After deleting A",hashset);
hashset.add('a');
console.log(hashset);


// // differnce method (not available for the node)
// const odds=new Set([1,3,5,7,9])
// const squares=new Set([1,4,9])
// console.log(odds.difference(squares));


// iterator
const iterator=hashset.entries()
console.log(iterator.next());
console.log(iterator.next().value);
console.log(iterator.next().done);

//  For Each Method
hashset.forEach((value)=>{
    console.log("The for each iteartion in hashset is:",value);
})

// Has Method
console.log(hashset.has('a'));

// intersection same as the difference and also not available for the node same for (isDisjoint(),isSubsetof(),
    // symmetricDifference(),union());

// Keys and  Objects
const keys=hashset.keys();
const value=hashset.values();
console.log(keys);
console.log(value);

function trial(){
    return "trial"
}

console.log(trial.toString());
