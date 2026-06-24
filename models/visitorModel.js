import mongoose from "mongoose";

const visitorSchema = new mongoose.Schema(
  {
    ip: { type: String, required: true },
    city: String,
    country: String,
    countryCode: String,
    region: String,
    timezone: String,
    userAgent: String,
    page: String,
    visitedAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

const VisitorsModel =  mongoose.model("Visitor", visitorSchema);
export default VisitorsModel 