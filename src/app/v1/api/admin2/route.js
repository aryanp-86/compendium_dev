import { connectMongoDB } from "@/utils/mongodb";
import { NextResponse } from "next/server";
import Article from "@/models/article";
import { unstable_noStore } from "next/cache";

export async function POST(req) {
    unstable_noStore();
    try {
        const { name } = await req.json();
        await connectMongoDB();

        const result = await Article.find({
            $or: [
                { name: { $regex: name, } },
                { title: { $regex: name } },
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