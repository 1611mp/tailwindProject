import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  // Read fish data from mock-data/fish.json (correct path)
  const filePath = path.join(process.cwd(), "mock-data/fish.json");
  let fishData = [];
  if (fs.existsSync(filePath)) {
    fishData = JSON.parse(fs.readFileSync(filePath, "utf-8"));
  }
  return NextResponse.json(fishData);
}
