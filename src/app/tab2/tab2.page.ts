import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  url: string = 'https://www.worldwildlife.org/species/giant-panda';
  urlSafe: SafeResourceUrl = "";

  constructor(private location: Location, public sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  }
  goBack() {
    this.location.back(); // Use the location.back() method
  }

}
