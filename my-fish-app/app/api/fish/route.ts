import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

// Replace this with your actual external API URL
const EXTERNAL_API_URL = 'https://example.com/external-fishes.json'

export async function GET() {
  try {
    // 1️⃣ Read local JSON
    const localPath = path.join(process.cwd(), 'public/data/organisms.json')
    const localData = JSON.parse(fs.readFileSync(localPath, 'utf-8'))

    // 2️⃣ Fetch external JSON
    const externalRes = await fetch(EXTERNAL_API_URL)
    let externalData: any[] = []
    if (externalRes.ok) {
      externalData = await externalRes.json()
    }

    // 3️⃣ Merge data (local first)
    const merged = [...localData, ...externalData]

    return NextResponse.json(merged)
  } catch (err) {
    console.error('Error fetching fishes:', err)
    return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 })
  }
}
