import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: 'navbar.component.html',
  encapsulation: ViewEncapsulation.None,
})

export class NavbarComponent{
  @Input() pageName: string;
    
}