// Структури вибору
const selectionOutput = document.getElementById('selection-output');

let age = parseInt(prompt("Введіть ваш вік:"));
if (!isNaN(age)) {
    if (age >= 18) {
        selectionOutput.innerHTML += '<p>Ви досягли повноліття</p>';
    } else {
        selectionOutput.innerHTML += '<p>Ви ще неповнолітній</p>';
    }
} else {
    selectionOutput.innerHTML += '<p>Неправильний формат віку</p>';
}

let day = parseInt(prompt("Введіть номер дня тижня (1-7):"));
if (!isNaN(day) && day >= 1 && day <= 7) {
    switch (day) {
        case 1:
            selectionOutput.innerHTML += '<p>Понеділок</p>';
            break;
        case 2:
            selectionOutput.innerHTML += '<p>Вівторок</p>';
            break;
        case 3:
            selectionOutput.innerHTML += '<p>Середа</p>';
            break;
        default:
            selectionOutput.innerHTML += '<p>Невалідний день тижня</p>';
    }
} else {
    selectionOutput.innerHTML += '<p>Невалідний номер дня тижня</p>';
}

// Структури повторення
const loopOutput = document.getElementById('loop-output');

let i = 0;
while (i < 5) {
    loopOutput.innerHTML += `<p>while: ${i}</p>`;
    i++;
}

let j = 0;
do {
    loopOutput.innerHTML += `<p>do/while: ${j}</p>`;
    j++;
} while (j < 5);

for (let k = 0; k < 5; k++) {
    loopOutput.innerHTML += `<p>for: ${k}</p>`;
}

const obj = {a: 1, b: 2, c: 3};
for (let prop in obj) {
    loopOutput.innerHTML += `<p>for/in: ${prop}: ${obj[prop]}</p>`;
}

// Індивідуальні завдання
function getFullName() {
    const firstName = document.getElementById("nameInput").value;
    const lastName = prompt("Введіть ваше прізвище:");
    if (firstName && lastName) {
        const fullNameOutput = document.getElementById('fullNameOutput');
        fullNameOutput.innerHTML = `<p>Повне ім'я: ${firstName} ${lastName}</p>`;
    } else {
        alert("Будь ласка, введіть ім'я та прізвище");
    }
}

function getLengthOfWord() {
    const word = document.getElementById("wordInput").value;
    if (word) {
        const wordLengthOutput = document.getElementById('wordLengthOutput');
        wordLengthOutput.innerHTML = `<p>Довжина слова: ${word.length}</p>`;
    } else {
        alert("Будь ласка, введіть слово");
    }
}

function isSameLength() {
    const word1 = document.getElementById("word1Input").value;
    const word2 = document.getElementById("word2Input").value;
    if (word1 && word2) {
        const sameLengthOutput = document.getElementById('sameLengthOutput');
        if (word1.length === word2.length) {
            sameLengthOutput.innerHTML = `<p>Слова "${word1}" і "${word2}" мають однакову довжину</p>`;
        } else {
            sameLengthOutput.innerHTML = `<p>Слова "${word1}" і "${word2}" мають різну довжину</p>`;
        }
    } else {
        alert("Будь ласка, введіть обидва слова");
    }
}