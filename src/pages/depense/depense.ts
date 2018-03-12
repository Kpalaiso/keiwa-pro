import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { FormGroup, FormControl } from '@angular/forms';

/**
 * Generated class for the DepensePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-depense',
  templateUrl: 'depense.html',
})
export class DepensePage {

  depenseForm=new FormGroup({
    datedepense: new FormControl(),
    category: new FormControl(), 
  libeledepense: new FormControl(),
  montantdepense: new FormControl()
  })

  constructor(public navCtrl: NavController, public view: ViewController, public navParams: NavParams) {
  }

  registerDepense(){
    alert(this.depenseForm.value);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DepensePage');
  }

  closeDepense(){
    this.view.dismiss();
  }

}
