const book01 = document.querySelectorAll('.book')[1];
console.log("book01", book01)
const book02 = document.querySelectorAll('.book')[0];
console.log("book02", book02)
const book03 = document.querySelectorAll('.book')[4];
console.log("book03", book03)
const book04 = document.querySelectorAll('.book')[3];
console.log("book04", book04)
const book05 = document.querySelectorAll('.book')[5];
console.log("book05", book05)
const book06 = document.querySelectorAll('.book')[2];
console.log("book06", book06)
const adv = document.querySelector('.adv');
console.log("adv", adv);
const body = document.querySelector('body');
console.log("body", body)
const book03a = document.querySelectorAll('h2')[4];
console.log("book03a", book03a)
const li = document.querySelectorAll('li');
console.log("li", li)
const newElem = document.createElement('li');
newElem.textContent = "Глава 8: За пределами ES6";

body.style.backgroundImage = 'url(https://sun9-43.userapi.com/c813024/v813024203/7c099/AXGcsThJxQo.jpg)';

book01.after(book02);
book05.after(book06);
book03.after(book04);



book03a.textContent = 'Книга 3. this и ПроТопипы Объектов'

adv.remove();

li[10].before(li[2])
li[7].after(li[9])
li[3].after(li[6])
li[4].before(li[8])
li[49].before(li[55])
li[50].after(li[48])
li[54].before(li[51])
li[26].before(newElem)







