const fs = require('fs')
let sucursales ={
    bd: './data/theaters.json',
    titulo: "Nuestras Salas.",
    leerJSON: function() {
        let theatersJson = fs.readFileSync(this.bd, 'utf-8');
        let theaters = JSON.parse(theatersJson);
        return theaters
    },
    cantidad: function() {
        return this.leerJSON().total_theaters
    }

}
module.exports = sucursales