import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the SaverecetteProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SaverecetteProvider {
  public dataRecette: any[]=[];
  public libele_recette: string;
  public categorie_recette: string;
  public montant_recette: any;
  public date_rec: any;

  constructor(public http: HttpClient) {
    console.log('Hello SaverecetteProvider Provider');
  }



}
