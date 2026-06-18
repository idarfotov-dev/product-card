import { commentsList } from "./comments.js";

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const filteredNumbers = numbers.filter(item => item >= 5);

const movies = [
  "Inception",
  "Interstellar",
  "The Dark Knight",
  "Gladiator",
  "The Matrix",
  "Avatar"
];

const hasMovie = movies.includes("Interstellar");

const reverseArray = (array) => {
    array.reverse();
};

reverseArray(numbers);
reverseArray(movies);

const commentsWithDotComEmails = commentsList.filter(commentsList => commentsList.email.includes(".com"));

const updatedPostIds = commentsList.map(item => ({...item, postId: item.id <= 5 ? 2 : 1}));

const usersBasicInfo = commentsList.map(item => ({id: item.id, name: item.name}));

const markLongBodies = commentsList.map(item => ({...item, isInvalid: item.body.length > 180}));

const emailsReduce = commentsList.reduce((acc, item) => {
    acc.push(item.email)
    return acc
}, []);

const emailsMap = commentsList.map(item => item.email);

const emailsToString = emailsReduce.toString();
const emailsJoinString = emailsMap.join(", ");