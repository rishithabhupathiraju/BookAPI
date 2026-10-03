const express = require("express")
const booksRoute = express.Router()

booksRoute.get("/books",getBooks)
booksRoute.post("/books",addBooks)
booksRoute.delete("/boks/:id",updateBooks)
booksRoute.put("/books/:id",deleteBooks)

module.exports = booksRoute
