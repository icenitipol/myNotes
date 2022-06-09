import { Injectable, OnInit } from '@angular/core';
import { note } from '../interfaces/note.interface';

@Injectable({
  providedIn: 'root',
})
export class NoteService {

  constructor() { }

  notes: note[] = []

  createNote(title: string, content: string){
    const lastNote = this.notes[this.notes.length-1]
    const id = lastNote ? parseInt(lastNote.id) + 1 : 0
    this.notes.push({
      id: (id + ""),
      content: content,
      title: title
    })
  }

  deleteNote(id: string) {
    for(let i=0; i<this.notes.length; i++) {
      if(id == this.notes[i].id) {
        this.notes.splice(i, 1)
        this.save()
        return;
      }
    }
  }

  storage = "myNotes"

  save() {
    const data = JSON.stringify(this.notes)
    localStorage.setItem(this.storage, data)
  }

  load() {
    const data = localStorage.getItem(this.storage)
    if(data) {
      this.notes = JSON.parse(data)
    }
  }



}
