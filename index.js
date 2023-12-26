import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

// Middleware function to log request details
app.use((req, res, next) => {
  const timestamp = new Date().toISOString();
  const method = req.method;
  const url = req.url;

  console.log(`[${timestamp}] ${method} ${url}`);
  next();
});

app.use(bodyParser.urlencoded({ extended: true }));

//1. GET a list of Products
app.get("/products",(req,res)=>{
  console.log(Products);
  res.json(Products);
});

//2. GET a specific product by ID
app.get("/products/:id",(req,res)=>{
  const id = parseInt(req.params.id);
  const foundProduct = Products.find((product) => product.id===id);
  console.log(foundProduct);
  res.json(foundProduct);
  });


//4. POST a new product
app.post("/products", (req,res)=>{
  const newProduct={
    id: Products.length+1,
    name: req.body.name,
    price: req.body.price,
  };
  Products.push(newProduct);
  console.log(Products.slice(-1)); // return last index element of array
  res.json(newProduct);
});

// //5. PUT a product by ID
app.put("/products/:id", (req,res)=>{
  const id = parseInt(req.params.id);
  const replacementProduct={
    id: id,
    name: req.body.name,
    price: req.body.price,
  };
  const searchIndex = Products.findIndex((product)=> product.id===id);
  Products[searchIndex]=replacementProduct;
  console.log(Products[searchIndex]);
  res.json(replacementProduct);
});

//7. DELETE Specific product
app.delete("/products/:id",(req,res)=>{
  const id = parseInt(req.params.id);
  const searchIndex = Products.findIndex((product)=> product.id===id);
  if(searchIndex>-1){
    Products.splice(searchIndex,1);
    res.sendStatus(200);
  }
  else{
    res
     .status(404)
     .json({error: `Product with id: ${id} not found. No Product were deleted.`});
  }
});

app.listen(port, () => {
  console.log(`Successfully started server on port ${port}.`);
});

var Products = [
  { id: 1, name: "bat", price: 12.99 },
  { id: 2, name: "ball", price: 8.49 },
  { id: 3, name: "Chair", price: 49.99 },
  { id: 4, name: "pan", price: 24.99 },
  { id: 5, name: "decks", price: 39.99 },
  { id: 6, name: "fan", price: 54.99 },
  { id: 7, name: "enterprise", price: 299.99 },
  { id: 8, name: "shoes", price: 29.99 },
  { id: 9, name: "book", price: 19.99 },
  { id: 10, name: "table", price: 89.99 },
  { id: 11, name: "lamp", price: 15.99 },
  { id: 12, name: "computer", price: 799.99 },
  { id: 13, name: "headphones", price: 59.99 },
  { id: 14, name: "watch", price: 129.99 },
  { id: 15, name: "camera", price: 399.99 },
  { id: 16, name: "guitar", price: 199.99 },
  { id: 17, name: "microwave", price: 89.99 },
  { id: 18, name: "umbrella", price: 12.99 },
  { id: 19, name: "bed", price: 499.99 },
  { id: 20, name: "laptop", price: 999.99 },
  { id: 21, name: "jacket", price: 79.99 },
  { id: 22, name: "bike", price: 299.99 },
  { id: 23, name: "coffee maker", price: 69.99 },
  { id: 24, name: "backpack", price: 39.99 },
  { id: 25, name: "television", price: 599.99 },
  { id: 26, name: "sunglasses", price: 34.99 },
  { id: 27, name: "printer", price: 129.99 },
  { id: 28, name: "toaster", price: 29.99 },
  { id: 29, name: "gaming console", price: 349.99 },
  { id: 30, name: "dumbbells", price: 49.99 }
];