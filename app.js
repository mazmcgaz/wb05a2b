// you do this at the start of your project, only once
// This is to use the Express.js framework for building web applications in Node.js.

const express = require("express");
const app = express();
const path = require("path");

// "Use this folder on every request to the route"
// asks - "what do you want to make servable to the client"
// only have to do this once
// "on every request please provide a static folder and it's accessible to our landing files"
app.use(express.static(path.join(__dirname, "./public")));

// overriding the default so that it uses ejs (embedded javascript templates)
app.set("view engine", "ejs");

// this is a one-dimensional array that is a two-dimensional data set
const inventory = [
    { name: "sirloin", type: "beef", amount: 25 }, 
    { name: "ribs", type: "pork", amount: 0 },
    { name: "wings", type: "chicken", amount: 10 },
    { name: "breast", type: "chicken", amount: 5 },
    { name: "cod", type: "fish", amount: 22 },
    { name: "haddock", type: "fish", amount: 2 },
    { name: "chops", type: "pork", amount: 0 },
];

// request object and res object
app.get("/", (req, res) => {
    
    // loads of code in here
    let username = "Mary";
    res.render("landing", {data : username, stock: inventory}); 
    // sent as a key (ie username, not "mary")
    // key (blue) and value (pink)
});


// 
app.get("/playlist", (req, res) => {

    res.send("my playlist");
})

// "there's going to be information held in this path"
app.get("/playlist/:playId", (req, res) => {

    let id = req.params.playId;
    res.send(`SELECT * FROM playlists where ID = ${id}`);
});

// "products is the ROUTE"
app.get("/products", (req, res) => {
   let queryp = req.query.q;
    // res.send(`product id: ${queryp}`);
    res.send(`SELECT * FROM products WHERE name LIKE (${queryp})`);
});

// err is optional to use, you can keep the () empty
// err is a callback function
app.listen(3000, (err)=>{
    // one line condition, saying if an error occurs then throw an error exception
    if (err) throw err;
    console.log(`listening on port 3000`);
 });


 // copy this into the browser to view:
 // http://localhost:3000/