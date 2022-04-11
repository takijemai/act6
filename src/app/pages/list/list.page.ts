import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  lista: any;
  constructor(public toastController: ToastController) {
    this.lista = [{ id: 1, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Dzr3xj_vLN9O3HBDinQfGVGFgygdW5ajoQ&usqp=CAU' },
      { id: 2, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Dzr3xj_vLN9O3HBDinQfGVGFgygdW5ajoQ&usqp=CAU' },
      {id:3, image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Dzr3xj_vLN9O3HBDinQfGVGFgygdW5ajoQ&usqp=CAU'}
    ];
   }

  ngOnInit() {
  }


  async showToast() {
    const toast = await this.toastController.create({
      message: 'En construcción',
      position: 'middle',
      duration: 3000,
      color: 'danger',
      buttons: [
        {
          icon: 'camera',
          handler: () => {
            console.log('show my foto');
          }
        },
        {
          icon: 'close-circle',
          role:'cancel'
        }
      ],
      cssClass: 'ion-text-center'

    });
    await toast.present();

}


}
