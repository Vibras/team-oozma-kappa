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

router.route('/update/:id').put((req, res)=> {
    const {id}=req.params;
    const {updateField1, updateField2, updateField3}=req.body;
  Note.findOneAndUpdate({_id:id}, {$set:{updateField1, updateField2, updateField3}})
    .then(()=>res.send('Note has been updated!'))
    .catch(err=>res.send(err))
}); 

router.route('/delete/:id').delete((req, res)=> {
    const {id}=req.params;
  Note.findOneAndDelete({_id:id})
    .then(()=>res.send('Deleted!'))
    .catch(err=>res.send(err))
});


module.exports = router;