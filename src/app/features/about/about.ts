
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class About {
  isFlipped = signal(false);

  toggleCard(): void {
    this.isFlipped.update(value => !value);
  }

  readonly profile = {
    name: 'Prashant Bhikkam Pote',
    role: 'Software Engineer',
    location: 'Kaiserslautern, Germany',
    education: 'M.Sc. Computer Science',
    university: 'RPTU Kaiserslautern',
    // university: 'RPTU Kaiserslautern',
    // experience: 'Enterprise Software Development',
    experience: 'Pursuing M.Sc in Computer Science',
    technologies: ['Java', 'Spring Boot', 'Angular', 'SAP', 'Python']
  };
}
