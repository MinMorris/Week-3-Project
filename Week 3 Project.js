/*Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.*/

let ages = [3, 9, 23, 64, 2, 8, 28, 93];

//Here I used let to create an array

/*Programmatically subtract the value of the first element in the array from the value in the last element of the array 
•   Do not use numbers to reference the last element, find it programmatically, 
•   ages[7] – ages[0] is not allowed!*/

console.log(ages [ages.length -1] - ages[0]);

//So here I needed to use .length -1 so the last index will always be used.
//Just in case the array length changes at some point. The last index will automatically be used.

/*Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).*/

ages.push(78);
console.log(ages);
console.log(ages [ages.length -1] - ages[0]);

//Using .push will add a number in () to the end of the array. I added 78
//Then I used the same .length -1 as above to make sure it's dynamic.
//I got 75 which would be 78-3 so it worked. [3, 9, 23, 64, 2, 8, 28, 93, 78]

/*Use a loop to iterate through the array and calculate the average age.*/

let total = 0;
let avg = 0;
for(let i = 0; i < ages.length; i++){
    total = total + ages[i];
}
avg = total/ages.length;

console.log(avg);

//This for loop finds the total value of the entire length of the array
//Then finds the average by diving the total by the number of elements in the array

/*Create an array called names that contains the following values: "Sam", "Tommy", "Tim", "Sally", "Buck", "Bob".*/

let names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];

//I used let to create this array of names

/*Use a loop to iterate through the array and calculate the average number of letters per name.*/ 

let namesTotal = 0;
let namesAvg = 0;
for(let i = 0; i < names.length; i++){
    namesTotal = namesTotal + names[i].length;
}
namesAvg = namesTotal/names.length;

console.log(namesAvg);

//I did something similar here but changed let to namesTotal and changed age.length to names.length
//Then, changed to namesAvg. This gives the total of the length of the elements and finds the average
//In other words, the number of letters in the names

/*Use a loop to iterate through the names array again and concatenate all the names together, separated by spaces.*/ 

let result = "";

for(let i = 0; i < names.length; i++){
    result = result + names[i] + " ";
}

console.log(result);

//This problem wanted me to basically smash all of the names together and then add spaces

/*How do you access the last element of any array?*/

//length - 1 will give you the last element
//an example is arr[arr.length - 1]

/*How do you access the first element of any array?*/

//The first element is always 0
//arr[0];

/*Create a new array called nameLengths. Write a loop to iterate over the previously newNames created names array and add the length of each name to the nameLengths array.
For example:*/

let newNames = ["Carol", "Sam", "Jenny","Kate"];
let nameLengths = [];

for(let i = 0; i < newNames.length; i++){
    nameLengths.push(newNames[i].length);
}

console.log(nameLengths);

//This for loop adds the length of each name in the array 

/*Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.*/

let sum = 0;
for(let i = 0; i < nameLengths.length; i++){
    sum += nameLengths[i];
}

console.log(sum);

//In this for loop I first created let sum = 0; to hold the sum
//Then, found the sum of the elements for the entire length of the array

/*Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).*/

function wordRepeat (word, n){
    let count = 1;
    let result = "";
    while(count <= n){
        result += word;
        count++;
    }
    return result;
}

console.log(wordRepeat("hello", 4));

//First I set the count to start at 1
//Then had it count up until n and returned the result

/*Write a function that takes two parameters, firstName and lastName, and returns a full name.
•   The full name should be the first and the last name separated by a space.*/

function fullName(firstName, lastName){
  console.log (firstName + " " + lastName);
}

fullName ("Min", "Morris");

//This function created the firstName lastName

/*Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.*/

function sumOfNumbers(num1, num2, num3){
    console.log(num1 + num2 + num3 > 100);
}

sumOfNumbers(80, 100, 20);

//This function checked to see if the sum of the numbers was > 100
//sum is 200 so it's true

/*Write a function that takes an array of numbers and returns the average of all the elements in the array.*/

function avgNumbers(numbers){
    let total = 0;
    for(let i = 0; i < numbers.length; i++){
        total += numbers[i];
    } 

    return total/numbers.length;
}

console.log(avgNumbers([20, 20, 20, 20]));

//This for loop iterates through the numbers in the array
//Then, the total divided by the numbers.length was returned to find the average
//80/4 = 20

/*Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.*/

function twoArrays(arr1, arr2){
    let total = 0;
    for(let i = 0; i < numbers.length; i++){
        total += numbers[i];
    } 

    return total/numbers.length;
}

let arr1 = [2, 2, 2, 2];  
let arr2 = [1, 1, 1, 1];

console.log(arr1 > arr2);

//This for loop went through array 1 and array 2
//Then returned the average 
//Found that array 1 avg was greater so it is true

/*Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.*/

function willBuyDrink(isHotOutside, moneyInPocket){
    console.log(isHotOutside && moneyInPocket > 10.50)
  }

willBuyDrink(false, 20)

//With this function, it is NOT how outside and I have $20
//Since they are not both true, the result is false 

/*Create a function of your own that solves a problem. 
•   In comments, write what the function does and why you created it.*/

let price = [10];
let cardBalance = [20];

function canIBuyIt(price, cardBalance){
    if (price > cardBalance) { 
        return false; 
    } else { 
        return cardBalance - price; 
    }
}

console.log(canIBuyIt(price,cardBalance));

//I decided to create a function named canIBuyIt that accepts 2 parameters named cardBalance and price
//If the price is more than the card balance, it will return false; otherwise, it will return the new card balance
//In this case, the price is less than the card balance
//So, cardBalance - price = 10
