const fetch =(url , callback)=>{
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = ()=>{
    if (xhr.readystate === 4){
      if (xhr.status===200){
        callback(JSON.parse(xhr.ResponseText));

      }else{
      console.log('error');

      }
    }

  }
  xhr.open('POST', url, true);
  xhr.send(JSON.stringify(info));
};
const data =[ { id: 1, book_name: 'Eloquent JavaScript', year: 2017, author: 'Marijn Haverbeke' }, { id: 2, book_name: 'You Dont Know JS', year: 2014, author: 'Kyle Simpson' }, { id: 3, book_name: 'Automate the Boring Stuff with Python', year: 2015, author: 'Al Sweigart' }, { id: 4, book_name: 'Think Python', year: 2015, author: 'Allen B. Downey' }, { id: 5, book_name: 'JavaScript Patterns', year: 2010, author: 'Stoyan Stefanov' }, { id: 6, book_name: ' Hard Times ', year: 1850, author: ' charles Dickens ' } ]
const form = document.querySelctor('#form');
const book = ["name","author","date of deploy"]
body.addEventListener('load',(e)=>{
  fetch('/books',(data))=>{

const books =document.querySelector()
const book = document.createElement('ul');
data.forEach(function (item) {
  const name= document.createElement('li');
  li.textContent = item.name;
    const year= document.createElement('li');
  li.textContent = item.year;
  const auther= document.createElement('li');
  li.textContent = item.author;
  books.apendChiled(name);
    books.apendChiled(year);
      books.apendChiled(author);





})










  }

}
