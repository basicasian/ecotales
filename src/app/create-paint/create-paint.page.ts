import { Component, OnInit } from '@angular/core';
import { PaintingData } from '../data/data-painting';
import { SubPaintingData } from '../data/data-subpainting';

@Component({
  selector: 'app-create-paint',
  templateUrl: './create-paint.page.html',
  styleUrls: ['./create-paint.page.scss'],
})
export class CreatePaintPage implements OnInit {

  paintings: PaintingData[] = [
    {
      "id": "1",
      "subpaintings": [
        {
          "src": "../../assets/images/create-write2.webp", "editable": false
        },
        {
          "src": "../../assets/images/create-write2.webp", "editable": false
        },
        {
          "src": "", "editable": true
        },
        {
          "src": "", "editable": true
        },
        {
          "src": "../../assets/images/create-write2.webp", "editable": false
        },
        {
          "src": "../../assets/images/create-write2.webp", "editable": false
        },
        {
          "src": "../../assets/images/create-write2.webp", "editable": false
        },
        {
          "src": "../../assets/images/create-write2.webp", "editable": false
        },
        {
          "src": "../../assets/images/create-write2.webp", "editable": false
        }
      ]
    },
  ]

  painting: PaintingData = {
    id: "",
    subpaintings: []
  }

  row1: SubPaintingData[] = [];
  row2: SubPaintingData[] = [];
  row3: SubPaintingData[] = [];
  currentSrc: number = 0;
  currentOpacity: number = 1;

  test: string = "";


  constructor() { }

  ngOnInit() {

    this.painting = this.paintings[0];
    this.test = this.painting.subpaintings[0].src;

    this.splitRows();
  }

  splitRows() {
    this.row1 = [];
    this.row2 = [];
    this.row3 = [];
    for (let i = 0; i < this.painting.subpaintings.length; i++) {
      if (i <= 2) {
        this.row1.push(this.painting.subpaintings[i]);
      } else if (i > 2 && i <= 5) {
        this.row2.push(this.painting.subpaintings[i]);
      } else {
        this.row3.push(this.painting.subpaintings[i]);
      }
    }
  }

  triggerClick(i: number, j: number): void {

    this.currentSrc = i + j * 3;
    const inputFile = document.getElementById('input_file') as HTMLInputElement;
    inputFile.click();
  }

  onSelectFile(event: Event): void {

    if (event.target instanceof HTMLInputElement && event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event: ProgressEvent<FileReader>) => { // called once readAsDataURL is completed
        this.painting.subpaintings[this.currentSrc].src = event.target?.result as string;
      }
    }
    this.splitRows();

    this.currentOpacity = 0.5;
  }


  addPart() {
    this.generateNewImage(this.painting.subpaintings.map(x => x.src)).then((image) => {
      this.test = image;

    })
  }


  async generateNewImage(imageUrls: string[]): Promise<string> {
    // load images
    const images: HTMLImageElement[] = await Promise.all(
      imageUrls.map(async url => {
        const image = new Image();
        image.src = url;
        await new Promise(resolve => image.onload = resolve);
        return image;
      })
    );

    // create canvas and draw images
    const [imageWidth, imageHeight] = [images[0].width, images[0].height];
    const canvas = document.createElement('canvas');
    canvas.width = imageWidth * 3;
    canvas.height = imageHeight * 3;
    const context = canvas.getContext('2d');

    images.forEach((image, index) => {
      const [x, y] = [
        (index % 3) * imageWidth,
        Math.floor(index / 3) * imageHeight
      ];
      context?.drawImage(image, x, y);
    });
    return canvas.toDataURL();
  }


}
