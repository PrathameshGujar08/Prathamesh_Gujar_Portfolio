import {Component} from '@angular/core';
import {CdkAccordionModule} from '@angular/cdk/accordion';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEnvelope, faFile } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { NgClass, NgIf, NgStyle } from '@angular/common';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CdkAccordionModule, FontAwesomeModule, NgIf, NgStyle],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})

export class HeaderComponent {
  showContactMe = false;

  toggleContactMe() {
    this.showContactMe = !this.showContactMe;
  }

  name = "Prathamesh Gujar";
  oneLiner="I combine elegant front-end design with robust back-end functionality to create exceptional websites";
  faGithub = faGithub;
  faLinkedin = faLinkedin;
  faEnvelope = faEnvelope;
  faXTwitter = faXTwitter;
  faFile = faFile;
}
