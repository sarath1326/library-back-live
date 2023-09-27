

const mongoosh= require("mongoose")




module.exports={

    products_schema:new mongoosh.Schema({

        
    filename: {
        type: String,
        unique: true,
        require: true
    },

    contentType: {
        type: String,
        require: true

    },

    imageBase64: {

        type: String,
        require: true

    },

    name: String,
    author: String,
    language: String,
    price: Number,
    publisher: String,
    cotegory: String,
    type: String,
    rating:String






    })


}
 




   

