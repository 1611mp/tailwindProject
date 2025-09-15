import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import jwt from "jsonwebtoken";

type Fish = {
  id: number;
  name: string;
  description: string;
  image: string;
  price?: number | string;
  rating?: number;
};

const JWT_SECRET = process.env.FISH_API_TOKEN || "super_secure_random_token_12345";

// GET handler to return fish list
export async function GET() {
  try {
    const fishFile = path.join(process.cwd(), "mock-data/fish.json");
    const fishList: Fish[] = JSON.parse(fs.readFileSync(fishFile, "utf-8"));
    return NextResponse.json(fishList);
  } catch (error) {
    console.error("Failed to fetch fish:", error);
    return NextResponse.json({ error: "Failed to fetch fish" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  const authHeader = req.headers.get("Authorization");
  if (!authHeader) {
    return NextResponse.json({ message: "Access denied. No token provided." }, { status: 401 });
  }

  const token = authHeader.startsWith("Bearer ") ? authHeader.split(" ")[1] : authHeader;

  try {
    jwt.verify(token, JWT_SECRET);
  } catch (err) {
    return NextResponse.json({ message: "Invalid token." }, { status: 400 });
  }

  try {
    const newFish: Fish | Fish[] = await req.json();
    const fishFile = path.join(process.cwd(), "mock-data/fish.json");

    const existingFish: Fish[] = JSON.parse(fs.readFileSync(fishFile, "utf-8"));

    const newFishArray: Fish[] = Array.isArray(newFish) ? newFish : [newFish];

    const mergedFish: Fish[] = [
      ...existingFish,
      ...newFishArray.filter(f => !existingFish.some(ef => ef.id === f.id))
    ];

    fs.writeFileSync(fishFile, JSON.stringify(mergedFish, null, 2));

    return NextResponse.json({ message: "Fish added successfully", total: mergedFish.length });
  } catch (error) {
    console.error("Failed to add fish:", error);
    return NextResponse.json({ error: "Failed to add fish" }, { status: 500 });
  }
}
