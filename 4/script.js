// Задание 1: "Управление библиотекой книг"

// Реализуйте класс Book, представляющий книгу, со следующими свойствами и методами:

// Свойство title (название) - строка, название книги.
// Свойство author (автор) - строка, имя автора книги.
// Свойство grade (количество страниц) - число, количество страниц в книге.
// Метод displayInfo() - выводит информацию о книге (название, автор и количество страниц).
        class Book {
            constructor(title, author, grade) {
                this.title = title;
                this.author = author;
                this.grade = grade;
            }
            displayInfo() {
                console.log(book.title); 
                console.log(book.author); 
                console.log(book.grade); 
            }
        }

        let book = new Book('Евгений Онегин', 'А.С.Пушкин', 288);



// Задание 2: "Управление списком студентов"
// Реализуйте класс Student, представляющий студента, со следующими свойствами и методами:

// Свойство name (имя) - строка, имя студента.
// Свойство age (возраст) - число, возраст студента.
// Свойство grade (класс) - строка, класс, в котором учится студент.
// Метод displayInfo() - выводит информацию о студенте в консоль.
        class Student {
            constructor(name, age, grade) {
                this.name = name;
                this.age = age;
                this.grade = grade;
            }
            displayInfo() {
                console.log(book.name); 
                console.log(book.age); 
                console.log(book.grade); 
            }
        }

        let student = new Student('Вова', 20, 2);