// Q1 - Remove state names starting with vowels using filter

let states = ["Maharashtra", "Assam", "Uttar Pradesh", "Gujarat", "Odisha", "Bihar"];

let filteredStates = states.filter(function(state) {
    return !/^[AEIOUaeiou]/.test(state);
});

console.log("Q1:", filteredStates);


// Q2 - Reverse the words in the sentence

let str = "I love my India";

let reversedSentence = str.split(" ").reverse().join(" ");

console.log("Q2:", reversedSentence);


// Q3 - INDIA to INDONESIA using splice

let string = "INDIA";

let letters = string.split("");

letters.splice(3, 2, "O", "N", "E", "S", "I", "A");

let newString = letters.join("");

console.log("Q3:", newString);


// Q4 - Count vowels and consonants

let text = "JavaScript is a very useful programming language";

let vowels = 0;
let consonants = 0;

for (let i = 0; i < text.length; i++) {

    let character = text[i].toLowerCase();

    if ("aeiou".includes(character)) {
        vowels++;
    } 
    else if (character >= "a" && character <= "z") {
        consonants++;
    }
}

console.log("Q4 - Vowels:", vowels);
console.log("Q4 - Consonants:", consonants);


// Q5 - Replace wrong word with correct word

function correctfn(sentence, wrong, correct) {
    return sentence.replace(wrong, correct);
}

console.log("Q5:", correctfn(
    "I am learning JavScript",
    "JavScript",
    "JavaScript"
));


// Q6 - Filter numbers greater than 5

let inputArr = [1, 2, 3, 9, 10, 7, 5, 4, 3];

let result = inputArr.filter(function(number) {
    return number > 5;
});

console.log("Q6:", result);


// Q7 - Calculate average scores using map and reduce

const students = [
    { name: "Ram", scores: [80, 70, 60] },
    { name: "Mohan", scores: [80, 70, 90] },
    { name: "Sai", scores: [60, 70, 80] },
    { name: "Hemang", scores: [90, 90, 80, 80] }
];

const studentAverage = students.map(function(student) {

    let total = student.scores.reduce(function(sum, score) {
        return sum + score;
    }, 0);

    let average = total / student.scores.length;

    return {
        name: student.name,
        average: average
    };
});

console.log("Q7:", studentAverage);


// Q8 - Repeated sum of digits until single digit

function repeatedSum(number) {

    while (number >= 10) {

        let sum = 0;

        while (number > 0) {
            sum = sum + (number % 10);
            number = Math.floor(number / 10);
        }

        number = sum;
    }

    return number;
}

console.log("Q8:", repeatedSum(456));


// Q9 - Count number of words in a paragraph

function countWords(paragraph) {

    let words = paragraph.trim().split(/\s+/);

    return words.length;
}

let paragraph = "JavaScript is a programming language used for web development.";

console.log("Q9:", countWords(paragraph));


// Q10 - Reverse a string

function reverseString(word) {

    return word.split("").reverse().join("");
}

console.log("Q10:", reverseString("Hello"));


// Q11 - Find average of student marks

const studentMarks = {
    student1: {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37
    },

    student2: {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37
    },

    student3: {
        subject1: 44,
        subject2: 56,
        subject3: 87,
        subject4: 97,
        subject5: 37
    }
};

let averageMarks = {};

for (let student in studentMarks) {

    let marks = Object.values(studentMarks[student]);

    let total = marks.reduce(function(sum, mark) {
        return sum + mark;
    }, 0);

    averageMarks[student] = {
        average: total / marks.length
    };
}

console.log("Q11:", averageMarks);