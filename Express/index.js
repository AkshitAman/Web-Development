import express from "express";

const app = express();
const port = 7000;

app.use(express.json()); // it will accept data from frontend in json(javaScript Obeject Notation) formant only which are [Numbers,Boolean,String,Arrays,Keys and Values,Null,Objects]

let teaData = [];
let nextId = 1;

// For adding the Tea
app.post("/teas", (req, res) => {
  const { name, price } = req.body;
  const newTea = { id: nextId++, name, price };
  teaData.push(newTea);
  res.status(201).send(newTea);
});

// For Getting the tea list
app.get("/teas", (req, res) => {
  res.status(201).send(teaData);
});

// For getting the tea by its id
app.get("/teas/:id", (req, res) => {
  const tea = teaData.find((t) => t.id === parseInt(req.params.id));
  if (!tea) {
    return res.status(404).send("Tea not found");
  }
  res.status(200).send(tea);
});

//  Update Tea
app.put("/teas/:id", (req, res) => {
  const tea = teaData.find((t) => t.id === parseInt(req.params.id));
  if (!tea) {
    return res.status(404).send("Id not found");
  }

  const { name, price } = req.body;
  tea.name = name;
  tea.price = price;
  res.status(201).send(tea);
});

// Deleting Tea
app.delete("/teas/:id", (req, res) => {
  const index = teaData.findIndex((t) => t.id === parseInt(req.params.id));
  if (index === -1) {
    return res.status(404).send("Tea not found");
  }
  teaData.splice(index, 1);
  return res.status(204).send("Tea deleted successfully");
});

app.listen(port, () => {
  console.log(`Server is running on port : ${port}...`);
});
