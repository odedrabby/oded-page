import { Component } from '@angular/core';
import { Styles } from '@fortawesome/fontawesome-svg-core';
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrl: './social.component.scss'
})
export class SocialComponent {
  faEnvelope = faEnvelope
  faFacebookF = faFacebookF
  faInstagram = faInstagram
  email = 'galoscohen@gmail.com'

  style: Styles = {
    height: '40px',
    width: '40px'
  }
}
