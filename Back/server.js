const express = require("express");
const cors = require('cors');
const etudiantRoute = require("./Routes/Etudiant");
const database = require("./Config/database")

const app = express();
const PORT = process.env.PORT || 5100;

app.use(cors({
    origin: 'http://your-allowed-origin.com', // Adjust to your needs
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204,
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/etudiant", etudiantRoute);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
