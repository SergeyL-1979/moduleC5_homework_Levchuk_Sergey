// Пример "2"

const jsonString = `
{
 "list": [
  {
   "name": "Petr",
   "age": "20",
   "prof": "mechanic"
  },
  {
   "name": "Vova",
   "age": "60",
   "prof": "pilot"
  }
 ]
}
`;

// console.log('jsonString', jsonString);

const data = JSON.parse(jsonString); // парсим
// console.log('data', data);
const list = data.list; // получаем масив

for (let i = 0; i < list.length; i++) { // перебором преоброзумем из строки в число поле 'age'
    list[i].age = Number(list[i].age)

}

console.log('list', list);