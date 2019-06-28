const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

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
    res.render('hello');
});

app.post('/hello', (req, res) => {
    res.cookie('username', req.body.username);
    res.render('hello', { name: req.body.username })
});

app.get('/test', (req, res) => {
    //res.locals.prompt = `Who is buried in Grant's tomb?`;
    res.render('test', { prompt: `Who is buried in Grant's tomb?`,  colors, friends });
});

app.listen(3000, ()=>{
    console.log(`the application is running locally on localhost:3000`);
});