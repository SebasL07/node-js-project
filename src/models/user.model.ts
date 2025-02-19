import mongoose from "mongoose";

export interface UserInput {
    name: string;
    email: string;
    password: string;
}

export interface UserDocument extends UserInput{
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
}

const UserSchema = new mongoose.Schema({
    name : { type: String, required: true },
    email : { type: String, required: true, index: true, unique: true },
    password : { type: String, required: true },
}, { timestamps: true, collection: 'users' });

const UserModel = mongoose.model<UserDocument>('User', UserSchema);

export default UserModel;