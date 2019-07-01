const express = require('express');
const router = express.Router();
const { data } = require('../data/flashCardData.json');
const { cards } = data;

router.get('/', (req, res)=>{
    const flashCardId = Math.floor(Math.random()*data.cards.length);
    res.redirect(`/cards/${flashCardId}?side=question`);
});

router.get('/:id', (req, res) => {
    const {id} = req.params;
    const {side} = req.query;
    if (!side) {
        return res.redirect(`/cards/${id}?side=question`);
    }
    const name = req.cookies.username;
    const text = cards[id][side];
    const {hint} = cards[id];
    const templateData = {id, text, name, side};
    if (side === 'question') {
        templateData.hint = hint
    }
    // res.locals.name = name;
    // res.locals.side = side;
    // res.locals.id = id;
    res.render('card', templateData);
});





module.exports = router;