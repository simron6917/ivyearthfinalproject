import mongoose from 'mongoose'

const reviewSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    rating: { type: Number, required: true },
    comment: { type: String, required: true },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
  },
  {
    timestamps: true,
  }
)

const productSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    name:{
      type:String,
      required:true
  },
  genus:{
      type:String,
      required:true
  },
  type:{
      type:String,
      required:true
  },
  light:{
      type:String,
      required:true
  },
  description:{
      type:String,
      required:true,
  },
  image:{
      type:String,
      required:true,
  },
  propagation:{
      type:String,
      required:true,
  },
  height:{
      type:String,
      required:true
  },
  width:{
      type:String,
      required:true,
  },
  flower_color:{
      type:String,
      required:true,
  },
  foliage_color:{
      type:String,
      required:true,
  },
  problem_solvers:{
      type:String,
      required:true,
  },
  special_features:{
      type:String,
      required:true,
  },
  care_must_knows:{
      type:String,
      required:true,
  },
  reviews: [reviewSchema],
   rating: {
       type: Number,
       required: true,
       default: 0,
     },
  },
  {
    timestamps: true,
  }
)

const Product = mongoose.model('Product', productSchema)

export default Product
