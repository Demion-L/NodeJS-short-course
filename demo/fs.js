//File System
const fs = require("fs");
const path = require("path");

//Создание папки
// fs.mkdir(path.join(__dirname, 'test'), (err) => {
//    if (err) {
//       throw err
//    }
//    console.log('Папка создана');

// })

//Создание файла. Данный метод может перетирать уже существующие файлы.
const filePath = path.join(__dirname, "test", "text.txt");

// fs.writeFile(filePath, "Hello world", (err) => {
//   //'Hello world' - содержание файла text.txt
//   if (err) {
//     throw err;
//   }
//   console.log("Файл создан");
// });

//Данный метод ОБНОВЛЯЕТ ДАННЫЕ В ФАЙЛЕ
// fs.appendFile(filePath, "\nHello world -2", (err) => {
//   //'Hello world' - содержание файла text.txt
//   if (err) {
//     throw err;
//   }
//   console.log("Файл создан");
// });

//Метод чтения содержимого файлов
fs.readFile(filePath, "utf-8", (err, content) => {
  if (err) {
    throw err;
  }

  // const data = Buffer.from(content)
  // console.log('Content:', data.toString());
});
