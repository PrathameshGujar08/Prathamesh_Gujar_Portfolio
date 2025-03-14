import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {
  faLinkedin,
  faGithub,
  faTwitter,
  faXTwitter
} from '@fortawesome/free-brands-svg-icons';
import { faFile } from '@fortawesome/free-solid-svg-icons'


@Component({
  selector: 'app-details',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent {

    public name: string = 'Prathamesh Gujar';
    public designation: string = 'Software Engineer'
    public tagLine: string = 'Solving problems, building solutions, no tech limits.';
   
    faGithub = faGithub;
    faLinkedin = faLinkedin;
    faEnvelope = faEnvelope;
    faXTwitter = faXTwitter;
    faFile = faFile;
}
