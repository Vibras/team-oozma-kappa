import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CreateNotesComponent } from './create-notes/create-notes.component';
import { NotesViewComponent } from './notes-view/notes-view.component';
import { NoteServiceService } from './note-service.service';

@NgModule({
  declarations: [
    AppComponent,
    CreateNotesComponent,
    NotesViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [NoteServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }