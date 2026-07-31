const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
// Home Page
app.get("/", (req, res) => {
    res.render("index");
});

// Form Submit
app.post("/submit", async (req, res) => {
    try {
        const response = await axios.post("http://backend:5000/process", {
            name: req.body.name,
            email: req.body.email
        });

        res.send(response.data);

    } catch (err) {
        res.send("Error: " + err.message);
    }
});

app.listen(3000, () => {
    console.log("Frontend running on port 3000");
});
