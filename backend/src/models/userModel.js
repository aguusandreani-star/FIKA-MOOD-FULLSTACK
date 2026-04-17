import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: ["admin", "user"],
    default: "user"
  }
}, { timestamps: true });

// CAMBIO AQUÍ: Quitamos el parámetro 'next' y el llamado a next()
userSchema.pre("save", async function () {
  if (!this.isModified("password")) return;
  
  // Hasheamos la contraseña de forma asíncrona
  this.password = await bcrypt.hash(this.password, 10);
});

export default mongoose.model("User", userSchema);