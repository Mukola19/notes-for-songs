require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const path = require('path')
const cookieParser = require('cookie-parser')

const app = express()

const PORT = process.env.PORT || 5000

app.use(express.static(path.join(__dirname, 'static')))

const corsOptions = {
   credentials: true,
   origin: 'http://localhost:3000'
}

app.use(express.json()) 
app.use(cookieParser())
app.use(cors(corsOptions))

app.use('/api', require('./routers/index'))


app.use(require('./middleware/errorMiddleware'))





const start = async () => {
  try {
    await mongoose.connect(process.env.DB_URL)
    app.listen(PORT, () => console.log('Server started on port ' + PORT))
  } catch (e) {
    console.log('Server Error', e.message)
    process.exit(1)
  }
}
start()
 