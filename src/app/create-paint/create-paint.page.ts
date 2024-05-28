import { Component, OnInit } from '@angular/core';
import { PaintingData } from '../data/data-painting';

@Component({
  selector: 'app-create-paint',
  templateUrl: './create-paint.page.html',
  styleUrls: ['./create-paint.page.scss'],
})
export class CreatePaintPage implements OnInit {

  paintings: PaintingData[] = [
    {
      "id": "1",
      "src": [
        "../../assets/images/create-write2.webp", "../../assets/images/create-write2.webp", "../../assets/images/create-write2.webp",
        "../../assets/images/create-write2.webp", "../../assets/images/create-write2.webp", "../../assets/images/create-write2.webp",
        "../../assets/images/create-write2.webp", "../../assets/images/create-write2.webp", "../../assets/images/create-write2.webp",
      ]
    },
    {
      "id": "2",
      "src": [
        "../../assets/images/create-write2.webp", "../../assets/images/create-write1.webp", "../../assets/images/create-write2.webp",
        "../../assets/images/create-write2.webp", "../../assets/images/create-write2.webp", "../../assets/images/create-write2.webp",
        "../../assets/images/create-write2.webp", "../../assets/images/create-write2.webp", "../../assets/images/create-write2.webp",
      ]
    },
    {
      "id": "3",
      "src": [
        "../../assets/images/create-write1.webp", "../../assets/images/create-write2.webp", "../../assets/images/create-write2.webp",
        "../../assets/images/create-write2.webp", "../../assets/images/create-write2.webp", "../../assets/images/create-write2.webp",
        "../../assets/images/create-write2.webp", "../../assets/images/create-write2.webp", "../../assets/images/create-write2.webp",
      ]
    },
    {
      "id": "3",
      "src": [
        "../../assets/images/create-write1.webp", "../../assets/images/create-write2.webp", "../../assets/images/create-write2.webp",
        "../../assets/images/create-write2.webp", "../../assets/images/create-write2.webp", "../../assets/images/create-write2.webp",
        "../../assets/images/create-write2.webp", "../../assets/images/create-write2.webp", "../../assets/images/create-write2.webp",
      ]
    },

  ]

  painting:PaintingData = {
    id: "",
    src: [] 
  }

  row1: string[] = [];
  row2: string[] = [];
  row3: string[] = [];

  constructor() { }

  ngOnInit() {
    
    this.painting = this.paintings[0];

    
    this.splitRows();
  }

  splitRows() {
    this.row1 = [];
    this.row2 = [];
    this.row3 = [];
    for (let i = 0; i < this.painting.src.length; i++) {
      if (i % 3 === 0) {
        this.row1.push(this.painting.src[i]);
      } else if (i % 3 === 1) {
        this.row2.push(this.painting.src[i]);
      } else {
        this.row3.push(this.painting.src[i]);
      }
    }

    
    console.log(this.row1);
  }


  addPart() {

  }

}
