import mongoose from 'mongoose'

const Schema = mongoose.Schema
	
const sampleSchema = new Schema({
  text: String,
  num: Number,
  status: Boolean,
})

const Sample = mongoose.model('Sample', sampleSchema)

export {
  Sample
}