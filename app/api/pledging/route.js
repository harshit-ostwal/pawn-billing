import connectMongoDB from "@/lib/mongodb";
import pledging from "@/models/pledging";
import { NextResponse } from "next/server";

export async function POST(request) {
    const { txtcustomerid, txtcustomername, txtsno, txtitemname, txtwt, txtamount } = await request.json();
    await connectMongoDB();
    await pledging.create({ txtcustomerid, txtcustomername, txtsno, txtitemname, txtwt, txtamount });
    return NextResponse.json({ message: "Pledging Data Saved Successfully!" }, { status: 201 });
}


export async function GET() {
    await connectMongoDB();
    const Pledging = await pledging.find();
    return NextResponse.json({ Pledging });
}

export async function DELETE(request) {
    const id = request.nextUrl.searchParams.get("id");
    await connectMongoDB();
    await pledging.findByIdAndDelete(id);
    return NextResponse.json({ message: "Pledging Deleted" }, { status: 200 });
}