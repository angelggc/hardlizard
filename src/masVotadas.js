const fs = require('fs')
let masVotadas = {
    bd: './data/movies.json',
    titulo: "Más Votadas",
    leerJSON: function() {
        let moviesJson = fs.readFileSync(this.bd, 'utf-8');
        let movies = JSON.parse(moviesJson);
        return movies
    },
    totalPelisMasVotadas: function(){
        let pelisJSON = this.leerJSON()
        let peliFiltrada = []
        pelisJSON.movies.forEach(peli => {
            if(peli.vote_average >= 7){
                peliFiltrada.push(peli)
            }
        })
        return peliFiltrada
    },
    ratings: function(){
        let ratingPelis = this.totalPelisMasVotadas()
        let listaRatings = []
        ratingPelis.forEach(peli =>{
            listaRatings.push(peli.vote_average)
        })
        return listaRatings
    },
    ratingPromedio: function(){
        let ratingSuma = 0
        let listaRating = this.ratings()
        listaRating.forEach(num => {
            ratingSuma = ratingSuma + num
        })
        let ratingFinal = ratingSuma / listaRating.length
        return ratingFinal
    }

}
module.exports = masVotadas