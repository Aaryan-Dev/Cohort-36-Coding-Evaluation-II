// Given an integerN, and a pattern. Print the pattern as given in the sample I/O.

// Note: Please check for spaces.

function patternPrinting(N) {
    
    for(i=0; i<N; i++){
        bag = "";
        
        for(j=0; j<N*2-1; j++){
            
            if(j%2==0){
                
                if(j<N*2-1-(i*2)){
           bag = bag + "*";
                }else{
                  bag = bag + " ";  
                }
           
            }else{
                bag = bag + " "; 
            }
            
        }
        console.log(bag);
          
}
}
