// //!1//
// function sum(array) {
//   let total = 0;
//   for (let i = 0; i < array.length; i++) {
//     total += array[i];
//   }
//   return total;
// }
// console.log(sum([1, 2, 3, 4, 5]));
// //!2//
// function multi(array) {
//   let total = 1;
//   for (let i = 0; i < array.length; i++) {
//     total *= array[i];
//   }
//   return total;
// }
// console.log(multi([1, 2, 3, 4, 5]));
// //!3//
// function sumDigitis (num){
// let sum =0;
// while (num!=0) {
// sum=sum+num%10;
// num=Math.floor(num/10);
// }
// console.log(sum);
// }
// sumDigitis(100);
// //!4//
// const arrayAge=[27,25,24,12,2,90,56];
// let avg=0;
// let min=arrayAge[0];
// let max=arrayAge[0];
// function arrayAges(){
// for(let i=0;i<arrayAge.length;i++){
// avg=sum(arrayAge)/arrayAge.length
// if(min>arrayAge[i]){
// min=arrayAge[i];
// }
// if(max<arrayAge[i]){
// max=arrayAge[i];
// }
// }
// console.log(min);
// console.log(max);
// console.log(avg);
// }
// arrayAges();
// console.log(sum(arrayAge));
//!5//
let sum=0;
let multi=1;
let arrayNumbers=[];
let counter=0;
let nums;
while (counter<3) {
    nums=Number(prompt("enter numbers"));
    counter++
    arrayNumbers.push(nums);
}
for(let i=0;i<arrayNumbers.length;i++){
sum+=arrayNumbers[i];
}
for(let i=0;i<arrayNumbers.length;i++){
    multi*=arrayNumbers[i];
    }
    for(let i=0;i<arrayNumbers.length;i++){
        if(arrayNumbers[i]%2==0){
        console.log(`${arrayNumbers[i]} even`);
        }
        else{
            console.log(`${arrayNumbers[i]} odd`);    
        }
        }
console.log(sum,multi);



