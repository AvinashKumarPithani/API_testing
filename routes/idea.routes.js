
const ideaController = require("../controllers/idea.controller");

/**
 * define route for the calls such as:
 * 
 * GET 127.0.0.1:8080/ideaApp/v1/ideas
 */

module.exports = (app) => {
    //get call
    app.get("/ideaApp/v1/ideas",ideaController.fetchAllIdeas);

    //post call
    app.post("/ideaApp/v1/ideas",ideaController.createIdea);

    //put call
    app.put("/ideaApp/v1/ideas/:id",ideaController.updateIdea);
    
    //delete call
    app.delete("/ideaApp/v1/ideas/:id",ideaController.deleteIdea);
}