const express = require("express");


const app = express();

app.use(express.json());

app.use(myMiddleWare);

function myMiddleWare (req, res, next) {
    console.log("Inside the middle ware I created");
    next(); //pass control to next step
}

/**
 * stitch the routes to the server
 */

require("./routes/idea.routes")(app);

//starting server
app.listen(8080, ()=>{
    console.log("Server Started");
})