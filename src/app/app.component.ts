import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ParticlesConfig } from './back-ground/particle-config';
import { BackGroundComponent } from './back-ground/back-ground.component';
import { DetailsComponent } from './details/details.component';
import { DescriptionComponent } from './description/description.component';
import { HeaderComponent } from './header/header.component';

declare let particlesJS: any; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BackGroundComponent, DetailsComponent, DescriptionComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})


export class AppComponent{

}
