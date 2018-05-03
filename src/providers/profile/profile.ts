import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera';

import { AngularFireStorage } from 'angularfire2/storage';
import { AngularFirestore } from 'angularfire2/firestore';
import { User } from '../../interfaces/user.interface';

/*
  Generated class for the ProfileProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProfileProvider {
	constructor(
		public http: HttpClient,
		public cameraPlugin: Camera,
		public afstorage: AngularFireStorage,
		private afs: AngularFirestore
	) {}
	takePicture(user: User) {
		const options: CameraOptions = {
			quality: 100,
			destinationType: this.cameraPlugin.DestinationType.DATA_URL,
			encodingType: this.cameraPlugin.EncodingType.JPEG,
			mediaType: this.cameraPlugin.MediaType.PICTURE,
			saveToPhotoAlbum: true
		};
		this.cameraPlugin.getPicture(options).then(
			(imageData) => {
				// imageData is either a base64 encoded string or a file URI
				// If it's base64:
				const id = this.afs.createId();

				this.afstorage
					.ref('pictures/{this.user.email}/{id}')
					.putString(imageData, 'base64', { contentType: 'image/png' })
					.then((infoImage) => {
						const image = {
							id,
							url: infoImage.metadata.downloadURLs[0]
						};
						user.image = image;
						this.afs.collection('Users').doc(user.id).update(user);
					});
			},
			(err) => {
				// Handle error
			}
		);
	}
}
