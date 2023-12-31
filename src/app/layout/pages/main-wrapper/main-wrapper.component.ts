import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from '../../components';

@Component({
  selector: 'app-main-wrapper',
  standalone: true,
  imports: [NavbarComponent, RouterModule],
  templateUrl: './main-wrapper.component.html',
  styleUrl: './main-wrapper.component.scss'
})
export class MainWrapperComponent {}
