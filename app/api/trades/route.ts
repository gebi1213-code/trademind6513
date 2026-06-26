import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json([
    {
      ticket: 123456,
      symbol: "ETHUSD",
      volume: 0.1,
      profit: 45.5,
      price: 2500,
      time: Date.now()
    }
  ]);
}