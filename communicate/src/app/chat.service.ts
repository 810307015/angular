import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  content: string[] = [];
  constructor() { }

  getContent(): Observable<any> {
    return of(this.content);
  }

  addContent(chunk) {
    this.content.push(chunk);
  }
}
