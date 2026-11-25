
import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.scss'
})
export class Hero {

  readonly profile = {
    name: 'Prashant Pote',
    role: 'Software Engineer',
    location: 'Kaiserslautern, Germany',

    introduction:
      'I build software, solve engineering problems, and turn ideas into practical digital solutions.',

    description:
      'Software Engineer with experience in enterprise applications, SAP technologies, Java and backend development. Currently pursuing an M.Sc. in Computer Science at RPTU.',

    resumePath: '/documents/Prashant_CV_2026_EN.pdf'
  };

}
