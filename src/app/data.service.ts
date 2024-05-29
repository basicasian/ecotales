import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { PostData } from './data/data-post';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private emptyPost: PostData = {
    src: '',
    title: '',
    text: '',
    comments: []
  };

  private dataSubject = new BehaviorSubject<PostData>(this.emptyPost);
  public data = this.dataSubject.asObservable();

  sendData(data: PostData) {
    this.dataSubject.next(data);
    console.log("data: " + data.src);
    console.log("this.dataSubject: " + this.dataSubject);
  }

  getData() {
    return this.data;
  }
}