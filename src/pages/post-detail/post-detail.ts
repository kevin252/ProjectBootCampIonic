import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Post } from '../../interfaces/post.interface';

/**
 * Generated class for the PostDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
	selector: 'page-post-detail',
	templateUrl: 'post-detail.html'
})
export class PostDetailPage {
	post: Post;
	constructor(public navCtrl: NavController, public navParams: NavParams) {
		this.post = navParams.get('post');
	}
}
