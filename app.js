const express = require('express');

const app = express();

const colors = [
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'purple'
  ];

const friends = [
    {first: 'blake', last: 'ross'},
    {first: 'nick', last: 'klein'},
    {first: 'mark', last: 'wickard'},
    {first: 'casey', last: 'schneider'},
    {first: 'sean', last: 'smalley'}
]

app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/cards', (req, res) => {
    res.render('card', { prompt: `Who is buried in Grant's tomb?` });
});


app.get('/hello', (req, res) => {
    //res.locals.prompt = `Who is buried in Grant's tomb?`;
    res.render('hello', { prompt: `Who is buried in Grant's tomb?`,  colors, friends });
});

app.listen(3000, ()=>{
    console.log(`the application is running locally on localhost:3000`);
});