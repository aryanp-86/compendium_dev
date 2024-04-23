import { connectMongoDB } from "@/utils/mongodb";
import { NextResponse } from "next/server";
import Article from "@/models/article";

export async function POST(req) {
    try {
        const { _id } = await req.json();
        await connectMongoDB();

        const result = await Article.deleteOne({ _id: _id });

        if (result.deletedCount === 1) {
            return NextResponse.json({ message: "Deleted successfully" }, { status: 200 });
        } else {
            return NextResponse.json({ message: 'Document not found' }, { status: 404 });
        }
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { message: "An error occurred while deleting the article." },
            { status: 500 }
        );
    }
}