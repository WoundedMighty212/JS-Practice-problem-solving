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

function romanToInt(s) {
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


function areSentencesSimilar(s1, s2){
    let resultArray = [];
    let sentance1 = s1.toLowerCase();
    let sentance2 = s2.toLowerCase();

    let sentance1Array = sentance1.split(" ");
    let sentance2Array = sentance2.split(" ");

    console.log(sentance1Array);
    console.log(sentance2Array);

    if(sentance1Array.length < sentance2Array.length){
        for(let i = 0; i < sentance1Array.length; i++){
        const index = sentance2Array.indexOf(sentance1Array[i]);
            if(index > -1){
            resultArray.push(sentance2Array[index]);
            }
        }

        let winningCount = 0;
        for(let i = 0; i < sentance1Array.length; i++){
            if(resultArray[i] === sentance1Array[i]){
                winningCount++;
            }
        }
     
        if(winningCount === sentance1Array.length){
            return true;
        }
        else{
            return false;
        }
     }
     else if(sentance2Array.length < sentance1Array.length){
        for(let i = 0; i < sentance2Array.length; i++){
            const index = sentance1Array.indexOf(sentance2Array[i]);
            if(index > -1){
                resultArray.push(sentance1Array[index]);
            }
        }

        let winningCount = 0;
        for(let i = 0; i < sentance2Array.length; i++){
            if(resultArray[i] === sentance2Array[i]){
                winningCount++;
            }
        }
     
        if(winningCount === sentance2Array.length){
            return true;
        }
        else{
            return false;
        }
    } 
}

console.log(areSentencesSimilar("of", "A lot of words"));

//(?=[abc]{3})(?=(?!((?<1>.)\k<1>.)))(?=(?!((?<2>.).\k<2>)))(?=(?!(.(?<3>.)\k<3>)))(?=(?!((?<4>.)\k<4>\k<4>)))[abc]{3}