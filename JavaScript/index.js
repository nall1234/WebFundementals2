for(var num = 0; num < 15; num++){
    console.log(num);
}

// this will display numbers 0-14
for(var i = 1; i < 10; i+=2){
    if(i % 3 == 0){
        console.log(i);
    }
}

//this will console numbers divisible by 3 so 3 and 9

for(var j = 1; j <= 15; j++){
    if(j % 2 == 0){
        j+=2;
    }
    else if(j % 3 == 0){
        j++;
    }
    console.log(j);
}
//this will output 1, 4, 5, 6, 10, 11, 14, 16