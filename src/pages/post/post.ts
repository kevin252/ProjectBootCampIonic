import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PostsProvider } from '../../providers/posts/posts';
import { Post } from '../../interfaces/post.interface';
import { PostDetailPage } from '../post-detail/post-detail';

/**
 * Generated class for the PostPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
	selector: 'page-post',
	templateUrl: 'post.html'
})
export class PostPage {
	posts: Post[];

	constructor(
		public navCtrl: NavController,
		public navParams: NavParams,
		public postProvider: PostsProvider
	) {
		this.getPosts();
	}

	getPosts() {
		this.postProvider.getPosts().subscribe((content) => {
			this.posts = content;
		});
	}

	showPostDetail(post: Post) {
		this.navCtrl.push(PostDetailPage, { post });
	}
}
