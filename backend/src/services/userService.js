import User from "../models/userModel.js";

export const createUser = async (data) => {
  const existingUser = await User.findOne({ email: data.email });

  if (existingUser) {
    throw new Error("El usuario ya existe");
  }

  const user = new User(data);
  return await user.save();
};

export const getUserByEmail = async (email) => {
  return await User.findOne({ email });
};