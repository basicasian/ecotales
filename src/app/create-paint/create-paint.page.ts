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
          "src": "../../assets/images/create1/create1-4.jpg", "editable": false
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
      ],
      "title": "Welt der Wunder",
      "text": "With this collaboration I wanted start a prompt about how the line between nature and animals are not really defined. Animals are a part of nature and so are we - humans. That is why we have to be more responsible of our environment!"
    }, {
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
      ],
      "title": "chinese style animals",
      "text": "i tried to paint animals in traditional chinese style.. hope this prompt gives other a spark of inspiration! i wonder what the others are going to add?"
    }, {
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
      ],
      "title": "",
      "text": ""
    },
  ]

  painting: PaintingData = {
    subpaintings: [],
    title: "",
    text: ""
  }

  row1: SubPaintingData[] = [];
  row2: SubPaintingData[] = [];
  row3: SubPaintingData[] = [];

  currentSrc: number = 0;
  disabledOpacity: number = 1;

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
    this.createdPost.title = this.painting.title;
    this.createdPost.text = this.painting.text;
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
    this.disabledOpacity = 0.5;
  }


  addPart() {

    this.generateNewImage(this.painting.subpaintings.map(x => x.src)).then((image) => {

      this.createdPost.src = image;
      this.dataservice.sendData(this.createdPost);
    })

    this.goToPage('share');
    //window.location.reload(); // fix this

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
    const imageDataUrl = canvas.toDataURL("image/webp", 0.005);

    return imageDataUrl;
  }


  goToPage(pageName: string) {
    this.router.navigate([`${pageName}`]);
  }


  reload() {
    window.location.reload();
  }

}
