// You are given a string stored in a variable with the namestr, containing a mix of upper case and lower case English characters

// The length of the string is stored in a variable with the nameN

// You have to solve the equation13*x, wherexis the number of capital upper case English characters in the string

// For example, consider the value stored inN = 5, andstr = raHuL

// The number of upper case characters in the string is2:H, L

// Therefore, the value of the equation13*x, becomes13*2 = 26, which is the required answer

function capitalLettersInStringXIII(N, str) {
	
	let upperC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	
	    let count =0;
	for(i=0; i<str.length; i++){
	    for(j=0; j<upperC.length; j++){
	    if(str[i]==upperC[j]){
	        count++
	    }
	    }
	}
	console.log(13*count);
}
