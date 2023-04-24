//Problem 1. Write a custom function that has the same behavior of inbuilt Array Join
let array=["apple","banana","cherry"];
function join(arr,sep){
  let result="";
  for(let i=0;i<arr.length;i++){
    result+=arr[i];
    if(i<arr.length-1){
      result+=sep;
    }
  }
  return result;
}
let joined=join(array,"-");
console.log(joined);

let joined2=join(array," ");
console.log(joined2);
let joined3=join(array,",");
console.log(joined3);