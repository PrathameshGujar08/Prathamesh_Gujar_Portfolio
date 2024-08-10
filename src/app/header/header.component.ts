import {Component} from '@angular/core';
import {CdkAccordionModule} from '@angular/cdk/accordion';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CdkAccordionModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})

export class HeaderComponent {
  name = "Prathamesh Gujar"
  expandedIndex = 0;
}
