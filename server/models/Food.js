const {Schema, model} = require('mongoose')


const Food = new Schema({
	type: {type: String, required: true},
	name: {type: String, required: true, unique: true},
	foodAva: {type: String, required: true },
	desqription: {type: String, required: true},
	price: {type: Number, required: true},
})

module.exports = model('Food', Food)