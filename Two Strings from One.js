// You are given a string, stored in a variable with the namestr. The size of the string is stored in a variable with the nameN

// You have to make two strings out of the given string, such that the first string contains all the vowels present instr, in the same order as instr

// The second string contains all the consonants present instr, again in the same order as in the original stringstr

// For example, consider the value stored inN = 6, str = "nrupul", then all the vowels in the string areu,u, and the consonants aren,r,p,l. Therefore, the required output becomes

// uu
// nrpl
// Please note the order of consonants and the vowels in the two strings is same as in the original string. The string with the vowels should be printed first, and the string with the consonants should be printed on the next line
// Note : The string contains only lower case English Alphabets

function twoStringsFromOne(N, str) {
  
  
    let vowel = "aeiou";
  let cons = "bcdfghjklmnpqrstvwxyz" 
      let bag1 = "";
      let bag2 = "";
  for(i=0; i<str.length; i++){
      for(j=0; j<vowel.length; j++){
      if(str[i]==vowel[j]){
          bag1 = bag1 + str[i];
      } 
      }
    for(k=0; k<cons.length; k++){
      if(str[i]==cons[k]){
          bag2 = bag2 + str[i];
      } 
      }
  }
console.log(bag1);
console.log(bag2);

}