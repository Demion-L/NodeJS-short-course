const path = require('path');

console.log('Название файла:', path.basename(__filename));

console.log('Название директории:', path.dirname(__filename));

console.log('Расширение файла:', path.extname(__filename));

console.log('Parse:', path.parse(__filename).name);

//Создание пути до файла
console.log(path.join(__dirname, 'server', 'index.html'));


