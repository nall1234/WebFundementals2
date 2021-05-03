function greeting(){
    return "Hello";
    console.log("World");
}
var word = greeting();
console.log(word);

//will diplay just hello bc the return ends the funtion before the console.log will run.

function add(num1, num2){
    console.log("Summing Numbers!");
    console.log("num1 is: " + num1);
    console.log("num2 is: " + num2);
    var sum = num1 + num2;
    return sum;
}
var result1 = add(3,5);
var result2 = add(4,7);
console.log(result1);
console.log(result2);

// Summing Numbers!
// num1 is: 3
// num2 is: 5
// Summing Numbers!
// num1 is: 4
// num2 is: 7
// 8
// 11 the returns come after the var so they dont print below the summing numbers and the numbers section

function highFive(num){
    for(var i=0; i<num; i++){
        if(i == 5){
            console.log("High Five!");
        }
        else{
            console.log(i);
        }
    }
}

//nothing will happen bc it is not being told to run