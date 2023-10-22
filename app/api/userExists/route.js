import connectMongoDB from '@/lib/mongodb'
import Users from '@/models/users';
import { NextResponse } from 'next/server';

export async function POST(req) {
    try {
        await connectMongoDB();
        const { txtemailid } = await req.json();
        const user = await Users.findOne({ txtemailid }).select("_id");
        return NextResponse.json({ user });
    } catch (error) {
    }
}
