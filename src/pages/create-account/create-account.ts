import { AuthProvider } from './../../providers/auth/auth';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AbstractControl } from '@angular/forms/src/model';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the CreateAccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
function passwordMatcher(c: AbstractControl) {
	return c.get('password').value === c.get('confirm').value ? null : { nomatch: true };
}
@IonicPage()
@Component({
	selector: 'page-create-account',
	templateUrl: 'create-account.html'
})
export class CreateAccountPage {
	formCreateAccount: FormGroup;
	constructor(
		public navCtrl: NavController,
		public alertCtrl: AlertController,
		public navParams: NavParams,
		public fb: FormBuilder,
		public auth: AuthProvider
	) {
		this.buildForm();
	}

	passwordMatcher(c: AbstractControl) {
		return c.get('password').value === c.get('confirm').value ? null : { nomatch: true };
	}
	createAccount() {
		this.auth.createAccount(
			this.formCreateAccount.value.email,
			this.formCreateAccount.value.pass.password
		);
	}

	buildForm() {
		this.formCreateAccount = this.fb.group({
			email: [ '', [ Validators.required, Validators.email ] ],
			pass: this.fb.group(
				{
					password: [ '', [ Validators.required, Validators.minLength(6) ] ],
					confirm: [ '', [ Validators.required, Validators.minLength(6) ] ]
				},
				{ validator: passwordMatcher }
			)
		});
	}
}
