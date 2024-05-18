import { connectMongoDB } from "@/utils/mongodb";
import User from "@/models/user";
import { NextResponse } from "next/server";
import { unstable_noStore } from "next/cache";

export async function POST(req) {
  unstable_noStore();
  try {
    await connectMongoDB();
    const { email } = await req.json();
    const user = await User.findOne({ email }).select("_id");
    console.log("user: ", user);
    return NextResponse.json({ user });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
