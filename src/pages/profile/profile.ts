import { ProfileProvider } from './../../providers/profile/profile';
import { AuthProvider } from './../../providers/auth/auth';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { AlertController } from 'ionic-angular';
import { User } from '../../interfaces/user.interface';
/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
	selector: 'page-profile',
	templateUrl: 'profile.html'
})
export class ProfilePage {
	user: User;
	constructor(
		public navCtrl: NavController,
		public navParams: NavParams,
		public alertCtrl: AlertController,
		public auth: AuthProvider,
		public profileProvider: ProfileProvider
	) {}

	ionViewDidLoad() {
		this.auth.loadCurrentUser().subscribe((user) => {
			if (user) {
				this.auth.getUserById(user.uid).subscribe((infoUser) => {
					this.user = <User>infoUser;
				});
			}
		});
	}
	signOut() {
		this.auth.signOut();
	}

	takePicture() {
		this.profileProvider.takePicture(this.user);
	}
}
