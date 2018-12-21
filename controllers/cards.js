const knex = require("../db/knex.js");

module.exports = {
  // CHANGE ME TO AN ACTUAL FUNCTION
  index: function(req, res) {
    knex('cards')
      .orderBy('created_at', 'DESC')
    .then(results => {
      res.render('new-card-form', {cards: results, deck: req.session.deck || [] })
    })
    
  },
  createNewCard: (req, res) => {
    knex('cards')
      .insert(req.body)
    .then(() => {
      res.redirect('/')
    })
  },
  addToDeck: (req, res) => {
    
    if(!req.session.deck) {
      req.session.deck = [];
      req.session.deck.push(parseInt(req.params.card_id));
      req.session.save(()=> {
        res.redirect('/')
      })
      //the below logic makes sure a user can't add the same card more than twice
    } else if(req.session.deck.filter(card => card === parseInt(req.params.card_id)).length <= 1) {
      req.session.deck.push(parseInt(req.params.card_id));
      req.session.save(()=> {
        res.redirect('/')
      })
    } else {
      res.redirect('/')
    }
    // console.log(req.session.deck.filter(card => card === parseInt(req.params.card_id)))
    
  },
  removeFromDeck: (req, res) => {
    req.session.deck.splice(req.params.index, 1);
    req.session.save(()=> {
      res.redirect('/')
    })
  }
}
