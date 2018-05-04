import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore } from 'angularfire2/firestore';
import { AlertController } from 'ionic-angular';

import { User } from '../../interfaces/user.interface';

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {
	constructor(
		public afa: AngularFireAuth,
		public afs: AngularFirestore,
		public alertCtrl: AlertController
	) {
		console.log('Hello AuthProvider Provider');
	}
	loadCurrentUser() {
		return this.afa.authState;
	}

	getUserById(userId) {
		return this.afs.collection<User>('Users').doc(userId).valueChanges();
	}
	signOut() {
		this.afa.auth.signOut();
	}
	signIn(email, password) {
		this.afa.auth
			.signInWithEmailAndPassword(email, password)
			.then((content) => {})
			.catch((error) => {
				this.alertFailSignIn();
			});
	}
	alertFailSignIn() {
		let prompt = this.alertCtrl.create({
			title: 'Error',
			message: 'El usuario o contraseña no pertenecen a un usuario',
			buttons: [
				{
					text: 'OK'
				}
			]
		});
		prompt.present();
	}

	createAccount(email: string, password: string) {
		this.afa.auth
			.createUserWithEmailAndPassword(email, password)
			.then((infoUser) => {
				const user: User = {
					id: infoUser.uid,
					email: infoUser.email,
					password: password,
					image: null
				};
				this.afs.collection<User>('Users').doc(infoUser.uid).set(user);
			})
			.catch((error) => {
				this.alertFailCreateAccount();
			});
	}

	alertFailCreateAccount() {
		let prompt = this.alertCtrl.create({
			title: 'Error',
			message: 'Ya se encuentra un usuario registrado con el mismo correo',
			buttons: [
				{
					text: 'OK'
				}
			]
		});
		prompt.present();
	}
}
