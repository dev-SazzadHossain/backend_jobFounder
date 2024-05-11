import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const registerSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    profileUrl: {
      type: String,
      required: true,
    },
    refreshToken: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
      default: "user",
      enum: ["admin", "user"],
    },
    isVerified: {
      type: Boolean,
      required: true,
    },
  },
  { timestamps: true }
);

// password bcrypt

registerSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

// methods password check
registerSchema.methods.isPasswordCorrect = async function (password) {
  const response = await bcrypt.compare(password, this.password);
  return response;
};

// jwt with create accessAndRefreshToken

registerSchema.methods.generatedAccessToken = async function () {
  const response = await jwt.sign(
    { _id: this._id, email: this.email, name: this.name },
    process.env.ACCESS_TOKEN_SECRET,
    { expiresIn: process.env.ACCESS_TOKEN_EXPIRY }
  );
  return response;
};

registerSchema.methods.generatedRefreshToken = async function () {
  const response = await jwt.sign(
    { _id: this._id, email: this.email },
    process.env.REFRESH_TOKEN_SECRET,
    { expiresIn: process.env.REFRESH_TOKEN_EXPIRY }
  );
  return response;
};

export const Register = mongoose.model("Register", registerSchema);
