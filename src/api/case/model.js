import mongoose, { Schema } from 'mongoose'

const caseObjSchema = new Schema({
  userId: {
    type: String
  },
  doctorId: {
    type: String
  },
  details: {
    type: String
  },
  symptoms: {
    type: String
  },
  readings: {
    type: String
  },
  caseStatus: {
    type: String
  },
  diagnosis: {
    type: String
  },
  prescription: {
    type: String
  }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

caseObjSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      userId: this.userId,
      doctorId: this.doctorId,
      details: this.details,
      symptoms: this.symptoms,
      readings: this.readings,
      caseStatus: this.caseStatus,
      diagnosis: this.diagnosis,
      prescription: this.prescription,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('Case', caseObjSchema)

export const schema = model.schema
export default model
