import mongoose, { Schema, models } from "mongoose";

const articleSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        photo: {
            type: String,
            required: true,
        },
        content: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

const Article = models.Article || mongoose.model("Article", articleSchema);
export default Article;