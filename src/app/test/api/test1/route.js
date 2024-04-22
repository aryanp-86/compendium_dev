
import { connectMongoDB } from "@/utils/mongodb";
import Article from "@/models/article";
import { NextResponse } from "next/server";


export async function POST(req) {
    const articlesArray = [
        {
            name: "Article 1",
            title: "Title 1",
            photo: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            content: "sdmnsniiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii iniiiiiiiiiiiiiiiiiiiii"
        },
        {
            name: "Article 2",
            title: "Title 2",
            photo: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            content: "sdmnsniiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii iniiiiiiiiiiiiiiiiiiiii",
        },
        {
            name: "Article 3",
            title: "Title 3",
            photo: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            content: "sdmnsniiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii iniiiiiiiiiiiiiiiiiiiii",
        },
    ];

    try {
        await connectMongoDB();
        for (const articleData of articlesArray) {
            // Create a new Article document using the Mongoose model
            const article = new Article(articleData);
            // Save the article document to the database
            await article.save();
            console.log(`Article "${article.title}" saved successfully.`);
        }
        return NextResponse.json({ message: "Articles registered." }, { status: 201 });
    } catch (error) {
        return NextResponse.json(
            { message: "An error occurred while adding." },
            { status: 500 }
        );
    }
}