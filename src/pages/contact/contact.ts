import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  segment: string="Caisse";
  constructor(public navCtrl: NavController) {

  }

}
