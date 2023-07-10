const express = require("express");
const { Pool } = require("pg");
const cors = require('cors');

const app = express();
const port = 3000;

// database credentials
const pool = new Pool({
    user: "your_username",
    password: "your_password",
    host: "your_host",
    database: "your_database",
    port: 5432 //default SQL port
});

// Enable [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)
app.use(cors());

// connect to the database
pool.connect((error) => {
    if (error) {
        console.error("Error connecting to database:", error);
        return;
    }
    console.log("Connected to the database");
});

app.get("/contacts", (req, res) => {
    // change this query if accessing a different table
    const query = "SELECT * FROM contacts";
    pool.query(query, (error, results) => {
        if (error) {
            console.error("Error fetching contacts:", error);
            res.status(500).json({ error: "Internal server error" });
        } else {
            res.json(results.rows);
        }
    });
});

// start server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
