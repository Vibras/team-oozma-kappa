import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Task } from "./models/task";
import { Observable } from "rxjs";
import { Note } from "../models/Note";

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
  export class TaskService {
    // Java Spring Boot uses port 8080
    apiUrl: string = "http://localhost:8080/note";
  
    constructor(private http: HttpClient) {}

    getNote(): Observable<Note[]> {
      return this.http.get<Note[]>(this.apiUrl);
    }
  
    addNote(Note): Observable<Note> {
      return this.http.post<Note>(this.apiUrl, Note);
  

}
