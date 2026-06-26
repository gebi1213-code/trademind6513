import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json([
    {
      ticket: 123,
      symbol: "ETHUSD",
      profit: 50,
      price: 2500,
      time: Date.now(),
    },
  ]);
}