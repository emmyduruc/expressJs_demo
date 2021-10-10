import mongoose, { Document } from 'mongoose'

import moduleSchema, { Module } from './modules'

type MovieDocument = Document & {
  name: string
  startDate: Date
  students: string[]
  modules: Module[]
}

const classSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  startDate: {
    type: Date,
  },
  students: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Student',
    },
  ],
  modules: [moduleSchema],
})

const ClassModel = mongoose.model<MovieDocument>('Class', classSchema)

export default ClassModel