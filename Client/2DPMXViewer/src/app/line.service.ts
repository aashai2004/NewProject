import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
interface Line
{
  x1:number,
  y1:number
}
@Injectable({
  providedIn: 'root'
})
export class LineService {
  // callDraw = new Subject<boolean>();
  private subject = new Subject<any>();
  line: Line[] = [{x1:0,y1:0}];
  constructor() { }
  sendClickEvent()
  {
    this.subject.next(this.line);
  }
  getEvent():Observable<any>
  {
    return this.subject.asObservable();
  }
}
