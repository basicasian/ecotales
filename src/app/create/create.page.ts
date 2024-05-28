import { Component, OnInit } from '@angular/core';
import { PostData } from '../data/data-post';
import * as jsonPosts from '../../assets/json/posts.json';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {

  createdPost: PostData = {
    src: 'test',
    title: 'test',
    text: 'test',
    comments: ['test1', 'test2']
  };
  posts: PostData[] = [];

  constructor() { }

  ngOnInit() {

    const storedPosts = localStorage.getItem('posts');
    if (storedPosts) {
      this.posts = JSON.parse(storedPosts);
    } else {
      this.posts = (jsonPosts as any).default;
    }

    this.posts.unshift(this.createdPost);

    // localStorage.setItem('posts', JSON.stringify(this.posts));

    console.log(this.posts);
  }



}
