import { Component, Input } from '@angular/core';
import { PostData } from '../data/data-post';

@Component({
  selector: 'app-container-view-post',
  templateUrl: './container-view-post.component.html',
  styleUrls: ['./container-view-post.component.scss'],
})
export class ContainerViewPostComponent {

  @Input() isOpen: boolean = false;
  @Input() currentPost: PostData = {
    src: '',
    title: '',
    text: '',
    comments: []
  };

  isModalOpen = false;

  newComment:string = '';

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  } 

  setModalData(isOpen: boolean, newPost: PostData) {
    this.isModalOpen = isOpen;
    this.currentPost = newPost;
  }

  addComment() {
    this.currentPost.comments.push(this.newComment);
    console.log(this.newComment);
    
    this.newComment = '';
  }


}
