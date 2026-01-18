import jwt from "jsonwebtoken";
import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        username:
        {
            type: String,
            required: true,
            lowercase: true,
            trim: true,
            index: true,
        },
        email:
        {
            type: String,
            required: true,
            lowercase: true,
            trim: true,
            unique: true,

        },
        subject:
        {
            type: String,
            required: true,
            
        },
        message:
        {
            type: String,
            required: true,

    },
    refreshToken:
    {
        type: String,
    },
    {
        timestamps: true,
    },
userSchema.methods.generateAccessToken = async function () {
    return jwt.sign(
        {
            _id: this._id,
            email: this.email,
            username: this.username,
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY,
        },
    );
},
userSchema.methods.generateRefreshToken = async function () {
return jwt.sign(
        {
            _id: this._id,
            email: this.email,
            username: this.username,
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY,
        },
    );
);