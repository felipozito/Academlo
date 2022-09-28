const express = require("express");
const app = express();

app.post("/", (request, response) => {
      response.status(200).json({
            message: "Haciendo peticion post",
            verb: request.method,
      });
});

app.put("/", (request, response) => {
      response.status(200).json({
            message: "Hola Estoy haciendo put",
            verb: request.method,
      });
});
app.get("/", (request, response) => {
      response.status(200).json({
            message: "Hola Estoy haciendo get",
            verb: request.method,
      });
});
app.patch("/", (request, response) => {
      response.status(200).json({
            message: "Hola Estoy haciendo patch",
            verb: request.method,
      });
});
app.listen(8000, () => {
      console.log("Server started at port 8000");
});
/* HTTP
VERBOS 
    GET
    POST
    PUT
    PATCH
    DELETE
STATUS
    100
    200 exitoso
    300
    400
    500
HEADER

*/
