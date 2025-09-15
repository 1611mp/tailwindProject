// app/api/fish/route.ts
import fs from "fs/promises";
import path from "path";
import { NextRequest, NextResponse } from "next/server";

// Define the URL of your external API for adding new fish
const EXTERNAL_API_URL = "https://my-fish-app.com/api/add-product";
// Define a secret key for your token generation (keep this secure)
const API_SECRET_KEY = "your_strong_secret_key";

// Function to generate a new, unique token for each API call
function generateToken(): string {
  // A simple, non-cryptographic token for demonstration.
  // In a real application, you would use a secure library.
  const timestamp = Date.now().toString();
  return `${API_SECRET_KEY}-${timestamp}`;
}

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
  const newFish = await req.json();
  const token = generateToken();
  console.log('Generated new token for POST request:', token);

  try {
    // 1. Attempt to add the new fish via the external API with the token
    const res = await fetch(EXTERNAL_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(newFish),
    });

    if (res.ok) {
      console.log('Successfully added fish to external API.');
      return NextResponse.json({ message: "Fish added successfully to external source!" });
    } else {
      console.warn(`External API returned status ${res.status}. Falling back to local file.`);
    }

  } catch (error) {
    // 2. If the external API call fails, log the error and proceed to the local fallback
    console.error('Failed to add fish to external API. Falling back to local file.', error);
  }

  // 3. Fallback: Read the local file, append the new fish, and save
  try {
    const filePath = path.join(process.cwd(), "mock-data", "fish.json");
    const data = await fs.readFile(filePath, "utf-8");
    const fishList = JSON.parse(data);

    fishList.push(newFish);

    await fs.writeFile(filePath, JSON.stringify(fishList, null, 2));

    console.log('Successfully added fish to local file.');
    return NextResponse.json({ message: "Fish added successfully to local file!", fish: newFish });
  } catch (localError) {
    // 4. If the fallback also fails, return a 500 server error
    console.error('Failed to add fish to local file.', localError);
    return NextResponse.json({ error: "Failed to add fish" }, { status: 500 });
  }
}
