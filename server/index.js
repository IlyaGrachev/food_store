const express = require("express")
const mongoose = require("mongoose")
const config = require("config")
const authRouter = require("./routes/auth.routes")


const app = express()

const PORT = config.get('serverPort')

app.use(express.json())
app.use('/api/auth', authRouter)

const start = async () => {
	try {
		await mongoose.connect(config.get('dbUrl'))
		console.log('База подключена успешно.')
		app.listen(PORT, () => {
			console.log(`Сервер запустился на порту: ${PORT}`)
		})
	} catch (e) {
		console.log(e)
	}
}

start()

