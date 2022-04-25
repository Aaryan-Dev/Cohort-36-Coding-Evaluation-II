// You are given a string, whose length is stored in a variable with the nameN

// The string is stored in a variable with the namestr

// It is given that the length of the string is always divisible by 3

// You have to create a new modified string, such that individual parts of the original string of length 3, are reversed

// For example, consider the given string isstr = abcdefghi, andN = 9. In this case, there are 3 parts of the string with length 3

// The first part isabc, the second part isdef, and the third part isghi. Now, you have to reverse all the three parts, and combine them in the same order as before

// Therefore, the first part after reversing iscba, second part after reversing isfed, and the third part after reversing isihg

// Combining the three parts, the new modified string becomescbafedihg, which is the required answer

function stringModification3(N,str) {
    let bag = "";    
       let k = N/3
        for(i=0; i<k; i++){
            for(j=3*(i+1)-1; j>=3*i; j-- ){
                bag = bag + str[j]; 
            }
        }
    
        console.log(bag);
    }