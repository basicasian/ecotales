import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private dataSubject = new BehaviorSubject<string>("");
  public data = this.dataSubject.asObservable();

  sendData(data: string) {
    this.dataSubject.next(data);
    console.log(data);
    console.log(this.dataSubject);
  }
}