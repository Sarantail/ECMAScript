// Задание 1. Получение данных о пользователе.

// Реализуйте функцию getUserData, которая принимает идентификатор пользователя (ID) в качестве аргумента 
// и использует fetch для получения данных о пользователе с заданным ID с удаленного сервера.
// Функция должна возвращать промис, который разрешается с данными о пользователе в виде объекта.Если пользователь с указанным ID не найден,
// промис должен быть отклонен с соответствующим сообщением об ошибке.

// Подсказка, с последовательностью действий:
// getUserData использует fetch для получения данных о пользователе с удаленного сервера. Если запрос успешен (с кодом 200), 
// функция извлекает данные из ответа с помощью response.json() и возвращает объект с данными о пользователе.
// Если запрос неуспешен, функция отклоняет промис с сообщением об ошибке.

// Работа должна быть выполнена с API: https://reqres.in/
async function getUserData(idsearch) {
    url = 'https://api.github.com/users';
    console.log(url);
    const response = await fetch(url)
    .then(async (response) => {
        let index;
        if (response.ok) {
        const answer = await response.json().then((answer) => {
            index = answer.findIndex((p) => p.id == idsearch);
            if (index < 0)
            console.log(
                `Ошибка - пользователь с таким id = ${idsearch} не найден`
            );
            else console.log(answer[index]);
        });
        } else console.log(`Ошибка -  неправильный запрос`);
    })
    .catch((error) => {
        console.log('Произошла ошибка:');
        console.log(error.message);
    });
}
getUserData('10');


// Задание 2. Отправка данных на сервер.

// Реализуйте функцию saveUserData, которая принимает объект с данными о пользователе в качестве аргумента 
// и использует fetch для отправки этих данных на удаленный сервер для сохранения.
// Функция должна возвращать промис, который разрешается, если данные успешно отправлены, или отклоняется в случае ошибки.

const user = {
    name: 'John Smith',
    age: 30,
    email: 'john@example.com',
};
const saveUserData = async (user) => {
    url = 'https://api.github.com/users';
    const response = await fetch(url, {
    method: 'post',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
    }).then((response) => {
    if (response.status === 200) {
        return response;
    } else {
        throw new Error('Not saved');
    }
    });
};
const response = saveUserData(user)
    .then((response) => {
    if ((response.status = 'ok')) {
        console.log('User data saved successfully');
    }
    })
    .catch((error) => {
    console.log(error.message);
    });
