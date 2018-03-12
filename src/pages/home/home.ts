import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ModalController, AlertController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { RecettePage } from '../recette/recette';  
import { DepensePage } from '../depense/depense';
import { CreditPage } from '../credit/credit';
import { SaverecetteProvider } from '../../providers/saverecette/saverecette';
import { TextToSpeech } from '@ionic-native/text-to-speech';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  segment: string="Recette";
  mois="Decembre";
  im_pop="<img class='redim_img_pop' width='30'   src='assets/imgs/apple-1.png' alt=''>";

  constructor(public navCtrl: NavController, public saverecet: SaverecetteProvider, public alertCtrl: AlertController,  private tts: TextToSpeech, public modal: ModalController ) {
    
  }

  openRecette(){
     let modal = this.modal.create(RecettePage);
    modal.present();
  }

  openDepense(){

    let modal=this.modal.create(DepensePage);
    modal.present();

  }

  openCredit(){

    let modal=this.modal.create(CreditPage);
    modal.present();

  }



  presentConfirm() {
    const alert = this.alertCtrl.create({
      title: `${this.im_pop} tomate fraiche`,
      message: `<div style='margin-top:-20px' >
      <p> Prix unitaire: 3000Fcfa     </p>
      <p> Quantité: 12     </p>
      <p> date : 22-01-2015    </p>
      <p> Payer a credit  </p>
       </div>
      `,
      cssClass:'mypop',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Buy',
          handler: () => {
            console.log('Buy clicked');
          }
        }
      ]
    });
    alert.present();
  }









  speak(){
   this.tts.speak({
     text:"bienvenu sur keiwaPro, pour enregistrer une recette, cliquez sur le crayon, et pour enregistrer une depense, cliquez sur la main, en haut, a gauche",
     locale:"fr-FR"
   })
  .then(() => console.log('Success'))
  .catch((reason: any) => console.log(reason));
}

speakRecette(){
  this.tts.speak({
     text:"vous êtes dans l'onglet depense, pour enregistrer une depense, cliquez sur le crayon, et pour enregistrer une recette, cliquez sur le cahier, en haut, a droite",
     locale:"fr-FR"
   })
  .then(() => console.log('Success'))
  .catch((reason: any) => console.log(reason));
}

indextab(val: any){
for(var i=0; i<this.saverecet.dataRecette.length; i++)
{
  if(this.saverecet.dataRecette[i].montantrecette==val)
  {
    break;
    
    
  }
}

return i;
}

}
