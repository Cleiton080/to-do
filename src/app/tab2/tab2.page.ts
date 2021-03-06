import { Component } from '@angular/core';
import { AlertController, ToastController, ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
   
  tasks: any[] = [];
  constructor(private alertCtrl: AlertController, private toastCtrl: ToastController, private actionSheetCtrl: ActionSheetController){};

  async showAdd(){
    const alert = await this.alertCtrl.create({
      header: 'O que deseja fazer?',
      inputs: [
        {
          name: 'Tarefa',
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
       },
       {
         text: 'Adicionar',
         handler: (form) => {
           this.addTarefa(form.Tarefa);
         }
       }
    ]
    });
    await alert.present();
  }

   async addTarefa(Tarefa: string){
    if(Tarefa.trim().length < 1){
      const toast = await this.toastCtrl.create({
        message: 'Informe dados válidos!',
        position: 'top',
        duration: 2000
        
      });
      
      await toast.present();
      return;
    }

    let task = {nome: Tarefa, done: false}
    this.tasks.push(task);

  }

  async openAction(task: any){
    const actionSheet = await this.actionSheetCtrl.create({
      header: "O que deseja fazer?",
      buttons: [{
        text: task.done ? 'Desmarcar' : 'Marcar',
        icon: task.done ? 'radio-button-off' : 'checkmark-circle',
        handler: () => {
          task.done = !task.done;
        }
      }]
    });
  }

}
