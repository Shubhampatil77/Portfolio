import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Skill } from '../Models/Models'; // Ensure the correct path to the model

@Component({
  selector: 'app-skill',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css'] // Corrected 'styleUrl' to 'styleUrls'
})
export class SkillComponent implements OnInit {
  skills: Skill[] = [
    {
      name: 'Angular, Angular Material',
      level: 'Expert',
      rating: '80' // Assuming rating is a number
    },
    {
      name: 'HTML',
      level: 'Expert',
      rating: '80' // Assuming rating is a number
    },
    {
      name: 'CSS',
      level: 'Intermediate',
      rating: '70' // Assuming rating is a number
    },
    {
      name: 'JavaScript',
      level: 'Intermediate',
      rating: '70' // Assuming rating is a number
    },
    {
      name: 'MYSQL',
      level: 'Intermediate',
      rating: '75' // Assuming rating is a number
    },
    {
      name: 'Bootstrap',
      level: 'Intermediate',
      rating: '70' // Assuming rating is a number
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
