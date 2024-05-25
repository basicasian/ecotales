import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-info-panda',
  templateUrl: './info-panda.page.html',
  styleUrls: ['./info-panda.page.scss'],
})
export class InfoPandaPage implements OnInit {

  constructor(private location: Location) {}
  goBack() {
    this.location.back(); // Use the location.back() method
  }

  ngOnInit() {
  }

}
