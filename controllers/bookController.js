//const res = require("express/lib/response")
const async = require("hbs/lib/async")
const Book = require("./../models/Book")


exports.getBooks = async (req, res) => {
    
    try {
        const foundBooks = await Book.find({})
        res.render("books/list", {
            data: foundBooks
        })
    } catch (error) {
        console.log(error)
    }

} 

exports.createBooks = async (req, res) => {
    return res.render("books/create")
}