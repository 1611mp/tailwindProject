// app/api/fish/route.ts
import fs from "fs/promises";
import path from "path";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), "mock-data", "fish.json");
    const data = await fs.readFile(filePath, "utf-8");
    const fishList = JSON.parse(data);
    return NextResponse.json(fishList);
  } catch (err) {
    console.error("Error reading fish.json:", err);
    return NextResponse.json({ error: "Failed to load fish data" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const newFish = await req.json();
    const filePath = path.join(process.cwd(), "mock-data", "fish.json");

    // Read current data
    const data = await fs.readFile(filePath, "utf-8");
    const fishList = JSON.parse(data);

    // Append new fish
    fishList.push(newFish);

    // Save back to fish.json
    await fs.writeFile(filePath, JSON.stringify(fishList, null, 2));

    return NextResponse.json({ message: "Fish added successfully!", fish: newFish });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Failed to add fish" }, { status: 500 });
  }
}
