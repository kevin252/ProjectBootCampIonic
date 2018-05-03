import { AuthProvider } from './../../providers/auth/auth';
import { User } from './../../interfaces/user.interface';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {
	user: User;
	formSignIn: FormGroup;

	constructor(public navCtrl: NavController, public fb: FormBuilder, public auth: AuthProvider) {
		this.buildForm();
	}

	signIn() {
		this.auth.signIn(this.formSignIn.value.email, this.formSignIn.value.password);
	}

	goToPageCreateAccount() {
		this.navCtrl.push('CreateAccountPage');
	}

	buildForm() {
		this.formSignIn = this.fb.group({
			email: [ '', [ Validators.required, Validators.email ] ],
			password: [ '', [ Validators.required ] ]
		});
	}
}
