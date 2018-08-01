import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AddABookPage } from '../pages/add-a-book/add-a-book';
import {ChooseABookPage} from '../pages/choose-a-book/choose-a-book';
import {ReaderPage} from '../pages/reader/reader';
import {TabsPage} from '../pages/tabs/tabs';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AddABookPage,
    ChooseABookPage,
    ReaderPage,
    TabsPage,

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AddABookPage,
    ChooseABookPage,
    ReaderPage,
    TabsPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
