import { connectMongoDB } from "@/utils/mongodb";
import { NextResponse } from "next/server";


export async function DELETE(req) {
    try {
        const { _id } = await req.json();
        await connectMongoDB();
        const result = await db.collection('articles').deleteOne({ _id });
        if (result.deletedCount === 1) {
            return NextResponse.json({ message: "Deleted successfully" }, { status: 200 });
        } else {
            res.status(404).json({ message: 'Document not found' });
        }

    } catch (error) {
        return NextResponse.json(
            { message: "An error occurred while deleting the article." },
            { status: 500 }
        );
    }
}