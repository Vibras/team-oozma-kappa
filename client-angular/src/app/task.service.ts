import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Task } from "./models/task";
import { Observable } from "rxjs";
import { Note } from "./models/Note";

@Injectable({
  providedIn: "root"
})
export class TaskService {
  // Java Spring Boot uses port 8080
  apiUrl: string = "http://localhost:8080/tasks";

  constructor(private http: HttpClient) {}

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl);
  }

  addTask(task): Observable<Task> {
    return this.http.post<Task>(this.apiUrl, task);
  }
    
  
    // Java Spring Boot uses port 8080
   noteUrl: string = "http://localhost:8080/note";
  
   

    getNote(): Observable<Note[]> {
      return this.http.get<Note[]>(this.noteUrl);
    }
  
    addNote(Note): Observable<Note> {
      return this.http.post<Note>(this.noteUrl, Note);
  

}
}