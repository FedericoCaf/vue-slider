const fotoArray = ['img/01.jpg','img/02.jpg','img/03.jpg','img/04.jpg','img/05.jpg'];
const title = ['Svezia','Svizzera','Gran Bretagna','Germania', 'Paradise'];
const text = [
  'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
  'Lorem ipsum',
  'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
  'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
  'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,'
];

const boxLeft = document.querySelector('.box-left');
const boxRight = document.querySelector('.box-right');
const textArea = document.querySelector('.text-area');
let contatore = 0;

for(let i=0; i<fotoArray.length; i++){

  const item = document.createElement('div');
  const miniItem = document.createElement('div');
  const titleItem = document.createElement('h4');
  const newsItem = document.createElement('p');

  item.className = 'fc-item';
  miniItem.className = 'item-mini';
  titleItem.className = 'title-item';
  newsItem.className = 'news-item';

  if(i=== contatore){
    item.classList.add('active');
    miniItem.classList.add('active');
    titleItem.classList.add('active');
    newsItem.classList.add('active');
  } 
  item.innerHTML = `<img src="${fotoArray[i]}" alt="">`;
  miniItem.innerHTML = `<img src="${fotoArray[i]}" alt="">`;
  titleItem.innerHTML = `${title[i]}`;
  newsItem.innerHTML = `${text[i]}`;

  console.log(title[i]);

  boxLeft.append(item);
  boxRight.append(miniItem);
  textArea.append(titleItem);
  textArea.append(newsItem);
}

const items = document.getElementsByClassName('fc-item');
const boxMini = document.getElementsByClassName('item-mini');
const titleItem = document.getElementsByClassName('title-item');
const newsItem = document.getElementsByClassName('news-item');

// console.log(items);
// console.log(items[contatore]);

const prev = document.querySelector('.fc-prev');
const next = document.querySelector('.fc-next');

prev.addEventListener('click', function(){
 items[contatore].classList.remove('active');
 boxMini[contatore].classList.remove('active');
 titleItem[contatore].classList.remove('active');
 newsItem[contatore].classList.remove('active');

 contatore = contatore - 1;
 if(contatore < 0) contatore = items.length - 1;

 items[contatore].classList.add('active');
 boxMini[contatore].classList.add('active');
 titleItem[contatore].classList.add('active');
 newsItem[contatore].classList.add('active');
//  console.log(items);
//  console.log(boxMini);
})
next.addEventListener('click', function(){
  items[contatore].classList.remove('active');
  boxMini[contatore].classList.remove('active');
  titleItem[contatore].classList.remove('active');
  newsItem[contatore].classList.remove('active');
 
  contatore = contatore + 1;
  if(contatore > (items.length - 1)) contatore = 0;
 
  items[contatore].classList.add('active');
  boxMini[contatore].classList.add('active');
  titleItem[contatore].classList.add('active');
  newsItem[contatore].classList.add('active');
  // console.log(items);
 })
