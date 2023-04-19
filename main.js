const Block = require('./block');
const Blockchain = require('./blockchain');
//const blockchain = require('./blockchain');

//let block = new Block(0,"lo q sea", null);
//console.log(block);

const blockchain = new Blockchain("Hola a mi nueva cadena", "0000");
blockchain.addBlock("Data del segundo bloque");

console.log(blockchain);
console.log("hola".startsWith("h"));