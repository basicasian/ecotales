import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-start',
  templateUrl: './start.page.html',
  styleUrls: ['./start.page.scss'],
})
export class StartPage implements OnInit {

  constructor(private router: Router){
  }
  
  ngOnInit() {
  }

  goToPage(pageName:string){
    this.router.navigate([`${pageName}`]);
  }
  
  
}


