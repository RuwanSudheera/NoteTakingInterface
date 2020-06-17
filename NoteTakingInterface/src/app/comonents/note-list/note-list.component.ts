import { Component, OnInit } from '@angular/core';
import { Note } from '../../common/note';
import { NoteService } from 'src/app/services/note.service';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NoteListComponent implements OnInit {

  notes: Note[];

  constructor(private _noteService: NoteService) { }

  ngOnInit() {
    this.listNotes();
  }

  listNotes(){
    this._noteService.getNotes().subscribe(
      data => this.notes = data
    )
  }

}
