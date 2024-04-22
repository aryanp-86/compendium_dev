import { connectMongoDB } from "@/utils/mongodb";
import { NextResponse } from "next/server";
import Article from "@/models/article";

export async function POST(req) {
    try {
        const { _id, name, title, photo, content } = await req.json();
        await connectMongoDB();

        const result = await Article.findOneAndUpdate({ _id: _id }, { name, title, photo, content });

        return NextResponse.json({ message: "Edited successfully" }, { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { message: "An error occurred while deleting the article." },
            { status: 500 }
        );
    }
}