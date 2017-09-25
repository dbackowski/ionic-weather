import { Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular';

@Injectable()
export class ToastServiceProvider {
  constructor(private toastCtrl: ToastController) {}

  public info(message: string) {
    this.toastCtrl.create({ message, duration: 3000 }).present();
  }

  public error(message: string) {
    this.toastCtrl.create({ message, duration: 3000 }).present();
  }
}
