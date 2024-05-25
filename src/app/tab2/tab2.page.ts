import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(private location: Location) {}
  goBack() {
    this.location.back(); // Use the location.back() method
  }

  ngOnInit() {
  }

}
