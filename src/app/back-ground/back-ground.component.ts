import { Component, OnInit } from '@angular/core';

import { ParticlesConfig } from './particle-config';

declare let particlesJS: any; 

@Component({
  selector: 'app-back-ground',
  standalone: true,
  imports: [],
  templateUrl: './back-ground.component.html',
  styleUrl: './back-ground.component.scss'
})
export class BackGroundComponent implements OnInit {
  public ngOnInit(): void {
    this.invokeParticles();
  }

  
  public invokeParticles(): void {
    particlesJS('particles-js', ParticlesConfig, function() {});
  }  
}
