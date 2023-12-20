import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
  username: {
    type: String,
    unique: [true, "Username Must be Unique"],
  },
});

const User = models.User || model("User", userSchema);
export default User;
