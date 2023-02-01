
const {Authors} = require('../models/autores.model')
//Create
module.exports.getAllAuthors = (req, res) => {
    Authors.find().collation({locale:'en',strength: 2}).sort({author:1})
      .then(authors=>res.json(authors))
      .catch(err=>res.json(err));
  };
  
  module.exports.getOneAuthor = (req, res) => {
    const { id } = req.params
    Authors.findOne({_id:id})
      .then(author => res.json(author))
      .catch(err => res.json(err));
  }
  
  module.exports.createAuthor = (req, res) => {
    const { author } = req.body;
    Authors.create({
      author
    })
      .then(author=>res.json(author))
      .catch(err => res.status(400).json(err))
  }
  
  module.exports.updateAuthor = (req, res) => {
    const { id } = req.params;
    Authors.findByIdAndUpdate({_id:id}, req.body, {runValidators:true,new:true}
      )
      .then(updateAuthor => res.json(updateAuthor))
      .catch(err => res.status(400).json(err))
  }
  
  module.exports.deleteAuthor = (req, res) => {
    const { id } = req.params;
    Authors.findByIdAndDelete({_id:id})
      .then(deleteConfirmation => res.json(deleteConfirmation))
      .catch(err => res.json(err));
  }