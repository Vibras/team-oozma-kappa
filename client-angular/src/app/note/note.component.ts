import { Component, OnInit } from '@angular/core';
import { TaskService } from "../task.service";
import { Note } from "../models/Note";

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {
  constructor(private taskService: TaskService) {}
  newNote: Note = new Note();
  Note: Note[] = [];

  getNote() {
    this.taskService.getNote().subscribe(tasks => (this.note = Note));
  }

  addNote() {
    this.taskService.addNote(this.newNote).subscribe(result => {
      this.getNote();
      this.newNote = new Note();
    });
  }
  
  ngOnInit(): void {
    This.getNote();
  }

}
