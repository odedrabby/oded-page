import { Component } from '@angular/core';
import { showDetails } from '../../assets/strings';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrl: './show.component.scss'
})
export class ShowComponent {
  title = "מופע השקה חגיגי"
  details = showDetails
  tickets = "כרטיסים"
  ticketsLink = "https://pigumim.org.il/"
}
