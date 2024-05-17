import { Component } from '@angular/core';
import { Styles } from '@fortawesome/fontawesome-svg-core';
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faAt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrl: './social.component.scss'
})
export class SocialComponent {
  faAt = faAt
  faFacebookF = faFacebookF
  faInstagram = faInstagram

  style: Styles = {
    height: '40px',
    width: '40px'
  }

  // TODO
  async copyEmail() {
    const email = 'galoscohen@gmail.com';
    try {
      await navigator.clipboard.writeText(email);
      console.log('Email copied to clipboard');
    } catch (err) {
      console.error('Failed to copy email: ', err);
    }
  }

  async click() {
    await this.copyEmail()
  }
}
