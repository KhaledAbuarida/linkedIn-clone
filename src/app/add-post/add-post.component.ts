import { Component } from '@angular/core';
import { Firestore, addDoc, collection } from '@angular/fire/firestore';
import { Post } from '../model/post';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-post',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-post.component.html',
  styleUrl: './add-post.component.css',
})
export class AddPostComponent {
  content: string = '';

  constructor(private firestore: Firestore) { }

  addPost(post: Post) {
    const postCollection = collection(this.firestore, 'posts');
    addDoc(postCollection, {
      ...{ ...post },
    });
  }
}
