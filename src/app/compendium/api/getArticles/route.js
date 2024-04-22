
import { connectMongoDB } from "@/utils/mongodb";
import { NextResponse } from "next/server";
import Article from "@/models/article";


export async function GET(req) {
    try {
        await connectMongoDB();
        const articles = await Article.find({});
        return NextResponse.json(articles, { status: 200 });
    } catch (error) {
        return NextResponse.json(
            { message: "An error occured fetching articles." },
            { status: 500 }
        );
    }
}