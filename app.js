////////////////////////////Question 1////////////////////////////////////

const sumNums = [2, 7, 11, 15];
const target = 9;

//incorrect answer
function Get2Sum(array, targetValue){
    for(let i = 0; i < array.length; i++){
        let sumValue = array[i] + array[i + 1];
        if(sumValue == 9){
            console.log(`this is the two numbers that sum up to 9, 
                number 1: ${array[i]} and number 2: ${array[i + 1]}`);
        }
    }
}

Get2Sum(sumNums, target);

//correct answer
function correctGet2Sum(array, targetValue) {
    const map = new Map();
    for (let i = 0; i < array.length; i++) {
        const complement = targetValue - array[i];
        if (map.has(complement)) {
            return [map.get(complement), i];  // Returning the indices
        }
        map.set(array[i], i);
    }
}

console.log("Two Sum (Array) "
    +correctGet2Sum(sumNums, target)); // Output: [0, 1]

///////////////////////////////////////////Question 2/////////////////////////////

//incorrect answer
function FindLongestSubstring(word){
    let letter;
    let RemovedAmount = 0;
    const wordArray = word.split("");
    for(let i = 0; i < wordArray.length; i++){
        letter = wordArray[i];
        wordArray.shift();
        RemovedAmount++;
        if(wordArray.includes(letter)){
            let wordIndex = wordArray.indexOf(letter);
            let longestSubstring = word.substring(i, 
                wordIndex + RemovedAmount);
            return `this is the substring ${longestSubstring} 
            with leghtn of: ${longestSubstring.length}`;
        }
    }
}

console.log(FindLongestSubstring(`abcabcbb`));

//correct answer
function CorrectFindLongestSubstring(s) {
    let maxLength = 0;
    let start = 0;
    const seenChars = new Map();
    
    for (let end = 0; end < s.length; end++) {
        const currentChar = s[end];
        if (seenChars.has(currentChar) && seenChars.get(currentChar) >= start) {
            start = seenChars.get(currentChar) + 1;  // Move start to the right of the duplicate character
        }
        seenChars.set(currentChar, end);  // Update the character's latest index
        maxLength = Math.max(maxLength, end - start + 1);  // Calculate max length
    }
    
    return maxLength;
}

console.log("correct answer to lonestSubstring "
    +CorrectFindLongestSubstring("abcabcbb")); // Output: 3

////////////////////////////////////////////Question 3/////////////////////////////////////

const numsArray = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

//incorrect answer
function GetSum(newArray){
    let answer = 0;
    for(let i = 0; i < newArray.length; i++){
        answer += newArray[i];
    }
    return answer;
}

function BuildNewArray(SumArray){
    let newArray = [];
    SumArray.forEach(item => {
        newArray.push(item.SumValue);
    });
    return newArray;
}

function GetBiggestSum(SumArray){
    let newArray = BuildNewArray(SumArray);
    return Math.max.apply(null, newArray);
}

function FindSumSlicedArray(Array, amountToSlice){
    let i = 0;
    let SumArray = [];
    let arrayLenght = Array.length;
    let slicedAmount = 0;
    let sumObject;
    let newArray;
    //
    while(slicedAmount != arrayLenght || slicedAmount > arrayLenght ){
        newArray = Array.slice(i, i + amountToSlice);
        slicedAmount += 3;

        sumObject = { index: i, SumValue: GetSum(newArray) };
        SumArray.push(sumObject);
        i = slicedAmount;
    }

    return GetBiggestSum(SumArray);
}

console.log(" This is my sum slice array " 
    +FindSumSlicedArray(numsArray, 3));

//correct answer
function MaxSubArray(nums) {
    let currentSum = nums[0];
    let maxSum = nums[0];
    
    for (let i = 1; i < nums.length; i++) {
        currentSum = Math.max(nums[i], currentSum + nums[i]);  // Include or reset the subarray
        maxSum = Math.max(maxSum, currentSum);  // Update the max sum found
    }
    
    return maxSum;
}

console.log("this is correct sum slicers "
    +MaxSubArray(numsArray)); // Output: 6

