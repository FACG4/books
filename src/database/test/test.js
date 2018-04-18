const tape = require('tape');
const run_Build = require('../db_build');
const getBooks = require('../queries/getbooks');
const insertbooks = require('../queries/insertbooks');
const reserve = require('../queries/reserve');

tape("tape is working", t => {
  t.equals(1, 1, "one equals one");
  t.end();
});

tape('getBooks function test', (t)=> {
  run_Build(function(err, res){
  t.error(err , "error in response");
  const expected = {id: 1 ,book_name:'Eloquent JavaScript' , year :2017,author:'Marijn Haverbeke'};
  getBooks.getBooks((err,result) => {
    if(err)
    console.log(err);
  t.deepEqual( result[0], expected,"expected return the first row from books table");
  t.end();
});
});
});

tape('getBooksReserve function test', (t)=> {
  run_Build(function(err, res){
  t.error(err , "error in response");
  const expected = {id: 1 ,book_name:'Eloquent JavaScript' , year :2017,author:'Marijn Haverbeke',id: 1, user_id:1,

  book_id: 1,start_date: '2018-01-05',end_date: '2018-02-15'
};
  getBooks.getBooksReserve((err,result) => {
    if(err)
    console.log(err);
  t.deepEqual( result[0], expected,"expected equal actual");
  t.end();
});
});
});


tape('reservee function test', (t)=> {
  run_Build(function(err, res){
  t.error(err , "error in response");
  const expected = {id:5  ,book_name:'JavaScript Patterns' , year :2010,author:'Stoyan Stefanov',id: 1, user_id:1,
  id: null,user_id:null,book_id:null ,start_date:null,end_date:null};
reserve.reserve((err,result) => {
    if(err)
    console.log(err);
  t.deepEqual( result[0], expected,"expected equal actual");
  t.end();
});
});
});
