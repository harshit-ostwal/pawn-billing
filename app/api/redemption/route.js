import connectMongoDB from "@/lib/mongodb";
import redemption from "@/models/redemption";
import { NextResponse } from "next/server";

export async function POST(request) {
    const { txtcustomerid, txtcustomername, txtsno, txtitemname, txtwt, txtamount } = await request.json();
    await connectMongoDB();
    await redemption.create({ txtcustomerid, txtcustomername, txtsno, txtitemname, txtwt, txtamount });
    return NextResponse.json({ message: "Redemption Data Saved Successfully!" }, { status: 201 });
}

export async function GET() {
    await connectMongoDB();
    const Redemption = await redemption.find();
    return NextResponse.json({ Redemption });
}

export async function DELETE(request) {
    const id = request.nextUrl.searchParams.get("id");
    await connectMongoDB();
    await redemption.findByIdAndDelete(id);
    return NextResponse.json({ message: "Pledging Deleted" }, { status: 200 });
}