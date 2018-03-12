import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { ReactiveFormsModule } from '@angular/forms';
import { MyApp } from './app.component';
import { TextToSpeech } from '@ionic-native/text-to-speech';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { OpportunitePage } from '../pages/opportunite/opportunite'; 
import { RecettePage } from '../pages/recette/recette';
import { DepensePage } from '../pages/depense/depense'; 
import { CreditPage } from '../pages/credit/credit';
import { TabsPage } from '../pages/tabs/tabs'; 


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SaverecetteProvider } from '../providers/saverecette/saverecette';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    OpportunitePage,
    RecettePage,
    DepensePage,
    CreditPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    
    HttpClientModule,
    
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    OpportunitePage,
    RecettePage,
    DepensePage,
    CreditPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    ReactiveFormsModule,
    TextToSpeech,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SaverecetteProvider
  ]
})
export class AppModule {}
