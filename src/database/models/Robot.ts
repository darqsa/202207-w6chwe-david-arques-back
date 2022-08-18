import mongoose, { model, Schema } from "mongoose";

const statsSchema = new Schema({
  strength: {
    type: Number,
    min: 0,
    max: 10,
    required: true,
  },
  speed: {
    type: Number,
    min: 0,
    max: 10,
    required: true,
  },
});

const robotSchema = new Schema({
  name: {
    type: String,
    required: true,
  },

  image: {
    type: String,
    required: true,
  },

  creationDate: {
    type: Date,
    required: true,
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },

  stats: statsSchema,
});

mongoose.set("toJSON", {
  virtuals: true,
  transform: (doc, ret) => {
    const newDocument = { ...ret };
    // eslint-disable-next-line no-underscore-dangle
    delete newDocument.__v;
    // eslint-disable-next-line no-underscore-dangle
    delete newDocument._id;
    return newDocument;
  },
});

const Robot = model("Robot", robotSchema, "robots");

export default Robot;
