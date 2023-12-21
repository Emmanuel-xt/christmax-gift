import { Schema, models, model } from "mongoose";

const giftSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const Gift = models.Gift || model("Gift", giftSchema);

export default Gift;