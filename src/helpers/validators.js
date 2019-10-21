/*
 * Основная задача — написать самому, или найти в FP библиотеках функции anyPass/allPass
 * Эти функции/их аналоги есть и в ramda и в lodash
 *
 * allPass — принимает массив функций-предикатов, и возвращает функцию-предикат, которая
 * вернет true для заданного списка аргументов, если каждый из предоставленных предикатов
 * удовлетворяет этим аргументам (возвращает true)
 *
 * anyPass — то же самое, только удовлетворять значению может единственная функция-предикат из массива.
 *
 * Если функции будут написаны руками (без использования библиотеки) это не является ошибкой, например:
 *
 * const greaterThenOne = x => x > 1;
 * const length = x => x.length;
 * const lengthGreaterThenOne = compose(greaterThenOne, length);
 * Это — ок.
 *
 * Вот такая запись не очень хорошая, все таки потренируйтесь составлять композиции:
 * const lengthGreaterThenOne = x => x.length > 1;
 */

import { anyPass, allPass, replace, length, compose, test } from "ramda";

const replaceNumbers = replace(/[^0-9]/g, "");

const greaterThanLimit = limit => x => x > limit;
const lessThanLimit = limit => x => x < limit;

const containsOnlyEng = test(/^[a-zA-Z0-9.+]+$/);

/**
 * Функции для проверки выполнения условий с количеством цифр в строке
 */

const getNumbersCount = compose(
  length,
  replaceNumbers
);
const isNumbersAmountGreaterThanValue = x =>
  compose(
    greaterThanLimit(x),
    getNumbersCount
  );
const isNumbersAmountLessThanValue = x =>
  compose(
    lessThanLimit(x),
    getNumbersCount
  );

const isExists = number => string => string.indexOf(number) > -1;
const isNotExists = number => string => string.indexOf(number) === -1;

// console.log(getNumbersCount('123asd'))
/**
 * Функции для проверки выполнения условий с длиной строки
 */

const isLengthLessThanValue = x =>
  compose(
    lessThanLimit(x),
    length
  );
const isLengthGreaterThanValue = x =>
  compose(
    greaterThanLimit(x),
    length
  );

/**
 * Функции для проверки наличия конкретного символа в строке
 */

// 1. Длина < 5 и кол-во цифр > 2 шт.
const isValidN1 = allPass([
  isNumbersAmountGreaterThanValue(2),
  isLengthLessThanValue(5)
]);

export const validateFieldN1 = val => isValidN1(val);

// 2. Длина < 5 и кол-во цифр < 2 шт.
const isValidN2 = allPass([
  isNumbersAmountLessThanValue(2),
  isLengthLessThanValue(5)
]);

export const validateFieldN2 = val => isValidN2(val);

// 3. Длина > 5 или кол-во цифр > 1 шт.
const isValidN3 = allPass([
  isNumbersAmountGreaterThanValue(1),
  isLengthGreaterThanValue(5)
]);

export const validateFieldN3 = val => isValidN3(val);

// 4. Длина < 10 и кол-во цифр > 2 шт. и одна из цифр равна "4"
const isValidN4 = allPass([
  isNumbersAmountGreaterThanValue(2),
  isLengthLessThanValue(10),
  isExists(4)
]);

export const validateFieldN4 = val => isValidN4(val);

// 5. Длина < 10 и кол-во цифр > 1 шт. и ни одна из цифр не равна "4"
const isValidN5 = allPass([
  isNumbersAmountGreaterThanValue(1),
  isLengthLessThanValue(10),
  isNotExists(4)
]);

export const validateFieldN5 = val => isValidN5(val);

// 6. Длина > 5, или одна из цифр равна "7"
const isValidN6 = anyPass([isLengthGreaterThanValue(5), isExists(7)]);

export const validateFieldN6 = val => isValidN6(val);

// 7. Длина > 8 и кол-во цифр > 3 шт. и только англ
const isValidN7 = allPass([
  isNumbersAmountGreaterThanValue(3),
  isLengthGreaterThanValue(8),
  containsOnlyEng
]);

export const validateFieldN7 = val => isValidN7(val);

// 8. Кол-во цифр < 5 шт. или только англ или одна из цифр равна "7"
const isValidN8 = anyPass([
  isNumbersAmountLessThanValue(5),
  containsOnlyEng,
  isExists(7)
]);

export const validateFieldN8 = val => isValidN8(val);

// 9. Длина < 8, кол-во цифр > 4 шт. только англ
const isValidN9 = allPass([
  isNumbersAmountGreaterThanValue(4),
  isLengthLessThanValue(8),
  containsOnlyEng
]);

export const validateFieldN9 = val => isValidN9(val);

// 10. Длина < 4 или кол-во цифр > 2 шт. или только англ
const isValidN10 = anyPass([
  isNumbersAmountGreaterThanValue(2),
  containsOnlyEng,
  isLengthLessThanValue(4)
]);

export const validateFieldN10 = val => isValidN10(val);
