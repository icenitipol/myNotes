import { Component, OnInit } from '@angular/core';
import { NoteService } from './services/note.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'myNotes';

  input_title: string = ""
  input_content: string = ""

  constructor(
    public noteService: NoteService
  ){}

  isNavOpen = false;
  toggleNav() {
    this.isNavOpen = !this.isNavOpen
  }

  ngOnInit(){
    this.noteService.load()
  }


  createNote(){
    this.noteService.createNote(this.input_title, this.input_content)
    this.noteService.save()
  }

  deleteNote(id:string){
    this.noteService.deleteNote(id)
  }

}
