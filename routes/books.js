// ./routes/books.js

const express			= require("express")
const { route } = require(".")
const router			= express.Router()

const bookController	= require("./../controllers/bookController")

// OBTENER LIBROS
router.get("/", bookController.getBooks)

// CREAR PÁGINA PARA CREAR UN LIBRO EN BD
router.get("/create", bookController.createBooks)

// ENVIAR DATOS DE FORMULARIO PARA CREAR LIBRO EN BD
router.post("/create", bookController.createBooksForm)

// CREAR UNA PÁGINA INDIVIDUAL PARA CADA LIBRO CON LOS DATOS RESPECTIVOS
router.get("/:bookID", bookController.getSingleBook)      //PARAMETRO

// CREAR PÁGINA PARA EL FORMULARIO
router.get("/:bookID/edit", bookController.editBook)

// ENVIAR DATOS DE FORMULARIO PARA EDITAR LIBRO EN BD
router.post("/:bookID/edit", bookController.editBookForm)

// BORRAR LIBRO 
router.post("/:bookID/delete", bookController.deleteBook)

module.exports = router