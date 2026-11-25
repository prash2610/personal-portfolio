
import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [],
  templateUrl: './experience.html',
  styleUrl: './experience.scss'
})
export class Experience {
  readonly experience = {
    company: 'Volkswagen Group Digital Solutions',
    location: 'India',
    role: 'Software Engineer',
    period: 'AUG 2023 — SEP 2026',
    description:
      'Worked on enterprise software development and support, contributing to procurement applications and SAP-related integrations.',
    responsibilities: [
      {
        title: 'Enterprise Application Development',
        description:
          'Developed and maintained enterprise applications using SAP ABAP, Java and Spring Boot.'
      },
      {
        title: 'SAP Procurement Systems',
        description:
          'Worked on a procurement application supporting business operations in India and Malaysia.'
      },
      {
        title: 'SAP S/4HANA & Integrations',
        description:
          'Worked with OData services, IDocs, CDS Views and AMDP, along with integrations supporting SAP workflows.'
      },
      {
        title: 'Application Support & Troubleshooting',
        description:
          'Performed L1 maintenance, troubleshooting and root cause analysis to support application stability.'
      },
      {
        title: 'Workflow Automation',
        description:
          'Contributed to RPA integrations for SAP confirmation and invoicing workflows.'
      }
    ],
    technologies: [
      'SAP ABAP',
      'Java',
      'Spring Boot',
      'SAP S/4HANA',
      'OData',
      'IDocs',
      'CDS Views',
      'AMDP',
      'RPA'
    ]
  };
}
