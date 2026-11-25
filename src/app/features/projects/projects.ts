
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.scss'
})
export class Projects {
  readonly projects = [
    {
      number: '01',
      name: 'Currency Converter',
      category: 'WEB APPLICATION',
      period: 'JUNE 2025',
      description:
        'A responsive currency conversion application built with Angular and TypeScript. It integrates the Unirate REST API to retrieve exchange-rate data and provides a straightforward conversion experience.',
      technologies: ['Angular', 'TypeScript', 'REST API', 'Unirate'],
      liveUrl: 'https://prash2610.github.io/currencyConverter/',
      liveLabel: 'Live Preview',
      githubUrl: '',
      featured: true,
      visual: 'currency'
    },
    {
      number: '02',
      name: 'PharmaSort',
      category: 'MOBILE APPLICATION & MACHINE LEARNING',
      period: 'AUG 2022 — MAR 2023',
      description:
        'A pharmaceutical application combining a React Native mobile interface with a Python Flask backend. It incorporates TensorFlow-based demand forecasting and Firebase integration.',
      technologies: [
        'Python',
        'Flask',
        'React Native',
        'TensorFlow',
        'Firebase'
      ],
      liveUrl: '',
      liveLabel: '',
      githubUrl: '',
      featured: false,
      visual: 'pharma'
    }
  ];
}
