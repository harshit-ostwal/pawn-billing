import mongoose, { Schema } from "mongoose";

const pledgingSchema = new Schema(
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

const Pledging = mongoose.models.Pledging || mongoose.model("Pledging", pledgingSchema);

export default Pledging;