import { Component, OnInit } from '@angular/core';
import { NoteServiceService } from '../note-service.service';
import { Note } from '../note';

@Component({
  selector: 'app-notes-view',
  templateUrl: './notes-view.component.html',
  styleUrls: ['./notes-view.component.css']
})
export class NotesViewComponent implements OnInit {
  notes:Note[] = [];
  constructor(private noteServ:NoteServiceService) { }

  ngOnInit() {
    this.getMyNotes();
    setInterval(()=> { this.getMyNotes() }, 1);
  }
  getMyNotes(){
    this.notes = this.noteServ.getNotes();
  }
  deleteNote(id:number){
    this.noteServ.deleteNote(id);
  }
}