import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PmxService {
  private subject = new Subject<any>();
  constructor() { }
  sendClickEvent()
  {
    this.subject.next("");
  }
  getEvent():Observable<any>
  {
    return this.subject.asObservable();
  }
}
