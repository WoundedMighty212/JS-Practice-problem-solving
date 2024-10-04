const sumNums = [3,2,4], target = 6;

//console.log(twoSum(sumNums, target));
//correct form
function twoSum(nums, target) {
    let answer = 0;
    for(let i = 0; i < nums.length; i++){
        for(let k = i + 1; k < nums.length; k++){
            answer = nums[i] + nums[k];
            if(answer == target){
                return [i, k]
            }
        }
    }
};

function addTwoNumbers(l1, l2){
    let answerArray = [];
}

//correct
function isPalindrome(x){
    let resultArray = [];
    let numberToString = x.toString();
    let k = numCharacterArray.length - 1;
    let numCharacterArray = numberToString.split("");
    for(let i = 0; i < numCharacterArray.length; i++){
        let value = numCharacterArray[k--];
        resultArray.push(value);
    }
    if(numberToString == resultArray.join("")){
        return true
    }
    else{
        return false
    }
}

/*
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
*/

let RomanNumeralsArray = [
    {
        index: 1,
        value: 'I'
    },
    {
        index: 2,
        value: 'II'
    },
    {
        index: 3,
        value: 'III'
    },
    {
        index: 5,
        value: 'V'
    },
    {
        index: 10,
        value: 'X'
    },
    {
        index: 50,
        value: 'L'
    },
    {
        index: 100,
        value: 'C'
    },
    {
        index: 500,
        value: 'D'
    },
    {
        index: 1000,
        value: 'M'
    }
]

var romanToInt = function(s) {
    let RomanNumerals = {
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }

    if(s >= RomanNumerals.M){

    }
    else if(s >= RomanNumerals.D){

    }
    else if(s >= RomanNumerals.C){

    }
    else if(s >= RomanNumerals.L){

    }
    else if(s >= RomanNumerals.x){
        let i = 0;
        let newValue;
        let numArray = s.toString().split("");
        let value = numArray[0];
        if(value > 1){
            while(i < parseInt(value)){
                newValue.concat(RomanNumeralsArray[4].value);
            }
        }
        else{
            newValue = RomanNumeralsArray[4].value;
        }
    }
    else if(s >= RomanNumerals.V){
        switch(s){
            case 5:{
                return `${RomanNumeralsArray[3].value}`;
            }
            case 6:{
                return `${RomanNumeralsArray[3].value}
                ${RomanNumeralsArray[0].value}`;
            }
            case 7:{
                return `${RomanNumeralsArray[3].value}
                ${RomanNumeralsArray[1].value}`;
            }
            case 8:{
                return `${RomanNumeralsArray[3].value}
                ${RomanNumeralsArray[2].value}`;
            }
            case 9:{
                return `${RomanNumeralsArray[0].value}
                ${RomanNumeralsArray[4].value}`;
            }
        }
    }
    else if(s < RomanNumerals.V){
        switch(s){
            case 1:{
                return `${RomanNumeralsArray[0].value}`;
            }
            case 2:{
                return `${RomanNumeralsArray[1].value}`;
            }
            case 3: {
                return `${RomanNumeralsArray[2].value}`;
            }
            case 4:{
                return `${RomanNumeralsArray[0].value}
                ${RomanNumeralsArray[3].value}`;
            }
        }
    }
};

