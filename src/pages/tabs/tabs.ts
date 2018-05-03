import { PostPage } from './../post/post';
import { Component } from '@angular/core';
import { ProfilePage } from '../profile/profile';

/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
	templateUrl: 'tabs.html'
})
export class TabsPage {
	tabPageProfile = ProfilePage;
	tabPagePost = PostPage;
	constructor() {}
}
