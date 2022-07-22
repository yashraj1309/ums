var Userdb = require('../model/model');

//Create and Save User
exports.create = (req,res) => {
    //Validate request
    if(!req.body) {
        res.status(400).send({message:"Content can not be empty!"});
        return;
    }
    //whenever user make post request all the data of form is store in body of request object

    //new user
    const user = new Userdb({
        name : req.body.name,
        email:req.body.email,
        gender:req.body.gender,
        status:req.body.status
    })

    //save user in the database
    user
        .save()
}

// Retrive and Return Users 
exports.find = (req,res) => {

}

// Update and new Identified user by user id
exports.update = (req,res) => {

}

// Delete user with specified user id
exports.delete = (req,res) => {

}