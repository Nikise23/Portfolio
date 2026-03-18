import express from 'express'
import cors from 'cors'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
const port = process.env.PORT || 3000

app.use(cors())
app.use(express.json())

const DATA_FILE = path.join(__dirname, 'visits.json')

function readVisits() {
  try {
    const raw = fs.readFileSync(DATA_FILE, 'utf-8')
    const parsed = JSON.parse(raw)
    if (typeof parsed.count === 'number' && Number.isFinite(parsed.count)) {
      return parsed.count
    }
  } catch {
    // ignore and fall through
  }
  return 0
}

function writeVisits(count) {
  try {
    fs.writeFileSync(DATA_FILE, JSON.stringify({ count }), 'utf-8')
  } catch {
    // if writing fails, we still return the in-memory count
  }
}

let visits = readVisits()

app.get('/health', (_req, res) => {
  res.json({ status: 'ok' })
})

app.post('/visits', (_req, res) => {
  visits += 1
  writeVisits(visits)
  res.json({ count: visits })
})

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Visit counter service running on port ${port}`)
})

