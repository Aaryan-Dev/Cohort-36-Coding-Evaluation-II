// Given an array containing N space-separated integers, you have to assign each element some category number based on the following rules

// If the element is only divisible by 3 then its category number is 1.
// If the element is only divisible by 5 then its category number is 2.
// If the element is divisible by both 3 and 5 then its category number is 3.
// Print the array of numbers representing the category of the elements of the given array.

function category(N,arr){
   
    bag = "";
    for(i=0; i<arr.length; i++){
        
        if(arr[i]%5===0 && arr[i]%3===0){
            bag = bag + 3 + " ";
        }
        else if(arr[i]%5===0){
           bag = bag + 2 + " ";
        }
        else if(arr[i]%3===0){
          bag = bag + 1+ " ";
        }
    }
    console.log(bag);
 }
        