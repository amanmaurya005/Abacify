import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, "Full name is required"],
      trim: true,
      minlength: 2,
      maxlength: 100,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      trim: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, "Please provide a valid email"],
    },
    phone: {
      type: String,
      required: [true, "Phone number is required"],
      trim: true,
      minlength: 7,
      maxlength: 20,
    },
    collegeOrCompany: {
      type: String,
      required: [true, "College or company is required"],
      trim: true,
      maxlength: 140,
    },
    skillLevel: {
      type: String,
      required: [true, "Skill level is required"],
      trim: true,
      maxlength: 80,
    },
    reasonToJoin: {
      type: String,
      required: [true, "Reason to join is required"],
      trim: true,
      minlength: 20,
      maxlength: 2500,
    },
    github: {
      type: String,
      trim: true,
      maxlength: 300,
      default: "",
    },
    linkedin: {
      type: String,
      trim: true,
      maxlength: 300,
      default: "",
    },
    acceptedTerms: {
      type: Boolean,
      required: true,
      validate: {
        validator: (value) => value === true,
        message: "Terms must be accepted",
      },
    },
  },
  { timestamps: { createdAt: true, updatedAt: false } },
);

export default mongoose.model("Application", applicationSchema);
