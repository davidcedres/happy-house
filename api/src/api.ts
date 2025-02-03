import express from "express";
import cors from "cors";
const app = express();

app.use(express.json());
app.use(cors());

const port = 3000;

app.get("/properties", (req, res) => {
    res.json([
        {
            street: "1317 Van Buren Avenue",
            city: "Salton City, CA",
            bed: 3,
            bath: 2,
            sqft: 1560,
            price: 201900,
        },
        {
            street: "1317 Van Buren Avenue",
            city: "Salton City, CA",
            bed: 3,
            bath: 2,
            sqft: 1560,
            price: 350000,
        },
        {
            street: "1317 Van Buren Avenue",
            city: "Salton City, CA",
            bed: 3,
            bath: 2,
            sqft: 1560,
            price: 98000,
        },
        {
            street: "1317 Van Buren Avenue",
            city: "Salton City, CA",
            bed: 3,
            bath: 2,
            sqft: 1560,
            price: 512900,
        },
    ]);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
