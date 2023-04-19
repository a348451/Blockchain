const SHA256 = require('crypto-js/sha256');



class Block{
    //Index = Posición del bloque en la cadena.
    //Data = El contenido de la cadena de bloques.
    //previousHash = Valor del bloque anterior en la cadena.
    //date = Fecha de creación del bloque.
    //hash = validación como cadena original
    //nounce = Numero aleatorio
        constructor(index, data, previousHash = ''){
        this.index = index;
        this.data = data;
        this.previousHash = previousHash;
        this.date = new Date();
        this.hash = this.createdHash();
        this.nounce = 0;
    }

    createdHash(){
        const originalChain = `${this.index} ${this.data} ${this.date} ${this.nounce}`;
        return SHA256(originalChain).toString();
    }

    mine(dif){
        while(!this.hash.startsWith(dif)){
            this.nounce++;
            this.hash = this.createdHash();
        }
    }
}

module.exports = Block;
//Cifrados
//Simetricos y asimetricos

//SHA algoritmo simetrico e irreversible