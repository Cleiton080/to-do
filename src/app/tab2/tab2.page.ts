import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(private alertCtrl: AlertController){};

  async showAdd(){
    const alert = await this.alertCtrl.create({
      header: 'O que deseja fazer?',
      inputs: [
        {
          name: 'taskToDo',
          type: 'text',
          placeholder: 'Comprar pão',
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          cssClass: 'secondary',
          handler: () => {
            console.log('Click cancel');
          }
       }
    ]
    });
  }

}
