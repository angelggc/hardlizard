const fs = require('fs')
let preguntasFrecuentes = {
    bd: './data/faqs.json',
    titulo: "Preguntas Frecuentes.",
    leerJSON: function() {
        let faqsJson = fs.readFileSync(this.bd, 'utf-8');
        let faqs = JSON.parse(faqsJson);
        return faqs
    },
    cantidad: function() {
        return this.leerJSON().total_faqs
    },
    preguntas: function(){
        return this.leerJSON().faqs
    }
}
module.exports = preguntasFrecuentes