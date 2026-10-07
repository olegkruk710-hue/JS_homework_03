// Задача 1. Анализ строки Создайте функцию analyzeText(text), 
// которая принимает строку и выводит: 
// • Строку без пробелов в начале и конце. 
// • Количество символов после удаления этих пробелов. 
// • Эту же строку в верхнем и нижнем регистре. 
// • Есть ли в строке слово «javascript» — независимо от регистра букв. 
// Проверьте функцию на трёх строках: 
// "  Я изучаю JavaScript  " "Сегодня хороший день" "  JAVASCRIPT — это интересно  " 
// Для первой строки должно получиться: 
// «Я изучаю JavaScript», 18 символов, «Я ИЗУЧАЮ JAVASCRIPT», «я изучаю javascript», true. 
// Подсказка: пригодятся trim(), toUpperCase(), toLowerCase(), includes() и свойство length. 

function analyzeText(text) {
    text = text.trim();
    console.log(text);
    console.log(`${text.length} символов`);
    console.log(text.toUpperCase());
    console.log(text.toLowerCase());
    if (text.toLowerCase().includes("javascript")) {
        console.log(true);
    } else {
        console.log(false);
    }
    
}

let stringArray = ["  Я изучаю JavaScript  ", "Сегодня хороший день", "  JAVASCRIPT — это интересно  "];
stringArray.forEach(function(string) {
    analyzeText(string);
})




// Задача 2. Класс «Заметка» Создайте класс Note, который хранит заголовок и текст заметки. 
// • Объявите приватное поле #text. Заголовок храните в обычном поле title. 
// • В constructor(title, text) сохраните заголовок и текст. 
// • Добавьте метод getText(), который возвращает текст из #text. 
// • Добавьте метод setText(newText). Удалите пробелы по краям новой строки. 
// Если строка пустая, выведите «Текст не должен быть пустым» и сохраните прежний текст. 
// Иначе запишите новую строку в #text. 
// • Добавьте метод showInfo(), который выводит заголовок, текст и количество символов в тексте. 
// Проверка: создайте две заметки с разными заголовками и текстами. Выведите информацию о каждой. 
// У первой заметки измените текст на «  Повторить методы строк  » и выведите результат через getText(). 
// Затем передайте в setText() строку из одних пробелов: предыдущий текст должен сохраниться. 
// Вторая заметка должна остаться без изменений. 
// Подсказка: внутри класса обращайтесь к приватному полю через this.#text. Снаружи используйте методы объекта. 


class Note {
    #text;
    constructor(title, text) {
        this.title = title;
        this.#text = text;
    }

    getText() {
        console.log(this.#text);
    }

    setText(newText) {
        newText = newText.trim();
        if (!newText) {
            console.log("Текст не должен быть пустым!");
        } else {
            this.#text = newText;
        }
    }

    showInfo() {
        console.log(this.title);
        console.log(this.#text);
        console.log(`${this.#text.length} символов в строке`);
    }
}


let note_1 = new Note("Строки", "изучаем строки и их методы");
let note_2 = new Note("ООП", "изучаем классы, инкапсуляцию, конструктор");

[note_1, note_2].forEach(function(element) {
    element.showInfo();
})

note_1.setText("  Повторить методы строк  ");
note_1.getText();
note_2.setText("           ");
note_2.getText();

