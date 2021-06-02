import { Component, ViewEncapsulation } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-side-menu',
  templateUrl: 'side.menu.component.html',
})

export class SideMenuComponent{

  constructor(private authSvc: AuthService, private navCtrl: NavController){

  }
  logOut(){
    this.authSvc.removeToken();
    this.navCtrl.navigateRoot('')
  }
    
}