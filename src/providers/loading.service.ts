import { Injectable } from '@angular/core';
import { Loading, LoadingController } from 'ionic-angular';

@Injectable()
export class LoadingServiceProvider {
  private loader: Loading;

  constructor(private loadingCtrl: LoadingController) {}

  public show() {
    this.loader = this.loadingCtrl.create({
      content: 'Please wait...',
    });

    return this.loader.present();
  }

  public hide() {
    this.loader.dismiss();
  }
}
