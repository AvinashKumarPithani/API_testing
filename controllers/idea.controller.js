
const ideas = require("../models/idea.model")

//search all idea

exports.fetchAllIdeas = (req, res) => {
    res.status(200).send(ideas);
}

//create new idea

let idCount = 1;

exports.createIdea= (req, res) => {
    // read the request body
    const idea = req.body;
    //need to generate the next idea id
    idea.id = ++idCount;
    //save it in the list of existing ideas
    ideas[idCount] = idea;
    //return the response
    res.status(201).send(ideas[idCount]);
}

//update idea

exports.updateIdea = (req, res) => {

    //I nees to read the id passed in the path
    // 127.0.0.1:8080/ideaApp/v1/ideas/
    const ideaId = req.params.id;

    // if the idea is present - modify, else - return error
    if(ideas[ideaId]){
        ideas[ideaId] =  req.body;
        res.status(200).send(ideas[ideaId]);
    }else{
        res.status(400).send({
            message :"idea id passed is invalid"
        })
    }
}

//delete idea

exports.deleteIdea = (req,res) => {
    //check if id present and then delete, else return error msg
    
    if(ideas[req.params.id]) {
        delete ideas[req.params.id];
        res.status(200).send({
            message : "successfully deleted"
        })
    }
    else{
        res.status(400).send({
            message : "Wrong idea Id"
        })
    }
}
