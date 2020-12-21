const express = require('express');
const router = express.Router();
const Note = require('../models/note');

router.get('/new', (req, res) => {
  res.render('new');
});

router.post('/', async (req, res) => {
  let note = await new Note({
    title: req.body.title,
    description: req.body.description,
  });
  try {
    note = await note.save();
    res.redirect('/');
  } catch (e) {
    console.log(e);
    res.render('new');
  }
});

router.get('/notes/:id').post((req, res)=> {
    const {id}=req.params;
    const {title, description, createdAt}=req.body;
  Note.findOneAndUpdate({_id:id}, {$set:{title, description, createdAt}})
     .then(()=>res.send('Note has been updated!'))
    .catch(err=>res.send("Can't delete"))
}); 
router.delete('/notes/:id', (req, res)=> {
  const {id}=req.params;
  const {title, description, createdAt}=req.body;
Note.deleteOne({_id:id})
   .then(()=>res.redirect("/"))
  .catch(err=>res.send(err))
}); 


module.exports = router;