import { Component, OnInit, ViewChild } from '@angular/core';
import { PostData } from '../data/data-post';
import { Router } from '@angular/router';
import { IonContent } from '@ionic/angular';
import * as jsonPosts from '../../assets/json/posts.json';
import { DataService } from '../data.service';
import { CreatePaintPage } from '../create-paint/create-paint.page';

@Component({
  selector: 'app-share',
  templateUrl: './share.page.html',
  styleUrls: ['./share.page.scss'],
})
export class SharePage implements OnInit {
  @ViewChild(IonContent) content!: IonContent;

  posts: PostData[] = [];
  column1: PostData[] = [];
  column2: PostData[] = [];

  currentPost: PostData = {
    src: '',
    title: '',
    text: '',
    comments: []
  };

  createdPost: PostData = {
    src: '',
    title: '',
    text: '',
    comments: []
  };

  createdStoryPost: PostData = {
    src: '',
    title: '',
    text: '',
    comments: []
  };

  isViewModalOpen = false;
  isCreateModalOpen = false;
  newComment: string = '';

  constructor(private router: Router, private dataservice: DataService) {
  }

  ngOnInit() {
    const storedPosts = localStorage.getItem('posts');
    if (storedPosts) {
      this.posts = JSON.parse(storedPosts);
    } else {
      this.posts = (jsonPosts as any).default;
    }

    this.dataservice.data.subscribe((result) => {

      if (result.src != '') {
        this.createdPost = result;
        this.posts.unshift(this.createdPost);
        localStorage.setItem('posts', JSON.stringify(this.posts));

        this.resetCreatedPost();
      }

      this.splitColumns();
    });

  }

  splitColumns() {
    this.column1 = [];
    this.column2 = [];
    for (let i = 0; i < this.posts.length; i++) {
      if (i % 2 === 0) {
        this.column1.push(this.posts[i]);
      } else {
        this.column2.push(this.posts[i]);
      }
    }
  }

  setModalOpen(isOpen: boolean, type: string, data: undefined | PostData) {
    if (type === "create") {
      this.isCreateModalOpen = isOpen;
    }
    else if (type === "view") {
      this.isViewModalOpen = isOpen;
    }

    if (data != undefined) {
      this.currentPost = data;
    }
  }

  addComment() {
    if (this.newComment != '') {
      this.currentPost.comments.push(this.newComment);
      this.newComment = '';

      // update localStorage with whole json
      var objIndex = this.posts.findIndex(obj => obj.src == this.currentPost.src);
      this.posts[objIndex].comments = this.currentPost.comments;
      localStorage.setItem('posts', JSON.stringify(this.posts));
    }

  }

  triggerClick(): void {
    const inputFile = document.getElementById('input_file') as HTMLInputElement;
    inputFile.click();
  }

  onSelectFile(event: Event): void {
    if (event.target instanceof HTMLInputElement && event.target.files && event.target.files[0]) {
      const reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event: ProgressEvent<FileReader>) => { // called once readAsDataURL is completed
        this.createdPost.src = event.target?.result as string;
      }
    }
  }

  resetCreatedPost() {
    this.createdPost = {
      src: '',
      title: '',
      text: '',
      comments: []
    };
  }

  addPost() {
    if (this.createdPost.src === '' || this.createdPost.title == '' || this.createdPost.text === '') {
      return;
    }

    this.posts.unshift(this.createdPost);

    // update localStorage with whole json
    localStorage.setItem('posts', JSON.stringify(this.posts));

    this.resetCreatedPost();
    this.splitColumns();
    this.setModalOpen(false, 'create', undefined);

    this.content.scrollToTop(0);
  }

  goToPage(pageName: string) {
    this.router.navigate([`${pageName}`]);
  }

}

