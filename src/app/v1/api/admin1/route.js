import { connectMongoDB } from "@/utils/mongodb";
import { NextResponse } from "next/server";
import Article from "@/models/article";
import { unstable_noStore } from "next/cache";



export async function POST(req) {
    unstable_noStore();
    try {
        const formData = await req.formData();
        const _id = formData.get("_id");
        const name = formData.get("name");
        const title = formData.get("title");
        const content = formData.get("content");
        const link = formData.get("link");
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

        const result = await Article.findOneAndUpdate(
            { _id: _id },
            { name, title, photo: photoUrl, content, link }
        );

        return NextResponse.json({ message: "Edited successfully" }, { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { message: "An error occurred while editing the article." },
            { status: 500 }
        );
    }
}