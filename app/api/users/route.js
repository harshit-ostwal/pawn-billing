import connectMongoDB from "@/lib/mongodb";
import users from "@/models/users";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(request) {
    const { txtemailid, txtpassword, txtrole } = await request.json();
    await connectMongoDB();
    const hashedPass = await bcrypt.hash(txtpassword, 10);
    await users.create({ txtemailid, txtpassword: hashedPass, txtrole });
    return NextResponse.json({ message: "Users Data Saved Successfully!" }, { status: 201 });
}

export async function GET() {
    await connectMongoDB();
    const Users = await users.find();
    return NextResponse.json({ Users });
}

export async function DELETE(request) {
    const id = request.nextUrl.searchParams.get("id");
    await connectMongoDB();
    await users.findByIdAndDelete(id);
    return NextResponse.json({ message: "Users Deleted" }, { status: 200 });
}