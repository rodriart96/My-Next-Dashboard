import { NextResponse } from "next/server";

export async function GET(request: Request) {
    console.log({methodd: request.method})
    return NextResponse.json({ count: 100 });
}

export async function POST(request: Request) {
    return NextResponse.json({ 
        method: request.method,
        count: 100 
    });
}

