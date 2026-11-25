
import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact {
  readonly currentYear = new Date().getFullYear();

  // Replace these placeholders with your actual profile details.
  readonly email = 'poteprashant2001@gmail.com';
  readonly linkedinUrl = 'https://www.linkedin.com/in/prashant-pote-751a59220/';
  readonly githubUrl = 'https://github.com/Prash2610';

  readonly resumePath = '/documents/resume.pdf';
}
