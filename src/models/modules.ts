import mongoose, { Document } from 'mongoose'

export type Module = Document & {
  name: string
  startDate: Date
  endDate: Date
}

const moduleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  startDate: {
    type: Date,
  },
  endDate: {
    type: Date,
  },
})

// const ModuleModel = mongoose.model<Module>('Student', moduleSchema)

export default moduleSchema