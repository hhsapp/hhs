import mongoose, { Schema } from 'mongoose'

const doctorSchema = new Schema({
  name: {
    type: String
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  mobileNumber: {
    type: String
  },
  password: {
    type: String
  },
  gender: {
    type: String
  },
  userType: {
    type: String
  },
  profilePicture: {
    type: String
  },
  age: {
    type: Number
  },
  experience: {
    type: Number
  },
  hospitalName: {
    type: String
  },
  specalities: {
    type: String
  },
  education: {
    type: String
  },
  fcmId: {
    type: String
  }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

doctorSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      name: this.name,
      email: this.email,
      mobileNumber: this.mobileNumber,
      password: this.password,
      gender: this.gender,
      userType: this.userType,
      profilePicture: this.profilePicture,
      age: this.age,
      experience: this.experience,
      hospitalName: this.hospitalName,
      specalities: this.specalities,
      education: this.education,
      fcmId: this.fcmId,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('Doctor', doctorSchema)

export const schema = model.schema
export default model
