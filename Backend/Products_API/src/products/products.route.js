const router = require("express").Router();

const productsServices = require("./products.services");

//? Este es el prefijo: /movies

router.get("/", productsServices.getAllProducts); //? /movies/
router.post("/", productsServices.postProduct); //? /movies/

router.get("/:id", productsServices.getProductById); //? /movies/:id
router.delete("/:id", productsServices.deleteProduct); //? /movies/:id
router.patch("/:id", productsServices.patchProduct); //? /movies/:id
//router.put('/:id') //? /movies/:id

module.exports = router;
