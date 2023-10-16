var mongoose = require('mongoose');

let carSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        name: {
            type:String,
            required: true
        },
        price: {
            type : Number , 
            required : true,
            min : 1
            
        },
        image: {
            type: String,
            required: true
        },
        quantity: {
            type: Number,
            min: 0
        }
    }
);

var CarsModel = mongoose.model('cars', carSchema, 'cars');

module.exports = CarsModel;
