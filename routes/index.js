const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const name = req.cookies.username;
    if (name) {
        res.render('index', {name});
    } else {
        res.redirect('/hello')
    }
});






router.get('/hello', (req, res) => {
    const name = req.cookies.username;
    if (name) {
        res.redirect('/');
    } else {
        res.render('hello');
    }
});

router.post('/hello', (req, res) => {
    res.cookie('username', req.body.username);
    res.redirect('/')
});

router.post('/goodbye', (req, res)=>{
    res.clearCookie('username', req.body.username);
    res.redirect('/hello');
});

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

router.get('/test', (req, res) => {
    //res.locals.prompt = `Who is buried in Grant's tomb?`;
    res.render('test', { prompt: `Who is buried in Grant's tomb?`,  colors, friends });
});

module.exports = router;