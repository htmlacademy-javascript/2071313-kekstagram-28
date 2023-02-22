// Функция для проверки длины строки

const checkStringLength = (string, number) => string.length <= number;

checkStringLength('проверяемая строка', 20);


// Функция для проверки, является ли строка палиндромом

const isPalindrom = (string) => {
  const forwardString = string
    .toLowerCase()
    .replaceAll(' ', '');

  let reverseString = '';
  for (let i = forwardString.length - 1; i >= 0; i--) {
    // reverseString += forwardString.at(i);
    reverseString = reverseString + forwardString.at(i);
  }

  return forwardString === reverseString;

};

isPalindrom('Кекс');


// Функция, которая принимает строку, извлекает содержащиеся в ней цифры от 0 до 9 и возвращает их в виде целого положительного числа

const extractNumber = (string) => {
  let result = '';
  for (let i = 0; i < string.length; i++) {
    if (!Number.isNaN(parseInt(string.at(i), 10))) {
      result += string.at(i);
    }
  }

  return parseInt(result, 10);
};

extractNumber('2023 год');

