
import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.scss'
})
export class Skills {
  readonly skillGroups = [
    {
      number: '01',
      title: 'Programming Languages',
      description: 'Languages I use to solve problems and build applications.',
      skills: ['Java', 'Python', 'JavaScript', 'TypeScript', 'SQL']
    },
    {
      number: '02',
      title: 'Frameworks & Technologies',
      description: 'Frameworks and technologies for application development.',
      skills: ['Spring Boot', 'Angular', 'Hibernate', 'SAP ABAP', 'Flask']
    },
    {
      number: '03',
      title: 'Databases & APIs',
      description: 'Working with data storage and application integrations.',
      skills: ['PostgreSQL', 'Firebase', 'REST APIs', 'OData', 'JSON']
    },
    {
      number: '04',
      title: 'Tools & Other Skills',
      description: 'Tools and concepts supporting my development workflow.',
      skills: ['GitHub', 'GitHub Pages', 'Machine Learning', 'Generative AI', 'Prompt Engineering']
    }
  ];
}
