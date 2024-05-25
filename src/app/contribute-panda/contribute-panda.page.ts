import { Component, OnInit } from '@angular/core';
import { InfiniteScrollCustomEvent } from '@ionic/angular';

@Component({
  selector: 'app-contribute-panda',
  templateUrl: './contribute-panda.page.html',
  styleUrls: ['./contribute-panda.page.scss'],
})
export class ContributePandaPage implements OnInit {

  items = [];
  constructor() { }

  ngOnInit() {
  }

}
