import { Injectable } from '@angular/core';
import { Note } from './note';

@Injectable({
  providedIn: 'root'
})
export class NoteServiceService {
  lastId:number = 0;
  notes:Note[] = [];


  constructor() { }
  getNotes():Note[]{
    return this.notes;
  }
  
  addNote(note:Note):NoteServiceService{
    if(!note.id){
      note.id = ++this.lastId;
    }
    this.notes.push(note);
    return this;
  }

  deleteNote(id:number):NoteServiceService{
    this.notes = this.notes.filter(note=> note.id !== id);
    return this;
  }
}