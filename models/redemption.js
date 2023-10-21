import mongoose, { Schema } from "mongoose";

const redemptionSchema = new Schema(
    {
        txtcustomerid: String,
        txtcustomername: String,
        txtsno: String,
        txtitemname: String,
        txtwt: String,
        txtamount: String
    },
    {
        timestamps: true,
    }
);

const Redemption = mongoose.models.Redemption || mongoose.model("Redemption",redemptionSchema);

export default Redemption;