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
      technologies: 'Java, Mysql, Bootstrap',
      description: [
        'Developed a full-stack web application for job seekers and employers.',
        'Implemented user authentication and authorization.',
        'The system features a user-friendly interface allowing users to register, search for jobs, upload resumes, and apply '
      ]
    },
    {
      title: ' Fertilizer Shop Management System',
      technologies: 'java Swing and AWT libraries, MYSQL, Bootstrap',
      description: [
        'Developed a Java-based desktop application with a user-friendly interface using Swing and AWT libraries. The system',
        'efficiently manages daily transactions, including inventory, sales, and purchases for a fertilizer shop.',
        'Backend operations are handled through a MySQL database.The collaborative effort involved designing the system',
        'architecture and database schema. Key features include inventory tracking, transaction recording, and report generation'
      ]
    },
    {
      title: 'HR Management System',
      technologies: 'Angualr CLI, MYSQL, PHP ',
      description: [
        'Create a 100% responsive an online Website to streamline recruitment and employee management processes, featuring',
        'job posting, application management, interview scheduling, document verification, and shift management.',
        'This project, completed at Application Square Infotech, For Development We Use Angular CLI, HTML, CSS, Bootstrap, PHP,MYSQL'
      ]
    }
  ];

  constructor() {}

  ngOnInit(): void {}
}
