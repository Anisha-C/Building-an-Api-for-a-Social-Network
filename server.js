const express = require("express")
const connection = require("./Config/connection")
const PORT = process.env.PORT || 3001
const routes = require("./Controllers")

const app = express()

app.use(express.urlencoded({
    extended: true,
}))

app.use(express.json())

app.use(routes)

connection.once("open", () => {
    app.listen(PORT, () =>{
        console.log(`Server running on Port ${PORT}`)
    })
})
