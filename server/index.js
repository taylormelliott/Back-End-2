const express = require("express");
const cors = require("cors");
const ctrl = require("./controller");

const app = express();

app.use(express.json());
app.use(cors());

// movie endpoints
app.get("/api/movies", ctrl.getMovies);
app.delete("/api/movies/:id", ctrl.deleteMovie);
app.post("/api/movies", ctrl.createMovie);
app.put("/api/movies/:id", ctrl.updateMovie);

app.listen(4004, () => console.log("Yo. You up and running dog on 4004"));
