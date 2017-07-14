'use strict';
function fizzBuzzWhizz(inputNum) {
    if(/3/.test(inputNum)===true){
        return "fizz";
    }else {
        if(inputNum%3===0&&inputNum%5!==0&&inputNum%7!==0){
            return  "fizz";
        }
        else if(inputNum%3!==0&&inputNum%5===0&&inputNum%7!==0){
            return "buzz";
        }
        else if(inputNum%3!==0&&inputNum%5!==0&&inputNum%7===0){
            return "whizz";
        }
        else if(inputNum%3===0&&inputNum%5===0&&inputNum%7!==0){
            return "fizzbuzz";
        }
        else if(inputNum%3===0&&inputNum%5!==0&&inputNum%7===0){
            return "fizzwhizz";
        }
        else if(inputNum%3!==0&&inputNum%5===0&&inputNum%7===0){
            return "buzzwhizz";
        }
        else if(inputNum%3===0&&inputNum%5===0&&inputNum%7===0){
            return "fizzbuzzwhizz";
        }
        else if(inputNum%3!==0&&inputNum%5!==0&&inputNum%7!==0){
            return inputNum;
        }
    }


}



