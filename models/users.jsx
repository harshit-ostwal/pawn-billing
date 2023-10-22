import mongoose, { Schema } from "mongoose";

const usersSchema = new Schema(
    {
        txtemailid: String,
        txtpassword: String,
        txtrole: String,
    },
    {
        timestamps: true,
    }
);

const Users = mongoose.models.Users || mongoose.model("Users",usersSchema);

export default Users;