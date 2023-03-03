// Функция для проверки длины строки

// const checkStringLength = (string, number) => string.length <= number;

// checkStringLength('проверяемая строка', 20);


// Функция для проверки, является ли строка палиндромом

// const isPalindrom = (string) => {
//   const forwardString = string
//     .toLowerCase()
//     .replaceAll(' ', '');

//   let reverseString = '';
//   for (let i = forwardString.length - 1; i >= 0; i--) {
//     // reverseString += forwardString.at(i);
//     reverseString = reverseString + forwardString.at(i);
//   }

//   return forwardString === reverseString;

// };

// isPalindrom('Кекс');


// Функция, которая принимает строку, извлекает содержащиеся в ней цифры от 0 до 9 и возвращает их в виде целого положительного числа

// const extractNumber = (string) => {
//   let result = '';
//   for (let i = 0; i < string.length; i++) {
//     if (!Number.isNaN(parseInt(string.at(i), 10))) {
//       result += string.at(i);
//     }
//   }

//   return parseInt(result, 10);
// };

// extractNumber('2023 год');

// Новая задачка

// const names = [
//   'Иван',
//   'Хуан Себастьян',
//   'Мария',
//   'Кристоф',
//   'Виктор',
//   'Юлия',
// ];

// const comments = [
//   'Всё отлично!',
//   'В целом всё неплохо. Но не всё.',
//   'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
//   'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
//   'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
//   'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
// ];

// const description = [
//   'Санаторий у побережья моря',
//   'Дорога на пляж',
//   'Голубая лагуна',
//   'Красотка',
//   'Время перекусить',
//   'Тачка мечты',
// ];

// const getRandomInteger = (a, b) => {
//   const lower = Math.ceil(Math.min(a, b));
//   const upper = Math.floor(Math.max(a, b));
//   const result = Math.random() * (upper - lower + 1) + lower;
//   return Math.floor(result);
// };

// const getRandomElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

// const createObject = () => ({
//   name: getRandomElement(names),
//   comments: getRandomElement(comments),
//   description: getRandomElement(description),
// });

// const similarObject = Array.from({length: 25}, createObject);

// console.log(
//   similarObject
// );
