import mongoose, { Schema } from 'mongoose'

const userSchema = new Schema({
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
  age: {
    type: Number
  },
  gender: {
    type: String
  },
  password: {
    type: String
  },
  bloodGroup: {
    type: String
  },
  height: {
    type: Number
  },
  weight: {
    type: Number
  },
  userType: {
    type: String
  },
  profilePicture: {
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

userSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      name: this.name,
      email: this.email,
      mobileNumber: this.mobileNumber,
      age: this.age,
      gender: this.gender,
      password: this.password,
      bloodGroup: this.bloodGroup,
      height: this.height,
      weight: this.weight,
      userType: this.userType,
      profilePicture: this.profilePicture,
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

const model = mongoose.model('User', userSchema)

export const schema = model.schema
export default model
