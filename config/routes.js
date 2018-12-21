//Update the name of the controller below and rename the file.
const cards = require("../controllers/cards.js")
module.exports = function(app){

  app.get('/', cards.index);
  app.get('/deck/:card_id', cards.addToDeck)

  app.get('/removeCard/:index', cards.removeFromDeck)

  app.post('/cards', cards.createNewCard);

}
