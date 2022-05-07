const Trello = require("./main");
require('dotenv').config();

const apiKey= process.env.KEY;
const apiToken = process.env.TOKEN;
const IdList = "627434be1d87ee2b2a7d6839";

var trello = new Trello(apiKey, apiToken);
var cardTitle = `Card Nueva ${new Date()}`;

// console.log(apiKey, apiToken);
console.log("Ejecutando!");
// console.log(trello);

trello.addCard(cardTitle, "LaunchX Card Description", IdList,
  function (error, trelloCard) {
    if (error) {
      console.log('Could not add card:', error);
    }
    else {
      console.log('Added card:', trelloCard);
    }
  });
