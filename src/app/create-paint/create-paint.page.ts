import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PaintingData } from '../data/data-painting';
import { SubPaintingData } from '../data/data-subpainting';
import { PostData } from '../data/data-post';
import * as jsonPosts from '../../assets/json/paintings.json';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-create-paint',
  templateUrl: './create-paint.page.html',
  styleUrls: ['./create-paint.page.scss'],
})
export class CreatePaintPage implements OnInit {

  paintings: PaintingData[] = []

  painting: PaintingData = {
    subpaintings: [],
    title: "",
    text: ""
  }
  numberOfSubpaintings: number = 0;
  status: string = "";
  //paintingReady: boolean = false;
  //paintingNew: boolean = false;
  indexPainting: number = 0;

  row1: SubPaintingData[] = [];
  row2: SubPaintingData[] = [];
  row3: SubPaintingData[] = [];

  currentSrc: number = 0;
  previousSrc: number = 0;
  disabledOpacity: number = 1;
  hasContributed: boolean = false; 

  createdPost: PostData = {
    src: '',
    title: '',
    text: '',
    comments: []
  };

  constructor(private router: Router, private dataservice: DataService) {
  }

  ngOnInit() {
    const storedPaintings = localStorage.getItem('paintings');

    console.log(storedPaintings);
    if (storedPaintings) {
      this.paintings = JSON.parse(storedPaintings);
    } else {
      this.paintings = (jsonPosts as any).default;
    }
    
    this.paintings.push((jsonPosts as any).default[(jsonPosts as any).default.length - 1])
    this.initPage();
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

        if (this.hasContributed == true) {
          this.painting.subpaintings[this.previousSrc].src = "";
        } else {
          this.hasContributed = true;
        }
        this.painting.subpaintings[this.currentSrc].src = event.target?.result as string;
        this.previousSrc = this.currentSrc;
      }
    }

    this.splitRows();
    this.disabledOpacity = 0.5;
    this.checkNumberOfSubpaintings();
  }


  post() {

    // update localStorage with whole json
    // this.paintings[this.indexPainting] = this.painting;
    // localStorage.setItem('paintings', JSON.stringify(this.paintings));

    this.generateNewImage(this.painting.subpaintings.map(x => x.src)).then((image) => {

      this.createdPost.src = image;
      this.dataservice.sendData(this.createdPost);
      this.goToPage('share'); // have to go to share page, otherwise post dont work

    })

    // update localStorage with whole json
    this.paintings.splice(this.indexPainting, 1);
    localStorage.setItem('paintings', JSON.stringify(this.paintings));
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
      // images get scaled to first image
      context?.drawImage(image, x, y, imageWidth, imageHeight);
    });

    // Convert canvas to base64 data URL
    const imageDataUrl = canvas.toDataURL("image/webp", 0.01);

    return imageDataUrl;
  }


  goToPage(pageName: string) {
    this.router.navigate([`${pageName}`]);
  }

  reloadPage() {
    window.location.reload();
  }

  initPage() {
    // get random painting
    var random = Math.floor(Math.random() * this.paintings.length);
    this.painting = this.paintings[random];
    this.indexPainting = random;

    this.createdPost.title = this.painting.title;
    this.createdPost.text = this.painting.text;

    this.hasContributed = false;
    this.splitRows();
  }

  checkNumberOfSubpaintings() {
    var counter = 0;
    for (let i = 0; i < this.painting.subpaintings.length; i++) {
      if (this.painting.subpaintings[i].src != "") {
        counter++;
      }
    }
    this.numberOfSubpaintings =  counter;
    return counter;
  }

  contribute() {

    if (this.disabledOpacity == 0.5) {

      // update localStorage with whole json
      this.paintings[this.indexPainting] = this.painting;
      localStorage.setItem('paintings', JSON.stringify(this.paintings));

      this.reloadPage();
    }
  }

  start() {
    if (this.createdPost.title != '' && this.createdPost.text != '' && this.disabledOpacity == 0.5) {
      this.painting.title = this.createdPost.title;
      this.painting.text = this.createdPost.text;

      this.contribute();
    }
  }
}
