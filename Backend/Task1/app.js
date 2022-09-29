const express = require("express");
const app = express();

app.get("/me", (request, response) => {
      response.status(200).json({
            nombre: "Felipe",
            edad: "26",
            pais: "Ecuador",
            verb: request.method,
      });
});

app.post("/metas", (request, response) => {
      response.status(200).json({
            hobbie: "Motos",
            hobbie: "Futbol",
            hobbie: "Gimnasio",
            verb: request.method,
      });
});
app.patch("/metas", (request, response) => {
      response.status(200).json({
            meta1: "Encontrar el trabajo de mis suenos",
            meta2: "Comprarme un R6",
            verb: request.method,
      });
});
app.put("/business", (request, response) => {
      response.status(200).json({
            job1: "Globant",
            job2: "Spotify",
            job3: "Apple",
            verb: request.method,
      });
});
app.listen(8000, () => {
      console.log("Server started at port 8000");
});
