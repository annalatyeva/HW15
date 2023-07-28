//Задание 1
// Выведите числа от 1 до 10 в консоль
let i = 1;
// while (i <= 10) {
//     console.log(i);
//     i++;
// }

//Задание 2
// Выведите чётные числа от 1 до 20 в консоль
// for (let i = 1; i <= 20; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }

//Задание 3
// Выведите числа от 10 до 1 в консоль в обратном порядке
// for (let i = 10; i >= 1; i--) {
//     console.log(i);
// }

//Задание 4
// Выведите таблицу умножения на 5 от 1 до 10
// for (let i = 1; i<=10; i++) {
//     console.log(i * 5);
// }

//Задание 5
// Вычислить сумму чисел от 1 до 100 и вывести значение в консоль
// let sum = 0;
// for (let i = 1; i <= 100; i++) {
//     sum += i;
// }
// console.log(sum);

//Задание 6
// Выведите все элементы массива в консоль используя цикл for
// const array = [1, 2, 3, 4, 5];
// for (let i = 0; i < array.length; i++) {
//     console.log(array[i]);
// }

//Задание 7
// Выведите сумму всех элементов массива используя цикл for
// const numbers = [1, 2, 3, 4, 5];
// let numbersSum = 0;
// for (let i = 0; i < numbers.length; i++) {
//     numbersSum += numbers[i];
// }
// console.log(numbersSum);

//Задание 8
// Напишите цикл for, который изменяет массив животных, делая их прекрасными! Например, если есть следующий массив: let animals = ["Кот", "Рыба", "Лемур"]; цикл должен сделать его таким: ["Кот - прекрасное животное", "Рыба - прекрасное животное", "Лемур - прекрасное животное"]
// Подсказка: вам понадобится переприсвоить значения для каждого индекса, то есть присвоить новые значения уже суще- ствующим элементам: animals[0] = animals[0] + " - прекрасное животное";
// let animals = ["Кот", "Рыба", "Лемур"];
// for (let i = 0; i < animals.length; i++) {
//     animals[i] = animals[i] + '- прекрасное животное!';
// }
// console.log(animals);

//Задание 9
// Выведите символы в строке в консоль
// const str = 'Hello';
// for (i = 0; i < str.length; i++) {
//     console.log(str[i]);
// }

//Задание 10
// Выведите все элементы массива в консоль используя цикл for...of. Массив array объявлен в Задании 6
// for (arrayNumber of array) {
//     console.log(arrayNumber);
// }

//Задание 11
// Выведите каждое слово из массива строк в консоль
// Подсказка: вам понадобится метод массивов split
// const sentences = ['Hello, world!', 'How are you?'];
// let sentencesWords = sentences.join([' ']);
// sentencesWords = sentencesWords.split(' ');
// for (let i = 0; i < sentencesWords.length; i++) {
//     console.log(sentencesWords[i]);
// }

//Задание 12
// Выведите сумму всех элементов массива используя цикл for..of. Массив numbers объявлен в Задании 7
// let sumForOf = 0;
// for (number of numbers) {
//     sumForOf += number;
// }
// console.log(sumForOf);

//Задание 13
// Выведите длину каждого слова из массива строк в консоль
// const list = ['apple', 'banana', 'cherry'];
// for (listItem of list) {
//     console.log(listItem.length);
// }

//Задание 15
// Подсчитайте количество гласных букв в строке
// Подсказка: вам понадобится метод includes
// const greeting = 'Hello, world!';
// let vowelCount = 0;
// const vowels = ['a', 'e', 'i', 'o', 'u'];
// for (let i = 0; i < greeting.length; i++){
//     for (let j = 0; j < vowels.length; j++) {
//         if (greeting[i].includes(vowels[j]) === true) {
//             vowelCount++;
//         }
//     }
// }
// console.log(vowelCount);

//Задание 16
// Объедините все строки массива в одну строку с пробелами между ними
// const words = ['Hello', 'world', '!'];
// console.log(words.join(' '));

//Задание 14
// Преобразуйте массив каждый элемент массива words в верхний регистр
// for (word of words) {
//     console.log(word.toUpperCase());
// }

//Задание 17
// Выведите числа от 1 до 10 в консоль используя цикл while
// while (i <= 10) {
//     console.log(i);
//     i++;
// }

//Задание 18
// Выведите числа от 1 до 10 в консоль в обратном порядке используя цикл while
// i = 10;
// while (i >= 1) {
//     console.log(i);
//     i--;
// }

//Задание 19
// Проверьте, все ли элементы массива являются положительными числами используя цикл while
// Подсказка: используйте директиву break
// const allNumbers = [1, 2, 3, -4, 5];
// let allPositive = true;
// allNumber = 0;
// while (allNumber < allNumbers.length) {
//     if (allNumbers[allNumber] < 0) {
//         allPositive = false;
//         break;
//     }
//     allNumber++;
// }
// console.log (allPositive);

//Задание 20
// Выведите значения элементов массива до первого отрицательного числа используя цикл do...while
// const random = [2, 4, 6, -3, 8, 10];
// let randomIndex = 0;
// do {
//     console.log(random[randomIndex]);
//     randomIndex++;
// } while (random[randomIndex] > 0);

//Задание 21
// Выведите числа от 1 до 100, пропуская числа, которые делятся на 3 используя цикл do...while
// let oneToHundred = 0;
// do {
//     if (oneToHundred % 3 != 0){
//         console.log(oneToHundred);
//     }
//     oneToHundred++;
// } while (oneToHundred <= 100); 

//Задание 22
// Запросить у пользователя числа, пока сумма введенных чисел не станет больше 100
// let userNumber;
// let userNumberSum = 0;
// while (userNumberSum < 100) {
//     userNumber = prompt('Введите число');
//     userNumberSum += +userNumber;
// }
// alert ('Сумма чисел больше 100!');


//Задание 23
// Напишите функцию, которая изменит фоновый цвет всех элементов <h4> на странице на синий цвет
// const h4 = document.querySelectorAll('h4');
// for (h4Item of h4) {
//     h4Item.style.background = 'blue';
// }

//Задание 24
// Напишите генератор случайных строк до 6 символов
// Подсказка: используйте методы объекта Math и длину массива alphabet
// let alphabet = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя';
// let randomString = '';
// let randomLength = Math.round(Math.random() * 6);
// for (let i = 0; i < randomLength; i++) {
//     randomString += alphabet[Math.round(Math.random() * (alphabet.length - 1))];
// }
// console.log(randomString);

