// 1.IMPORTACIONES 
const express = require("express")
const router = express.Router()
const indexController = require("./../controllers/indexController")

// 2. RUTEO 
router.get("/")
router.get("/", indexController.getHome)

// 3. EXPORTACION
module.exports = router