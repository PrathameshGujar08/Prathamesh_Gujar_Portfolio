import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { faExternalLink } from '@fortawesome/free-solid-svg-icons'
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-description',
  standalone: true,
  imports: [FontAwesomeModule, NgFor],
  templateUrl: './description.component.html',
  styleUrl: './description.component.scss'
})

export class DescriptionComponent {
  faGithubSquare = faGithubSquare;

  skillsP1 = ['React', 'NodeJS', 'MongoDB', 'Docker', 'Firebase', 'Socket.io', 'Git'];
}
