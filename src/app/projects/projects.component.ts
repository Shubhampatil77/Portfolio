import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Project {
  title: string;
  technologies: string;
  description: string[];
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'] // Corrected 'styleUrl' to 'styleUrls'
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [
    {
      title: 'Online Job Portal',
      technologies: 'Angular, Spring Boot, PostgreSQL',
      description: [
        'Developed a full-stack web application for job seekers and employers.',
        'Implemented user authentication and authorization.',
        'Designed a responsive user interface using Angular Material.'
      ]
    },
    {
      title: 'E-commerce Website',
      technologies: 'React, Node.js, MongoDB',
      description: [
        'Built a scalable e-commerce platform with a modern user interface.',
        'Integrated payment gateways and order tracking.',
        'Implemented search functionality and product filters.'
      ]
    }
  ];

  constructor() {}

  ngOnInit(): void {}
}
