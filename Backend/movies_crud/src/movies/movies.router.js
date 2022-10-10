const router = require("express").Router();

const moviesServices = require("./movies.services");

//? Este es el prefijo: /movies

router.get("/", moviesServices.getAllMovies); //? /movies/
router.post("/", moviesServices.postMovie); //? /movies/

router.get("/:id", moviesServices.getMovieById); //? /movies/:id
router.delete("/:id", moviesServices.deleteMovie); //? /movies/:id
router.patch("/:id", moviesServices.patchMovie); //? /movies/:id
//router.put('/:id') //? /movies/:id

module.exports = router;
