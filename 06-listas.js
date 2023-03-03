var compra = ["leche","harina","queso","tomate","levadura"]
compra.push("aceite de girasol")
compra.pop()

const peliculas = [
    {
        titulo : "El club de la pelea",
        director: "David Fincher",
        fecha: new Date (1999,11,4)
    },
    {
        titulo : "Dia de entrenamiento",
        director: "Antoine Fuqua",
        fecha: new Date (2001,10,6)
    },   {
        titulo : "Joker",
        director: "Tood Phillips",
        fecha: new Date (2019,10,4)
    }
]
const nuevaPeli = peliculas.filter((pelis)=>pelis.fecha> new Date(2010,0,1))
const directores = peliculas.map((pelis)=>pelis.director) 
const titulos = peliculas.map((tit)=>tit.titulo)
const concatDyT= directores.concat(titulos)
const propagDyT = [...directores,...titulos]


console.log(nuevaPeli)
console.log(directores)
console.log(titulos)
console.log(concatDyT)
console.log(propagDyT)
