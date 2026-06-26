import { NextResponse } from "next/server";
import { execFile } from "child_process";
import { promisify } from "util";
import path from "path";

const execFileAsync = promisify(execFile);

export async function GET() {
  try {
    const scriptPath = path.join(
      process.cwd(),
      "app",
      "api",
      "trades",
      "get_trades.py"
    );

    const { stdout } = await execFileAsync("python", [scriptPath]);

    const trades = JSON.parse(stdout);

    return NextResponse.json(trades);
  } catch (error: any) {
    return NextResponse.json(
      {
        error: error.message,
      },
      {
        status: 500,
      }
    );
  }
}