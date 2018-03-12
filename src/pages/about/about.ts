import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  segment: string="exploitation";
  gender: string="du jour";

  constructor(public navCtrl: NavController) {

  }

  

  ionViewDidLoad(){
    
  }


}
