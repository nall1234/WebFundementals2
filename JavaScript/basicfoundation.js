function add255(){
    var newarr = []
    for (var i = 1; i < 256; i++){
        newarr.push(i);
    }
    return newarr;
}
var sum = add255()
console.log(sum)

function evensum(){
    var sum = 0
    for (var i = 1; i < 1001; i++){
        if (i % 2==0){
            sum = sum + i;
        }
    }
    return sum;
}
var total = evensum()
console.log(total)

function oddsum(){
    var sum = 0
    for (var i = 1; i < 5001; i++){
        if (i % 2 != 0){
            sum = sum + i;
        }
    }
    return sum;
}
var total = oddsum()
console.log(total)

function addarray(arr){
    var sum = 0
    for (var i = 0; i < arr.length; i++){
        sum = sum + arr[i];
    }
    return sum;
}
var total = addarray([-5,2,5,12])
console.log(total)

function findmax(arr){
    var max = arr[0]
    for (var i = 1; i < arr.length; i++){
        if (arr[i] > max){
            max = arr[i]
        };
    }
    return max;
}
var total = findmax([-5,-2,-5,-10])
console.log(total)

function findave(arr) {
    var total = 0
    var ave = 0
    for (var i = 0; i < arr.length; i++) {
        total = total + arr[i];
    }
    ave = total / arr.length;
    return ave;
}
var ave = findave([1, 3, 5, 7, 20])
console.log(ave)

function arrodd() {
    var arr = []
    for (var i = 1; i < 51; i++){
        if (i % 2 == 1){
            arr.push(i);
        }
    }
    return arr;
}
var arr = arrodd()
console.log(arr)

function greaterthan(arr, num) {
    total = 0
    for (var i = 0; i < arr.length; i++){
        if (arr[i] > num){
            total = total + 1;
        }
    }
    return total;
}
var highterthan = greaterthan([1, 7, 7, 7], 3)
console.log(highterthan)

function squared (arr){
    for (var i = 0; i < arr.length; i++){
        arr[i] = arr[i]* arr[i];
    }
    return arr
}
var squ = squared([1, 2, 3, 4])
console.log(squ)

function tozero (arr){
    for (var i = 0; i < arr.length; i++){
        if (arr[i] < 0){
            arr[i] = 0;
        }
    }
    return arr
}
var zeroed = tozero([1, -2, 3, -4])
console.log(zeroed)


function maxminave (arr){
    var max = [0];
    var min = [0];
    var total = 0;
    for (var i = 0; i < arr.length; i++){
        if (arr[i] < min){
            min = arr[i];
        }
        if (arr[i] > max){
            max = arr[i]
        }
        total = total + arr[i];
    }
    var ave = total / arr.length;
    return [max, min, ave]
}
var numbers = maxminave([1, 5, 10, -2])
console.log(numbers)

function swap (arr){
    var temp = arr[arr.length-1];
    arr[arr.length-1] = arr[0];
    arr[0] = temp;   
    return arr;
}
var numbers = swap([1, 5, 10, -2])
console.log(numbers)

function dojo (arr){
    for (var i = 0; i < arr.length; i++){
        if (arr[i] < 0){
            arr[i] = 'dojo'
        }
    }  
    return arr;
}
var numbers = dojo([1, -5, 10, -2])
console.log(numbers)