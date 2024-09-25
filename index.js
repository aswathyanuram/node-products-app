const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());

const products = [
  {
    id: 1,
    title: "Mascara",
    category: "Beauty",
    price: "$19",
  },
  {
    id: 2,
    title: "LipStick",
    category: "Beauty",
    price: "$29",
  },
  {
    id: 3,
    title: "Note Book",
    category: "Stationary",
    price: "$5.8",
  },
  {
    id: 4,
    title: "Highlighter",
    category: "Stationary",
    price: "$12",
  },
  {
    id: 5,
    title: "Chair",
    category: "Home Appliances",
    price: "$100",
  },
];

app.get("/products", (req, res) => {
  res.json(products);
});

app.listen(8080, () => {
  console.log("Products app Started on port 8080");
});
