import { PostPage } from './../pages/post/post';
import { PostDetailPage } from './../pages/post-detail/post-detail';
import { ProfilePage } from './../pages/profile/profile';
import { TabsPage } from './../pages/tabs/tabs';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { environment } from '../environments/environment';
import { Camera } from '@ionic-native/camera';
import { PostsProvider } from '../providers/posts/posts';
import { HttpClientModule } from '@angular/common/http';
import { AuthProvider } from '../providers/auth/auth';
import { ProfileProvider } from '../providers/profile/profile';

@NgModule({
	declarations: [ MyApp, HomePage, TabsPage, ProfilePage, PostDetailPage, PostPage ],
	imports: [
		BrowserModule,
		AngularFireModule.initializeApp(environment.firebase),
		AngularFirestoreModule,
		AngularFireAuthModule,
		AngularFireStorageModule,
		HttpClientModule,
		IonicModule.forRoot(MyApp)
	],
	bootstrap: [ IonicApp ],
	entryComponents: [ MyApp, HomePage, TabsPage, ProfilePage, PostDetailPage, PostPage ],
	providers: [
		StatusBar,
		SplashScreen,
		Camera,
		{ provide: ErrorHandler, useClass: IonicErrorHandler },
		PostsProvider,
    AuthProvider,
    ProfileProvider
	]
})
export class AppModule {}
