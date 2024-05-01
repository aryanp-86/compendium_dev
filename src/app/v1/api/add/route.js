import { connectMongoDB } from "@/utils/mongodb";
import { NextResponse } from "next/server";
import Article from "@/models/article";



export async function POST(req) {
    try {
        const formData = await req.formData();
        const name = formData.get("name");
        const title = formData.get("title");
        const content = formData.get("content");
        const photo = formData.get("photo");
        await connectMongoDB();
        const base64Photo = Buffer.from(await photo.arrayBuffer()).toString("base64");

        const imgbbFormData = new FormData();
        imgbbFormData.append("image", base64Photo);
        const uploadUrl = `https://api.imgbb.com/1/upload?key=${process.env.IMGBB}`;
        const imgbbResponse = await fetch(uploadUrl, {
            method: "POST",
            body: imgbbFormData,
        });

        const imgbbData = await imgbbResponse.json();
        const photoUrl = imgbbData.data.display_url;

        await Article.create({ name, title, photo: photoUrl, content });
        return NextResponse.json({ message: "Added successfully" }, { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { message: "An error occurred while adding the article." },
            { status: 500 }
        );
    }
}