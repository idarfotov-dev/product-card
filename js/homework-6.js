// Объект с личными данными пользователя (Имя, возрост, город, работа и т.д)

const userProfile = {
    firstName: 'Idar',
    lastName: 'Fotov',
    age: 21,
    email: 'idarfotov.dev@gmail.com',
    country: 'Russia',
    city: 'Nalchik',
    job: 'Frontend Developer',
    maritalStatus: 'Single'
};

// Объект автомобиля с характеристиками и добавленным владельцем (Объект userProfile)

const car = {
    brand: 'BMW',
    model: '8 Series',
    year: 2021,
    color: 'Black',
    transmission: 'Automatic'
};

car.carOwner = userProfile;

// Функция проверяет наличие свойства "Максимальная скорость" и добавляет его при отсутствии

function ensureMaxSpeed(obj) {
    if("maxSpeed" in obj) return;
        obj.maxSpeed = 320;
}

ensureMaxSpeed(car);

// Фунция возвращает значение указанного свойства объекта

function showObjcetValue(object, property) {
    console.log(property);
}

showObjcetValue(car, car.color);

// Массив названий продуктов

const products = ['milk', 'bread', 'eggs', 'rice', 'apples'];

// Массив книг (Объекты с характеристикаими)

const books = [
    {
        title: 'The Alchemist',
        author: 'Paulo Coelho',
        year: 1988,
        coverColor: 'gold',
        genre: 'philosophical fiction'
    },
    {
        title: '1984',
        author: 'George Orwell',
        year: 1949,
        coverColor: 'black',
        genre: 'dystopian'
    },
    {
        title: 'To Kill a Mockingbied',
        author: 'Harper Lee',
        year: 1960,
        coverColor: 'blue',
        genre: 'classic'
    },
    {
        title: 'Harry Potter and the Scorcerers Stone',
        author: 'J.K. Rowling',
        year: 1997,
        coverColor: 'red',
        genre: 'fantasy'
    },
    {
        title: 'The Hobbit',
        author: 'J.R.R. Tolkien',
        year: 1937,
        coverColor: 'green',
        genre: 'fantasy'
    }
];

books.push({
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    year: 1925,
    coverColor: 'yellow',
    genre: 'classic'
});

// Второй массив книг одной вселенной и обеъединение двух массивов в один

const marvelBooks = [
    {
        title: 'Spider-Man: Origin',
        author: 'Stan Lee',
        year: 1962,
        coverColor: 'red-blue',
        genre: 'superhero'
    },
    {
        title: 'Iron-Man: Armored Hero',
        author: 'Stan Lee',
        year: 1963,
        coverColor: 'gold-red',
        genre: 'superhero'
    },
    {
        title: 'Black Panther: King of Wakanda',
        author: 'Stan Lee',
        year: 1966,
        coverColor: 'black-gold',
        genre: 'superhero'
    }
];

const library = [...books, ...marvelBooks];

// Функция добаляет свойство isRare в зависимости от года выпуска книги

const updatedLibrary = library.map(book => {
    return {...book, isRare: book.year <= 1950}
});

console.log(updatedLibrary);