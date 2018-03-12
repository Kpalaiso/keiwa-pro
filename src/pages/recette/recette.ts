import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { SaverecetteProvider } from '../../providers/saverecette/saverecette';
import { FormGroup, FormControl } from '@angular/forms';


/**
 * Generated class for the RecettePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-recette',
  templateUrl: 'recette.html',
})
export class RecettePage {

  recetteForm=new FormGroup({
    daterecette: new FormControl(),
    category: new FormControl(), 
  libelerecette: new FormControl(),
  montantrecette: new FormControl()
  })

  constructor(public navCtrl: NavController, public saverecet: SaverecetteProvider, public view: ViewController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecettePage');
  }

  closeRecette(){
    this.view.dismiss();
  }

  register(){
    alert(this.recetteForm.value)
   this.saverecet.dataRecette.push(this.recetteForm.value);
    
  }

}
