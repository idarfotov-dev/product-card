import { commentsList } from "./comments.js";

// Создание массива чисел от 1 до 10 и фильтрация элементов, оставляя только числа начиная с 5

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const filteredNumbers = numbers.filter(item => item >= 5);

// Создание массива строк и проверка наличия конкретного элемента в массиве

const movies = [
  "Inception",
  "Interstellar",
  "The Dark Knight",
  "Gladiator",
  "The Matrix",
  "Avatar"
];

const hasMovie = movies.includes("Interstellar");

// Функция для разворота массива в обратном порядке (переворачивания массива)

const reverseArray = (array) => {
    array.reverse();
};

reverseArray(numbers);
reverseArray(movies);

// Фильтрация массива комментариев по email пользователей, содержащих домен ".com"

const commentsWithDotComEmails = commentsList.filter(commentsList => commentsList.email.includes(".com"));

//  Изменение массива комментариев: установка postId в зависимости от значения id пользователя

const updatedPostIds = commentsList.map(item => ({...item, postId: item.id <= 5 ? 2 : 1}));

// Преобразование массива комментариев в новый массив, содержащий только id и имя пользователя

const usersBasicInfo = commentsList.map(item => ({id: item.id, name: item.name}));

// Добавление каждому объекту массива свойства isInvalid в зависимости от длины текста сообщения

const markLongBodies = commentsList.map(item => ({...item, isInvalid: item.body.length > 180}));

// Использование методов reduce и map для получения массива email-адресов из массива комментариев

const emailsReduce = commentsList.reduce((acc, item) => {
    acc.push(item.email)
    return acc
}, []);

const emailsMap = commentsList.map(item => item.email);

// Преобразование массива в строку с использованием методов toString и join

const emailsToString = emailsReduce.toString();
const emailsJoinString = emailsMap.join(", ");