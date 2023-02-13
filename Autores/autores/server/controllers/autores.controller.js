
const Author= require('../models/autores.model')
//Create
module.exports.getAllAuthors = (req, res) => {
    Author.find().collation({locale:'en',strength: 2}).sort({author:1})
      .then(authors=>res.json(authors))
      .catch(err=>res.json(err));
  };
  
  module.exports.getOneAuthor = (req, res) => {
    const { id } = req.params
    Author.findOne({_id:id})
      .then(author => res.json(author))
      .catch(err => res.json(err));
  }
  
  module.exports.createAuthor = (req, res) => {
    //console.log(req.body.name,"estoy ")
    const { name } = req.body;
    //console.log(name, "esto es author" )
    Author.create(
      name
    )
      .then(resultado=>res.json(resultado))
      .catch(err => res.status(400).json(err))
  }
  
  module.exports.updateAuthor = (req, res) => {
    const { id } = req.params;
    Author.findByIdAndUpdate({_id:id}, req.body, {runValidators:true,new:true}
      )
      .then(updateAuthor => res.json(updateAuthor))
      .catch(err => res.status(400).json(err))
  }
  
  module.exports.deleteAuthor = (req, res) => {
    const { id } = req.params;
    Author.findByIdAndDelete({_id:id})
      .then(deleteConfirmation => res.json(deleteConfirmation))
      .catch(err => res.json(err));
  }