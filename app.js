const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require("method-override")

const app = express();
const Note = require('./models/note');
const notesRouter = require('./routes/notes');
const note = require('./models/note');
require('dotenv').config();

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));

app.use(methodOverride('X-HTTP-Method')) //          Microsoft
app.use(methodOverride('X-HTTP-Method-Override')) // Google/GData
app.use(methodOverride('X-Method-Override')) //      IBM

app.get('/', async (req, res) => {
  const notes = await Note.find().sort('-createdAt');
  res.render('index', { notes: notes });
});

mongoose.connect('mongodb+srv://dbUser:oozma5@oozma.pljqh.mongodb.net/oozma?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use('/', notesRouter);
app.listen(process.env.PORT || 8080, () => {
  console.log(`Server Has Started`);
});

app.put('/notes/:title', function(req, res) {
  var {id}=req.params;
  var {title, description, createdAt}=req.body;

  notes.update(
      { title: req.note.title },
      { description: req.note.description },
      function(err) {
          res.redirect('/notes/'+id.title);
      });
});

