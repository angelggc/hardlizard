let homePage = require("./homePage");
let enCartelera = require("./enCartelera");
let masVotadas = require("./masVotadas")
let sucursales = require("./sucursales")
let contacto = require("./contacto")
let preguntasFrecuentes = require("./preguntasFrecuentes")
const { write, rename } = require("fs");

let index ={
    homePage:function(res){
        res.write(homePage.titulo);
        res.write(`\nTotal de peliculas en cartelera: ${homePage.cantidad()}`)
        res.write("\n\n")
        let titulos = homePage.listarPelis()
        for(titulo of titulos){
            res.write(titulo)
            res.write("\n")
        }
        res.write("\n\n")
        res.write(`Recordá que podés visitar las secciones:
En Cartelera
Más Votadas
Sucursales
Contacto
Preguntas Frecuentes`)
        res.end()
    },
    enCartelera:function(res){
        res.write(enCartelera.titulo)
        res.write(`\nTotal de peliculas en cartelera: ${enCartelera.cantidad()}`)
        res.write(`\nLista de peliculas: \n`)
        let listaPelis = enCartelera.listarPelis()
        listaPelis.forEach(function(pelicula){
            res.write(`Titulo: ${pelicula.title}\n`)
            res.write(`Overview: ${pelicula.overview}\n\n`)
        })
        res.end()
    },
    masVotadas:function(res){
        res.write(masVotadas.titulo)
        let pelisFiltradas = masVotadas.totalPelisMasVotadas()
        let ratingPromedio = masVotadas.ratingPromedio()
        res.write(`\nTotal de peliculas: ${pelisFiltradas.length}`)
        res.write(`\nRating promedio: ${ratingPromedio}`)
        res.write(`\nLista de peliculas: \n`)
        pelisFiltradas.forEach(peli => {
            res.write(`Titulo: ${peli.title}\n`)
            res.write(`Rating: ${peli.vote_average}\n`)
            res.write(`Overview: ${peli.overview}\n\n`)
        });
        res.end()
    },
    sucursales:function(res){
        res.write(sucursales.titulo)
        res.write(`\nTotal de salas: ${sucursales.cantidad()}`)
        let sucursalesInfo = sucursales.leerJSON().theaters
        res.write(`\nListados de salas.\n\n`)
        sucursalesInfo.forEach(sucursal =>{
            res.write(`Nombre: ${sucursal.name}\n`)
            res.write(`Dirección: ${sucursal.description}\n`)
            res.write(`Descripción: ${sucursal.description}\n\n`)
        })
        res.end()
    },
    contacto:function(res){
        res.write(contacto.titulo)
        res.write("\n\n")
        res.write(contacto.contenido)
        res.end()

    },
    preguntasFrecuentes:function(res){
        res.write(preguntasFrecuentes.titulo)
        res.write(`\nTotal de preguntas: ${preguntasFrecuentes.cantidad()}`)
        res.write(`\nListados de preguntas.\n`)
        let preguntas = preguntasFrecuentes.preguntas();
        preguntas.forEach(faqs => {
            res.write(faqs.faq_title + "\n")
            res.write(faqs.faq_answer + "\n\n")
        })
        res.end()
    },
    default: function(res){
        res.write("No se encontro la pagina deseada :(")
        res.end()
    }

}
module.exports = index