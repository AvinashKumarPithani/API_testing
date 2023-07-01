const express = require("express");


const app = express();

app.use(express.json()); //provides a parser which help us to parse the data stream that we receive from the client

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