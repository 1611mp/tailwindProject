import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

<<<<<<< HEAD
const filePath = path.join(process.cwd(), "mock-data", "fish.json");

// GET: return all fish
export async function GET() {
  try {
    const data = fs.readFileSync(filePath, "utf8");
    const fish = JSON.parse(data);
    return NextResponse.json(fish);
  } catch (error) {
    return NextResponse.json({ error: "Failed to load fish data" }, { status: 500 });
  }
}

// POST: add a new fish
export async function POST(request: Request) {
  try {
    const newFish = await request.json();

    // Read current file
    const data = fs.readFileSync(filePath, "utf8");
    const fish = JSON.parse(data);

    // Push new entry
    fish.push(newFish);

    // Save updated file
    fs.writeFileSync(filePath, JSON.stringify(fish, null, 2));

    return NextResponse.json({ message: "Fish added successfully", newFish });
  } catch (error) {
    console.error("Error adding fish:", error);
    return NextResponse.json({ error: "Failed to add fish" }, { status: 500 });
  }
=======
export async function GET() {
  // Read fish data from mock-data/fish.json (correct path)
  const filePath = path.join(process.cwd(), "mock-data/fish.json");
  let fishData = [];
  if (fs.existsSync(filePath)) {
    fishData = JSON.parse(fs.readFileSync(filePath, "utf-8"));
  }
  return NextResponse.json(fishData);
>>>>>>> 7336b735f383d994ca17fec557878c59fa9a6606
}
