import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PaintingData } from '../data/data-painting';
import { SubPaintingData } from '../data/data-subpainting';
import { PostData } from '../data/data-post';
import * as jsonPosts from '../../assets/json/posts.json';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-create-paint',
  templateUrl: './create-paint.page.html',
  styleUrls: ['./create-paint.page.scss'],
})
export class CreatePaintPage implements OnInit {

  paintings: PaintingData[] = [
    {
      "id": "0",
      "subpaintings": [
        {
          "src": "../../assets/images/create1/create1-1.jpg", "editable": false
        },
        {
          "src": "../../assets/images/create1/create1-2.jpg", "editable": false
        },
        {
          "src": "../../assets/images/create1/create1-3.jpg", "editable": false
        },
        {
          "src": "", "editable": true
        },
        {
          "src": "../../assets/images/create1/create1-5.jpg", "editable": false
        },
        {
          "src": "../../assets/images/create1/create1-6.jpg", "editable": false
        },
        {
          "src": "../../assets/images/create1/create1-7.jpg", "editable": false
        },
        {
          "src": "../../assets/images/create1/create1-8.jpg", "editable": false
        },
        {
          "src": "", "editable": true
        }
      ]
    }, {
      "id": "1",
      "subpaintings": [
        {
          "src": "../../assets/images/orangutan.jpg", "editable": false
        },
        {
          "src": "", "editable": true
        },
        {
          "src": "", "editable": true
        },
        {
          "src": "", "editable": true
        },
        {
          "src": "../../assets/images/panda.jpg", "editable": false
        },
        {
          "src": "../../assets/images/elephant.jpg", "editable": false
        },
        {
          "src": "", "editable": true
        },
        {
          "src": "../../assets/images/lion.jpg", "editable": false
        },
        {
          "src": "../../assets/images/tiger.jpg", "editable": false
        }
      ]
    }, {
      "id": "2",
      "subpaintings": [
        {
          "src": "", "editable": true
        },
        {
          "src": "", "editable": true
        },
        {
          "src": "", "editable": true
        },
        {
          "src": "", "editable": true
        },
        {
          "src": "", "editable": true
        },
        {
          "src": "", "editable": true
        },
        {
          "src": "", "editable": true
        },
        {
          "src": "", "editable": true
        },
        {
          "src": "", "editable": true
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
  disabledOpacity: number = 1;

  test: string = "";

  posts: PostData[] = [];
  createdPost: PostData = {
    src: '',
    title: '',
    text: '',
    comments: []
  };

  constructor(private router: Router, private dataservice: DataService) {
  }

  ngOnInit() {

    // get random painting
    this.painting = this.paintings[Math.floor(Math.random() * this.paintings.length)];

    this.splitRows();

    const storedPosts = localStorage.getItem('posts');
    if (storedPosts) {
      this.posts = JSON.parse(storedPosts);
    } else {
      this.posts = (jsonPosts as any).default;
    }


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
    this.disabledOpacity = 0.5;
  }


  addPart() {

    this.generateNewImage(this.painting.subpaintings.map(x => x.src)).then((image) => {

      console.log("image:" + image)
      this.createdPost = {
        src: image,
        title: 'NEW',
        text: 'new',
        comments: []
      };

      console.log("createdPost:" + this.createdPost);
      this.dataservice.sendData(this.createdPost);
    })
    this.goToPage('share');

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


    // Create an anchor element with download attribute
    /*
    const link = document.createElement('a');
    link.href = imageDataUrl;
    link.download = 'test'; // Set the filename
    link.click(); // Simulate a click to trigger download
*/

    //var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");  // here is the most important part because if you dont replace you will get a DOM 18 exception.
    //window.location.href=image; // it will save locally

    return imageDataUrl;
  }


  goToPage(pageName: string) {
    this.router.navigate([`${pageName}`]);
  }


}
