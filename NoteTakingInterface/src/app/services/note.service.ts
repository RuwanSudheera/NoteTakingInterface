import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Note } from '../common/note';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  private baseUrl = "http://localhost:3000/api"

  constructor(private httpClient: HttpClient) { }

  getNotes(): Observable<Note[]>{
    return this.httpClient.get<GetResponseNotes>(this.baseUrl).pipe(
      map(response => response._embedded.notes)
    )
  }
}

interface GetResponseNotes{
  _embedded: {
    notes: Note[];
  }
}