//Пишем скрипт, который выводит "привет, Вера!" только для каждого имени каждого одногруппника//
var classmates = ["Шматков Сергей Алексеевич", " Герасимов Руслан Дмитриевич", "Гордеев Павел Игоревич", "Шевцов Никита Романович", "Качанов Давид Борисович", "Шамырзаева Уулжан Маматеминовна", "Топоева Дарья Сергеевна"];
console.log("classmates");
for (var classmate of classmates) {  // перебор элементов
    console.log("Привет,", classmate);
}