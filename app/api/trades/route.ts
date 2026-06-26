import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json([
    {
      ticket: 12345,
      symbol: "ETHUSD",
      profit: 100,
      volume: 1,
      price: 2500,
      time: Date.now()
    }
  ]);
}