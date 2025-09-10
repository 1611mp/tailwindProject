import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET || 'my-secret-key'

interface Organism {
  id: number
  name: string
  category: string
  description: string
  image: string
}

export async function POST(request: Request) {
  try {
    const secret = request.headers.get('x-webhook-secret')
    if (secret !== WEBHOOK_SECRET) return NextResponse.json({ status: 'error', message: 'Unauthorized' }, { status: 401 })

    const updatedData: Organism[] = await request.json()
    if (!Array.isArray(updatedData)) return NextResponse.json({ status: 'error', message: 'Invalid payload' }, { status: 400 })

    const filePath = path.join(process.cwd(), 'public/data/organisms.json')
    let existingData: Organism[] = []

    if (fs.existsSync(filePath)) {
      existingData = JSON.parse(fs.readFileSync(filePath, 'utf-8'))
    }

    // Merge: update existing, add new
    const mergedData = [...existingData]
    updatedData.forEach(newItem => {
      const index = mergedData.findIndex(item => item.id === newItem.id)
      if (index > -1) mergedData[index] = newItem
      else mergedData.push(newItem)
    })

    fs.writeFileSync(filePath, JSON.stringify(mergedData, null, 2), 'utf-8')
    console.log('Webhook: merged data successfully')
    return NextResponse.json({ status: 'success', message: 'Data merged successfully' })
  } catch (error) {
    console.error('Webhook error:', error)
    return NextResponse.json({ status: 'error', message: 'Internal server error' }, { status: 500 })
  }
}
