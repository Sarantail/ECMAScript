// 1) Дан массив const arr = [1, 5, 7, 9] с помощью Math.min и spread оператора, найти минимальное число в массиве,
// решение задание должно состоять из одной строки
const arr = [1, 5, 7, 9]
let min = Math.min(...arr);
console.log(min);

// 2) Напишите функцию createCounter, которая создает счетчик и возвращает объект с двумя методами: increment и decrement.
// Метод increment должен увеличивать значение счетчика на 1, а метод decrement должен уменьшать значение счетчика на 1.
// Значение счетчика должно быть доступно только через методы объекта, а не напрямую.
let counter = 0;
function createCounter() {
	console.log(counter++)
	console.log(counter--);
}

// 3) Напишите рекурсивную функцию findElementByClass, которая принимает корневой элемент дерева DOM и название класса в качестве аргументов
// и возвращает первый найденный элемент с указанным классом в этом дереве.
function findElementByClass(sourceElement, className){
    let element = sourceElement; 

    while(element !== document.body){
        if(element.classList.contains('.title')){
            break;
        }
        element = element.parentNode;
    }
    return element;
}