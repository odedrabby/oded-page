import { Component } from '@angular/core';
import { oldDetails, showDetails } from '../../assets/strings';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrl: './show.component.scss'
})
export class ShowComponent {
  title = "מופע השקה חגיגי"
  details = showDetails
  oldDetails = oldDetails
  tickets = "כרטיסים"
  ticketsLink = "https://www.tmu-na.org.il/?CategoryID=102&ArticleID=5954"
}
