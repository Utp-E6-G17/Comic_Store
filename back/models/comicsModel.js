const mongoose = require("mongoose"); 

const comicSchema = mongoose.Schema({
    isbn:String,
    titulo:String,
    volumen:String,
    descripcion:String,
    genero:String,
    precio:Number
})

module.exports = mongoose.model("comics",comicSchema);