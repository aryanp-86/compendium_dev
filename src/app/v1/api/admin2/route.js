import { connectMongoDB } from "@/utils/mongodb";
import { NextResponse } from "next/server";
import Article from "@/models/article";

export async function POST(req) {
    try {
        const { name } = await req.json();
        await connectMongoDB();

        const result = await Article.find({
            $or: [
                { name: { $regex: name, $options: 'i' } },
                { title: { $regex: name, $options: 'i' } },
            ]
        })
        return NextResponse.json({ message: "Search successfully", data: result }, { status: 200, headers: { 'Content-Type': 'application/json' } });
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { message: "An error occurred while seacrhing the article." },
            { status: 500 }
        );
    }
}